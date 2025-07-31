"use strict";
function Vj(c, p) { for (var h = 0; h < p.length; h++) {
    const E = p[h];
    if (typeof E != "string" && !Array.isArray(E)) {
        for (const y in E)
            if (y !== "default" && !(y in c)) {
                const T = Object.getOwnPropertyDescriptor(E, y);
                T && Object.defineProperty(c, y, T.get ? T : { enumerable: !0, get: () => E[y] });
            }
    }
} return Object.freeze(Object.defineProperty(c, Symbol.toStringTag, { value: "Module" })); }
(function () { const p = document.createElement("link").relList; if (p && p.supports && p.supports("modulepreload"))
    return; for (const y of document.querySelectorAll('link[rel="modulepreload"]'))
    E(y); new MutationObserver(y => { for (const T of y)
    if (T.type === "childList")
        for (const f of T.addedNodes)
            f.tagName === "LINK" && f.rel === "modulepreload" && E(f); }).observe(document, { childList: !0, subtree: !0 }); function h(y) { const T = {}; return y.integrity && (T.integrity = y.integrity), y.referrerPolicy && (T.referrerPolicy = y.referrerPolicy), y.crossOrigin === "use-credentials" ? T.credentials = "include" : y.crossOrigin === "anonymous" ? T.credentials = "omit" : T.credentials = "same-origin", T; } function E(y) { if (y.ep)
    return; y.ep = !0; const T = h(y); fetch(y.href, T); } })();
function zj(c) { return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c; }
var sS = { exports: {} }, Lv = {}, cS = { exports: {} }, gf = { exports: {} };
gf.exports;
(function (c, p) {
    (function () {
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);
        var h = "18.3.1", E = Symbol.for("react.element"), y = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), A = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), q = Symbol.for("react.memo"), ne = Symbol.for("react.lazy"), Ce = Symbol.for("react.offscreen"), ie = Symbol.iterator, De = "@@iterator";
        function $(s) { if (s === null || typeof s != "object")
            return null; var g = ie && s[ie] || s[De]; return typeof g == "function" ? g : null; }
        var te = { current: null }, ye = { transition: null }, ue = { current: null, isBatchingLegacy: !1, didScheduleLegacyUpdate: !1 }, V = { current: null }, oe = {}, _e = null;
        function He(s) { _e = s; }
        oe.setExtraStackFrame = function (s) { _e = s; }, oe.getCurrentStack = null, oe.getStackAddendum = function () { var s = ""; _e && (s += _e); var g = oe.getCurrentStack; return g && (s += g() || ""), s; };
        var Be = !1, Ye = !1, ge = !1, Ne = !1, St = !1, ct = { ReactCurrentDispatcher: te, ReactCurrentBatchConfig: ye, ReactCurrentOwner: V };
        ct.ReactDebugCurrentFrame = oe, ct.ReactCurrentActQueue = ue;
        function Dt(s) { {
            for (var g = arguments.length, D = new Array(g > 1 ? g - 1 : 0), w = 1; w < g; w++)
                D[w - 1] = arguments[w];
            sn("warn", s, D);
        } }
        function we(s) { {
            for (var g = arguments.length, D = new Array(g > 1 ? g - 1 : 0), w = 1; w < g; w++)
                D[w - 1] = arguments[w];
            sn("error", s, D);
        } }
        function sn(s, g, D) { {
            var w = ct.ReactDebugCurrentFrame, Y = w.getStackAddendum();
            Y !== "" && (g += "%s", D = D.concat([Y]));
            var me = D.map(function (re) { return String(re); });
            me.unshift("Warning: " + g), Function.prototype.apply.call(console[s], console, me);
        } }
        var da = {};
        function Hn(s, g) { {
            var D = s.constructor, w = D && (D.displayName || D.name) || "ReactClass", Y = w + "." + g;
            if (da[Y])
                return;
            we("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", g, w), da[Y] = !0;
        } }
        var Zn = { isMounted: function (s) { return !1; }, enqueueForceUpdate: function (s, g, D) { Hn(s, "forceUpdate"); }, enqueueReplaceState: function (s, g, D, w) { Hn(s, "replaceState"); }, enqueueSetState: function (s, g, D, w) { Hn(s, "setState"); } }, Ft = Object.assign, pa = {};
        Object.freeze(pa);
        function bn(s, g, D) { this.props = s, this.context = g, this.refs = pa, this.updater = D || Zn; }
        bn.prototype.isReactComponent = {}, bn.prototype.setState = function (s, g) { if (typeof s != "object" && typeof s != "function" && s != null)
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, s, g, "setState"); }, bn.prototype.forceUpdate = function (s) { this.updater.enqueueForceUpdate(this, s, "forceUpdate"); };
        {
            var tr = { isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."], replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."] }, ka = function (s, g) { Object.defineProperty(bn.prototype, s, { get: function () { Dt("%s(...) is deprecated in plain JavaScript React classes. %s", g[0], g[1]); } }); };
            for (var Wt in tr)
                tr.hasOwnProperty(Wt) && ka(Wt, tr[Wt]);
        }
        function Bn() { }
        Bn.prototype = bn.prototype;
        function Kt(s, g, D) { this.props = s, this.context = g, this.refs = pa, this.updater = D || Zn; }
        var Qt = Kt.prototype = new Bn;
        Qt.constructor = Kt, Ft(Qt, bn.prototype), Qt.isPureReactComponent = !0;
        function Xt() { var s = { current: null }; return Object.seal(s), s; }
        var wn = Array.isArray;
        function Pt(s) { return wn(s); }
        function En(s) { {
            var g = typeof Symbol == "function" && Symbol.toStringTag, D = g && s[Symbol.toStringTag] || s.constructor.name || "Object";
            return D;
        } }
        function Ht(s) { try {
            return Bt(s), !1;
        }
        catch {
            return !0;
        } }
        function Bt(s) { return "" + s; }
        function ea(s) { if (Ht(s))
            return we("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", En(s)), Bt(s); }
        function nr(s, g, D) { var w = s.displayName; if (w)
            return w; var Y = g.displayName || g.name || ""; return Y !== "" ? D + "(" + Y + ")" : D; }
        function ma(s) { return s.displayName || "Context"; }
        function Mn(s) { if (s == null)
            return null; if (typeof s.tag == "number" && we("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
            return s.displayName || s.name || null; if (typeof s == "string")
            return s; switch (s) {
            case T: return "Fragment";
            case y: return "Portal";
            case k: return "Profiler";
            case f: return "StrictMode";
            case j: return "Suspense";
            case P: return "SuspenseList";
        } if (typeof s == "object")
            switch (s.$$typeof) {
                case A:
                    var g = s;
                    return ma(g) + ".Consumer";
                case O:
                    var D = s;
                    return ma(D._context) + ".Provider";
                case B: return nr(s, s.render, "ForwardRef");
                case q:
                    var w = s.displayName || null;
                    return w !== null ? w : Mn(s.type) || "Memo";
                case ne: {
                    var Y = s, me = Y._payload, re = Y._init;
                    try {
                        return Mn(re(me));
                    }
                    catch {
                        return null;
                    }
                }
            } return null; }
        var cn = Object.prototype.hasOwnProperty, Jt = { key: !0, ref: !0, __self: !0, __source: !0 }, Sn, Va, _t;
        _t = {};
        function Nn(s) { if (cn.call(s, "ref")) {
            var g = Object.getOwnPropertyDescriptor(s, "ref").get;
            if (g && g.isReactWarning)
                return !1;
        } return s.ref !== void 0; }
        function Ln(s) { if (cn.call(s, "key")) {
            var g = Object.getOwnPropertyDescriptor(s, "key").get;
            if (g && g.isReactWarning)
                return !1;
        } return s.key !== void 0; }
        function wr(s, g) { var D = function () { Sn || (Sn = !0, we("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g)); }; D.isReactWarning = !0, Object.defineProperty(s, "key", { get: D, configurable: !0 }); }
        function ar(s, g) { var D = function () { Va || (Va = !0, we("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g)); }; D.isReactWarning = !0, Object.defineProperty(s, "ref", { get: D, configurable: !0 }); }
        function W(s) { if (typeof s.ref == "string" && V.current && s.__self && V.current.stateNode !== s.__self) {
            var g = Mn(V.current.type);
            _t[g] || (we('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', g, s.ref), _t[g] = !0);
        } }
        var se = function (s, g, D, w, Y, me, re) { var Te = { $$typeof: E, type: s, key: g, ref: D, props: re, _owner: me }; return Te._store = {}, Object.defineProperty(Te._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(Te, "_self", { configurable: !1, enumerable: !1, writable: !1, value: w }), Object.defineProperty(Te, "_source", { configurable: !1, enumerable: !1, writable: !1, value: Y }), Object.freeze && (Object.freeze(Te.props), Object.freeze(Te)), Te; };
        function Oe(s, g, D) { var w, Y = {}, me = null, re = null, Te = null, Ve = null; if (g != null) {
            Nn(g) && (re = g.ref, W(g)), Ln(g) && (ea(g.key), me = "" + g.key), Te = g.__self === void 0 ? null : g.__self, Ve = g.__source === void 0 ? null : g.__source;
            for (w in g)
                cn.call(g, w) && !Jt.hasOwnProperty(w) && (Y[w] = g[w]);
        } var Xe = arguments.length - 2; if (Xe === 1)
            Y.children = D;
        else if (Xe > 1) {
            for (var at = Array(Xe), rt = 0; rt < Xe; rt++)
                at[rt] = arguments[rt + 2];
            Object.freeze && Object.freeze(at), Y.children = at;
        } if (s && s.defaultProps) {
            var Le = s.defaultProps;
            for (w in Le)
                Y[w] === void 0 && (Y[w] = Le[w]);
        } if (me || re) {
            var dt = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
            me && wr(Y, dt), re && ar(Y, dt);
        } return se(s, me, re, Te, Ve, V.current, Y); }
        function Qe(s, g) { var D = se(s.type, g, s.ref, s._self, s._source, s._owner, s.props); return D; }
        function ot(s, g, D) { if (s == null)
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + s + "."); var w, Y = Ft({}, s.props), me = s.key, re = s.ref, Te = s._self, Ve = s._source, Xe = s._owner; if (g != null) {
            Nn(g) && (re = g.ref, Xe = V.current), Ln(g) && (ea(g.key), me = "" + g.key);
            var at;
            s.type && s.type.defaultProps && (at = s.type.defaultProps);
            for (w in g)
                cn.call(g, w) && !Jt.hasOwnProperty(w) && (g[w] === void 0 && at !== void 0 ? Y[w] = at[w] : Y[w] = g[w]);
        } var rt = arguments.length - 2; if (rt === 1)
            Y.children = D;
        else if (rt > 1) {
            for (var Le = Array(rt), dt = 0; dt < rt; dt++)
                Le[dt] = arguments[dt + 2];
            Y.children = Le;
        } return se(s.type, me, re, Te, Ve, Xe, Y); }
        function mt(s) { return typeof s == "object" && s !== null && s.$$typeof === E; }
        var vt = ".", fn = ":";
        function yt(s) { var g = /[=:]/g, D = { "=": "=0", ":": "=2" }, w = s.replace(g, function (Y) { return D[Y]; }); return "$" + w; }
        var tt = !1, gt = /\/+/g;
        function va(s) { return s.replace(gt, "$&/"); }
        function ha(s, g) { return typeof s == "object" && s !== null && s.key != null ? (ea(s.key), yt("" + s.key)) : g.toString(36); }
        function ta(s, g, D, w, Y) { var me = typeof s; (me === "undefined" || me === "boolean") && (s = null); var re = !1; if (s === null)
            re = !0;
        else
            switch (me) {
                case "string":
                case "number":
                    re = !0;
                    break;
                case "object": switch (s.$$typeof) {
                    case E:
                    case y: re = !0;
                }
            } if (re) {
            var Te = s, Ve = Y(Te), Xe = w === "" ? vt + ha(Te, 0) : w;
            if (Pt(Ve)) {
                var at = "";
                Xe != null && (at = va(Xe) + "/"), ta(Ve, g, at, "", function (jf) { return jf; });
            }
            else
                Ve != null && (mt(Ve) && (Ve.key && (!Te || Te.key !== Ve.key) && ea(Ve.key), Ve = Qe(Ve, D + (Ve.key && (!Te || Te.key !== Ve.key) ? va("" + Ve.key) + "/" : "") + Xe)), g.push(Ve));
            return 1;
        } var rt, Le, dt = 0, Tt = w === "" ? vt : w + fn; if (Pt(s))
            for (var bi = 0; bi < s.length; bi++)
                rt = s[bi], Le = Tt + ha(rt, bi), dt += ta(rt, g, D, Le, Y);
        else {
            var bl = $(s);
            if (typeof bl == "function") {
                var lr = s;
                bl === lr.entries && (tt || Dt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), tt = !0);
                for (var El = bl.call(lr), Sl, _f = 0; !(Sl = El.next()).done;)
                    rt = Sl.value, Le = Tt + ha(rt, _f++), dt += ta(rt, g, D, Le, Y);
            }
            else if (me === "object") {
                var ms = String(s);
                throw new Error("Objects are not valid as a React child (found: " + (ms === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : ms) + "). If you meant to render a collection of children, use an array instead.");
            }
        } return dt; }
        function rr(s, g, D) { if (s == null)
            return s; var w = [], Y = 0; return ta(s, w, "", "", function (me) { return g.call(D, me, Y++); }), w; }
        function rl(s) { var g = 0; return rr(s, function () { g++; }), g; }
        function si(s, g, D) { rr(s, function () { g.apply(this, arguments); }, D); }
        function Xi(s) { return rr(s, function (g) { return g; }) || []; }
        function Ji(s) { if (!mt(s))
            throw new Error("React.Children.only expected to receive a single React element child."); return s; }
        function ci(s) { var g = { $$typeof: A, _currentValue: s, _currentValue2: s, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }; g.Provider = { $$typeof: O, _context: g }; var D = !1, w = !1, Y = !1; {
            var me = { $$typeof: A, _context: g };
            Object.defineProperties(me, { Provider: { get: function () { return w || (w = !0, we("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), g.Provider; }, set: function (re) { g.Provider = re; } }, _currentValue: { get: function () { return g._currentValue; }, set: function (re) { g._currentValue = re; } }, _currentValue2: { get: function () { return g._currentValue2; }, set: function (re) { g._currentValue2 = re; } }, _threadCount: { get: function () { return g._threadCount; }, set: function (re) { g._threadCount = re; } }, Consumer: { get: function () { return D || (D = !0, we("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), g.Consumer; } }, displayName: { get: function () { return g.displayName; }, set: function (re) { Y || (Dt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", re), Y = !0); } } }), g.Consumer = me;
        } return g._currentRenderer = null, g._currentRenderer2 = null, g; }
        var ya = -1, na = 0, In = 1, za = 2;
        function fi(s) {
            if (s._status === ya) {
                var g = s._result, D = g();
                if (D.then(function (me) { if (s._status === na || s._status === ya) {
                    var re = s;
                    re._status = In, re._result = me;
                } }, function (me) { if (s._status === na || s._status === ya) {
                    var re = s;
                    re._status = za, re._result = me;
                } }), s._status === ya) {
                    var w = s;
                    w._status = na, w._result = D;
                }
            }
            if (s._status === In) {
                var Y = s._result;
                return Y === void 0 && we(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Y), "default" in Y || we(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Y), Y.default;
            }
            else
                throw s._result;
        }
        function b(s) { var g = { _status: ya, _result: s }, D = { $$typeof: ne, _payload: g, _init: fi }; {
            var w, Y;
            Object.defineProperties(D, { defaultProps: { configurable: !0, get: function () { return w; }, set: function (me) { we("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), w = me, Object.defineProperty(D, "defaultProps", { enumerable: !0 }); } }, propTypes: { configurable: !0, get: function () { return Y; }, set: function (me) { we("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Y = me, Object.defineProperty(D, "propTypes", { enumerable: !0 }); } } });
        } return D; }
        function F(s) { s != null && s.$$typeof === q ? we("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof s != "function" ? we("forwardRef requires a render function but was given %s.", s === null ? "null" : typeof s) : s.length !== 0 && s.length !== 2 && we("forwardRef render functions accept exactly two parameters: props and ref. %s", s.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), s != null && (s.defaultProps != null || s.propTypes != null) && we("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"); var g = { $$typeof: B, render: s }; {
            var D;
            Object.defineProperty(g, "displayName", { enumerable: !1, configurable: !0, get: function () { return D; }, set: function (w) { D = w, !s.name && !s.displayName && (s.displayName = w); } });
        } return g; }
        var K;
        K = Symbol.for("react.module.reference");
        function ce(s) { return !!(typeof s == "string" || typeof s == "function" || s === T || s === k || St || s === f || s === j || s === P || Ne || s === Ce || Be || Ye || ge || typeof s == "object" && s !== null && (s.$$typeof === ne || s.$$typeof === q || s.$$typeof === O || s.$$typeof === A || s.$$typeof === B || s.$$typeof === K || s.getModuleId !== void 0)); }
        function ke(s, g) { ce(s) || we("memo: The first argument must be a component. Instead received: %s", s === null ? "null" : typeof s); var D = { $$typeof: q, type: s, compare: g === void 0 ? null : g }; {
            var w;
            Object.defineProperty(D, "displayName", { enumerable: !1, configurable: !0, get: function () { return w; }, set: function (Y) { w = Y, !s.name && !s.displayName && (s.displayName = Y); } });
        } return D; }
        function be() {
            var s = te.current;
            return s === null && we(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), s;
        }
        function je(s) { var g = be(); if (s._context !== void 0) {
            var D = s._context;
            D.Consumer === s ? we("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : D.Provider === s && we("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        } return g.useContext(s); }
        function de(s) { var g = be(); return g.useState(s); }
        function jt(s, g, D) { var w = be(); return w.useReducer(s, g, D); }
        function lt(s) { var g = be(); return g.useRef(s); }
        function ut(s, g) { var D = be(); return D.useEffect(s, g); }
        function dn(s, g) { var D = be(); return D.useInsertionEffect(s, g); }
        function Fa(s, g) { var D = be(); return D.useLayoutEffect(s, g); }
        function ga(s, g) { var D = be(); return D.useCallback(s, g); }
        function At(s, g) { var D = be(); return D.useMemo(s, g); }
        function di(s, g, D) { var w = be(); return w.useImperativeHandle(s, g, D); }
        function ba(s, g) { {
            var D = be();
            return D.useDebugValue(s, g);
        } }
        function Me() { var s = be(); return s.useTransition(); }
        function pi(s) { var g = be(); return g.useDeferredValue(s); }
        function as() { var s = be(); return s.useId(); }
        function rs(s, g, D) { var w = be(); return w.useSyncExternalStore(s, g, D); }
        var Mr = 0, il, ol, ll, ul, sl, is, os;
        function Zi() { }
        Zi.__reactDisabledLog = !0;
        function cl() { {
            if (Mr === 0) {
                il = console.log, ol = console.info, ll = console.warn, ul = console.error, sl = console.group, is = console.groupCollapsed, os = console.groupEnd;
                var s = { configurable: !0, enumerable: !0, value: Zi, writable: !0 };
                Object.defineProperties(console, { info: s, log: s, warn: s, error: s, group: s, groupCollapsed: s, groupEnd: s });
            }
            Mr++;
        } }
        function Pa() { {
            if (Mr--, Mr === 0) {
                var s = { configurable: !0, enumerable: !0, writable: !0 };
                Object.defineProperties(console, { log: Ft({}, s, { value: il }), info: Ft({}, s, { value: ol }), warn: Ft({}, s, { value: ll }), error: Ft({}, s, { value: ul }), group: Ft({}, s, { value: sl }), groupCollapsed: Ft({}, s, { value: is }), groupEnd: Ft({}, s, { value: os }) });
            }
            Mr < 0 && we("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        } }
        var mi = ct.ReactCurrentDispatcher, Lr;
        function eo(s, g, D) {
            {
                if (Lr === void 0)
                    try {
                        throw Error();
                    }
                    catch (Y) {
                        var w = Y.stack.trim().match(/\n( *(at )?)/);
                        Lr = w && w[1] || "";
                    }
                return `
` + Lr + s;
            }
        }
        var vi = !1, to;
        {
            var fl = typeof WeakMap == "function" ? WeakMap : Map;
            to = new fl;
        }
        function ls(s, g) {
            if (!s || vi)
                return "";
            {
                var D = to.get(s);
                if (D !== void 0)
                    return D;
            }
            var w;
            vi = !0;
            var Y = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var me;
            me = mi.current, mi.current = null, cl();
            try {
                if (g) {
                    var re = function () { throw Error(); };
                    if (Object.defineProperty(re.prototype, "props", { set: function () { throw Error(); } }), typeof Reflect == "object" && Reflect.construct) {
                        try {
                            Reflect.construct(re, []);
                        }
                        catch (Tt) {
                            w = Tt;
                        }
                        Reflect.construct(s, [], re);
                    }
                    else {
                        try {
                            re.call();
                        }
                        catch (Tt) {
                            w = Tt;
                        }
                        s.call(re.prototype);
                    }
                }
                else {
                    try {
                        throw Error();
                    }
                    catch (Tt) {
                        w = Tt;
                    }
                    s();
                }
            }
            catch (Tt) {
                if (Tt && w && typeof Tt.stack == "string") {
                    for (var Te = Tt.stack.split(`
`), Ve = w.stack.split(`
`), Xe = Te.length - 1, at = Ve.length - 1; Xe >= 1 && at >= 0 && Te[Xe] !== Ve[at];)
                        at--;
                    for (; Xe >= 1 && at >= 0; Xe--, at--)
                        if (Te[Xe] !== Ve[at]) {
                            if (Xe !== 1 || at !== 1)
                                do
                                    if (Xe--, at--, at < 0 || Te[Xe] !== Ve[at]) {
                                        var rt = `
` + Te[Xe].replace(" at new ", " at ");
                                        return s.displayName && rt.includes("<anonymous>") && (rt = rt.replace("<anonymous>", s.displayName)), typeof s == "function" && to.set(s, rt), rt;
                                    }
                                while (Xe >= 1 && at >= 0);
                            break;
                        }
                }
            }
            finally {
                vi = !1, mi.current = me, Pa(), Error.prepareStackTrace = Y;
            }
            var Le = s ? s.displayName || s.name : "", dt = Le ? eo(Le) : "";
            return typeof s == "function" && to.set(s, dt), dt;
        }
        function dl(s, g, D) { return ls(s, !1); }
        function Tf(s) { var g = s.prototype; return !!(g && g.isReactComponent); }
        function hi(s, g, D) { if (s == null)
            return ""; if (typeof s == "function")
            return ls(s, Tf(s)); if (typeof s == "string")
            return eo(s); switch (s) {
            case j: return eo("Suspense");
            case P: return eo("SuspenseList");
        } if (typeof s == "object")
            switch (s.$$typeof) {
                case B: return dl(s.render);
                case q: return hi(s.type, g, D);
                case ne: {
                    var w = s, Y = w._payload, me = w._init;
                    try {
                        return hi(me(Y), g, D);
                    }
                    catch { }
                }
            } return ""; }
        var us = {}, pl = ct.ReactDebugCurrentFrame;
        function qe(s) { if (s) {
            var g = s._owner, D = hi(s.type, s._source, g ? g.type : null);
            pl.setExtraStackFrame(D);
        }
        else
            pl.setExtraStackFrame(null); }
        function Rf(s, g, D, w, Y) { {
            var me = Function.call.bind(cn);
            for (var re in s)
                if (me(s, re)) {
                    var Te = void 0;
                    try {
                        if (typeof s[re] != "function") {
                            var Ve = Error((w || "React class") + ": " + D + " type `" + re + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[re] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                            throw Ve.name = "Invariant Violation", Ve;
                        }
                        Te = s[re](g, re, w, D, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                    }
                    catch (Xe) {
                        Te = Xe;
                    }
                    Te && !(Te instanceof Error) && (qe(Y), we("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", D, re, typeof Te), qe(null)), Te instanceof Error && !(Te.message in us) && (us[Te.message] = !0, qe(Y), we("Failed %s type: %s", D, Te.message), qe(null));
                }
        } }
        function ir(s) { if (s) {
            var g = s._owner, D = hi(s.type, s._source, g ? g.type : null);
            He(D);
        }
        else
            He(null); }
        var xe;
        xe = !1;
        function ml() {
            if (V.current) {
                var s = Mn(V.current.type);
                if (s)
                    return `

Check the render method of \`` + s + "`.";
            }
            return "";
        }
        function Tn(s) {
            if (s !== void 0) {
                var g = s.fileName.replace(/^.*[\\\/]/, ""), D = s.lineNumber;
                return `

Check your code at ` + g + ":" + D + ".";
            }
            return "";
        }
        function yi(s) { return s != null ? Tn(s.__source) : ""; }
        var Ur = {};
        function xf(s) {
            var g = ml();
            if (!g) {
                var D = typeof s == "string" ? s : s.displayName || s.name;
                D && (g = `

Check the top-level render call using <` + D + ">.");
            }
            return g;
        }
        function It(s, g) { if (!(!s._store || s._store.validated || s.key != null)) {
            s._store.validated = !0;
            var D = xf(g);
            if (!Ur[D]) {
                Ur[D] = !0;
                var w = "";
                s && s._owner && s._owner !== V.current && (w = " It was passed a child from " + Mn(s._owner.type) + "."), ir(s), we('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', D, w), ir(null);
            }
        } }
        function ft(s, g) { if (typeof s == "object") {
            if (Pt(s))
                for (var D = 0; D < s.length; D++) {
                    var w = s[D];
                    mt(w) && It(w, g);
                }
            else if (mt(s))
                s._store && (s._store.validated = !0);
            else if (s) {
                var Y = $(s);
                if (typeof Y == "function" && Y !== s.entries)
                    for (var me = Y.call(s), re; !(re = me.next()).done;)
                        mt(re.value) && It(re.value, g);
            }
        } }
        function ss(s) { {
            var g = s.type;
            if (g == null || typeof g == "string")
                return;
            var D;
            if (typeof g == "function")
                D = g.propTypes;
            else if (typeof g == "object" && (g.$$typeof === B || g.$$typeof === q))
                D = g.propTypes;
            else
                return;
            if (D) {
                var w = Mn(g);
                Rf(D, s.props, "prop", w, s);
            }
            else if (g.PropTypes !== void 0 && !xe) {
                xe = !0;
                var Y = Mn(g);
                we("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
            }
            typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && we("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        } }
        function aa(s) { {
            for (var g = Object.keys(s.props), D = 0; D < g.length; D++) {
                var w = g[D];
                if (w !== "children" && w !== "key") {
                    ir(s), we("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), ir(null);
                    break;
                }
            }
            s.ref !== null && (ir(s), we("Invalid attribute `ref` supplied to `React.Fragment`."), ir(null));
        } }
        function Rn(s, g, D) { var w = ce(s); if (!w) {
            var Y = "";
            (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (Y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var me = yi(g);
            me ? Y += me : Y += ml();
            var re;
            s === null ? re = "null" : Pt(s) ? re = "array" : s !== void 0 && s.$$typeof === E ? (re = "<" + (Mn(s.type) || "Unknown") + " />", Y = " Did you accidentally export a JSX literal instead of a component?") : re = typeof s, we("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", re, Y);
        } var Te = Oe.apply(this, arguments); if (Te == null)
            return Te; if (w)
            for (var Ve = 2; Ve < arguments.length; Ve++)
                ft(arguments[Ve], s); return s === T ? aa(Te) : ss(Te), Te; }
        var Ea = !1;
        function Cf(s) { var g = Rn.bind(null, s); return g.type = s, Ea || (Ea = !0, Dt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(g, "type", { enumerable: !1, get: function () { return Dt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", { value: s }), s; } }), g; }
        function vl(s, g, D) { for (var w = ot.apply(this, arguments), Y = 2; Y < arguments.length; Y++)
            ft(arguments[Y], w.type); return ss(w), w; }
        function cs(s, g) { var D = ye.transition; ye.transition = {}; var w = ye.transition; ye.transition._updatedFibers = new Set; try {
            s();
        }
        finally {
            if (ye.transition = D, D === null && w._updatedFibers) {
                var Y = w._updatedFibers.size;
                Y > 10 && Dt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), w._updatedFibers.clear();
            }
        } }
        var hl = !1, no = null;
        function Df(s) { if (no === null)
            try {
                var g = ("require" + Math.random()).slice(0, 7), D = c && c[g];
                no = D.call(c, "timers").setImmediate;
            }
            catch {
                no = function (Y) { hl === !1 && (hl = !0, typeof MessageChannel > "u" && we("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.")); var me = new MessageChannel; me.port1.onmessage = Y, me.port2.postMessage(void 0); };
            } return no(s); }
        var kr = 0, gi = !1;
        function yl(s) { {
            var g = kr;
            kr++, ue.current === null && (ue.current = []);
            var D = ue.isBatchingLegacy, w;
            try {
                if (ue.isBatchingLegacy = !0, w = s(), !D && ue.didScheduleLegacyUpdate) {
                    var Y = ue.current;
                    Y !== null && (ue.didScheduleLegacyUpdate = !1, io(Y));
                }
            }
            catch (Le) {
                throw or(g), Le;
            }
            finally {
                ue.isBatchingLegacy = D;
            }
            if (w !== null && typeof w == "object" && typeof w.then == "function") {
                var me = w, re = !1, Te = { then: function (Le, dt) { re = !0, me.then(function (Tt) { or(g), kr === 0 ? ao(Tt, Le, dt) : Le(Tt); }, function (Tt) { or(g), dt(Tt); }); } };
                return !gi && typeof Promise < "u" && Promise.resolve().then(function () { }).then(function () { re || (gi = !0, we("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);")); }), Te;
            }
            else {
                var Ve = w;
                if (or(g), kr === 0) {
                    var Xe = ue.current;
                    Xe !== null && (io(Xe), ue.current = null);
                    var at = { then: function (Le, dt) { ue.current === null ? (ue.current = [], ao(Ve, Le, dt)) : Le(Ve); } };
                    return at;
                }
                else {
                    var rt = { then: function (Le, dt) { Le(Ve); } };
                    return rt;
                }
            }
        } }
        function or(s) { s !== kr - 1 && we("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), kr = s; }
        function ao(s, g, D) { {
            var w = ue.current;
            if (w !== null)
                try {
                    io(w), Df(function () { w.length === 0 ? (ue.current = null, g(s)) : ao(s, g, D); });
                }
                catch (Y) {
                    D(Y);
                }
            else
                g(s);
        } }
        var ro = !1;
        function io(s) { if (!ro) {
            ro = !0;
            var g = 0;
            try {
                for (; g < s.length; g++) {
                    var D = s[g];
                    do
                        D = D(!0);
                    while (D !== null);
                }
                s.length = 0;
            }
            catch (w) {
                throw s = s.slice(g + 1), w;
            }
            finally {
                ro = !1;
            }
        } }
        var fs = Rn, ds = vl, gl = Cf, ps = { map: rr, forEach: si, count: rl, toArray: Xi, only: Ji };
        p.Children = ps, p.Component = bn, p.Fragment = T, p.Profiler = k, p.PureComponent = Kt, p.StrictMode = f, p.Suspense = j, p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ct, p.act = yl, p.cloneElement = ds, p.createContext = ci, p.createElement = fs, p.createFactory = gl, p.createRef = Xt, p.forwardRef = F, p.isValidElement = mt, p.lazy = b, p.memo = ke, p.startTransition = cs, p.unstable_act = yl, p.useCallback = ga, p.useContext = je, p.useDebugValue = ba, p.useDeferredValue = pi, p.useEffect = ut, p.useId = as, p.useImperativeHandle = di, p.useInsertionEffect = dn, p.useLayoutEffect = Fa, p.useMemo = At, p.useReducer = jt, p.useRef = lt, p.useState = de, p.useSyncExternalStore = rs, p.useTransition = Me, p.version = h, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error);
    })();
})(gf, gf.exports);
var Fj = gf.exports;
cS.exports = Fj;
var I = cS.exports;
const La = zj(I), Pj = Vj({ __proto__: null, default: La }, [I]); /**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function () {
    var c = I, p = Symbol.for("react.element"), h = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), k = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), ne = Symbol.iterator, Ce = "@@iterator";
    function ie(b) { if (b === null || typeof b != "object")
        return null; var F = ne && b[ne] || b[Ce]; return typeof F == "function" ? F : null; }
    var De = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(b) { {
        for (var F = arguments.length, K = new Array(F > 1 ? F - 1 : 0), ce = 1; ce < F; ce++)
            K[ce - 1] = arguments[ce];
        te("error", b, K);
    } }
    function te(b, F, K) { {
        var ce = De.ReactDebugCurrentFrame, ke = ce.getStackAddendum();
        ke !== "" && (F += "%s", K = K.concat([ke]));
        var be = K.map(function (je) { return String(je); });
        be.unshift("Warning: " + F), Function.prototype.apply.call(console[b], console, be);
    } }
    var ye = !1, ue = !1, V = !1, oe = !1, _e = !1, He;
    He = Symbol.for("react.module.reference");
    function Be(b) { return !!(typeof b == "string" || typeof b == "function" || b === E || b === T || _e || b === y || b === A || b === B || oe || b === q || ye || ue || V || typeof b == "object" && b !== null && (b.$$typeof === P || b.$$typeof === j || b.$$typeof === f || b.$$typeof === k || b.$$typeof === O || b.$$typeof === He || b.getModuleId !== void 0)); }
    function Ye(b, F, K) { var ce = b.displayName; if (ce)
        return ce; var ke = F.displayName || F.name || ""; return ke !== "" ? K + "(" + ke + ")" : K; }
    function ge(b) { return b.displayName || "Context"; }
    function Ne(b) { if (b == null)
        return null; if (typeof b.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null; if (typeof b == "string")
        return b; switch (b) {
        case E: return "Fragment";
        case h: return "Portal";
        case T: return "Profiler";
        case y: return "StrictMode";
        case A: return "Suspense";
        case B: return "SuspenseList";
    } if (typeof b == "object")
        switch (b.$$typeof) {
            case k:
                var F = b;
                return ge(F) + ".Consumer";
            case f:
                var K = b;
                return ge(K._context) + ".Provider";
            case O: return Ye(b, b.render, "ForwardRef");
            case j:
                var ce = b.displayName || null;
                return ce !== null ? ce : Ne(b.type) || "Memo";
            case P: {
                var ke = b, be = ke._payload, je = ke._init;
                try {
                    return Ne(je(be));
                }
                catch {
                    return null;
                }
            }
        } return null; }
    var St = Object.assign, ct = 0, Dt, we, sn, da, Hn, Zn, Ft;
    function pa() { }
    pa.__reactDisabledLog = !0;
    function bn() { {
        if (ct === 0) {
            Dt = console.log, we = console.info, sn = console.warn, da = console.error, Hn = console.group, Zn = console.groupCollapsed, Ft = console.groupEnd;
            var b = { configurable: !0, enumerable: !0, value: pa, writable: !0 };
            Object.defineProperties(console, { info: b, log: b, warn: b, error: b, group: b, groupCollapsed: b, groupEnd: b });
        }
        ct++;
    } }
    function tr() { {
        if (ct--, ct === 0) {
            var b = { configurable: !0, enumerable: !0, writable: !0 };
            Object.defineProperties(console, { log: St({}, b, { value: Dt }), info: St({}, b, { value: we }), warn: St({}, b, { value: sn }), error: St({}, b, { value: da }), group: St({}, b, { value: Hn }), groupCollapsed: St({}, b, { value: Zn }), groupEnd: St({}, b, { value: Ft }) });
        }
        ct < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    } }
    var ka = De.ReactCurrentDispatcher, Wt;
    function Bn(b, F, K) {
        {
            if (Wt === void 0)
                try {
                    throw Error();
                }
                catch (ke) {
                    var ce = ke.stack.trim().match(/\n( *(at )?)/);
                    Wt = ce && ce[1] || "";
                }
            return `
` + Wt + b;
        }
    }
    var Kt = !1, Qt;
    {
        var Xt = typeof WeakMap == "function" ? WeakMap : Map;
        Qt = new Xt;
    }
    function wn(b, F) {
        if (!b || Kt)
            return "";
        {
            var K = Qt.get(b);
            if (K !== void 0)
                return K;
        }
        var ce;
        Kt = !0;
        var ke = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var be;
        be = ka.current, ka.current = null, bn();
        try {
            if (F) {
                var je = function () { throw Error(); };
                if (Object.defineProperty(je.prototype, "props", { set: function () { throw Error(); } }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(je, []);
                    }
                    catch (At) {
                        ce = At;
                    }
                    Reflect.construct(b, [], je);
                }
                else {
                    try {
                        je.call();
                    }
                    catch (At) {
                        ce = At;
                    }
                    b.call(je.prototype);
                }
            }
            else {
                try {
                    throw Error();
                }
                catch (At) {
                    ce = At;
                }
                b();
            }
        }
        catch (At) {
            if (At && ce && typeof At.stack == "string") {
                for (var de = At.stack.split(`
`), jt = ce.stack.split(`
`), lt = de.length - 1, ut = jt.length - 1; lt >= 1 && ut >= 0 && de[lt] !== jt[ut];)
                    ut--;
                for (; lt >= 1 && ut >= 0; lt--, ut--)
                    if (de[lt] !== jt[ut]) {
                        if (lt !== 1 || ut !== 1)
                            do
                                if (lt--, ut--, ut < 0 || de[lt] !== jt[ut]) {
                                    var dn = `
` + de[lt].replace(" at new ", " at ");
                                    return b.displayName && dn.includes("<anonymous>") && (dn = dn.replace("<anonymous>", b.displayName)), typeof b == "function" && Qt.set(b, dn), dn;
                                }
                            while (lt >= 1 && ut >= 0);
                        break;
                    }
            }
        }
        finally {
            Kt = !1, ka.current = be, tr(), Error.prepareStackTrace = ke;
        }
        var Fa = b ? b.displayName || b.name : "", ga = Fa ? Bn(Fa) : "";
        return typeof b == "function" && Qt.set(b, ga), ga;
    }
    function Pt(b, F, K) { return wn(b, !1); }
    function En(b) { var F = b.prototype; return !!(F && F.isReactComponent); }
    function Ht(b, F, K) { if (b == null)
        return ""; if (typeof b == "function")
        return wn(b, En(b)); if (typeof b == "string")
        return Bn(b); switch (b) {
        case A: return Bn("Suspense");
        case B: return Bn("SuspenseList");
    } if (typeof b == "object")
        switch (b.$$typeof) {
            case O: return Pt(b.render);
            case j: return Ht(b.type, F, K);
            case P: {
                var ce = b, ke = ce._payload, be = ce._init;
                try {
                    return Ht(be(ke), F, K);
                }
                catch { }
            }
        } return ""; }
    var Bt = Object.prototype.hasOwnProperty, ea = {}, nr = De.ReactDebugCurrentFrame;
    function ma(b) { if (b) {
        var F = b._owner, K = Ht(b.type, b._source, F ? F.type : null);
        nr.setExtraStackFrame(K);
    }
    else
        nr.setExtraStackFrame(null); }
    function Mn(b, F, K, ce, ke) { {
        var be = Function.call.bind(Bt);
        for (var je in b)
            if (be(b, je)) {
                var de = void 0;
                try {
                    if (typeof b[je] != "function") {
                        var jt = Error((ce || "React class") + ": " + K + " type `" + je + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[je] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                        throw jt.name = "Invariant Violation", jt;
                    }
                    de = b[je](F, je, ce, K, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                }
                catch (lt) {
                    de = lt;
                }
                de && !(de instanceof Error) && (ma(ke), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ce || "React class", K, je, typeof de), ma(null)), de instanceof Error && !(de.message in ea) && (ea[de.message] = !0, ma(ke), $("Failed %s type: %s", K, de.message), ma(null));
            }
    } }
    var cn = Array.isArray;
    function Jt(b) { return cn(b); }
    function Sn(b) { {
        var F = typeof Symbol == "function" && Symbol.toStringTag, K = F && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return K;
    } }
    function Va(b) { try {
        return _t(b), !1;
    }
    catch {
        return !0;
    } }
    function _t(b) { return "" + b; }
    function Nn(b) { if (Va(b))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Sn(b)), _t(b); }
    var Ln = De.ReactCurrentOwner, wr = { key: !0, ref: !0, __self: !0, __source: !0 }, ar, W, se;
    se = {};
    function Oe(b) { if (Bt.call(b, "ref")) {
        var F = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (F && F.isReactWarning)
            return !1;
    } return b.ref !== void 0; }
    function Qe(b) { if (Bt.call(b, "key")) {
        var F = Object.getOwnPropertyDescriptor(b, "key").get;
        if (F && F.isReactWarning)
            return !1;
    } return b.key !== void 0; }
    function ot(b, F) { if (typeof b.ref == "string" && Ln.current && F && Ln.current.stateNode !== F) {
        var K = Ne(Ln.current.type);
        se[K] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Ne(Ln.current.type), b.ref), se[K] = !0);
    } }
    function mt(b, F) { {
        var K = function () { ar || (ar = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F)); };
        K.isReactWarning = !0, Object.defineProperty(b, "key", { get: K, configurable: !0 });
    } }
    function vt(b, F) { {
        var K = function () { W || (W = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", F)); };
        K.isReactWarning = !0, Object.defineProperty(b, "ref", { get: K, configurable: !0 });
    } }
    var fn = function (b, F, K, ce, ke, be, je) { var de = { $$typeof: p, type: b, key: F, ref: K, props: je, _owner: be }; return de._store = {}, Object.defineProperty(de._store, "validated", { configurable: !1, enumerable: !1, writable: !0, value: !1 }), Object.defineProperty(de, "_self", { configurable: !1, enumerable: !1, writable: !1, value: ce }), Object.defineProperty(de, "_source", { configurable: !1, enumerable: !1, writable: !1, value: ke }), Object.freeze && (Object.freeze(de.props), Object.freeze(de)), de; };
    function yt(b, F, K, ce, ke) { {
        var be, je = {}, de = null, jt = null;
        K !== void 0 && (Nn(K), de = "" + K), Qe(F) && (Nn(F.key), de = "" + F.key), Oe(F) && (jt = F.ref, ot(F, ke));
        for (be in F)
            Bt.call(F, be) && !wr.hasOwnProperty(be) && (je[be] = F[be]);
        if (b && b.defaultProps) {
            var lt = b.defaultProps;
            for (be in lt)
                je[be] === void 0 && (je[be] = lt[be]);
        }
        if (de || jt) {
            var ut = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
            de && mt(je, ut), jt && vt(je, ut);
        }
        return fn(b, de, jt, ke, ce, Ln.current, je);
    } }
    var tt = De.ReactCurrentOwner, gt = De.ReactDebugCurrentFrame;
    function va(b) { if (b) {
        var F = b._owner, K = Ht(b.type, b._source, F ? F.type : null);
        gt.setExtraStackFrame(K);
    }
    else
        gt.setExtraStackFrame(null); }
    var ha;
    ha = !1;
    function ta(b) { return typeof b == "object" && b !== null && b.$$typeof === p; }
    function rr() {
        {
            if (tt.current) {
                var b = Ne(tt.current.type);
                if (b)
                    return `

Check the render method of \`` + b + "`.";
            }
            return "";
        }
    }
    function rl(b) {
        {
            if (b !== void 0) {
                var F = b.fileName.replace(/^.*[\\\/]/, ""), K = b.lineNumber;
                return `

Check your code at ` + F + ":" + K + ".";
            }
            return "";
        }
    }
    var si = {};
    function Xi(b) {
        {
            var F = rr();
            if (!F) {
                var K = typeof b == "string" ? b : b.displayName || b.name;
                K && (F = `

Check the top-level render call using <` + K + ">.");
            }
            return F;
        }
    }
    function Ji(b, F) { {
        if (!b._store || b._store.validated || b.key != null)
            return;
        b._store.validated = !0;
        var K = Xi(F);
        if (si[K])
            return;
        si[K] = !0;
        var ce = "";
        b && b._owner && b._owner !== tt.current && (ce = " It was passed a child from " + Ne(b._owner.type) + "."), va(b), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', K, ce), va(null);
    } }
    function ci(b, F) { {
        if (typeof b != "object")
            return;
        if (Jt(b))
            for (var K = 0; K < b.length; K++) {
                var ce = b[K];
                ta(ce) && Ji(ce, F);
            }
        else if (ta(b))
            b._store && (b._store.validated = !0);
        else if (b) {
            var ke = ie(b);
            if (typeof ke == "function" && ke !== b.entries)
                for (var be = ke.call(b), je; !(je = be.next()).done;)
                    ta(je.value) && Ji(je.value, F);
        }
    } }
    function ya(b) { {
        var F = b.type;
        if (F == null || typeof F == "string")
            return;
        var K;
        if (typeof F == "function")
            K = F.propTypes;
        else if (typeof F == "object" && (F.$$typeof === O || F.$$typeof === j))
            K = F.propTypes;
        else
            return;
        if (K) {
            var ce = Ne(F);
            Mn(K, b.props, "prop", ce, b);
        }
        else if (F.PropTypes !== void 0 && !ha) {
            ha = !0;
            var ke = Ne(F);
            $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ke || "Unknown");
        }
        typeof F.getDefaultProps == "function" && !F.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    } }
    function na(b) { {
        for (var F = Object.keys(b.props), K = 0; K < F.length; K++) {
            var ce = F[K];
            if (ce !== "children" && ce !== "key") {
                va(b), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ce), va(null);
                break;
            }
        }
        b.ref !== null && (va(b), $("Invalid attribute `ref` supplied to `React.Fragment`."), va(null));
    } }
    var In = {};
    function za(b, F, K, ce, ke, be) {
        {
            var je = Be(b);
            if (!je) {
                var de = "";
                (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (de += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var jt = rl(ke);
                jt ? de += jt : de += rr();
                var lt;
                b === null ? lt = "null" : Jt(b) ? lt = "array" : b !== void 0 && b.$$typeof === p ? (lt = "<" + (Ne(b.type) || "Unknown") + " />", de = " Did you accidentally export a JSX literal instead of a component?") : lt = typeof b, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", lt, de);
            }
            var ut = yt(b, F, K, ke, be);
            if (ut == null)
                return ut;
            if (je) {
                var dn = F.children;
                if (dn !== void 0)
                    if (ce)
                        if (Jt(dn)) {
                            for (var Fa = 0; Fa < dn.length; Fa++)
                                ci(dn[Fa], b);
                            Object.freeze && Object.freeze(dn);
                        }
                        else
                            $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                    else
                        ci(dn, b);
            }
            if (Bt.call(F, "key")) {
                var ga = Ne(b), At = Object.keys(F).filter(function (Me) { return Me !== "key"; }), di = At.length > 0 ? "{key: someKey, " + At.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!In[ga + di]) {
                    var ba = At.length > 0 ? "{" + At.join(": ..., ") + ": ...}" : "{}";
                    $(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, di, ga, ba, ga), In[ga + di] = !0;
                }
            }
            return b === E ? na(ut) : ya(ut), ut;
        }
    }
    var fi = za;
    Lv.Fragment = E, Lv.jsxDEV = fi;
})();
sS.exports = Lv;
var v = sS.exports, Uv = {}, fS = { exports: {} }, Jn = {}, dS = { exports: {} }, pS = {};
(function (c) {
    (function () { typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error); var p = !1, h = 5; function E(W, se) { var Oe = W.length; W.push(se), f(W, se, Oe); } function y(W) { return W.length === 0 ? null : W[0]; } function T(W) { if (W.length === 0)
        return null; var se = W[0], Oe = W.pop(); return Oe !== se && (W[0] = Oe, k(W, Oe, 0)), se; } function f(W, se, Oe) { for (var Qe = Oe; Qe > 0;) {
        var ot = Qe - 1 >>> 1, mt = W[ot];
        if (O(mt, se) > 0)
            W[ot] = se, W[Qe] = mt, Qe = ot;
        else
            return;
    } } function k(W, se, Oe) { for (var Qe = Oe, ot = W.length, mt = ot >>> 1; Qe < mt;) {
        var vt = (Qe + 1) * 2 - 1, fn = W[vt], yt = vt + 1, tt = W[yt];
        if (O(fn, se) < 0)
            yt < ot && O(tt, fn) < 0 ? (W[Qe] = tt, W[yt] = se, Qe = yt) : (W[Qe] = fn, W[vt] = se, Qe = vt);
        else if (yt < ot && O(tt, se) < 0)
            W[Qe] = tt, W[yt] = se, Qe = yt;
        else
            return;
    } } function O(W, se) { var Oe = W.sortIndex - se.sortIndex; return Oe !== 0 ? Oe : W.id - se.id; } var A = 1, B = 2, j = 3, P = 4, q = 5; function ne(W, se) { } var Ce = typeof performance == "object" && typeof performance.now == "function"; if (Ce) {
        var ie = performance;
        c.unstable_now = function () { return ie.now(); };
    }
    else {
        var De = Date, $ = De.now();
        c.unstable_now = function () { return De.now() - $; };
    } var te = 1073741823, ye = -1, ue = 250, V = 5e3, oe = 1e4, _e = te, He = [], Be = [], Ye = 1, ge = null, Ne = j, St = !1, ct = !1, Dt = !1, we = typeof setTimeout == "function" ? setTimeout : null, sn = typeof clearTimeout == "function" ? clearTimeout : null, da = typeof setImmediate < "u" ? setImmediate : null; typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling); function Hn(W) { for (var se = y(Be); se !== null;) {
        if (se.callback === null)
            T(Be);
        else if (se.startTime <= W)
            T(Be), se.sortIndex = se.expirationTime, E(He, se);
        else
            return;
        se = y(Be);
    } } function Zn(W) { if (Dt = !1, Hn(W), !ct)
        if (y(He) !== null)
            ct = !0, _t(Ft);
        else {
            var se = y(Be);
            se !== null && Nn(Zn, se.startTime - W);
        } } function Ft(W, se) { ct = !1, Dt && (Dt = !1, Ln()), St = !0; var Oe = Ne; try {
        var Qe;
        if (!p)
            return pa(W, se);
    }
    finally {
        ge = null, Ne = Oe, St = !1;
    } } function pa(W, se) { var Oe = se; for (Hn(Oe), ge = y(He); ge !== null && !(ge.expirationTime > Oe && (!W || nr()));) {
        var Qe = ge.callback;
        if (typeof Qe == "function") {
            ge.callback = null, Ne = ge.priorityLevel;
            var ot = ge.expirationTime <= Oe, mt = Qe(ot);
            Oe = c.unstable_now(), typeof mt == "function" ? ge.callback = mt : ge === y(He) && T(He), Hn(Oe);
        }
        else
            T(He);
        ge = y(He);
    } if (ge !== null)
        return !0; var vt = y(Be); return vt !== null && Nn(Zn, vt.startTime - Oe), !1; } function bn(W, se) { switch (W) {
        case A:
        case B:
        case j:
        case P:
        case q: break;
        default: W = j;
    } var Oe = Ne; Ne = W; try {
        return se();
    }
    finally {
        Ne = Oe;
    } } function tr(W) { var se; switch (Ne) {
        case A:
        case B:
        case j:
            se = j;
            break;
        default:
            se = Ne;
            break;
    } var Oe = Ne; Ne = se; try {
        return W();
    }
    finally {
        Ne = Oe;
    } } function ka(W) { var se = Ne; return function () { var Oe = Ne; Ne = se; try {
        return W.apply(this, arguments);
    }
    finally {
        Ne = Oe;
    } }; } function Wt(W, se, Oe) { var Qe = c.unstable_now(), ot; if (typeof Oe == "object" && Oe !== null) {
        var mt = Oe.delay;
        typeof mt == "number" && mt > 0 ? ot = Qe + mt : ot = Qe;
    }
    else
        ot = Qe; var vt; switch (W) {
        case A:
            vt = ye;
            break;
        case B:
            vt = ue;
            break;
        case q:
            vt = _e;
            break;
        case P:
            vt = oe;
            break;
        case j:
        default:
            vt = V;
            break;
    } var fn = ot + vt, yt = { id: Ye++, callback: se, priorityLevel: W, startTime: ot, expirationTime: fn, sortIndex: -1 }; return ot > Qe ? (yt.sortIndex = ot, E(Be, yt), y(He) === null && yt === y(Be) && (Dt ? Ln() : Dt = !0, Nn(Zn, ot - Qe))) : (yt.sortIndex = fn, E(He, yt), !ct && !St && (ct = !0, _t(Ft))), yt; } function Bn() { } function Kt() { !ct && !St && (ct = !0, _t(Ft)); } function Qt() { return y(He); } function Xt(W) { W.callback = null; } function wn() { return Ne; } var Pt = !1, En = null, Ht = -1, Bt = h, ea = -1; function nr() { var W = c.unstable_now() - ea; return !(W < Bt); } function ma() { } function Mn(W) { if (W < 0 || W > 125) {
        console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
        return;
    } W > 0 ? Bt = Math.floor(1e3 / W) : Bt = h; } var cn = function () { if (En !== null) {
        var W = c.unstable_now();
        ea = W;
        var se = !0, Oe = !0;
        try {
            Oe = En(se, W);
        }
        finally {
            Oe ? Jt() : (Pt = !1, En = null);
        }
    }
    else
        Pt = !1; }, Jt; if (typeof da == "function")
        Jt = function () { da(cn); };
    else if (typeof MessageChannel < "u") {
        var Sn = new MessageChannel, Va = Sn.port2;
        Sn.port1.onmessage = cn, Jt = function () { Va.postMessage(null); };
    }
    else
        Jt = function () { we(cn, 0); }; function _t(W) { En = W, Pt || (Pt = !0, Jt()); } function Nn(W, se) { Ht = we(function () { W(c.unstable_now()); }, se); } function Ln() { sn(Ht), Ht = -1; } var wr = ma, ar = null; c.unstable_IdlePriority = q, c.unstable_ImmediatePriority = A, c.unstable_LowPriority = P, c.unstable_NormalPriority = j, c.unstable_Profiling = ar, c.unstable_UserBlockingPriority = B, c.unstable_cancelCallback = Xt, c.unstable_continueExecution = Kt, c.unstable_forceFrameRate = Mn, c.unstable_getCurrentPriorityLevel = wn, c.unstable_getFirstCallbackNode = Qt, c.unstable_next = tr, c.unstable_pauseExecution = Bn, c.unstable_requestPaint = wr, c.unstable_runWithPriority = bn, c.unstable_scheduleCallback = Wt, c.unstable_shouldYield = nr, c.unstable_wrapCallback = ka, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error); })();
})(pS);
dS.exports = pS;
var Hj = dS.exports; /**
* @license React
* react-dom.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
(function () {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);
    var c = I, p = Hj, h = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, E = !1;
    function y(e) { E = e; }
    function T(e) { if (!E) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
            n[a - 1] = arguments[a];
        k("warn", e, n);
    } }
    function f(e) { if (!E) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
            n[a - 1] = arguments[a];
        k("error", e, n);
    } }
    function k(e, t, n) { {
        var a = h.ReactDebugCurrentFrame, r = a.getStackAddendum();
        r !== "" && (t += "%s", n = n.concat([r]));
        var i = n.map(function (o) { return String(o); });
        i.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, i);
    } }
    var O = 0, A = 1, B = 2, j = 3, P = 4, q = 5, ne = 6, Ce = 7, ie = 8, De = 9, $ = 10, te = 11, ye = 12, ue = 13, V = 14, oe = 15, _e = 16, He = 17, Be = 18, Ye = 19, ge = 21, Ne = 22, St = 23, ct = 24, Dt = 25, we = !0, sn = !1, da = !1, Hn = !1, Zn = !1, Ft = !0, pa = !0, bn = !0, tr = !0, ka = new Set, Wt = {}, Bn = {};
    function Kt(e, t) { Qt(e, t), Qt(e + "Capture", t); }
    function Qt(e, t) { Wt[e] && f("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Wt[e] = t; {
        var n = e.toLowerCase();
        Bn[n] = e, e === "onDoubleClick" && (Bn.ondblclick = e);
    } for (var a = 0; a < t.length; a++)
        ka.add(t[a]); }
    var Xt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", wn = Object.prototype.hasOwnProperty;
    function Pt(e) { {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
    } }
    function En(e) { try {
        return Ht(e), !1;
    }
    catch {
        return !0;
    } }
    function Ht(e) { return "" + e; }
    function Bt(e, t) { if (En(e))
        return f("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Pt(e)), Ht(e); }
    function ea(e) { if (En(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pt(e)), Ht(e); }
    function nr(e, t) { if (En(e))
        return f("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Pt(e)), Ht(e); }
    function ma(e, t) { if (En(e))
        return f("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Pt(e)), Ht(e); }
    function Mn(e) { if (En(e))
        return f("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Pt(e)), Ht(e); }
    function cn(e) { if (En(e))
        return f("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Pt(e)), Ht(e); }
    var Jt = 0, Sn = 1, Va = 2, _t = 3, Nn = 4, Ln = 5, wr = 6, ar = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", W = ar + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", se = new RegExp("^[" + ar + "][" + W + "]*$"), Oe = {}, Qe = {};
    function ot(e) { return wn.call(Qe, e) ? !0 : wn.call(Oe, e) ? !1 : se.test(e) ? (Qe[e] = !0, !0) : (Oe[e] = !0, f("Invalid attribute name: `%s`", e), !1); }
    function mt(e, t, n) { return t !== null ? t.type === Jt : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N"); }
    function vt(e, t, n, a) { if (n !== null && n.type === Jt)
        return !1; switch (typeof t) {
        case "function":
        case "symbol": return !0;
        case "boolean": {
            if (a)
                return !1;
            if (n !== null)
                return !n.acceptsBooleans;
            var r = e.toLowerCase().slice(0, 5);
            return r !== "data-" && r !== "aria-";
        }
        default: return !1;
    } }
    function fn(e, t, n, a) { if (t === null || typeof t > "u" || vt(e, t, n, a))
        return !0; if (a)
        return !1; if (n !== null)
        switch (n.type) {
            case _t: return !t;
            case Nn: return t === !1;
            case Ln: return isNaN(t);
            case wr: return isNaN(t) || t < 1;
        } return !1; }
    function yt(e) { return gt.hasOwnProperty(e) ? gt[e] : null; }
    function tt(e, t, n, a, r, i, o) { this.acceptsBooleans = t === Va || t === _t || t === Nn, this.attributeName = a, this.attributeNamespace = r, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o; }
    var gt = {}, va = ["children", "dangerouslySetInnerHTML", "defaultValue", "defaultChecked", "innerHTML", "suppressContentEditableWarning", "suppressHydrationWarning", "style"];
    va.forEach(function (e) { gt[e] = new tt(e, Jt, !1, e, null, !1, !1); }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) { var t = e[0], n = e[1]; gt[t] = new tt(t, Sn, !1, n, null, !1, !1); }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) { gt[e] = new tt(e, Va, !1, e.toLowerCase(), null, !1, !1); }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) { gt[e] = new tt(e, Va, !1, e, null, !1, !1); }), ["allowFullScreen", "async", "autoFocus", "autoPlay", "controls", "default", "defer", "disabled", "disablePictureInPicture", "disableRemotePlayback", "formNoValidate", "hidden", "loop", "noModule", "noValidate", "open", "playsInline", "readOnly", "required", "reversed", "scoped", "seamless", "itemScope"].forEach(function (e) { gt[e] = new tt(e, _t, !1, e.toLowerCase(), null, !1, !1); }), ["checked", "multiple", "muted", "selected"].forEach(function (e) { gt[e] = new tt(e, _t, !0, e, null, !1, !1); }), ["capture", "download"].forEach(function (e) { gt[e] = new tt(e, Nn, !1, e, null, !1, !1); }), ["cols", "rows", "size", "span"].forEach(function (e) { gt[e] = new tt(e, wr, !1, e, null, !1, !1); }), ["rowSpan", "start"].forEach(function (e) { gt[e] = new tt(e, Ln, !1, e.toLowerCase(), null, !1, !1); });
    var ha = /[\-\:]([a-z])/g, ta = function (e) { return e[1].toUpperCase(); };
    ["accent-height", "alignment-baseline", "arabic-form", "baseline-shift", "cap-height", "clip-path", "clip-rule", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "dominant-baseline", "enable-background", "fill-opacity", "fill-rule", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-name", "glyph-orientation-horizontal", "glyph-orientation-vertical", "horiz-adv-x", "horiz-origin-x", "image-rendering", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "overline-position", "overline-thickness", "paint-order", "panose-1", "pointer-events", "rendering-intent", "shape-rendering", "stop-color", "stop-opacity", "strikethrough-position", "strikethrough-thickness", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "text-decoration", "text-rendering", "underline-position", "underline-thickness", "unicode-bidi", "unicode-range", "units-per-em", "v-alphabetic", "v-hanging", "v-ideographic", "v-mathematical", "vector-effect", "vert-adv-y", "vert-origin-x", "vert-origin-y", "word-spacing", "writing-mode", "xmlns:xlink", "x-height"].forEach(function (e) { var t = e.replace(ha, ta); gt[t] = new tt(t, Sn, !1, e, null, !1, !1); }), ["xlink:actuate", "xlink:arcrole", "xlink:role", "xlink:show", "xlink:title", "xlink:type"].forEach(function (e) { var t = e.replace(ha, ta); gt[t] = new tt(t, Sn, !1, e, "http://www.w3.org/1999/xlink", !1, !1); }), ["xml:base", "xml:lang", "xml:space"].forEach(function (e) { var t = e.replace(ha, ta); gt[t] = new tt(t, Sn, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); }), ["tabIndex", "crossOrigin"].forEach(function (e) { gt[e] = new tt(e, Sn, !1, e.toLowerCase(), null, !1, !1); });
    var rr = "xlinkHref";
    gt[rr] = new tt("xlinkHref", Sn, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function (e) { gt[e] = new tt(e, Sn, !1, e.toLowerCase(), null, !0, !0); });
    var rl = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, si = !1;
    function Xi(e) { !si && rl.test(e) && (si = !0, f("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e))); }
    function Ji(e, t, n, a) { if (a.mustUseProperty) {
        var r = a.propertyName;
        return e[r];
    }
    else {
        Bt(n, t), a.sanitizeURL && Xi("" + n);
        var i = a.attributeName, o = null;
        if (a.type === Nn) {
            if (e.hasAttribute(i)) {
                var l = e.getAttribute(i);
                return l === "" ? !0 : fn(t, n, a, !1) ? l : l === "" + n ? n : l;
            }
        }
        else if (e.hasAttribute(i)) {
            if (fn(t, n, a, !1))
                return e.getAttribute(i);
            if (a.type === _t)
                return n;
            o = e.getAttribute(i);
        }
        return fn(t, n, a, !1) ? o === null ? n : o : o === "" + n ? n : o;
    } }
    function ci(e, t, n, a) { {
        if (!ot(t))
            return;
        if (!e.hasAttribute(t))
            return n === void 0 ? void 0 : null;
        var r = e.getAttribute(t);
        return Bt(n, t), r === "" + n ? n : r;
    } }
    function ya(e, t, n, a) { var r = yt(t); if (!mt(t, r, a)) {
        if (fn(t, n, r, a) && (n = null), a || r === null) {
            if (ot(t)) {
                var i = t;
                n === null ? e.removeAttribute(i) : (Bt(n, t), e.setAttribute(i, "" + n));
            }
            return;
        }
        var o = r.mustUseProperty;
        if (o) {
            var l = r.propertyName;
            if (n === null) {
                var u = r.type;
                e[l] = u === _t ? !1 : "";
            }
            else
                e[l] = n;
            return;
        }
        var d = r.attributeName, m = r.attributeNamespace;
        if (n === null)
            e.removeAttribute(d);
        else {
            var N = r.type, S;
            N === _t || N === Nn && n === !0 ? S = "" : (Bt(n, d), S = "" + n, r.sanitizeURL && Xi(S.toString())), m ? e.setAttributeNS(m, d, S) : e.setAttribute(d, S);
        }
    } }
    var na = Symbol.for("react.element"), In = Symbol.for("react.portal"), za = Symbol.for("react.fragment"), fi = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), F = Symbol.for("react.provider"), K = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), ke = Symbol.for("react.suspense"), be = Symbol.for("react.suspense_list"), je = Symbol.for("react.memo"), de = Symbol.for("react.lazy"), jt = Symbol.for("react.scope"), lt = Symbol.for("react.debug_trace_mode"), ut = Symbol.for("react.offscreen"), dn = Symbol.for("react.legacy_hidden"), Fa = Symbol.for("react.cache"), ga = Symbol.for("react.tracing_marker"), At = Symbol.iterator, di = "@@iterator";
    function ba(e) { if (e === null || typeof e != "object")
        return null; var t = At && e[At] || e[di]; return typeof t == "function" ? t : null; }
    var Me = Object.assign, pi = 0, as, rs, Mr, il, ol, ll, ul;
    function sl() { }
    sl.__reactDisabledLog = !0;
    function is() { {
        if (pi === 0) {
            as = console.log, rs = console.info, Mr = console.warn, il = console.error, ol = console.group, ll = console.groupCollapsed, ul = console.groupEnd;
            var e = { configurable: !0, enumerable: !0, value: sl, writable: !0 };
            Object.defineProperties(console, { info: e, log: e, warn: e, error: e, group: e, groupCollapsed: e, groupEnd: e });
        }
        pi++;
    } }
    function os() { {
        if (pi--, pi === 0) {
            var e = { configurable: !0, enumerable: !0, writable: !0 };
            Object.defineProperties(console, { log: Me({}, e, { value: as }), info: Me({}, e, { value: rs }), warn: Me({}, e, { value: Mr }), error: Me({}, e, { value: il }), group: Me({}, e, { value: ol }), groupCollapsed: Me({}, e, { value: ll }), groupEnd: Me({}, e, { value: ul }) });
        }
        pi < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    } }
    var Zi = h.ReactCurrentDispatcher, cl;
    function Pa(e, t, n) {
        {
            if (cl === void 0)
                try {
                    throw Error();
                }
                catch (r) {
                    var a = r.stack.trim().match(/\n( *(at )?)/);
                    cl = a && a[1] || "";
                }
            return `
` + cl + e;
        }
    }
    var mi = !1, Lr;
    {
        var eo = typeof WeakMap == "function" ? WeakMap : Map;
        Lr = new eo;
    }
    function vi(e, t) {
        if (!e || mi)
            return "";
        {
            var n = Lr.get(e);
            if (n !== void 0)
                return n;
        }
        var a;
        mi = !0;
        var r = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var i;
        i = Zi.current, Zi.current = null, is();
        try {
            if (t) {
                var o = function () { throw Error(); };
                if (Object.defineProperty(o.prototype, "props", { set: function () { throw Error(); } }), typeof Reflect == "object" && Reflect.construct) {
                    try {
                        Reflect.construct(o, []);
                    }
                    catch (_) {
                        a = _;
                    }
                    Reflect.construct(e, [], o);
                }
                else {
                    try {
                        o.call();
                    }
                    catch (_) {
                        a = _;
                    }
                    e.call(o.prototype);
                }
            }
            else {
                try {
                    throw Error();
                }
                catch (_) {
                    a = _;
                }
                e();
            }
        }
        catch (_) {
            if (_ && a && typeof _.stack == "string") {
                for (var l = _.stack.split(`
`), u = a.stack.split(`
`), d = l.length - 1, m = u.length - 1; d >= 1 && m >= 0 && l[d] !== u[m];)
                    m--;
                for (; d >= 1 && m >= 0; d--, m--)
                    if (l[d] !== u[m]) {
                        if (d !== 1 || m !== 1)
                            do
                                if (d--, m--, m < 0 || l[d] !== u[m]) {
                                    var N = `
` + l[d].replace(" at new ", " at ");
                                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && Lr.set(e, N), N;
                                }
                            while (d >= 1 && m >= 0);
                        break;
                    }
            }
        }
        finally {
            mi = !1, Zi.current = i, os(), Error.prepareStackTrace = r;
        }
        var S = e ? e.displayName || e.name : "", C = S ? Pa(S) : "";
        return typeof e == "function" && Lr.set(e, C), C;
    }
    function to(e, t, n) { return vi(e, !0); }
    function fl(e, t, n) { return vi(e, !1); }
    function ls(e) { var t = e.prototype; return !!(t && t.isReactComponent); }
    function dl(e, t, n) { if (e == null)
        return ""; if (typeof e == "function")
        return vi(e, ls(e)); if (typeof e == "string")
        return Pa(e); switch (e) {
        case ke: return Pa("Suspense");
        case be: return Pa("SuspenseList");
    } if (typeof e == "object")
        switch (e.$$typeof) {
            case ce: return fl(e.render);
            case je: return dl(e.type, t, n);
            case de: {
                var a = e, r = a._payload, i = a._init;
                try {
                    return dl(i(r), t, n);
                }
                catch { }
            }
        } return ""; }
    function Tf(e) { switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case q: return Pa(e.type);
        case _e: return Pa("Lazy");
        case ue: return Pa("Suspense");
        case Ye: return Pa("SuspenseList");
        case O:
        case B:
        case oe: return fl(e.type);
        case te: return fl(e.type.render);
        case A: return to(e.type);
        default: return "";
    } }
    function hi(e) {
        try {
            var t = "", n = e;
            do
                t += Tf(n), n = n.return;
            while (n);
            return t;
        }
        catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack;
        }
    }
    function us(e, t, n) { var a = e.displayName; if (a)
        return a; var r = t.displayName || t.name || ""; return r !== "" ? n + "(" + r + ")" : n; }
    function pl(e) { return e.displayName || "Context"; }
    function qe(e) { if (e == null)
        return null; if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null; if (typeof e == "string")
        return e; switch (e) {
        case za: return "Fragment";
        case In: return "Portal";
        case b: return "Profiler";
        case fi: return "StrictMode";
        case ke: return "Suspense";
        case be: return "SuspenseList";
    } if (typeof e == "object")
        switch (e.$$typeof) {
            case K:
                var t = e;
                return pl(t) + ".Consumer";
            case F:
                var n = e;
                return pl(n._context) + ".Provider";
            case ce: return us(e, e.render, "ForwardRef");
            case je:
                var a = e.displayName || null;
                return a !== null ? a : qe(e.type) || "Memo";
            case de: {
                var r = e, i = r._payload, o = r._init;
                try {
                    return qe(o(i));
                }
                catch {
                    return null;
                }
            }
        } return null; }
    function Rf(e, t, n) { var a = t.displayName || t.name || ""; return e.displayName || (a !== "" ? n + "(" + a + ")" : n); }
    function ir(e) { return e.displayName || "Context"; }
    function xe(e) { var t = e.tag, n = e.type; switch (t) {
        case ct: return "Cache";
        case De:
            var a = n;
            return ir(a) + ".Consumer";
        case $:
            var r = n;
            return ir(r._context) + ".Provider";
        case Be: return "DehydratedFragment";
        case te: return Rf(n, n.render, "ForwardRef");
        case Ce: return "Fragment";
        case q: return n;
        case P: return "Portal";
        case j: return "Root";
        case ne: return "Text";
        case _e: return qe(n);
        case ie: return n === fi ? "StrictMode" : "Mode";
        case Ne: return "Offscreen";
        case ye: return "Profiler";
        case ge: return "Scope";
        case ue: return "Suspense";
        case Ye: return "SuspenseList";
        case Dt: return "TracingMarker";
        case A:
        case O:
        case He:
        case B:
        case V:
        case oe:
            if (typeof n == "function")
                return n.displayName || n.name || null;
            if (typeof n == "string")
                return n;
            break;
    } return null; }
    var ml = h.ReactDebugCurrentFrame, Tn = null, yi = !1;
    function Ur() { {
        if (Tn === null)
            return null;
        var e = Tn._debugOwner;
        if (e !== null && typeof e < "u")
            return xe(e);
    } return null; }
    function xf() { return Tn === null ? "" : hi(Tn); }
    function It() { ml.getCurrentStack = null, Tn = null, yi = !1; }
    function ft(e) { ml.getCurrentStack = e === null ? null : xf, Tn = e, yi = !1; }
    function ss() { return Tn; }
    function aa(e) { yi = e; }
    function Rn(e) { return "" + e; }
    function Ea(e) { switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined": return e;
        case "object": return cn(e), e;
        default: return "";
    } }
    var Cf = { button: !0, checkbox: !0, image: !0, hidden: !0, radio: !0, reset: !0, submit: !0 };
    function vl(e, t) { Cf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || f("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || f("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."); }
    function cs(e) { var t = e.type, n = e.nodeName; return n && n.toLowerCase() === "input" && (t === "checkbox" || t === "radio"); }
    function hl(e) { return e._valueTracker; }
    function no(e) { e._valueTracker = null; }
    function Df(e) { var t = ""; return e && (cs(e) ? t = e.checked ? "true" : "false" : t = e.value), t; }
    function kr(e) { var t = cs(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t); cn(e[t]); var a = "" + e[t]; if (!(e.hasOwnProperty(t) || typeof n > "u" || typeof n.get != "function" || typeof n.set != "function")) {
        var r = n.get, i = n.set;
        Object.defineProperty(e, t, { configurable: !0, get: function () { return r.call(this); }, set: function (l) { cn(l), a = "" + l, i.call(this, l); } }), Object.defineProperty(e, t, { enumerable: n.enumerable });
        var o = { getValue: function () { return a; }, setValue: function (l) { cn(l), a = "" + l; }, stopTracking: function () { no(e), delete e[t]; } };
        return o;
    } }
    function gi(e) { hl(e) || (e._valueTracker = kr(e)); }
    function yl(e) { if (!e)
        return !1; var t = hl(e); if (!t)
        return !0; var n = t.getValue(), a = Df(e); return a !== n ? (t.setValue(a), !0) : !1; }
    function or(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null; try {
        return e.activeElement || e.body;
    }
    catch {
        return e.body;
    } }
    var ao = !1, ro = !1, io = !1, fs = !1;
    function ds(e) { var t = e.type === "checkbox" || e.type === "radio"; return t ? e.checked != null : e.value != null; }
    function gl(e, t) { var n = e, a = t.checked, r = Me({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: a ?? n._wrapperState.initialChecked }); return r; }
    function ps(e, t) { vl("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ro && (f("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component", t.type), ro = !0), t.value !== void 0 && t.defaultValue !== void 0 && !ao && (f("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component", t.type), ao = !0); var n = e, a = t.defaultValue == null ? "" : t.defaultValue; n._wrapperState = { initialChecked: t.checked != null ? t.checked : t.defaultChecked, initialValue: Ea(t.value != null ? t.value : a), controlled: ds(t) }; }
    function s(e, t) { var n = e, a = t.checked; a != null && ya(n, "checked", a, !1); }
    function g(e, t) { var n = e; {
        var a = ds(t);
        !n._wrapperState.controlled && a && !fs && (f("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), fs = !0), n._wrapperState.controlled && !a && !io && (f("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), io = !0);
    } s(e, t); var r = Ea(t.value), i = t.type; if (r != null)
        i === "number" ? (r === 0 && n.value === "" || n.value != r) && (n.value = Rn(r)) : n.value !== Rn(r) && (n.value = Rn(r));
    else if (i === "submit" || i === "reset") {
        n.removeAttribute("value");
        return;
    } t.hasOwnProperty("value") ? me(n, t.type, r) : t.hasOwnProperty("defaultValue") && me(n, t.type, Ea(t.defaultValue)), t.checked == null && t.defaultChecked != null && (n.defaultChecked = !!t.defaultChecked); }
    function D(e, t, n) { var a = e; if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type, i = r === "submit" || r === "reset";
        if (i && (t.value === void 0 || t.value === null))
            return;
        var o = Rn(a._wrapperState.initialValue);
        n || o !== a.value && (a.value = o), a.defaultValue = o;
    } var l = a.name; l !== "" && (a.name = ""), a.defaultChecked = !a.defaultChecked, a.defaultChecked = !!a._wrapperState.initialChecked, l !== "" && (a.name = l); }
    function w(e, t) { var n = e; g(n, t), Y(n, t); }
    function Y(e, t) { var n = t.name; if (t.type === "radio" && n != null) {
        for (var a = e; a.parentNode;)
            a = a.parentNode;
        Bt(n, "name");
        for (var r = a.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), i = 0; i < r.length; i++) {
            var o = r[i];
            if (!(o === e || o.form !== e.form)) {
                var l = Zs(o);
                if (!l)
                    throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
                yl(o), g(o, l);
            }
        }
    } }
    function me(e, t, n) { (t !== "number" || or(e.ownerDocument) !== e) && (n == null ? e.defaultValue = Rn(e._wrapperState.initialValue) : e.defaultValue !== Rn(n) && (e.defaultValue = Rn(n))); }
    var re = !1, Te = !1, Ve = !1;
    function Xe(e, t) { t.value == null && (typeof t.children == "object" && t.children !== null ? c.Children.forEach(t.children, function (n) { n != null && (typeof n == "string" || typeof n == "number" || Te || (Te = !0, f("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."))); }) : t.dangerouslySetInnerHTML != null && (Ve || (Ve = !0, f("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !re && (f("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), re = !0); }
    function at(e, t) { t.value != null && e.setAttribute("value", Rn(Ea(t.value))); }
    var rt = Array.isArray;
    function Le(e) { return rt(e); }
    var dt;
    dt = !1;
    function Tt() {
        var e = Ur();
        return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var bi = ["value", "defaultValue"];
    function bl(e) { {
        vl("select", e);
        for (var t = 0; t < bi.length; t++) {
            var n = bi[t];
            if (e[n] != null) {
                var a = Le(e[n]);
                e.multiple && !a ? f("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", n, Tt()) : !e.multiple && a && f("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", n, Tt());
            }
        }
    } }
    function lr(e, t, n, a) { var r = e.options; if (t) {
        for (var i = n, o = {}, l = 0; l < i.length; l++)
            o["$" + i[l]] = !0;
        for (var u = 0; u < r.length; u++) {
            var d = o.hasOwnProperty("$" + r[u].value);
            r[u].selected !== d && (r[u].selected = d), d && a && (r[u].defaultSelected = !0);
        }
    }
    else {
        for (var m = Rn(Ea(n)), N = null, S = 0; S < r.length; S++) {
            if (r[S].value === m) {
                r[S].selected = !0, a && (r[S].defaultSelected = !0);
                return;
            }
            N === null && !r[S].disabled && (N = r[S]);
        }
        N !== null && (N.selected = !0);
    } }
    function El(e, t) { return Me({}, t, { value: void 0 }); }
    function Sl(e, t) { var n = e; bl(t), n._wrapperState = { wasMultiple: !!t.multiple }, t.value !== void 0 && t.defaultValue !== void 0 && !dt && (f("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), dt = !0); }
    function _f(e, t) { var n = e; n.multiple = !!t.multiple; var a = t.value; a != null ? lr(n, !!t.multiple, a, !1) : t.defaultValue != null && lr(n, !!t.multiple, t.defaultValue, !0); }
    function ms(e, t) { var n = e, a = n._wrapperState.wasMultiple; n._wrapperState.wasMultiple = !!t.multiple; var r = t.value; r != null ? lr(n, !!t.multiple, r, !1) : a !== !!t.multiple && (t.defaultValue != null ? lr(n, !!t.multiple, t.defaultValue, !0) : lr(n, !!t.multiple, t.multiple ? [] : "", !1)); }
    function jf(e, t) { var n = e, a = t.value; a != null && lr(n, !!t.multiple, a, !1); }
    var qv = !1;
    function Af(e, t) { var n = e; if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>."); var a = Me({}, t, { value: void 0, defaultValue: void 0, children: Rn(n._wrapperState.initialValue) }); return a; }
    function Gv(e, t) { var n = e; vl("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !qv && (f("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Ur() || "A component"), qv = !0); var a = t.value; if (a == null) {
        var r = t.children, i = t.defaultValue;
        if (r != null) {
            f("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
            {
                if (i != null)
                    throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
                if (Le(r)) {
                    if (r.length > 1)
                        throw new Error("<textarea> can only have at most one child.");
                    r = r[0];
                }
                i = r;
            }
        }
        i == null && (i = ""), a = i;
    } n._wrapperState = { initialValue: Ea(a) }; }
    function Wv(e, t) { var n = e, a = Ea(t.value), r = Ea(t.defaultValue); if (a != null) {
        var i = Rn(a);
        i !== n.value && (n.value = i), t.defaultValue == null && n.defaultValue !== i && (n.defaultValue = i);
    } r != null && (n.defaultValue = Rn(r)); }
    function Kv(e, t) { var n = e, a = n.textContent; a === n._wrapperState.initialValue && a !== "" && a !== null && (n.value = a); }
    function RS(e, t) { Wv(e, t); }
    var ur = "http://www.w3.org/1999/xhtml", xS = "http://www.w3.org/1998/Math/MathML", Of = "http://www.w3.org/2000/svg";
    function wf(e) { switch (e) {
        case "svg": return Of;
        case "math": return xS;
        default: return ur;
    } }
    function Mf(e, t) { return e == null || e === ur ? wf(t) : e === Of && t === "foreignObject" ? ur : e; }
    var CS = function (e) { return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (t, n, a, r) { MSApp.execUnsafeLocalFunction(function () { return e(t, n, a, r); }); } : e; }, vs, Qv = CS(function (e, t) { if (e.namespaceURI === Of && !("innerHTML" in e)) {
        vs = vs || document.createElement("div"), vs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var n = vs.firstChild; e.firstChild;)
            e.removeChild(e.firstChild);
        for (; n.firstChild;)
            e.appendChild(n.firstChild);
        return;
    } e.innerHTML = t; }), Un = 1, sr = 3, Rt = 8, cr = 9, Lf = 11, hs = function (e, t) { if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === sr) {
            n.nodeValue = t;
            return;
        }
    } e.textContent = t; }, DS = { animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"], background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"], backgroundPosition: ["backgroundPositionX", "backgroundPositionY"], border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"], borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"], borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"], borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"], borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"], borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"], borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"], borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"], borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"], borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"], borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"], borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"], borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"], borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"], columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"], columns: ["columnCount", "columnWidth"], flex: ["flexBasis", "flexGrow", "flexShrink"], flexFlow: ["flexDirection", "flexWrap"], font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"], fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"], gap: ["columnGap", "rowGap"], grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"], gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"], gridColumn: ["gridColumnEnd", "gridColumnStart"], gridColumnGap: ["columnGap"], gridGap: ["columnGap", "rowGap"], gridRow: ["gridRowEnd", "gridRowStart"], gridRowGap: ["rowGap"], gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"], listStyle: ["listStyleImage", "listStylePosition", "listStyleType"], margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"], marker: ["markerEnd", "markerMid", "markerStart"], mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"], maskPosition: ["maskPositionX", "maskPositionY"], outline: ["outlineColor", "outlineStyle", "outlineWidth"], overflow: ["overflowX", "overflowY"], padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"], placeContent: ["alignContent", "justifyContent"], placeItems: ["alignItems", "justifyItems"], placeSelf: ["alignSelf", "justifySelf"], textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"], textEmphasis: ["textEmphasisColor", "textEmphasisStyle"], transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"], wordWrap: ["overflowWrap"] }, Nl = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 };
    function _S(e, t) { return e + t.charAt(0).toUpperCase() + t.substring(1); }
    var jS = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Nl).forEach(function (e) { jS.forEach(function (t) { Nl[_S(t, e)] = Nl[e]; }); });
    function Uf(e, t, n) { var a = t == null || typeof t == "boolean" || t === ""; return a ? "" : !n && typeof t == "number" && t !== 0 && !(Nl.hasOwnProperty(e) && Nl[e]) ? t + "px" : (ma(t, e), ("" + t).trim()); }
    var AS = /([A-Z])/g, OS = /^ms-/;
    function wS(e) { return e.replace(AS, "-$1").toLowerCase().replace(OS, "-ms-"); }
    var Xv = function () { };
    {
        var MS = /^(?:webkit|moz|o)[A-Z]/, LS = /^-ms-/, US = /-(.)/g, Jv = /;\s*$/, oo = {}, kf = {}, Zv = !1, eh = !1, kS = function (e) { return e.replace(US, function (t, n) { return n.toUpperCase(); }); }, VS = function (e) { oo.hasOwnProperty(e) && oo[e] || (oo[e] = !0, f("Unsupported style property %s. Did you mean %s?", e, kS(e.replace(LS, "ms-")))); }, zS = function (e) { oo.hasOwnProperty(e) && oo[e] || (oo[e] = !0, f("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1))); }, FS = function (e, t) { kf.hasOwnProperty(t) && kf[t] || (kf[t] = !0, f(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Jv, ""))); }, PS = function (e, t) { Zv || (Zv = !0, f("`NaN` is an invalid value for the `%s` css style property.", e)); }, HS = function (e, t) { eh || (eh = !0, f("`Infinity` is an invalid value for the `%s` css style property.", e)); };
        Xv = function (e, t) { e.indexOf("-") > -1 ? VS(e) : MS.test(e) ? zS(e) : Jv.test(t) && FS(e, t), typeof t == "number" && (isNaN(t) ? PS(e, t) : isFinite(t) || HS(e, t)); };
    }
    var BS = Xv;
    function IS(e) { {
        var t = "", n = "";
        for (var a in e)
            if (e.hasOwnProperty(a)) {
                var r = e[a];
                if (r != null) {
                    var i = a.indexOf("--") === 0;
                    t += n + (i ? a : wS(a)) + ":", t += Uf(a, r, i), n = ";";
                }
            }
        return t || null;
    } }
    function th(e, t) { var n = e.style; for (var a in t)
        if (t.hasOwnProperty(a)) {
            var r = a.indexOf("--") === 0;
            r || BS(a, t[a]);
            var i = Uf(a, t[a], r);
            a === "float" && (a = "cssFloat"), r ? n.setProperty(a, i) : n[a] = i;
        } }
    function $S(e) { return e == null || typeof e == "boolean" || e === ""; }
    function nh(e) { var t = {}; for (var n in e)
        for (var a = DS[n] || [n], r = 0; r < a.length; r++)
            t[a[r]] = n; return t; }
    function YS(e, t) { {
        if (!t)
            return;
        var n = nh(e), a = nh(t), r = {};
        for (var i in n) {
            var o = n[i], l = a[i];
            if (l && o !== l) {
                var u = o + "," + l;
                if (r[u])
                    continue;
                r[u] = !0, f("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", $S(e[o]) ? "Removing" : "Updating", o, l);
            }
        }
    } }
    var qS = { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 }, GS = Me({ menuitem: !0 }, qS), WS = "__html";
    function Vf(e, t) { if (t) {
        if (GS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            if (typeof t.dangerouslySetInnerHTML != "object" || !(WS in t.dangerouslySetInnerHTML))
                throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && f("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
            throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
    } }
    function Ei(e, t) { if (e.indexOf("-") === -1)
        return typeof t.is == "string"; switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph": return !1;
        default: return !0;
    } }
    var ys = { accept: "accept", acceptcharset: "acceptCharset", "accept-charset": "acceptCharset", accesskey: "accessKey", action: "action", allowfullscreen: "allowFullScreen", alt: "alt", as: "as", async: "async", autocapitalize: "autoCapitalize", autocomplete: "autoComplete", autocorrect: "autoCorrect", autofocus: "autoFocus", autoplay: "autoPlay", autosave: "autoSave", capture: "capture", cellpadding: "cellPadding", cellspacing: "cellSpacing", challenge: "challenge", charset: "charSet", checked: "checked", children: "children", cite: "cite", class: "className", classid: "classID", classname: "className", cols: "cols", colspan: "colSpan", content: "content", contenteditable: "contentEditable", contextmenu: "contextMenu", controls: "controls", controlslist: "controlsList", coords: "coords", crossorigin: "crossOrigin", dangerouslysetinnerhtml: "dangerouslySetInnerHTML", data: "data", datetime: "dateTime", default: "default", defaultchecked: "defaultChecked", defaultvalue: "defaultValue", defer: "defer", dir: "dir", disabled: "disabled", disablepictureinpicture: "disablePictureInPicture", disableremoteplayback: "disableRemotePlayback", download: "download", draggable: "draggable", enctype: "encType", enterkeyhint: "enterKeyHint", for: "htmlFor", form: "form", formmethod: "formMethod", formaction: "formAction", formenctype: "formEncType", formnovalidate: "formNoValidate", formtarget: "formTarget", frameborder: "frameBorder", headers: "headers", height: "height", hidden: "hidden", high: "high", href: "href", hreflang: "hrefLang", htmlfor: "htmlFor", httpequiv: "httpEquiv", "http-equiv": "httpEquiv", icon: "icon", id: "id", imagesizes: "imageSizes", imagesrcset: "imageSrcSet", innerhtml: "innerHTML", inputmode: "inputMode", integrity: "integrity", is: "is", itemid: "itemID", itemprop: "itemProp", itemref: "itemRef", itemscope: "itemScope", itemtype: "itemType", keyparams: "keyParams", keytype: "keyType", kind: "kind", label: "label", lang: "lang", list: "list", loop: "loop", low: "low", manifest: "manifest", marginwidth: "marginWidth", marginheight: "marginHeight", max: "max", maxlength: "maxLength", media: "media", mediagroup: "mediaGroup", method: "method", min: "min", minlength: "minLength", multiple: "multiple", muted: "muted", name: "name", nomodule: "noModule", nonce: "nonce", novalidate: "noValidate", open: "open", optimum: "optimum", pattern: "pattern", placeholder: "placeholder", playsinline: "playsInline", poster: "poster", preload: "preload", profile: "profile", radiogroup: "radioGroup", readonly: "readOnly", referrerpolicy: "referrerPolicy", rel: "rel", required: "required", reversed: "reversed", role: "role", rows: "rows", rowspan: "rowSpan", sandbox: "sandbox", scope: "scope", scoped: "scoped", scrolling: "scrolling", seamless: "seamless", selected: "selected", shape: "shape", size: "size", sizes: "sizes", span: "span", spellcheck: "spellCheck", src: "src", srcdoc: "srcDoc", srclang: "srcLang", srcset: "srcSet", start: "start", step: "step", style: "style", summary: "summary", tabindex: "tabIndex", target: "target", title: "title", type: "type", usemap: "useMap", value: "value", width: "width", wmode: "wmode", wrap: "wrap", about: "about", accentheight: "accentHeight", "accent-height": "accentHeight", accumulate: "accumulate", additive: "additive", alignmentbaseline: "alignmentBaseline", "alignment-baseline": "alignmentBaseline", allowreorder: "allowReorder", alphabetic: "alphabetic", amplitude: "amplitude", arabicform: "arabicForm", "arabic-form": "arabicForm", ascent: "ascent", attributename: "attributeName", attributetype: "attributeType", autoreverse: "autoReverse", azimuth: "azimuth", basefrequency: "baseFrequency", baselineshift: "baselineShift", "baseline-shift": "baselineShift", baseprofile: "baseProfile", bbox: "bbox", begin: "begin", bias: "bias", by: "by", calcmode: "calcMode", capheight: "capHeight", "cap-height": "capHeight", clip: "clip", clippath: "clipPath", "clip-path": "clipPath", clippathunits: "clipPathUnits", cliprule: "clipRule", "clip-rule": "clipRule", color: "color", colorinterpolation: "colorInterpolation", "color-interpolation": "colorInterpolation", colorinterpolationfilters: "colorInterpolationFilters", "color-interpolation-filters": "colorInterpolationFilters", colorprofile: "colorProfile", "color-profile": "colorProfile", colorrendering: "colorRendering", "color-rendering": "colorRendering", contentscripttype: "contentScriptType", contentstyletype: "contentStyleType", cursor: "cursor", cx: "cx", cy: "cy", d: "d", datatype: "datatype", decelerate: "decelerate", descent: "descent", diffuseconstant: "diffuseConstant", direction: "direction", display: "display", divisor: "divisor", dominantbaseline: "dominantBaseline", "dominant-baseline": "dominantBaseline", dur: "dur", dx: "dx", dy: "dy", edgemode: "edgeMode", elevation: "elevation", enablebackground: "enableBackground", "enable-background": "enableBackground", end: "end", exponent: "exponent", externalresourcesrequired: "externalResourcesRequired", fill: "fill", fillopacity: "fillOpacity", "fill-opacity": "fillOpacity", fillrule: "fillRule", "fill-rule": "fillRule", filter: "filter", filterres: "filterRes", filterunits: "filterUnits", floodopacity: "floodOpacity", "flood-opacity": "floodOpacity", floodcolor: "floodColor", "flood-color": "floodColor", focusable: "focusable", fontfamily: "fontFamily", "font-family": "fontFamily", fontsize: "fontSize", "font-size": "fontSize", fontsizeadjust: "fontSizeAdjust", "font-size-adjust": "fontSizeAdjust", fontstretch: "fontStretch", "font-stretch": "fontStretch", fontstyle: "fontStyle", "font-style": "fontStyle", fontvariant: "fontVariant", "font-variant": "fontVariant", fontweight: "fontWeight", "font-weight": "fontWeight", format: "format", from: "from", fx: "fx", fy: "fy", g1: "g1", g2: "g2", glyphname: "glyphName", "glyph-name": "glyphName", glyphorientationhorizontal: "glyphOrientationHorizontal", "glyph-orientation-horizontal": "glyphOrientationHorizontal", glyphorientationvertical: "glyphOrientationVertical", "glyph-orientation-vertical": "glyphOrientationVertical", glyphref: "glyphRef", gradienttransform: "gradientTransform", gradientunits: "gradientUnits", hanging: "hanging", horizadvx: "horizAdvX", "horiz-adv-x": "horizAdvX", horizoriginx: "horizOriginX", "horiz-origin-x": "horizOriginX", ideographic: "ideographic", imagerendering: "imageRendering", "image-rendering": "imageRendering", in2: "in2", in: "in", inlist: "inlist", intercept: "intercept", k1: "k1", k2: "k2", k3: "k3", k4: "k4", k: "k", kernelmatrix: "kernelMatrix", kernelunitlength: "kernelUnitLength", kerning: "kerning", keypoints: "keyPoints", keysplines: "keySplines", keytimes: "keyTimes", lengthadjust: "lengthAdjust", letterspacing: "letterSpacing", "letter-spacing": "letterSpacing", lightingcolor: "lightingColor", "lighting-color": "lightingColor", limitingconeangle: "limitingConeAngle", local: "local", markerend: "markerEnd", "marker-end": "markerEnd", markerheight: "markerHeight", markermid: "markerMid", "marker-mid": "markerMid", markerstart: "markerStart", "marker-start": "markerStart", markerunits: "markerUnits", markerwidth: "markerWidth", mask: "mask", maskcontentunits: "maskContentUnits", maskunits: "maskUnits", mathematical: "mathematical", mode: "mode", numoctaves: "numOctaves", offset: "offset", opacity: "opacity", operator: "operator", order: "order", orient: "orient", orientation: "orientation", origin: "origin", overflow: "overflow", overlineposition: "overlinePosition", "overline-position": "overlinePosition", overlinethickness: "overlineThickness", "overline-thickness": "overlineThickness", paintorder: "paintOrder", "paint-order": "paintOrder", panose1: "panose1", "panose-1": "panose1", pathlength: "pathLength", patterncontentunits: "patternContentUnits", patterntransform: "patternTransform", patternunits: "patternUnits", pointerevents: "pointerEvents", "pointer-events": "pointerEvents", points: "points", pointsatx: "pointsAtX", pointsaty: "pointsAtY", pointsatz: "pointsAtZ", prefix: "prefix", preservealpha: "preserveAlpha", preserveaspectratio: "preserveAspectRatio", primitiveunits: "primitiveUnits", property: "property", r: "r", radius: "radius", refx: "refX", refy: "refY", renderingintent: "renderingIntent", "rendering-intent": "renderingIntent", repeatcount: "repeatCount", repeatdur: "repeatDur", requiredextensions: "requiredExtensions", requiredfeatures: "requiredFeatures", resource: "resource", restart: "restart", result: "result", results: "results", rotate: "rotate", rx: "rx", ry: "ry", scale: "scale", security: "security", seed: "seed", shaperendering: "shapeRendering", "shape-rendering": "shapeRendering", slope: "slope", spacing: "spacing", specularconstant: "specularConstant", specularexponent: "specularExponent", speed: "speed", spreadmethod: "spreadMethod", startoffset: "startOffset", stddeviation: "stdDeviation", stemh: "stemh", stemv: "stemv", stitchtiles: "stitchTiles", stopcolor: "stopColor", "stop-color": "stopColor", stopopacity: "stopOpacity", "stop-opacity": "stopOpacity", strikethroughposition: "strikethroughPosition", "strikethrough-position": "strikethroughPosition", strikethroughthickness: "strikethroughThickness", "strikethrough-thickness": "strikethroughThickness", string: "string", stroke: "stroke", strokedasharray: "strokeDasharray", "stroke-dasharray": "strokeDasharray", strokedashoffset: "strokeDashoffset", "stroke-dashoffset": "strokeDashoffset", strokelinecap: "strokeLinecap", "stroke-linecap": "strokeLinecap", strokelinejoin: "strokeLinejoin", "stroke-linejoin": "strokeLinejoin", strokemiterlimit: "strokeMiterlimit", "stroke-miterlimit": "strokeMiterlimit", strokewidth: "strokeWidth", "stroke-width": "strokeWidth", strokeopacity: "strokeOpacity", "stroke-opacity": "strokeOpacity", suppresscontenteditablewarning: "suppressContentEditableWarning", suppresshydrationwarning: "suppressHydrationWarning", surfacescale: "surfaceScale", systemlanguage: "systemLanguage", tablevalues: "tableValues", targetx: "targetX", targety: "targetY", textanchor: "textAnchor", "text-anchor": "textAnchor", textdecoration: "textDecoration", "text-decoration": "textDecoration", textlength: "textLength", textrendering: "textRendering", "text-rendering": "textRendering", to: "to", transform: "transform", typeof: "typeof", u1: "u1", u2: "u2", underlineposition: "underlinePosition", "underline-position": "underlinePosition", underlinethickness: "underlineThickness", "underline-thickness": "underlineThickness", unicode: "unicode", unicodebidi: "unicodeBidi", "unicode-bidi": "unicodeBidi", unicoderange: "unicodeRange", "unicode-range": "unicodeRange", unitsperem: "unitsPerEm", "units-per-em": "unitsPerEm", unselectable: "unselectable", valphabetic: "vAlphabetic", "v-alphabetic": "vAlphabetic", values: "values", vectoreffect: "vectorEffect", "vector-effect": "vectorEffect", version: "version", vertadvy: "vertAdvY", "vert-adv-y": "vertAdvY", vertoriginx: "vertOriginX", "vert-origin-x": "vertOriginX", vertoriginy: "vertOriginY", "vert-origin-y": "vertOriginY", vhanging: "vHanging", "v-hanging": "vHanging", videographic: "vIdeographic", "v-ideographic": "vIdeographic", viewbox: "viewBox", viewtarget: "viewTarget", visibility: "visibility", vmathematical: "vMathematical", "v-mathematical": "vMathematical", vocab: "vocab", widths: "widths", wordspacing: "wordSpacing", "word-spacing": "wordSpacing", writingmode: "writingMode", "writing-mode": "writingMode", x1: "x1", x2: "x2", x: "x", xchannelselector: "xChannelSelector", xheight: "xHeight", "x-height": "xHeight", xlinkactuate: "xlinkActuate", "xlink:actuate": "xlinkActuate", xlinkarcrole: "xlinkArcrole", "xlink:arcrole": "xlinkArcrole", xlinkhref: "xlinkHref", "xlink:href": "xlinkHref", xlinkrole: "xlinkRole", "xlink:role": "xlinkRole", xlinkshow: "xlinkShow", "xlink:show": "xlinkShow", xlinktitle: "xlinkTitle", "xlink:title": "xlinkTitle", xlinktype: "xlinkType", "xlink:type": "xlinkType", xmlbase: "xmlBase", "xml:base": "xmlBase", xmllang: "xmlLang", "xml:lang": "xmlLang", xmlns: "xmlns", "xml:space": "xmlSpace", xmlnsxlink: "xmlnsXlink", "xmlns:xlink": "xmlnsXlink", xmlspace: "xmlSpace", y1: "y1", y2: "y2", y: "y", ychannelselector: "yChannelSelector", z: "z", zoomandpan: "zoomAndPan" }, ah = { "aria-current": 0, "aria-description": 0, "aria-details": 0, "aria-disabled": 0, "aria-hidden": 0, "aria-invalid": 0, "aria-keyshortcuts": 0, "aria-label": 0, "aria-roledescription": 0, "aria-autocomplete": 0, "aria-checked": 0, "aria-expanded": 0, "aria-haspopup": 0, "aria-level": 0, "aria-modal": 0, "aria-multiline": 0, "aria-multiselectable": 0, "aria-orientation": 0, "aria-placeholder": 0, "aria-pressed": 0, "aria-readonly": 0, "aria-required": 0, "aria-selected": 0, "aria-sort": 0, "aria-valuemax": 0, "aria-valuemin": 0, "aria-valuenow": 0, "aria-valuetext": 0, "aria-atomic": 0, "aria-busy": 0, "aria-live": 0, "aria-relevant": 0, "aria-dropeffect": 0, "aria-grabbed": 0, "aria-activedescendant": 0, "aria-colcount": 0, "aria-colindex": 0, "aria-colspan": 0, "aria-controls": 0, "aria-describedby": 0, "aria-errormessage": 0, "aria-flowto": 0, "aria-labelledby": 0, "aria-owns": 0, "aria-posinset": 0, "aria-rowcount": 0, "aria-rowindex": 0, "aria-rowspan": 0, "aria-setsize": 0 }, lo = {}, KS = new RegExp("^(aria)-[" + W + "]*$"), QS = new RegExp("^(aria)[A-Z][" + W + "]*$");
    function XS(e, t) { {
        if (wn.call(lo, t) && lo[t])
            return !0;
        if (QS.test(t)) {
            var n = "aria-" + t.slice(4).toLowerCase(), a = ah.hasOwnProperty(n) ? n : null;
            if (a == null)
                return f("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), lo[t] = !0, !0;
            if (t !== a)
                return f("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, a), lo[t] = !0, !0;
        }
        if (KS.test(t)) {
            var r = t.toLowerCase(), i = ah.hasOwnProperty(r) ? r : null;
            if (i == null)
                return lo[t] = !0, !1;
            if (t !== i)
                return f("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, i), lo[t] = !0, !0;
        }
    } return !0; }
    function JS(e, t) { {
        var n = [];
        for (var a in t) {
            var r = XS(e, a);
            r || n.push(a);
        }
        var i = n.map(function (o) { return "`" + o + "`"; }).join(", ");
        n.length === 1 ? f("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", i, e) : n.length > 1 && f("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", i, e);
    } }
    function ZS(e, t) { Ei(e, t) || JS(e, t); }
    var rh = !1;
    function eN(e, t) { {
        if (e !== "input" && e !== "textarea" && e !== "select")
            return;
        t != null && t.value === null && !rh && (rh = !0, e === "select" && t.multiple ? f("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : f("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
    } }
    var ih = function () { };
    {
        var xn = {}, oh = /^on./, tN = /^on[^A-Z]/, nN = new RegExp("^(aria)-[" + W + "]*$"), aN = new RegExp("^(aria)[A-Z][" + W + "]*$");
        ih = function (e, t, n, a) { if (wn.call(xn, t) && xn[t])
            return !0; var r = t.toLowerCase(); if (r === "onfocusin" || r === "onfocusout")
            return f("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), xn[t] = !0, !0; if (a != null) {
            var i = a.registrationNameDependencies, o = a.possibleRegistrationNames;
            if (i.hasOwnProperty(t))
                return !0;
            var l = o.hasOwnProperty(r) ? o[r] : null;
            if (l != null)
                return f("Invalid event handler property `%s`. Did you mean `%s`?", t, l), xn[t] = !0, !0;
            if (oh.test(t))
                return f("Unknown event handler property `%s`. It will be ignored.", t), xn[t] = !0, !0;
        }
        else if (oh.test(t))
            return tN.test(t) && f("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), xn[t] = !0, !0; if (nN.test(t) || aN.test(t))
            return !0; if (r === "innerhtml")
            return f("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), xn[t] = !0, !0; if (r === "aria")
            return f("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), xn[t] = !0, !0; if (r === "is" && n !== null && n !== void 0 && typeof n != "string")
            return f("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), xn[t] = !0, !0; if (typeof n == "number" && isNaN(n))
            return f("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), xn[t] = !0, !0; var u = yt(t), d = u !== null && u.type === Jt; if (ys.hasOwnProperty(r)) {
            var m = ys[r];
            if (m !== t)
                return f("Invalid DOM property `%s`. Did you mean `%s`?", t, m), xn[t] = !0, !0;
        }
        else if (!d && t !== r)
            return f("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, r), xn[t] = !0, !0; return typeof n == "boolean" && vt(t, n, u, !1) ? (n ? f('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : f('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), xn[t] = !0, !0) : d ? !0 : vt(t, n, u, !1) ? (xn[t] = !0, !1) : ((n === "false" || n === "true") && u !== null && u.type === _t && (f("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), xn[t] = !0), !0); };
    }
    var rN = function (e, t, n) { {
        var a = [];
        for (var r in t) {
            var i = ih(e, r, t[r], n);
            i || a.push(r);
        }
        var o = a.map(function (l) { return "`" + l + "`"; }).join(", ");
        a.length === 1 ? f("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", o, e) : a.length > 1 && f("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", o, e);
    } };
    function iN(e, t, n) { Ei(e, t) || rN(e, t, n); }
    var lh = 1, zf = 2, Tl = 4, oN = lh | zf | Tl, Rl = null;
    function lN(e) { Rl !== null && f("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Rl = e; }
    function uN() { Rl === null && f("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Rl = null; }
    function sN(e) { return e === Rl; }
    function Ff(e) { var t = e.target || e.srcElement || window; return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === sr ? t.parentNode : t; }
    var Pf = null, uo = null, so = null;
    function uh(e) { var t = Yr(e); if (t) {
        if (typeof Pf != "function")
            throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var n = t.stateNode;
        if (n) {
            var a = Zs(n);
            Pf(t.stateNode, t.type, a);
        }
    } }
    function cN(e) { Pf = e; }
    function sh(e) { uo ? so ? so.push(e) : so = [e] : uo = e; }
    function fN() { return uo !== null || so !== null; }
    function ch() { if (uo) {
        var e = uo, t = so;
        if (uo = null, so = null, uh(e), t)
            for (var n = 0; n < t.length; n++)
                uh(t[n]);
    } }
    var fh = function (e, t) { return e(t); }, dh = function () { }, Hf = !1;
    function dN() { var e = fN(); e && (dh(), ch()); }
    function ph(e, t, n) { if (Hf)
        return e(t, n); Hf = !0; try {
        return fh(e, t, n);
    }
    finally {
        Hf = !1, dN();
    } }
    function pN(e, t, n) { fh = e, dh = n; }
    function mN(e) { return e === "button" || e === "input" || e === "select" || e === "textarea"; }
    function vN(e, t, n) { switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter": return !!(n.disabled && mN(t));
        default: return !1;
    } }
    function xl(e, t) { var n = e.stateNode; if (n === null)
        return null; var a = Zs(n); if (a === null)
        return null; var r = a[t]; if (vN(t, e.type, a))
        return null; if (r && typeof r != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof r + "` type."); return r; }
    var Bf = !1;
    if (Xt)
        try {
            var Cl = {};
            Object.defineProperty(Cl, "passive", { get: function () { Bf = !0; } }), window.addEventListener("test", Cl, Cl), window.removeEventListener("test", Cl, Cl);
        }
        catch {
            Bf = !1;
        }
    function mh(e, t, n, a, r, i, o, l, u) { var d = Array.prototype.slice.call(arguments, 3); try {
        t.apply(n, d);
    }
    catch (m) {
        this.onError(m);
    } }
    var vh = mh;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
        var If = document.createElement("react");
        vh = function (t, n, a, r, i, o, l, u, d) { if (typeof document > "u" || document === null)
            throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous."); var m = document.createEvent("Event"), N = !1, S = !0, C = window.event, _ = Object.getOwnPropertyDescriptor(window, "event"); function M() { If.removeEventListener(L, fe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = C); } var Q = Array.prototype.slice.call(arguments, 3); function fe() { N = !0, M(), n.apply(a, Q), S = !1; } var le, Pe = !1, Ue = !1; function R(x) { if (le = x.error, Pe = !0, le === null && x.colno === 0 && x.lineno === 0 && (Ue = !0), x.defaultPrevented && le != null && typeof le == "object")
            try {
                le._suppressLogging = !0;
            }
            catch { } } var L = "react-" + (t || "invokeguardedcallback"); if (window.addEventListener("error", R), If.addEventListener(L, fe, !1), m.initEvent(L, !1, !1), If.dispatchEvent(m), _ && Object.defineProperty(window, "event", _), N && S && (Pe ? Ue && (le = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : le = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(le)), window.removeEventListener("error", R), !N)
            return M(), mh.apply(this, arguments); };
    }
    var hN = vh, co = !1, gs = null, bs = !1, $f = null, yN = { onError: function (e) { co = !0, gs = e; } };
    function Yf(e, t, n, a, r, i, o, l, u) { co = !1, gs = null, hN.apply(yN, arguments); }
    function gN(e, t, n, a, r, i, o, l, u) { if (Yf.apply(this, arguments), co) {
        var d = qf();
        bs || (bs = !0, $f = d);
    } }
    function bN() { if (bs) {
        var e = $f;
        throw bs = !1, $f = null, e;
    } }
    function EN() { return co; }
    function qf() { if (co) {
        var e = gs;
        return co = !1, gs = null, e;
    }
    else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue."); }
    function fo(e) { return e._reactInternals; }
    function SN(e) { return e._reactInternals !== void 0; }
    function NN(e, t) { e._reactInternals = t; }
    var ve = 0, po = 1, xt = 2, Ge = 4, Si = 16, Dl = 32, hh = 64, We = 128, fr = 256, Ni = 512, mo = 1024, Vr = 2048, dr = 4096, Ti = 8192, Gf = 16384, TN = 32767, Es = 32768, Cn = 65536, Wf = 131072, yh = 1048576, Kf = 2097152, Ri = 4194304, Qf = 8388608, zr = 16777216, Xf = 33554432, Jf = Ge | mo | 0, Zf = xt | Ge | Si | Dl | Ni | dr | Ti, _l = Ge | hh | Ni | Ti, vo = Vr | Si, pr = Ri | Qf | Kf, RN = h.ReactCurrentOwner;
    function xi(e) { var t = e, n = e; if (e.alternate)
        for (; t.return;)
            t = t.return;
    else {
        var a = t;
        do
            t = a, (t.flags & (xt | dr)) !== ve && (n = t.return), a = t.return;
        while (a);
    } return t.tag === j ? n : null; }
    function gh(e) { if (e.tag === ue) {
        var t = e.memoizedState;
        if (t === null) {
            var n = e.alternate;
            n !== null && (t = n.memoizedState);
        }
        if (t !== null)
            return t.dehydrated;
    } return null; }
    function bh(e) { return e.tag === j ? e.stateNode.containerInfo : null; }
    function xN(e) { return xi(e) === e; }
    function CN(e) { {
        var t = RN.current;
        if (t !== null && t.tag === A) {
            var n = t, a = n.stateNode;
            a._warnedAboutRefsInRender || f("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", xe(n) || "A component"), a._warnedAboutRefsInRender = !0;
        }
    } var r = fo(e); return r ? xi(r) === r : !1; }
    function Eh(e) { if (xi(e) !== e)
        throw new Error("Unable to find node on an unmounted component."); }
    function Sh(e) { var t = e.alternate; if (!t) {
        var n = xi(e);
        if (n === null)
            throw new Error("Unable to find node on an unmounted component.");
        return n !== e ? null : e;
    } for (var a = e, r = t;;) {
        var i = a.return;
        if (i === null)
            break;
        var o = i.alternate;
        if (o === null) {
            var l = i.return;
            if (l !== null) {
                a = r = l;
                continue;
            }
            break;
        }
        if (i.child === o.child) {
            for (var u = i.child; u;) {
                if (u === a)
                    return Eh(i), e;
                if (u === r)
                    return Eh(i), t;
                u = u.sibling;
            }
            throw new Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== r.return)
            a = i, r = o;
        else {
            for (var d = !1, m = i.child; m;) {
                if (m === a) {
                    d = !0, a = i, r = o;
                    break;
                }
                if (m === r) {
                    d = !0, r = i, a = o;
                    break;
                }
                m = m.sibling;
            }
            if (!d) {
                for (m = o.child; m;) {
                    if (m === a) {
                        d = !0, a = o, r = i;
                        break;
                    }
                    if (m === r) {
                        d = !0, r = o, a = i;
                        break;
                    }
                    m = m.sibling;
                }
                if (!d)
                    throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
            }
        }
        if (a.alternate !== r)
            throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
    } if (a.tag !== j)
        throw new Error("Unable to find node on an unmounted component."); return a.stateNode.current === a ? e : t; }
    function Nh(e) { var t = Sh(e); return t !== null ? Th(t) : null; }
    function Th(e) { if (e.tag === q || e.tag === ne)
        return e; for (var t = e.child; t !== null;) {
        var n = Th(t);
        if (n !== null)
            return n;
        t = t.sibling;
    } return null; }
    function DN(e) { var t = Sh(e); return t !== null ? Rh(t) : null; }
    function Rh(e) { if (e.tag === q || e.tag === ne)
        return e; for (var t = e.child; t !== null;) {
        if (t.tag !== P) {
            var n = Rh(t);
            if (n !== null)
                return n;
        }
        t = t.sibling;
    } return null; }
    var xh = p.unstable_scheduleCallback, _N = p.unstable_cancelCallback, jN = p.unstable_shouldYield, AN = p.unstable_requestPaint, $t = p.unstable_now, ON = p.unstable_getCurrentPriorityLevel, Ss = p.unstable_ImmediatePriority, ed = p.unstable_UserBlockingPriority, Ci = p.unstable_NormalPriority, wN = p.unstable_LowPriority, td = p.unstable_IdlePriority, MN = p.unstable_yieldValue, LN = p.unstable_setDisableYieldValue, ho = null, pn = null, J = null, Ha = !1, Sa = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function UN(e) { if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1; var t = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (t.isDisabled)
        return !0; if (!t.supportsFiber)
        return f("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0; try {
        pa && (e = Me({}, e, { getLaneLabelMap: HN, injectProfilingHooks: PN })), ho = t.inject(e), pn = t;
    }
    catch (n) {
        f("React instrumentation encountered an error: %s.", n);
    } return !!t.checkDCE; }
    function kN(e, t) { if (pn && typeof pn.onScheduleFiberRoot == "function")
        try {
            pn.onScheduleFiberRoot(ho, e, t);
        }
        catch (n) {
            Ha || (Ha = !0, f("React instrumentation encountered an error: %s", n));
        } }
    function VN(e, t) { if (pn && typeof pn.onCommitFiberRoot == "function")
        try {
            var n = (e.current.flags & We) === We;
            if (bn) {
                var a;
                switch (t) {
                    case qn:
                        a = Ss;
                        break;
                    case vr:
                        a = ed;
                        break;
                    case hr:
                        a = Ci;
                        break;
                    case _s:
                        a = td;
                        break;
                    default:
                        a = Ci;
                        break;
                }
                pn.onCommitFiberRoot(ho, e, a, n);
            }
        }
        catch (r) {
            Ha || (Ha = !0, f("React instrumentation encountered an error: %s", r));
        } }
    function zN(e) { if (pn && typeof pn.onPostCommitFiberRoot == "function")
        try {
            pn.onPostCommitFiberRoot(ho, e);
        }
        catch (t) {
            Ha || (Ha = !0, f("React instrumentation encountered an error: %s", t));
        } }
    function FN(e) { if (pn && typeof pn.onCommitFiberUnmount == "function")
        try {
            pn.onCommitFiberUnmount(ho, e);
        }
        catch (t) {
            Ha || (Ha = !0, f("React instrumentation encountered an error: %s", t));
        } }
    function Yt(e) { if (typeof MN == "function" && (LN(e), y(e)), pn && typeof pn.setStrictMode == "function")
        try {
            pn.setStrictMode(ho, e);
        }
        catch (t) {
            Ha || (Ha = !0, f("React instrumentation encountered an error: %s", t));
        } }
    function PN(e) { J = e; }
    function HN() { {
        for (var e = new Map, t = 1, n = 0; n < ad; n++) {
            var a = lT(t);
            e.set(t, a), t *= 2;
        }
        return e;
    } }
    function BN(e) { J !== null && typeof J.markCommitStarted == "function" && J.markCommitStarted(e); }
    function Ch() { J !== null && typeof J.markCommitStopped == "function" && J.markCommitStopped(); }
    function jl(e) { J !== null && typeof J.markComponentRenderStarted == "function" && J.markComponentRenderStarted(e); }
    function yo() { J !== null && typeof J.markComponentRenderStopped == "function" && J.markComponentRenderStopped(); }
    function IN(e) { J !== null && typeof J.markComponentPassiveEffectMountStarted == "function" && J.markComponentPassiveEffectMountStarted(e); }
    function $N() { J !== null && typeof J.markComponentPassiveEffectMountStopped == "function" && J.markComponentPassiveEffectMountStopped(); }
    function YN(e) { J !== null && typeof J.markComponentPassiveEffectUnmountStarted == "function" && J.markComponentPassiveEffectUnmountStarted(e); }
    function qN() { J !== null && typeof J.markComponentPassiveEffectUnmountStopped == "function" && J.markComponentPassiveEffectUnmountStopped(); }
    function GN(e) { J !== null && typeof J.markComponentLayoutEffectMountStarted == "function" && J.markComponentLayoutEffectMountStarted(e); }
    function WN() { J !== null && typeof J.markComponentLayoutEffectMountStopped == "function" && J.markComponentLayoutEffectMountStopped(); }
    function Dh(e) { J !== null && typeof J.markComponentLayoutEffectUnmountStarted == "function" && J.markComponentLayoutEffectUnmountStarted(e); }
    function _h() { J !== null && typeof J.markComponentLayoutEffectUnmountStopped == "function" && J.markComponentLayoutEffectUnmountStopped(); }
    function KN(e, t, n) { J !== null && typeof J.markComponentErrored == "function" && J.markComponentErrored(e, t, n); }
    function QN(e, t, n) { J !== null && typeof J.markComponentSuspended == "function" && J.markComponentSuspended(e, t, n); }
    function XN(e) { J !== null && typeof J.markLayoutEffectsStarted == "function" && J.markLayoutEffectsStarted(e); }
    function JN() { J !== null && typeof J.markLayoutEffectsStopped == "function" && J.markLayoutEffectsStopped(); }
    function ZN(e) { J !== null && typeof J.markPassiveEffectsStarted == "function" && J.markPassiveEffectsStarted(e); }
    function eT() { J !== null && typeof J.markPassiveEffectsStopped == "function" && J.markPassiveEffectsStopped(); }
    function jh(e) { J !== null && typeof J.markRenderStarted == "function" && J.markRenderStarted(e); }
    function tT() { J !== null && typeof J.markRenderYielded == "function" && J.markRenderYielded(); }
    function Ah() { J !== null && typeof J.markRenderStopped == "function" && J.markRenderStopped(); }
    function nT(e) { J !== null && typeof J.markRenderScheduled == "function" && J.markRenderScheduled(e); }
    function aT(e, t) { J !== null && typeof J.markForceUpdateScheduled == "function" && J.markForceUpdateScheduled(e, t); }
    function nd(e, t) { J !== null && typeof J.markStateUpdateScheduled == "function" && J.markStateUpdateScheduled(e, t); }
    var pe = 0, ze = 1, Je = 2, bt = 8, Ba = 16, Oh = Math.clz32 ? Math.clz32 : oT, rT = Math.log, iT = Math.LN2;
    function oT(e) { var t = e >>> 0; return t === 0 ? 32 : 31 - (rT(t) / iT | 0) | 0; }
    var ad = 31, z = 0, qt = 0, Ee = 1, go = 2, mr = 4, Di = 8, Ia = 16, Al = 32, bo = 4194240, Ol = 64, rd = 128, id = 256, od = 512, ld = 1024, ud = 2048, sd = 4096, cd = 8192, fd = 16384, dd = 32768, pd = 65536, md = 131072, vd = 262144, hd = 524288, yd = 1048576, gd = 2097152, Ns = 130023424, Eo = 4194304, bd = 8388608, Ed = 16777216, Sd = 33554432, Nd = 67108864, wh = Eo, wl = 134217728, Mh = 268435455, Ml = 268435456, _i = 536870912, $n = 1073741824;
    function lT(e) { {
        if (e & Ee)
            return "Sync";
        if (e & go)
            return "InputContinuousHydration";
        if (e & mr)
            return "InputContinuous";
        if (e & Di)
            return "DefaultHydration";
        if (e & Ia)
            return "Default";
        if (e & Al)
            return "TransitionHydration";
        if (e & bo)
            return "Transition";
        if (e & Ns)
            return "Retry";
        if (e & wl)
            return "SelectiveHydration";
        if (e & Ml)
            return "IdleHydration";
        if (e & _i)
            return "Idle";
        if (e & $n)
            return "Offscreen";
    } }
    var it = -1, Ts = Ol, Rs = Eo;
    function Ll(e) { switch (ji(e)) {
        case Ee: return Ee;
        case go: return go;
        case mr: return mr;
        case Di: return Di;
        case Ia: return Ia;
        case Al: return Al;
        case Ol:
        case rd:
        case id:
        case od:
        case ld:
        case ud:
        case sd:
        case cd:
        case fd:
        case dd:
        case pd:
        case md:
        case vd:
        case hd:
        case yd:
        case gd: return e & bo;
        case Eo:
        case bd:
        case Ed:
        case Sd:
        case Nd: return e & Ns;
        case wl: return wl;
        case Ml: return Ml;
        case _i: return _i;
        case $n: return $n;
        default: return f("Should have found matching lanes. This is a bug in React."), e;
    } }
    function xs(e, t) { var n = e.pendingLanes; if (n === z)
        return z; var a = z, r = e.suspendedLanes, i = e.pingedLanes, o = n & Mh; if (o !== z) {
        var l = o & ~r;
        if (l !== z)
            a = Ll(l);
        else {
            var u = o & i;
            u !== z && (a = Ll(u));
        }
    }
    else {
        var d = n & ~r;
        d !== z ? a = Ll(d) : i !== z && (a = Ll(i));
    } if (a === z)
        return z; if (t !== z && t !== a && (t & r) === z) {
        var m = ji(a), N = ji(t);
        if (m >= N || m === Ia && (N & bo) !== z)
            return t;
    } (a & mr) !== z && (a |= n & Ia); var S = e.entangledLanes; if (S !== z)
        for (var C = e.entanglements, _ = a & S; _ > 0;) {
            var M = Ai(_), Q = 1 << M;
            a |= C[M], _ &= ~Q;
        } return a; }
    function uT(e, t) { for (var n = e.eventTimes, a = it; t > 0;) {
        var r = Ai(t), i = 1 << r, o = n[r];
        o > a && (a = o), t &= ~i;
    } return a; }
    function sT(e, t) { switch (e) {
        case Ee:
        case go:
        case mr: return t + 250;
        case Di:
        case Ia:
        case Al:
        case Ol:
        case rd:
        case id:
        case od:
        case ld:
        case ud:
        case sd:
        case cd:
        case fd:
        case dd:
        case pd:
        case md:
        case vd:
        case hd:
        case yd:
        case gd: return t + 5e3;
        case Eo:
        case bd:
        case Ed:
        case Sd:
        case Nd: return it;
        case wl:
        case Ml:
        case _i:
        case $n: return it;
        default: return f("Should have found matching lanes. This is a bug in React."), it;
    } }
    function cT(e, t) { for (var n = e.pendingLanes, a = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, o = n; o > 0;) {
        var l = Ai(o), u = 1 << l, d = i[l];
        d === it ? ((u & a) === z || (u & r) !== z) && (i[l] = sT(u, t)) : d <= t && (e.expiredLanes |= u), o &= ~u;
    } }
    function fT(e) { return Ll(e.pendingLanes); }
    function Td(e) { var t = e.pendingLanes & ~$n; return t !== z ? t : t & $n ? $n : z; }
    function dT(e) { return (e & Ee) !== z; }
    function Rd(e) { return (e & Mh) !== z; }
    function Lh(e) { return (e & Ns) === e; }
    function pT(e) { var t = Ee | mr | Ia; return (e & t) === z; }
    function mT(e) { return (e & bo) === e; }
    function Cs(e, t) { var n = go | mr | Di | Ia; return (t & n) !== z; }
    function vT(e, t) { return (t & e.expiredLanes) !== z; }
    function Uh(e) { return (e & bo) !== z; }
    function kh() { var e = Ts; return Ts <<= 1, (Ts & bo) === z && (Ts = Ol), e; }
    function hT() { var e = Rs; return Rs <<= 1, (Rs & Ns) === z && (Rs = Eo), e; }
    function ji(e) { return e & -e; }
    function Ul(e) { return ji(e); }
    function Ai(e) { return 31 - Oh(e); }
    function xd(e) { return Ai(e); }
    function Yn(e, t) { return (e & t) !== z; }
    function So(e, t) { return (e & t) === t; }
    function Ae(e, t) { return e | t; }
    function Ds(e, t) { return e & ~t; }
    function Vh(e, t) { return e & t; }
    function yO(e) { return e; }
    function yT(e, t) { return e !== qt && e < t ? e : t; }
    function Cd(e) { for (var t = [], n = 0; n < ad; n++)
        t.push(e); return t; }
    function kl(e, t, n) { e.pendingLanes |= t, t !== _i && (e.suspendedLanes = z, e.pingedLanes = z); var a = e.eventTimes, r = xd(t); a[r] = n; }
    function gT(e, t) { e.suspendedLanes |= t, e.pingedLanes &= ~t; for (var n = e.expirationTimes, a = t; a > 0;) {
        var r = Ai(a), i = 1 << r;
        n[r] = it, a &= ~i;
    } }
    function zh(e, t, n) { e.pingedLanes |= e.suspendedLanes & t; }
    function bT(e, t) { var n = e.pendingLanes & ~t; e.pendingLanes = t, e.suspendedLanes = z, e.pingedLanes = z, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t; for (var a = e.entanglements, r = e.eventTimes, i = e.expirationTimes, o = n; o > 0;) {
        var l = Ai(o), u = 1 << l;
        a[l] = z, r[l] = it, i[l] = it, o &= ~u;
    } }
    function Dd(e, t) { for (var n = e.entangledLanes |= t, a = e.entanglements, r = n; r;) {
        var i = Ai(r), o = 1 << i;
        o & t | a[i] & t && (a[i] |= t), r &= ~o;
    } }
    function ET(e, t) { var n = ji(t), a; switch (n) {
        case mr:
            a = go;
            break;
        case Ia:
            a = Di;
            break;
        case Ol:
        case rd:
        case id:
        case od:
        case ld:
        case ud:
        case sd:
        case cd:
        case fd:
        case dd:
        case pd:
        case md:
        case vd:
        case hd:
        case yd:
        case gd:
        case Eo:
        case bd:
        case Ed:
        case Sd:
        case Nd:
            a = Al;
            break;
        case _i:
            a = Ml;
            break;
        default:
            a = qt;
            break;
    } return (a & (e.suspendedLanes | t)) !== qt ? qt : a; }
    function Fh(e, t, n) { if (Sa)
        for (var a = e.pendingUpdatersLaneMap; n > 0;) {
            var r = xd(n), i = 1 << r, o = a[r];
            o.add(t), n &= ~i;
        } }
    function Ph(e, t) { if (Sa)
        for (var n = e.pendingUpdatersLaneMap, a = e.memoizedUpdaters; t > 0;) {
            var r = xd(t), i = 1 << r, o = n[r];
            o.size > 0 && (o.forEach(function (l) { var u = l.alternate; (u === null || !a.has(u)) && a.add(l); }), o.clear()), t &= ~i;
        } }
    function Hh(e, t) { return null; }
    var qn = Ee, vr = mr, hr = Ia, _s = _i, Vl = qt;
    function Na() { return Vl; }
    function Gt(e) { Vl = e; }
    function ST(e, t) { var n = Vl; try {
        return Vl = e, t();
    }
    finally {
        Vl = n;
    } }
    function NT(e, t) { return e !== 0 && e < t ? e : t; }
    function TT(e, t) { return e > t ? e : t; }
    function _d(e, t) { return e !== 0 && e < t; }
    function Bh(e) { var t = ji(e); return _d(qn, t) ? _d(vr, t) ? Rd(t) ? hr : _s : vr : qn; }
    function js(e) { var t = e.current.memoizedState; return t.isDehydrated; }
    var Ih;
    function RT(e) { Ih = e; }
    function xT(e) { Ih(e); }
    var jd;
    function CT(e) { jd = e; }
    var $h;
    function DT(e) { $h = e; }
    var Yh;
    function _T(e) { Yh = e; }
    var qh;
    function jT(e) { qh = e; }
    var Ad = !1, As = [], Fr = null, Pr = null, Hr = null, zl = new Map, Fl = new Map, Br = [], AT = ["mousedown", "mouseup", "touchcancel", "touchend", "touchstart", "auxclick", "dblclick", "pointercancel", "pointerdown", "pointerup", "dragend", "dragstart", "drop", "compositionend", "compositionstart", "keydown", "keypress", "keyup", "input", "textInput", "copy", "cut", "paste", "click", "change", "contextmenu", "reset", "submit"];
    function OT(e) { return AT.indexOf(e) > -1; }
    function wT(e, t, n, a, r) { return { blockedOn: e, domEventName: t, eventSystemFlags: n, nativeEvent: r, targetContainers: [a] }; }
    function Gh(e, t) { switch (e) {
        case "focusin":
        case "focusout":
            Fr = null;
            break;
        case "dragenter":
        case "dragleave":
            Pr = null;
            break;
        case "mouseover":
        case "mouseout":
            Hr = null;
            break;
        case "pointerover":
        case "pointerout": {
            var n = t.pointerId;
            zl.delete(n);
            break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
            var a = t.pointerId;
            Fl.delete(a);
            break;
        }
    } }
    function Pl(e, t, n, a, r, i) { if (e === null || e.nativeEvent !== i) {
        var o = wT(t, n, a, r, i);
        if (t !== null) {
            var l = Yr(t);
            l !== null && jd(l);
        }
        return o;
    } e.eventSystemFlags |= a; var u = e.targetContainers; return r !== null && u.indexOf(r) === -1 && u.push(r), e; }
    function MT(e, t, n, a, r) { switch (t) {
        case "focusin": {
            var i = r;
            return Fr = Pl(Fr, e, t, n, a, i), !0;
        }
        case "dragenter": {
            var o = r;
            return Pr = Pl(Pr, e, t, n, a, o), !0;
        }
        case "mouseover": {
            var l = r;
            return Hr = Pl(Hr, e, t, n, a, l), !0;
        }
        case "pointerover": {
            var u = r, d = u.pointerId;
            return zl.set(d, Pl(zl.get(d) || null, e, t, n, a, u)), !0;
        }
        case "gotpointercapture": {
            var m = r, N = m.pointerId;
            return Fl.set(N, Pl(Fl.get(N) || null, e, t, n, a, m)), !0;
        }
    } return !1; }
    function Wh(e) { var t = Mi(e.target); if (t !== null) {
        var n = xi(t);
        if (n !== null) {
            var a = n.tag;
            if (a === ue) {
                var r = gh(n);
                if (r !== null) {
                    e.blockedOn = r, qh(e.priority, function () { $h(n); });
                    return;
                }
            }
            else if (a === j) {
                var i = n.stateNode;
                if (js(i)) {
                    e.blockedOn = bh(n);
                    return;
                }
            }
        }
    } e.blockedOn = null; }
    function LT(e) { for (var t = Yh(), n = { blockedOn: null, target: e, priority: t }, a = 0; a < Br.length && _d(t, Br[a].priority); a++)
        ; Br.splice(a, 0, n), a === 0 && Wh(n); }
    function Os(e) { if (e.blockedOn !== null)
        return !1; for (var t = e.targetContainers; t.length > 0;) {
        var n = t[0], a = Md(e.domEventName, e.eventSystemFlags, n, e.nativeEvent);
        if (a === null) {
            var r = e.nativeEvent, i = new r.constructor(r.type, r);
            lN(i), r.target.dispatchEvent(i), uN();
        }
        else {
            var o = Yr(a);
            return o !== null && jd(o), e.blockedOn = a, !1;
        }
        t.shift();
    } return !0; }
    function Kh(e, t, n) { Os(e) && n.delete(t); }
    function UT() { Ad = !1, Fr !== null && Os(Fr) && (Fr = null), Pr !== null && Os(Pr) && (Pr = null), Hr !== null && Os(Hr) && (Hr = null), zl.forEach(Kh), Fl.forEach(Kh); }
    function Hl(e, t) { e.blockedOn === t && (e.blockedOn = null, Ad || (Ad = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, UT))); }
    function Bl(e) { if (As.length > 0) {
        Hl(As[0], e);
        for (var t = 1; t < As.length; t++) {
            var n = As[t];
            n.blockedOn === e && (n.blockedOn = null);
        }
    } Fr !== null && Hl(Fr, e), Pr !== null && Hl(Pr, e), Hr !== null && Hl(Hr, e); var a = function (l) { return Hl(l, e); }; zl.forEach(a), Fl.forEach(a); for (var r = 0; r < Br.length; r++) {
        var i = Br[r];
        i.blockedOn === e && (i.blockedOn = null);
    } for (; Br.length > 0;) {
        var o = Br[0];
        if (o.blockedOn !== null)
            break;
        Wh(o), o.blockedOn === null && Br.shift();
    } }
    var No = h.ReactCurrentBatchConfig, Od = !0;
    function Qh(e) { Od = !!e; }
    function kT() { return Od; }
    function VT(e, t, n) { var a = Xh(t), r; switch (a) {
        case qn:
            r = zT;
            break;
        case vr:
            r = FT;
            break;
        case hr:
        default:
            r = wd;
            break;
    } return r.bind(null, t, n, e); }
    function zT(e, t, n, a) { var r = Na(), i = No.transition; No.transition = null; try {
        Gt(qn), wd(e, t, n, a);
    }
    finally {
        Gt(r), No.transition = i;
    } }
    function FT(e, t, n, a) { var r = Na(), i = No.transition; No.transition = null; try {
        Gt(vr), wd(e, t, n, a);
    }
    finally {
        Gt(r), No.transition = i;
    } }
    function wd(e, t, n, a) { Od && PT(e, t, n, a); }
    function PT(e, t, n, a) { var r = Md(e, t, n, a); if (r === null) {
        Gd(e, t, a, ws, n), Gh(e, a);
        return;
    } if (MT(r, e, t, n, a)) {
        a.stopPropagation();
        return;
    } if (Gh(e, a), t & Tl && OT(e)) {
        for (; r !== null;) {
            var i = Yr(r);
            i !== null && xT(i);
            var o = Md(e, t, n, a);
            if (o === null && Gd(e, t, a, ws, n), o === r)
                break;
            r = o;
        }
        r !== null && a.stopPropagation();
        return;
    } Gd(e, t, a, null, n); }
    var ws = null;
    function Md(e, t, n, a) { ws = null; var r = Ff(a), i = Mi(r); if (i !== null) {
        var o = xi(i);
        if (o === null)
            i = null;
        else {
            var l = o.tag;
            if (l === ue) {
                var u = gh(o);
                if (u !== null)
                    return u;
                i = null;
            }
            else if (l === j) {
                var d = o.stateNode;
                if (js(d))
                    return bh(o);
                i = null;
            }
            else
                o !== i && (i = null);
        }
    } return ws = i, null; }
    function Xh(e) { switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart": return qn;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave": return vr;
        case "message": {
            var t = ON();
            switch (t) {
                case Ss: return qn;
                case ed: return vr;
                case Ci:
                case wN: return hr;
                case td: return _s;
                default: return hr;
            }
        }
        default: return hr;
    } }
    function HT(e, t, n) { return e.addEventListener(t, n, !1), n; }
    function BT(e, t, n) { return e.addEventListener(t, n, !0), n; }
    function IT(e, t, n, a) { return e.addEventListener(t, n, { capture: !0, passive: a }), n; }
    function $T(e, t, n, a) { return e.addEventListener(t, n, { passive: a }), n; }
    var Il = null, Ld = null, $l = null;
    function YT(e) { return Il = e, Ld = Zh(), !0; }
    function qT() { Il = null, Ld = null, $l = null; }
    function Jh() { if ($l)
        return $l; var e, t = Ld, n = t.length, a, r = Zh(), i = r.length; for (e = 0; e < n && t[e] === r[e]; e++)
        ; var o = n - e; for (a = 1; a <= o && t[n - a] === r[i - a]; a++)
        ; var l = a > 1 ? 1 - a : void 0; return $l = r.slice(e, l), $l; }
    function Zh() { return "value" in Il ? Il.value : Il.textContent; }
    function Ms(e) { var t, n = e.keyCode; return "charCode" in e ? (t = e.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0; }
    function Ls() { return !0; }
    function ey() { return !1; }
    function Gn(e) { function t(n, a, r, i, o) { this._reactName = n, this._targetInst = r, this.type = a, this.nativeEvent = i, this.target = o, this.currentTarget = null; for (var l in e)
        if (e.hasOwnProperty(l)) {
            var u = e[l];
            u ? this[l] = u(i) : this[l] = i[l];
        } var d = i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1; return d ? this.isDefaultPrevented = Ls : this.isDefaultPrevented = ey, this.isPropagationStopped = ey, this; } return Me(t.prototype, { preventDefault: function () { this.defaultPrevented = !0; var n = this.nativeEvent; n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ls); }, stopPropagation: function () { var n = this.nativeEvent; n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ls); }, persist: function () { }, isPersistent: Ls }), t; }
    var To = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, Ud = Gn(To), Yl = Me({}, To, { view: 0, detail: 0 }), GT = Gn(Yl), kd, Vd, ql;
    function WT(e) { e !== ql && (ql && e.type === "mousemove" ? (kd = e.screenX - ql.screenX, Vd = e.screenY - ql.screenY) : (kd = 0, Vd = 0), ql = e); }
    var Us = Me({}, Yl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Fd, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (WT(e), kd); }, movementY: function (e) { return "movementY" in e ? e.movementY : Vd; } }), ty = Gn(Us), KT = Me({}, Us, { dataTransfer: 0 }), QT = Gn(KT), XT = Me({}, Yl, { relatedTarget: 0 }), zd = Gn(XT), JT = Me({}, To, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), ZT = Gn(JT), eR = Me({}, To, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), tR = Gn(eR), nR = Me({}, To, { data: 0 }), ny = Gn(nR), aR = ny, rR = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, iR = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" };
    function oR(e) { if (e.key) {
        var t = rR[e.key] || e.key;
        if (t !== "Unidentified")
            return t;
    } if (e.type === "keypress") {
        var n = Ms(e);
        return n === 13 ? "Enter" : String.fromCharCode(n);
    } return e.type === "keydown" || e.type === "keyup" ? iR[e.keyCode] || "Unidentified" : ""; }
    var lR = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function uR(e) { var t = this, n = t.nativeEvent; if (n.getModifierState)
        return n.getModifierState(e); var a = lR[e]; return a ? !!n[a] : !1; }
    function Fd(e) { return uR; }
    var sR = Me({}, Yl, { key: oR, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Fd, charCode: function (e) { return e.type === "keypress" ? Ms(e) : 0; }, keyCode: function (e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; }, which: function (e) { return e.type === "keypress" ? Ms(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; } }), cR = Gn(sR), fR = Me({}, Us, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ay = Gn(fR), dR = Me({}, Yl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Fd }), pR = Gn(dR), mR = Me({}, To, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), vR = Gn(mR), hR = Me({}, Us, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), yR = Gn(hR), gR = [9, 13, 27, 32], ry = 229, Pd = Xt && "CompositionEvent" in window, Gl = null;
    Xt && "documentMode" in document && (Gl = document.documentMode);
    var bR = Xt && "TextEvent" in window && !Gl, iy = Xt && (!Pd || Gl && Gl > 8 && Gl <= 11), oy = 32, ly = String.fromCharCode(oy);
    function ER() { Kt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Kt("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Kt("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Kt("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]); }
    var uy = !1;
    function SR(e) { return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey); }
    function NR(e) { switch (e) {
        case "compositionstart": return "onCompositionStart";
        case "compositionend": return "onCompositionEnd";
        case "compositionupdate": return "onCompositionUpdate";
    } }
    function TR(e, t) { return e === "keydown" && t.keyCode === ry; }
    function sy(e, t) { switch (e) {
        case "keyup": return gR.indexOf(t.keyCode) !== -1;
        case "keydown": return t.keyCode !== ry;
        case "keypress":
        case "mousedown":
        case "focusout": return !0;
        default: return !1;
    } }
    function cy(e) { var t = e.detail; return typeof t == "object" && "data" in t ? t.data : null; }
    function fy(e) { return e.locale === "ko"; }
    var Ro = !1;
    function RR(e, t, n, a, r) { var i, o; if (Pd ? i = NR(t) : Ro ? sy(t, a) && (i = "onCompositionEnd") : TR(t, a) && (i = "onCompositionStart"), !i)
        return null; iy && !fy(a) && (!Ro && i === "onCompositionStart" ? Ro = YT(r) : i === "onCompositionEnd" && Ro && (o = Jh())); var l = Ps(n, i); if (l.length > 0) {
        var u = new ny(i, t, null, a, r);
        if (e.push({ event: u, listeners: l }), o)
            u.data = o;
        else {
            var d = cy(a);
            d !== null && (u.data = d);
        }
    } }
    function xR(e, t) { switch (e) {
        case "compositionend": return cy(t);
        case "keypress":
            var n = t.which;
            return n !== oy ? null : (uy = !0, ly);
        case "textInput":
            var a = t.data;
            return a === ly && uy ? null : a;
        default: return null;
    } }
    function CR(e, t) { if (Ro) {
        if (e === "compositionend" || !Pd && sy(e, t)) {
            var n = Jh();
            return qT(), Ro = !1, n;
        }
        return null;
    } switch (e) {
        case "paste": return null;
        case "keypress":
            if (!SR(t)) {
                if (t.char && t.char.length > 1)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend": return iy && !fy(t) ? null : t.data;
        default: return null;
    } }
    function DR(e, t, n, a, r) { var i; if (bR ? i = xR(t, a) : i = CR(t, a), !i)
        return null; var o = Ps(n, "onBeforeInput"); if (o.length > 0) {
        var l = new aR("onBeforeInput", "beforeinput", null, a, r);
        e.push({ event: l, listeners: o }), l.data = i;
    } }
    function _R(e, t, n, a, r, i, o) { RR(e, t, n, a, r), DR(e, t, n, a, r); }
    var jR = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
    function dy(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t === "input" ? !!jR[e.type] : t === "textarea"; } /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function AR(e) { if (!Xt)
        return !1; var t = "on" + e, n = t in document; if (!n) {
        var a = document.createElement("div");
        a.setAttribute(t, "return;"), n = typeof a[t] == "function";
    } return n; }
    function OR() { Kt("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]); }
    function py(e, t, n, a) { sh(a); var r = Ps(t, "onChange"); if (r.length > 0) {
        var i = new Ud("onChange", "change", null, n, a);
        e.push({ event: i, listeners: r });
    } }
    var Wl = null, Kl = null;
    function wR(e) { var t = e.nodeName && e.nodeName.toLowerCase(); return t === "select" || t === "input" && e.type === "file"; }
    function MR(e) { var t = []; py(t, Kl, e, Ff(e)), ph(LR, t); }
    function LR(e) { Oy(e, 0); }
    function ks(e) { var t = Ao(e); if (yl(t))
        return e; }
    function UR(e, t) { if (e === "change")
        return t; }
    var my = !1;
    Xt && (my = AR("input") && (!document.documentMode || document.documentMode > 9));
    function kR(e, t) { Wl = e, Kl = t, Wl.attachEvent("onpropertychange", hy); }
    function vy() { Wl && (Wl.detachEvent("onpropertychange", hy), Wl = null, Kl = null); }
    function hy(e) { e.propertyName === "value" && ks(Kl) && MR(e); }
    function VR(e, t, n) { e === "focusin" ? (vy(), kR(t, n)) : e === "focusout" && vy(); }
    function zR(e, t) { if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ks(Kl); }
    function FR(e) { var t = e.nodeName; return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio"); }
    function PR(e, t) { if (e === "click")
        return ks(t); }
    function HR(e, t) { if (e === "input" || e === "change")
        return ks(t); }
    function BR(e) { var t = e._wrapperState; !t || !t.controlled || e.type !== "number" || me(e, "number", e.value); }
    function IR(e, t, n, a, r, i, o) { var l = n ? Ao(n) : window, u, d; if (wR(l) ? u = UR : dy(l) ? my ? u = HR : (u = zR, d = VR) : FR(l) && (u = PR), u) {
        var m = u(t, n);
        if (m) {
            py(e, m, a, r);
            return;
        }
    } d && d(t, l, n), t === "focusout" && BR(l); }
    function $R() { Qt("onMouseEnter", ["mouseout", "mouseover"]), Qt("onMouseLeave", ["mouseout", "mouseover"]), Qt("onPointerEnter", ["pointerout", "pointerover"]), Qt("onPointerLeave", ["pointerout", "pointerover"]); }
    function YR(e, t, n, a, r, i, o) { var l = t === "mouseover" || t === "pointerover", u = t === "mouseout" || t === "pointerout"; if (l && !sN(a)) {
        var d = a.relatedTarget || a.fromElement;
        if (d && (Mi(d) || cu(d)))
            return;
    } if (!(!u && !l)) {
        var m;
        if (r.window === r)
            m = r;
        else {
            var N = r.ownerDocument;
            N ? m = N.defaultView || N.parentWindow : m = window;
        }
        var S, C;
        if (u) {
            var _ = a.relatedTarget || a.toElement;
            if (S = n, C = _ ? Mi(_) : null, C !== null) {
                var M = xi(C);
                (C !== M || C.tag !== q && C.tag !== ne) && (C = null);
            }
        }
        else
            S = null, C = n;
        if (S !== C) {
            var Q = ty, fe = "onMouseLeave", le = "onMouseEnter", Pe = "mouse";
            (t === "pointerout" || t === "pointerover") && (Q = ay, fe = "onPointerLeave", le = "onPointerEnter", Pe = "pointer");
            var Ue = S == null ? m : Ao(S), R = C == null ? m : Ao(C), L = new Q(fe, Pe + "leave", S, a, r);
            L.target = Ue, L.relatedTarget = R;
            var x = null, H = Mi(r);
            if (H === n) {
                var ee = new Q(le, Pe + "enter", C, a, r);
                ee.target = R, ee.relatedTarget = Ue, x = ee;
            }
            vx(e, L, x, S, C);
        }
    } }
    function qR(e, t) { return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t; }
    var Wn = typeof Object.is == "function" ? Object.is : qR;
    function Ql(e, t) { if (Wn(e, t))
        return !0; if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1; var n = Object.keys(e), a = Object.keys(t); if (n.length !== a.length)
        return !1; for (var r = 0; r < n.length; r++) {
        var i = n[r];
        if (!wn.call(t, i) || !Wn(e[i], t[i]))
            return !1;
    } return !0; }
    function yy(e) { for (; e && e.firstChild;)
        e = e.firstChild; return e; }
    function GR(e) { for (; e;) {
        if (e.nextSibling)
            return e.nextSibling;
        e = e.parentNode;
    } }
    function gy(e, t) { for (var n = yy(e), a = 0, r = 0; n;) {
        if (n.nodeType === sr) {
            if (r = a + n.textContent.length, a <= t && r >= t)
                return { node: n, offset: t - a };
            a = r;
        }
        n = yy(GR(n));
    } }
    function WR(e) { var t = e.ownerDocument, n = t && t.defaultView || window, a = n.getSelection && n.getSelection(); if (!a || a.rangeCount === 0)
        return null; var r = a.anchorNode, i = a.anchorOffset, o = a.focusNode, l = a.focusOffset; try {
        r.nodeType, o.nodeType;
    }
    catch {
        return null;
    } return KR(e, r, i, o, l); }
    function KR(e, t, n, a, r) { var i = 0, o = -1, l = -1, u = 0, d = 0, m = e, N = null; e: for (;;) {
        for (var S = null; m === t && (n === 0 || m.nodeType === sr) && (o = i + n), m === a && (r === 0 || m.nodeType === sr) && (l = i + r), m.nodeType === sr && (i += m.nodeValue.length), (S = m.firstChild) !== null;)
            N = m, m = S;
        for (;;) {
            if (m === e)
                break e;
            if (N === t && ++u === n && (o = i), N === a && ++d === r && (l = i), (S = m.nextSibling) !== null)
                break;
            m = N, N = m.parentNode;
        }
        m = S;
    } return o === -1 || l === -1 ? null : { start: o, end: l }; }
    function QR(e, t) { var n = e.ownerDocument || document, a = n && n.defaultView || window; if (a.getSelection) {
        var r = a.getSelection(), i = e.textContent.length, o = Math.min(t.start, i), l = t.end === void 0 ? o : Math.min(t.end, i);
        if (!r.extend && o > l) {
            var u = l;
            l = o, o = u;
        }
        var d = gy(e, o), m = gy(e, l);
        if (d && m) {
            if (r.rangeCount === 1 && r.anchorNode === d.node && r.anchorOffset === d.offset && r.focusNode === m.node && r.focusOffset === m.offset)
                return;
            var N = n.createRange();
            N.setStart(d.node, d.offset), r.removeAllRanges(), o > l ? (r.addRange(N), r.extend(m.node, m.offset)) : (N.setEnd(m.node, m.offset), r.addRange(N));
        }
    } }
    function by(e) { return e && e.nodeType === sr; }
    function Ey(e, t) { return !e || !t ? !1 : e === t ? !0 : by(e) ? !1 : by(t) ? Ey(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1; }
    function XR(e) { return e && e.ownerDocument && Ey(e.ownerDocument.documentElement, e); }
    function JR(e) { try {
        return typeof e.contentWindow.location.href == "string";
    }
    catch {
        return !1;
    } }
    function Sy() { for (var e = window, t = or(); t instanceof e.HTMLIFrameElement;) {
        if (JR(t))
            e = t.contentWindow;
        else
            return t;
        t = or(e.document);
    } return t; }
    function Hd(e) { var t = e && e.nodeName && e.nodeName.toLowerCase(); return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true"); }
    function ZR() { var e = Sy(); return { focusedElem: e, selectionRange: Hd(e) ? tx(e) : null }; }
    function ex(e) { var t = Sy(), n = e.focusedElem, a = e.selectionRange; if (t !== n && XR(n)) {
        a !== null && Hd(n) && nx(n, a);
        for (var r = [], i = n; i = i.parentNode;)
            i.nodeType === Un && r.push({ element: i, left: i.scrollLeft, top: i.scrollTop });
        typeof n.focus == "function" && n.focus();
        for (var o = 0; o < r.length; o++) {
            var l = r[o];
            l.element.scrollLeft = l.left, l.element.scrollTop = l.top;
        }
    } }
    function tx(e) { var t; return "selectionStart" in e ? t = { start: e.selectionStart, end: e.selectionEnd } : t = WR(e), t || { start: 0, end: 0 }; }
    function nx(e, t) { var n = t.start, a = t.end; a === void 0 && (a = n), "selectionStart" in e ? (e.selectionStart = n, e.selectionEnd = Math.min(a, e.value.length)) : QR(e, t); }
    var ax = Xt && "documentMode" in document && document.documentMode <= 11;
    function rx() { Kt("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]); }
    var xo = null, Bd = null, Xl = null, Id = !1;
    function ix(e) { if ("selectionStart" in e && Hd(e))
        return { start: e.selectionStart, end: e.selectionEnd }; var t = e.ownerDocument && e.ownerDocument.defaultView || window, n = t.getSelection(); return { anchorNode: n.anchorNode, anchorOffset: n.anchorOffset, focusNode: n.focusNode, focusOffset: n.focusOffset }; }
    function ox(e) { return e.window === e ? e.document : e.nodeType === cr ? e : e.ownerDocument; }
    function Ny(e, t, n) { var a = ox(n); if (!(Id || xo == null || xo !== or(a))) {
        var r = ix(xo);
        if (!Xl || !Ql(Xl, r)) {
            Xl = r;
            var i = Ps(Bd, "onSelect");
            if (i.length > 0) {
                var o = new Ud("onSelect", "select", null, t, n);
                e.push({ event: o, listeners: i }), o.target = xo;
            }
        }
    } }
    function lx(e, t, n, a, r, i, o) { var l = n ? Ao(n) : window; switch (t) {
        case "focusin":
            (dy(l) || l.contentEditable === "true") && (xo = l, Bd = n, Xl = null);
            break;
        case "focusout":
            xo = null, Bd = null, Xl = null;
            break;
        case "mousedown":
            Id = !0;
            break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
            Id = !1, Ny(e, a, r);
            break;
        case "selectionchange": if (ax)
            break;
        case "keydown":
        case "keyup": Ny(e, a, r);
    } }
    function Vs(e, t) { var n = {}; return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n; }
    var Co = { animationend: Vs("Animation", "AnimationEnd"), animationiteration: Vs("Animation", "AnimationIteration"), animationstart: Vs("Animation", "AnimationStart"), transitionend: Vs("Transition", "TransitionEnd") }, $d = {}, Ty = {};
    Xt && (Ty = document.createElement("div").style, "AnimationEvent" in window || (delete Co.animationend.animation, delete Co.animationiteration.animation, delete Co.animationstart.animation), "TransitionEvent" in window || delete Co.transitionend.transition);
    function zs(e) { if ($d[e])
        return $d[e]; if (!Co[e])
        return e; var t = Co[e]; for (var n in t)
        if (t.hasOwnProperty(n) && n in Ty)
            return $d[e] = t[n]; return e; }
    var Ry = zs("animationend"), xy = zs("animationiteration"), Cy = zs("animationstart"), Dy = zs("transitionend"), _y = new Map, jy = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Ir(e, t) { _y.set(e, t), Kt(t, [e]); }
    function ux() { for (var e = 0; e < jy.length; e++) {
        var t = jy[e], n = t.toLowerCase(), a = t[0].toUpperCase() + t.slice(1);
        Ir(n, "on" + a);
    } Ir(Ry, "onAnimationEnd"), Ir(xy, "onAnimationIteration"), Ir(Cy, "onAnimationStart"), Ir("dblclick", "onDoubleClick"), Ir("focusin", "onFocus"), Ir("focusout", "onBlur"), Ir(Dy, "onTransitionEnd"); }
    function sx(e, t, n, a, r, i, o) { var l = _y.get(t); if (l !== void 0) {
        var u = Ud, d = t;
        switch (t) {
            case "keypress": if (Ms(a) === 0)
                return;
            case "keydown":
            case "keyup":
                u = cR;
                break;
            case "focusin":
                d = "focus", u = zd;
                break;
            case "focusout":
                d = "blur", u = zd;
                break;
            case "beforeblur":
            case "afterblur":
                u = zd;
                break;
            case "click": if (a.button === 2)
                return;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
                u = ty;
                break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
                u = QT;
                break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
                u = pR;
                break;
            case Ry:
            case xy:
            case Cy:
                u = ZT;
                break;
            case Dy:
                u = vR;
                break;
            case "scroll":
                u = GT;
                break;
            case "wheel":
                u = yR;
                break;
            case "copy":
            case "cut":
            case "paste":
                u = tR;
                break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
                u = ay;
                break;
        }
        var m = (i & Tl) !== 0;
        {
            var N = !m && t === "scroll", S = px(n, l, a.type, m, N);
            if (S.length > 0) {
                var C = new u(l, d, null, a, r);
                e.push({ event: C, listeners: S });
            }
        }
    } }
    ux(), $R(), OR(), rx(), ER();
    function cx(e, t, n, a, r, i, o) { sx(e, t, n, a, r, i); var l = (i & oN) === 0; l && (YR(e, t, n, a, r), IR(e, t, n, a, r), lx(e, t, n, a, r), _R(e, t, n, a, r)); }
    var Jl = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Yd = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Jl));
    function Ay(e, t, n) { var a = e.type || "unknown-event"; e.currentTarget = n, gN(a, t, void 0, e), e.currentTarget = null; }
    function fx(e, t, n) { var a; if (n)
        for (var r = t.length - 1; r >= 0; r--) {
            var i = t[r], o = i.instance, l = i.currentTarget, u = i.listener;
            if (o !== a && e.isPropagationStopped())
                return;
            Ay(e, u, l), a = o;
        }
    else
        for (var d = 0; d < t.length; d++) {
            var m = t[d], N = m.instance, S = m.currentTarget, C = m.listener;
            if (N !== a && e.isPropagationStopped())
                return;
            Ay(e, C, S), a = N;
        } }
    function Oy(e, t) { for (var n = (t & Tl) !== 0, a = 0; a < e.length; a++) {
        var r = e[a], i = r.event, o = r.listeners;
        fx(i, o, n);
    } bN(); }
    function dx(e, t, n, a, r) { var i = Ff(n), o = []; cx(o, e, a, n, i, t), Oy(o, t); }
    function st(e, t) { Yd.has(e) || f('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e); var n = !1, a = BC(t), r = hx(e); a.has(r) || (wy(t, e, zf, n), a.add(r)); }
    function qd(e, t, n) { Yd.has(e) && !t && f('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e); var a = 0; t && (a |= Tl), wy(n, e, a, t); }
    var Fs = "_reactListening" + Math.random().toString(36).slice(2);
    function Zl(e) { if (!e[Fs]) {
        e[Fs] = !0, ka.forEach(function (n) { n !== "selectionchange" && (Yd.has(n) || qd(n, !1, e), qd(n, !0, e)); });
        var t = e.nodeType === cr ? e : e.ownerDocument;
        t !== null && (t[Fs] || (t[Fs] = !0, qd("selectionchange", !1, t)));
    } }
    function wy(e, t, n, a, r) { var i = VT(e, t, n), o = void 0; Bf && (t === "touchstart" || t === "touchmove" || t === "wheel") && (o = !0), e = e, a ? o !== void 0 ? IT(e, t, i, o) : BT(e, t, i) : o !== void 0 ? $T(e, t, i, o) : HT(e, t, i); }
    function My(e, t) { return e === t || e.nodeType === Rt && e.parentNode === t; }
    function Gd(e, t, n, a, r) { var i = a; if (!(t & lh) && !(t & zf)) {
        var o = r;
        if (a !== null) {
            var l = a;
            e: for (;;) {
                if (l === null)
                    return;
                var u = l.tag;
                if (u === j || u === P) {
                    var d = l.stateNode.containerInfo;
                    if (My(d, o))
                        break;
                    if (u === P)
                        for (var m = l.return; m !== null;) {
                            var N = m.tag;
                            if (N === j || N === P) {
                                var S = m.stateNode.containerInfo;
                                if (My(S, o))
                                    return;
                            }
                            m = m.return;
                        }
                    for (; d !== null;) {
                        var C = Mi(d);
                        if (C === null)
                            return;
                        var _ = C.tag;
                        if (_ === q || _ === ne) {
                            l = i = C;
                            continue e;
                        }
                        d = d.parentNode;
                    }
                }
                l = l.return;
            }
        }
    } ph(function () { return dx(e, t, n, i); }); }
    function eu(e, t, n) { return { instance: e, listener: t, currentTarget: n }; }
    function px(e, t, n, a, r, i) { for (var o = t !== null ? t + "Capture" : null, l = a ? o : t, u = [], d = e, m = null; d !== null;) {
        var N = d, S = N.stateNode, C = N.tag;
        if (C === q && S !== null && (m = S, l !== null)) {
            var _ = xl(d, l);
            _ != null && u.push(eu(d, _, m));
        }
        if (r)
            break;
        d = d.return;
    } return u; }
    function Ps(e, t) { for (var n = t + "Capture", a = [], r = e; r !== null;) {
        var i = r, o = i.stateNode, l = i.tag;
        if (l === q && o !== null) {
            var u = o, d = xl(r, n);
            d != null && a.unshift(eu(r, d, u));
            var m = xl(r, t);
            m != null && a.push(eu(r, m, u));
        }
        r = r.return;
    } return a; }
    function Do(e) { if (e === null)
        return null; do
        e = e.return;
    while (e && e.tag !== q); return e || null; }
    function mx(e, t) { for (var n = e, a = t, r = 0, i = n; i; i = Do(i))
        r++; for (var o = 0, l = a; l; l = Do(l))
        o++; for (; r - o > 0;)
        n = Do(n), r--; for (; o - r > 0;)
        a = Do(a), o--; for (var u = r; u--;) {
        if (n === a || a !== null && n === a.alternate)
            return n;
        n = Do(n), a = Do(a);
    } return null; }
    function Ly(e, t, n, a, r) { for (var i = t._reactName, o = [], l = n; l !== null && l !== a;) {
        var u = l, d = u.alternate, m = u.stateNode, N = u.tag;
        if (d !== null && d === a)
            break;
        if (N === q && m !== null) {
            var S = m;
            if (r) {
                var C = xl(l, i);
                C != null && o.unshift(eu(l, C, S));
            }
            else if (!r) {
                var _ = xl(l, i);
                _ != null && o.push(eu(l, _, S));
            }
        }
        l = l.return;
    } o.length !== 0 && e.push({ event: t, listeners: o }); }
    function vx(e, t, n, a, r) { var i = a && r ? mx(a, r) : null; a !== null && Ly(e, t, a, i, !1), r !== null && n !== null && Ly(e, n, r, i, !0); }
    function hx(e, t) { return e + "__bubble"; }
    var kn = !1, tu = "dangerouslySetInnerHTML", Hs = "suppressContentEditableWarning", $r = "suppressHydrationWarning", Uy = "autoFocus", Oi = "children", wi = "style", Bs = "__html", Wd, Is, nu, ky, $s, Vy, zy;
    Wd = { dialog: !0, webview: !0 }, Is = function (e, t) { ZS(e, t), eN(e, t), iN(e, t, { registrationNameDependencies: Wt, possibleRegistrationNames: Bn }); }, Vy = Xt && !document.documentMode, nu = function (e, t, n) { if (!kn) {
        var a = Ys(n), r = Ys(t);
        r !== a && (kn = !0, f("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(r), JSON.stringify(a)));
    } }, ky = function (e) { if (!kn) {
        kn = !0;
        var t = [];
        e.forEach(function (n) { t.push(n); }), f("Extra attributes from the server: %s", t);
    } }, $s = function (e, t) { t === !1 ? f("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : f("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t); }, zy = function (e, t) { var n = e.namespaceURI === ur ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName); return n.innerHTML = t, n.innerHTML; };
    var yx = /\r\n?/g, gx = /\u0000|\uFFFD/g;
    function Ys(e) {
        Mn(e);
        var t = typeof e == "string" ? e : "" + e;
        return t.replace(yx, `
`).replace(gx, "");
    }
    function qs(e, t, n, a) { var r = Ys(t), i = Ys(e); if (i !== r && (a && (kn || (kn = !0, f('Text content did not match. Server: "%s" Client: "%s"', i, r))), n && we))
        throw new Error("Text content does not match server-rendered HTML."); }
    function Fy(e) { return e.nodeType === cr ? e : e.ownerDocument; }
    function bx() { }
    function Gs(e) { e.onclick = bx; }
    function Ex(e, t, n, a, r) { for (var i in a)
        if (a.hasOwnProperty(i)) {
            var o = a[i];
            if (i === wi)
                o && Object.freeze(o), th(t, o);
            else if (i === tu) {
                var l = o ? o[Bs] : void 0;
                l != null && Qv(t, l);
            }
            else if (i === Oi)
                if (typeof o == "string") {
                    var u = e !== "textarea" || o !== "";
                    u && hs(t, o);
                }
                else
                    typeof o == "number" && hs(t, "" + o);
            else
                i === Hs || i === $r || i === Uy || (Wt.hasOwnProperty(i) ? o != null && (typeof o != "function" && $s(i, o), i === "onScroll" && st("scroll", t)) : o != null && ya(t, i, o, r));
        } }
    function Sx(e, t, n, a) { for (var r = 0; r < t.length; r += 2) {
        var i = t[r], o = t[r + 1];
        i === wi ? th(e, o) : i === tu ? Qv(e, o) : i === Oi ? hs(e, o) : ya(e, i, o, a);
    } }
    function Nx(e, t, n, a) { var r, i = Fy(n), o, l = a; if (l === ur && (l = wf(e)), l === ur) {
        if (r = Ei(e, t), !r && e !== e.toLowerCase() && f("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
            var u = i.createElement("div");
            u.innerHTML = "<script><\/script>";
            var d = u.firstChild;
            o = u.removeChild(d);
        }
        else if (typeof t.is == "string")
            o = i.createElement(e, { is: t.is });
        else if (o = i.createElement(e), e === "select") {
            var m = o;
            t.multiple ? m.multiple = !0 : t.size && (m.size = t.size);
        }
    }
    else
        o = i.createElementNS(l, e); return l === ur && !r && Object.prototype.toString.call(o) === "[object HTMLUnknownElement]" && !wn.call(Wd, e) && (Wd[e] = !0, f("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), o; }
    function Tx(e, t) { return Fy(t).createTextNode(e); }
    function Rx(e, t, n, a) { var r = Ei(t, n); Is(t, n); var i; switch (t) {
        case "dialog":
            st("cancel", e), st("close", e), i = n;
            break;
        case "iframe":
        case "object":
        case "embed":
            st("load", e), i = n;
            break;
        case "video":
        case "audio":
            for (var o = 0; o < Jl.length; o++)
                st(Jl[o], e);
            i = n;
            break;
        case "source":
            st("error", e), i = n;
            break;
        case "img":
        case "image":
        case "link":
            st("error", e), st("load", e), i = n;
            break;
        case "details":
            st("toggle", e), i = n;
            break;
        case "input":
            ps(e, n), i = gl(e, n), st("invalid", e);
            break;
        case "option":
            Xe(e, n), i = n;
            break;
        case "select":
            Sl(e, n), i = El(e, n), st("invalid", e);
            break;
        case "textarea":
            Gv(e, n), i = Af(e, n), st("invalid", e);
            break;
        default: i = n;
    } switch (Vf(t, i), Ex(t, e, a, i, r), t) {
        case "input":
            gi(e), D(e, n, !1);
            break;
        case "textarea":
            gi(e), Kv(e);
            break;
        case "option":
            at(e, n);
            break;
        case "select":
            _f(e, n);
            break;
        default:
            typeof i.onClick == "function" && Gs(e);
            break;
    } }
    function xx(e, t, n, a, r) { Is(t, a); var i = null, o, l; switch (t) {
        case "input":
            o = gl(e, n), l = gl(e, a), i = [];
            break;
        case "select":
            o = El(e, n), l = El(e, a), i = [];
            break;
        case "textarea":
            o = Af(e, n), l = Af(e, a), i = [];
            break;
        default:
            o = n, l = a, typeof o.onClick != "function" && typeof l.onClick == "function" && Gs(e);
            break;
    } Vf(t, l); var u, d, m = null; for (u in o)
        if (!(l.hasOwnProperty(u) || !o.hasOwnProperty(u) || o[u] == null))
            if (u === wi) {
                var N = o[u];
                for (d in N)
                    N.hasOwnProperty(d) && (m || (m = {}), m[d] = "");
            }
            else
                u === tu || u === Oi || u === Hs || u === $r || u === Uy || (Wt.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null)); for (u in l) {
        var S = l[u], C = o != null ? o[u] : void 0;
        if (!(!l.hasOwnProperty(u) || S === C || S == null && C == null))
            if (u === wi)
                if (S && Object.freeze(S), C) {
                    for (d in C)
                        C.hasOwnProperty(d) && (!S || !S.hasOwnProperty(d)) && (m || (m = {}), m[d] = "");
                    for (d in S)
                        S.hasOwnProperty(d) && C[d] !== S[d] && (m || (m = {}), m[d] = S[d]);
                }
                else
                    m || (i || (i = []), i.push(u, m)), m = S;
            else if (u === tu) {
                var _ = S ? S[Bs] : void 0, M = C ? C[Bs] : void 0;
                _ != null && M !== _ && (i = i || []).push(u, _);
            }
            else
                u === Oi ? (typeof S == "string" || typeof S == "number") && (i = i || []).push(u, "" + S) : u === Hs || u === $r || (Wt.hasOwnProperty(u) ? (S != null && (typeof S != "function" && $s(u, S), u === "onScroll" && st("scroll", e)), !i && C !== S && (i = [])) : (i = i || []).push(u, S));
    } return m && (YS(m, l[wi]), (i = i || []).push(wi, m)), i; }
    function Cx(e, t, n, a, r) { n === "input" && r.type === "radio" && r.name != null && s(e, r); var i = Ei(n, a), o = Ei(n, r); switch (Sx(e, t, i, o), n) {
        case "input":
            g(e, r);
            break;
        case "textarea":
            Wv(e, r);
            break;
        case "select":
            ms(e, r);
            break;
    } }
    function Dx(e) { {
        var t = e.toLowerCase();
        return ys.hasOwnProperty(t) && ys[t] || null;
    } }
    function _x(e, t, n, a, r, i, o) { var l, u; switch (l = Ei(t, n), Is(t, n), t) {
        case "dialog":
            st("cancel", e), st("close", e);
            break;
        case "iframe":
        case "object":
        case "embed":
            st("load", e);
            break;
        case "video":
        case "audio":
            for (var d = 0; d < Jl.length; d++)
                st(Jl[d], e);
            break;
        case "source":
            st("error", e);
            break;
        case "img":
        case "image":
        case "link":
            st("error", e), st("load", e);
            break;
        case "details":
            st("toggle", e);
            break;
        case "input":
            ps(e, n), st("invalid", e);
            break;
        case "option":
            Xe(e, n);
            break;
        case "select":
            Sl(e, n), st("invalid", e);
            break;
        case "textarea":
            Gv(e, n), st("invalid", e);
            break;
    } Vf(t, n); {
        u = new Set;
        for (var m = e.attributes, N = 0; N < m.length; N++) {
            var S = m[N].name.toLowerCase();
            switch (S) {
                case "value": break;
                case "checked": break;
                case "selected": break;
                default: u.add(m[N].name);
            }
        }
    } var C = null; for (var _ in n)
        if (n.hasOwnProperty(_)) {
            var M = n[_];
            if (_ === Oi)
                typeof M == "string" ? e.textContent !== M && (n[$r] !== !0 && qs(e.textContent, M, i, o), C = [Oi, M]) : typeof M == "number" && e.textContent !== "" + M && (n[$r] !== !0 && qs(e.textContent, M, i, o), C = [Oi, "" + M]);
            else if (Wt.hasOwnProperty(_))
                M != null && (typeof M != "function" && $s(_, M), _ === "onScroll" && st("scroll", e));
            else if (o && typeof l == "boolean") {
                var Q = void 0, fe = yt(_);
                if (n[$r] !== !0) {
                    if (!(_ === Hs || _ === $r || _ === "value" || _ === "checked" || _ === "selected")) {
                        if (_ === tu) {
                            var le = e.innerHTML, Pe = M ? M[Bs] : void 0;
                            if (Pe != null) {
                                var Ue = zy(e, Pe);
                                Ue !== le && nu(_, le, Ue);
                            }
                        }
                        else if (_ === wi) {
                            if (u.delete(_), Vy) {
                                var R = IS(M);
                                Q = e.getAttribute("style"), R !== Q && nu(_, Q, R);
                            }
                        }
                        else if (l && !Zn)
                            u.delete(_.toLowerCase()), Q = ci(e, _, M), M !== Q && nu(_, Q, M);
                        else if (!mt(_, fe, l) && !fn(_, M, fe, l)) {
                            var L = !1;
                            if (fe !== null)
                                u.delete(fe.attributeName), Q = Ji(e, _, M, fe);
                            else {
                                var x = a;
                                if (x === ur && (x = wf(t)), x === ur)
                                    u.delete(_.toLowerCase());
                                else {
                                    var H = Dx(_);
                                    H !== null && H !== _ && (L = !0, u.delete(H)), u.delete(_);
                                }
                                Q = ci(e, _, M);
                            }
                            var ee = Zn;
                            !ee && M !== Q && !L && nu(_, Q, M);
                        }
                    }
                }
            }
        } switch (o && u.size > 0 && n[$r] !== !0 && ky(u), t) {
        case "input":
            gi(e), D(e, n, !0);
            break;
        case "textarea":
            gi(e), Kv(e);
            break;
        case "select":
        case "option": break;
        default:
            typeof n.onClick == "function" && Gs(e);
            break;
    } return C; }
    function jx(e, t, n) { var a = e.nodeValue !== t; return a; }
    function Kd(e, t) { {
        if (kn)
            return;
        kn = !0, f("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
    } }
    function Qd(e, t) { {
        if (kn)
            return;
        kn = !0, f('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
    } }
    function Xd(e, t, n) { {
        if (kn)
            return;
        kn = !0, f("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
    } }
    function Jd(e, t) { {
        if (t === "" || kn)
            return;
        kn = !0, f('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
    } }
    function Ax(e, t, n) { switch (t) {
        case "input":
            w(e, n);
            return;
        case "textarea":
            RS(e, n);
            return;
        case "select":
            jf(e, n);
            return;
    } }
    var au = function () { }, ru = function () { };
    {
        var Ox = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], Py = ["applet", "caption", "html", "table", "td", "th", "marquee", "object", "template", "foreignObject", "desc", "title"], wx = Py.concat(["button"]), Mx = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], Hy = { current: null, formTag: null, aTagInScope: null, buttonTagInScope: null, nobrTagInScope: null, pTagInButtonScope: null, listItemTagAutoclosing: null, dlItemTagAutoclosing: null };
        ru = function (e, t) { var n = Me({}, e || Hy), a = { tag: t }; return Py.indexOf(t) !== -1 && (n.aTagInScope = null, n.buttonTagInScope = null, n.nobrTagInScope = null), wx.indexOf(t) !== -1 && (n.pTagInButtonScope = null), Ox.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (n.listItemTagAutoclosing = null, n.dlItemTagAutoclosing = null), n.current = a, t === "form" && (n.formTag = a), t === "a" && (n.aTagInScope = a), t === "button" && (n.buttonTagInScope = a), t === "nobr" && (n.nobrTagInScope = a), t === "p" && (n.pTagInButtonScope = a), t === "li" && (n.listItemTagAutoclosing = a), (t === "dd" || t === "dt") && (n.dlItemTagAutoclosing = a), n; };
        var Lx = function (e, t) { switch (t) {
            case "select": return e === "option" || e === "optgroup" || e === "#text";
            case "optgroup": return e === "option" || e === "#text";
            case "option": return e === "#text";
            case "tr": return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
            case "tbody":
            case "thead":
            case "tfoot": return e === "tr" || e === "style" || e === "script" || e === "template";
            case "colgroup": return e === "col" || e === "template";
            case "table": return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
            case "head": return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
            case "html": return e === "head" || e === "body" || e === "frameset";
            case "frameset": return e === "frame";
            case "#document": return e === "html";
        } switch (e) {
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6": return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
            case "rp":
            case "rt": return Mx.indexOf(t) === -1;
            case "body":
            case "caption":
            case "col":
            case "colgroup":
            case "frameset":
            case "frame":
            case "head":
            case "html":
            case "tbody":
            case "td":
            case "tfoot":
            case "th":
            case "thead":
            case "tr": return t == null;
        } return !0; }, Ux = function (e, t) { switch (e) {
            case "address":
            case "article":
            case "aside":
            case "blockquote":
            case "center":
            case "details":
            case "dialog":
            case "dir":
            case "div":
            case "dl":
            case "fieldset":
            case "figcaption":
            case "figure":
            case "footer":
            case "header":
            case "hgroup":
            case "main":
            case "menu":
            case "nav":
            case "ol":
            case "p":
            case "section":
            case "summary":
            case "ul":
            case "pre":
            case "listing":
            case "table":
            case "hr":
            case "xmp":
            case "h1":
            case "h2":
            case "h3":
            case "h4":
            case "h5":
            case "h6": return t.pTagInButtonScope;
            case "form": return t.formTag || t.pTagInButtonScope;
            case "li": return t.listItemTagAutoclosing;
            case "dd":
            case "dt": return t.dlItemTagAutoclosing;
            case "button": return t.buttonTagInScope;
            case "a": return t.aTagInScope;
            case "nobr": return t.nobrTagInScope;
        } return null; }, By = {};
        au = function (e, t, n) { n = n || Hy; var a = n.current, r = a && a.tag; t != null && (e != null && f("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text"); var i = Lx(e, r) ? null : a, o = i ? null : Ux(e, n), l = i || o; if (l) {
            var u = l.tag, d = !!i + "|" + e + "|" + u;
            if (!By[d]) {
                By[d] = !0;
                var m = e, N = "";
                if (e === "#text" ? /\S/.test(t) ? m = "Text nodes" : (m = "Whitespace text nodes", N = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : m = "<" + e + ">", i) {
                    var S = "";
                    u === "table" && e === "tr" && (S += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), f("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", m, u, N, S);
                }
                else
                    f("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", m, u);
            }
        } };
    }
    var Ws = "suppressHydrationWarning", Ks = "$", Qs = "/$", iu = "$?", ou = "$!", kx = "style", Zd = null, ep = null;
    function Vx(e) { var t, n, a = e.nodeType; switch (a) {
        case cr:
        case Lf: {
            t = a === cr ? "#document" : "#fragment";
            var r = e.documentElement;
            n = r ? r.namespaceURI : Mf(null, "");
            break;
        }
        default: {
            var i = a === Rt ? e.parentNode : e, o = i.namespaceURI || null;
            t = i.tagName, n = Mf(o, t);
            break;
        }
    } {
        var l = t.toLowerCase(), u = ru(null, l);
        return { namespace: n, ancestorInfo: u };
    } }
    function zx(e, t, n) { {
        var a = e, r = Mf(a.namespace, t), i = ru(a.ancestorInfo, t);
        return { namespace: r, ancestorInfo: i };
    } }
    function gO(e) { return e; }
    function Fx(e) { Zd = kT(), ep = ZR(); var t = null; return Qh(!1), t; }
    function Px(e) { ex(ep), Qh(Zd), Zd = null, ep = null; }
    function Hx(e, t, n, a, r) { var i; {
        var o = a;
        if (au(e, null, o.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
            var l = "" + t.children, u = ru(o.ancestorInfo, e);
            au(null, l, u);
        }
        i = o.namespace;
    } var d = Nx(e, t, n, i); return su(r, d), up(d, t), d; }
    function Bx(e, t) { e.appendChild(t); }
    function Ix(e, t, n, a, r) { switch (Rx(e, t, n, a), t) {
        case "button":
        case "input":
        case "select":
        case "textarea": return !!n.autoFocus;
        case "img": return !0;
        default: return !1;
    } }
    function $x(e, t, n, a, r, i) { {
        var o = i;
        if (typeof a.children != typeof n.children && (typeof a.children == "string" || typeof a.children == "number")) {
            var l = "" + a.children, u = ru(o.ancestorInfo, t);
            au(null, l, u);
        }
    } return xx(e, t, n, a); }
    function tp(e, t) { return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null; }
    function Yx(e, t, n, a) { {
        var r = n;
        au(null, e, r.ancestorInfo);
    } var i = Tx(e, t); return su(a, i), i; }
    function qx() { var e = window.event; return e === void 0 ? hr : Xh(e.type); }
    var np = typeof setTimeout == "function" ? setTimeout : void 0, Gx = typeof clearTimeout == "function" ? clearTimeout : void 0, ap = -1, Iy = typeof Promise == "function" ? Promise : void 0, Wx = typeof queueMicrotask == "function" ? queueMicrotask : typeof Iy < "u" ? function (e) { return Iy.resolve(null).then(e).catch(Kx); } : np;
    function Kx(e) { setTimeout(function () { throw e; }); }
    function Qx(e, t, n, a) { switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
            n.autoFocus && e.focus();
            return;
        case "img": {
            n.src && (e.src = n.src);
            return;
        }
    } }
    function Xx(e, t, n, a, r, i) { Cx(e, t, n, a, r), up(e, r); }
    function $y(e) { hs(e, ""); }
    function Jx(e, t, n) { e.nodeValue = n; }
    function Zx(e, t) { e.appendChild(t); }
    function eC(e, t) { var n; e.nodeType === Rt ? (n = e.parentNode, n.insertBefore(t, e)) : (n = e, n.appendChild(t)); var a = e._reactRootContainer; a == null && n.onclick === null && Gs(n); }
    function tC(e, t, n) { e.insertBefore(t, n); }
    function nC(e, t, n) { e.nodeType === Rt ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n); }
    function aC(e, t) { e.removeChild(t); }
    function rC(e, t) { e.nodeType === Rt ? e.parentNode.removeChild(t) : e.removeChild(t); }
    function rp(e, t) { var n = t, a = 0; do {
        var r = n.nextSibling;
        if (e.removeChild(n), r && r.nodeType === Rt) {
            var i = r.data;
            if (i === Qs)
                if (a === 0) {
                    e.removeChild(r), Bl(t);
                    return;
                }
                else
                    a--;
            else
                (i === Ks || i === iu || i === ou) && a++;
        }
        n = r;
    } while (n); Bl(t); }
    function iC(e, t) { e.nodeType === Rt ? rp(e.parentNode, t) : e.nodeType === Un && rp(e, t), Bl(e); }
    function oC(e) { e = e; var t = e.style; typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none"; }
    function lC(e) { e.nodeValue = ""; }
    function uC(e, t) { e = e; var n = t[kx], a = n != null && n.hasOwnProperty("display") ? n.display : null; e.style.display = Uf("display", a); }
    function sC(e, t) { e.nodeValue = t; }
    function cC(e) { e.nodeType === Un ? e.textContent = "" : e.nodeType === cr && e.documentElement && e.removeChild(e.documentElement); }
    function fC(e, t, n) { return e.nodeType !== Un || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e; }
    function dC(e, t) { return t === "" || e.nodeType !== sr ? null : e; }
    function pC(e) { return e.nodeType !== Rt ? null : e; }
    function Yy(e) { return e.data === iu; }
    function ip(e) { return e.data === ou; }
    function mC(e) { var t = e.nextSibling && e.nextSibling.dataset, n, a, r; return t && (n = t.dgst, a = t.msg, r = t.stck), { message: a, digest: n, stack: r }; }
    function vC(e, t) { e._reactRetry = t; }
    function Xs(e) { for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Un || t === sr)
            break;
        if (t === Rt) {
            var n = e.data;
            if (n === Ks || n === ou || n === iu)
                break;
            if (n === Qs)
                return null;
        }
    } return e; }
    function lu(e) { return Xs(e.nextSibling); }
    function hC(e) { return Xs(e.firstChild); }
    function yC(e) { return Xs(e.firstChild); }
    function gC(e) { return Xs(e.nextSibling); }
    function bC(e, t, n, a, r, i, o) { su(i, e), up(e, n); var l; {
        var u = r;
        l = u.namespace;
    } var d = (i.mode & ze) !== pe; return _x(e, t, n, l, a, d, o); }
    function EC(e, t, n, a) { return su(n, e), n.mode & ze, jx(e, t); }
    function SC(e, t) { su(t, e); }
    function NC(e) { for (var t = e.nextSibling, n = 0; t;) {
        if (t.nodeType === Rt) {
            var a = t.data;
            if (a === Qs) {
                if (n === 0)
                    return lu(t);
                n--;
            }
            else
                (a === Ks || a === ou || a === iu) && n++;
        }
        t = t.nextSibling;
    } return null; }
    function qy(e) { for (var t = e.previousSibling, n = 0; t;) {
        if (t.nodeType === Rt) {
            var a = t.data;
            if (a === Ks || a === ou || a === iu) {
                if (n === 0)
                    return t;
                n--;
            }
            else
                a === Qs && n++;
        }
        t = t.previousSibling;
    } return null; }
    function TC(e) { Bl(e); }
    function RC(e) { Bl(e); }
    function xC(e) { return e !== "head" && e !== "body"; }
    function CC(e, t, n, a) { var r = !0; qs(t.nodeValue, n, a, r); }
    function DC(e, t, n, a, r, i) { if (t[Ws] !== !0) {
        var o = !0;
        qs(a.nodeValue, r, i, o);
    } }
    function _C(e, t) { t.nodeType === Un ? Kd(e, t) : t.nodeType === Rt || Qd(e, t); }
    function jC(e, t) { {
        var n = e.parentNode;
        n !== null && (t.nodeType === Un ? Kd(n, t) : t.nodeType === Rt || Qd(n, t));
    } }
    function AC(e, t, n, a, r) { (r || t[Ws] !== !0) && (a.nodeType === Un ? Kd(n, a) : a.nodeType === Rt || Qd(n, a)); }
    function OC(e, t, n) { Xd(e, t); }
    function wC(e, t) { Jd(e, t); }
    function MC(e, t, n) { {
        var a = e.parentNode;
        a !== null && Xd(a, t);
    } }
    function LC(e, t) { {
        var n = e.parentNode;
        n !== null && Jd(n, t);
    } }
    function UC(e, t, n, a, r, i) { (i || t[Ws] !== !0) && Xd(n, a); }
    function kC(e, t, n, a, r) { (r || t[Ws] !== !0) && Jd(n, a); }
    function VC(e) { f("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase()); }
    function zC(e) { Zl(e); }
    var _o = Math.random().toString(36).slice(2), jo = "__reactFiber$" + _o, op = "__reactProps$" + _o, uu = "__reactContainer$" + _o, lp = "__reactEvents$" + _o, FC = "__reactListeners$" + _o, PC = "__reactHandles$" + _o;
    function HC(e) { delete e[jo], delete e[op], delete e[lp], delete e[FC], delete e[PC]; }
    function su(e, t) { t[jo] = e; }
    function Js(e, t) { t[uu] = e; }
    function Gy(e) { e[uu] = null; }
    function cu(e) { return !!e[uu]; }
    function Mi(e) { var t = e[jo]; if (t)
        return t; for (var n = e.parentNode; n;) {
        if (t = n[uu] || n[jo], t) {
            var a = t.alternate;
            if (t.child !== null || a !== null && a.child !== null)
                for (var r = qy(e); r !== null;) {
                    var i = r[jo];
                    if (i)
                        return i;
                    r = qy(r);
                }
            return t;
        }
        e = n, n = e.parentNode;
    } return null; }
    function Yr(e) { var t = e[jo] || e[uu]; return t && (t.tag === q || t.tag === ne || t.tag === ue || t.tag === j) ? t : null; }
    function Ao(e) { if (e.tag === q || e.tag === ne)
        return e.stateNode; throw new Error("getNodeFromInstance: Invalid argument."); }
    function Zs(e) { return e[op] || null; }
    function up(e, t) { e[op] = t; }
    function BC(e) { var t = e[lp]; return t === void 0 && (t = e[lp] = new Set), t; }
    var Wy = {}, Ky = h.ReactDebugCurrentFrame;
    function ec(e) { if (e) {
        var t = e._owner, n = dl(e.type, e._source, t ? t.type : null);
        Ky.setExtraStackFrame(n);
    }
    else
        Ky.setExtraStackFrame(null); }
    function Ta(e, t, n, a, r) { {
        var i = Function.call.bind(wn);
        for (var o in e)
            if (i(e, o)) {
                var l = void 0;
                try {
                    if (typeof e[o] != "function") {
                        var u = Error((a || "React class") + ": " + n + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                        throw u.name = "Invariant Violation", u;
                    }
                    l = e[o](t, o, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                }
                catch (d) {
                    l = d;
                }
                l && !(l instanceof Error) && (ec(r), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, o, typeof l), ec(null)), l instanceof Error && !(l.message in Wy) && (Wy[l.message] = !0, ec(r), f("Failed %s type: %s", n, l.message), ec(null));
            }
    } }
    var sp = [], tc;
    tc = [];
    var yr = -1;
    function qr(e) { return { current: e }; }
    function mn(e, t) { if (yr < 0) {
        f("Unexpected pop.");
        return;
    } t !== tc[yr] && f("Unexpected Fiber popped."), e.current = sp[yr], sp[yr] = null, tc[yr] = null, yr--; }
    function vn(e, t, n) { yr++, sp[yr] = e.current, tc[yr] = n, e.current = t; }
    var cp;
    cp = {};
    var Kn = {};
    Object.freeze(Kn);
    var gr = qr(Kn), $a = qr(!1), fp = Kn;
    function Oo(e, t, n) { return n && Ya(t) ? fp : gr.current; }
    function Qy(e, t, n) { {
        var a = e.stateNode;
        a.__reactInternalMemoizedUnmaskedChildContext = t, a.__reactInternalMemoizedMaskedChildContext = n;
    } }
    function wo(e, t) { {
        var n = e.type, a = n.contextTypes;
        if (!a)
            return Kn;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
        var i = {};
        for (var o in a)
            i[o] = t[o];
        {
            var l = xe(e) || "Unknown";
            Ta(a, i, "context", l);
        }
        return r && Qy(e, t, i), i;
    } }
    function nc() { return $a.current; }
    function Ya(e) { {
        var t = e.childContextTypes;
        return t != null;
    } }
    function ac(e) { mn($a, e), mn(gr, e); }
    function dp(e) { mn($a, e), mn(gr, e); }
    function Xy(e, t, n) { {
        if (gr.current !== Kn)
            throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        vn(gr, t, e), vn($a, n, e);
    } }
    function Jy(e, t, n) { {
        var a = e.stateNode, r = t.childContextTypes;
        if (typeof a.getChildContext != "function") {
            {
                var i = xe(e) || "Unknown";
                cp[i] || (cp[i] = !0, f("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", i, i));
            }
            return n;
        }
        var o = a.getChildContext();
        for (var l in o)
            if (!(l in r))
                throw new Error((xe(e) || "Unknown") + '.getChildContext(): key "' + l + '" is not defined in childContextTypes.');
        {
            var u = xe(e) || "Unknown";
            Ta(r, o, "child context", u);
        }
        return Me({}, n, o);
    } }
    function rc(e) { {
        var t = e.stateNode, n = t && t.__reactInternalMemoizedMergedChildContext || Kn;
        return fp = gr.current, vn(gr, n, e), vn($a, $a.current, e), !0;
    } }
    function Zy(e, t, n) { {
        var a = e.stateNode;
        if (!a)
            throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (n) {
            var r = Jy(e, t, fp);
            a.__reactInternalMemoizedMergedChildContext = r, mn($a, e), mn(gr, e), vn(gr, r, e), vn($a, n, e);
        }
        else
            mn($a, e), vn($a, n, e);
    } }
    function IC(e) { {
        if (!xN(e) || e.tag !== A)
            throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
            switch (t.tag) {
                case j: return t.stateNode.context;
                case A: {
                    var n = t.type;
                    if (Ya(n))
                        return t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break;
                }
            }
            t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
    } }
    var Gr = 0, ic = 1, br = null, pp = !1, mp = !1;
    function eg(e) { br === null ? br = [e] : br.push(e); }
    function $C(e) { pp = !0, eg(e); }
    function tg() { pp && Wr(); }
    function Wr() { if (!mp && br !== null) {
        mp = !0;
        var e = 0, t = Na();
        try {
            var n = !0, a = br;
            for (Gt(qn); e < a.length; e++) {
                var r = a[e];
                do
                    r = r(n);
                while (r !== null);
            }
            br = null, pp = !1;
        }
        catch (i) {
            throw br !== null && (br = br.slice(e + 1)), xh(Ss, Wr), i;
        }
        finally {
            Gt(t), mp = !1;
        }
    } return null; }
    var Mo = [], Lo = 0, oc = null, lc = 0, ra = [], ia = 0, Li = null, Er = 1, Sr = "";
    function YC(e) { return ki(), (e.flags & yh) !== ve; }
    function qC(e) { return ki(), lc; }
    function GC() { var e = Sr, t = Er, n = t & ~WC(t); return n.toString(32) + e; }
    function Ui(e, t) { ki(), Mo[Lo++] = lc, Mo[Lo++] = oc, oc = e, lc = t; }
    function ng(e, t, n) { ki(), ra[ia++] = Er, ra[ia++] = Sr, ra[ia++] = Li, Li = e; var a = Er, r = Sr, i = uc(a) - 1, o = a & ~(1 << i), l = n + 1, u = uc(t) + i; if (u > 30) {
        var d = i - i % 5, m = (1 << d) - 1, N = (o & m).toString(32), S = o >> d, C = i - d, _ = uc(t) + C, M = l << C, Q = M | S, fe = N + r;
        Er = 1 << _ | Q, Sr = fe;
    }
    else {
        var le = l << i, Pe = le | o, Ue = r;
        Er = 1 << u | Pe, Sr = Ue;
    } }
    function vp(e) { ki(); var t = e.return; if (t !== null) {
        var n = 1, a = 0;
        Ui(e, n), ng(e, n, a);
    } }
    function uc(e) { return 32 - Oh(e); }
    function WC(e) { return 1 << uc(e) - 1; }
    function hp(e) { for (; e === oc;)
        oc = Mo[--Lo], Mo[Lo] = null, lc = Mo[--Lo], Mo[Lo] = null; for (; e === Li;)
        Li = ra[--ia], ra[ia] = null, Sr = ra[--ia], ra[ia] = null, Er = ra[--ia], ra[ia] = null; }
    function KC() { return ki(), Li !== null ? { id: Er, overflow: Sr } : null; }
    function QC(e, t) { ki(), ra[ia++] = Er, ra[ia++] = Sr, ra[ia++] = Li, Er = t.id, Sr = t.overflow, Li = e; }
    function ki() { en() || f("Expected to be hydrating. This is a bug in React. Please file an issue."); }
    var Zt = null, oa = null, Ra = !1, Vi = !1, Kr = null;
    function XC() { Ra && f("We should not be hydrating here. This is a bug in React. Please file a bug."); }
    function ag() { Vi = !0; }
    function JC() { return Vi; }
    function ZC(e) { var t = e.stateNode.containerInfo; return oa = yC(t), Zt = e, Ra = !0, Kr = null, Vi = !1, !0; }
    function e0(e, t, n) { return oa = gC(t), Zt = e, Ra = !0, Kr = null, Vi = !1, n !== null && QC(e, n), !0; }
    function rg(e, t) { switch (e.tag) {
        case j: {
            _C(e.stateNode.containerInfo, t);
            break;
        }
        case q: {
            var n = (e.mode & ze) !== pe;
            AC(e.type, e.memoizedProps, e.stateNode, t, n);
            break;
        }
        case ue: {
            var a = e.memoizedState;
            a.dehydrated !== null && jC(a.dehydrated, t);
            break;
        }
    } }
    function ig(e, t) { rg(e, t); var n = rj(); n.stateNode = t, n.return = e; var a = e.deletions; a === null ? (e.deletions = [n], e.flags |= Si) : a.push(n); }
    function yp(e, t) { {
        if (Vi)
            return;
        switch (e.tag) {
            case j: {
                var n = e.stateNode.containerInfo;
                switch (t.tag) {
                    case q:
                        var a = t.type;
                        t.pendingProps, OC(n, a);
                        break;
                    case ne:
                        var r = t.pendingProps;
                        wC(n, r);
                        break;
                }
                break;
            }
            case q: {
                var i = e.type, o = e.memoizedProps, l = e.stateNode;
                switch (t.tag) {
                    case q: {
                        var u = t.type, d = t.pendingProps, m = (e.mode & ze) !== pe;
                        UC(i, o, l, u, d, m);
                        break;
                    }
                    case ne: {
                        var N = t.pendingProps, S = (e.mode & ze) !== pe;
                        kC(i, o, l, N, S);
                        break;
                    }
                }
                break;
            }
            case ue: {
                var C = e.memoizedState, _ = C.dehydrated;
                if (_ !== null)
                    switch (t.tag) {
                        case q:
                            var M = t.type;
                            t.pendingProps, MC(_, M);
                            break;
                        case ne:
                            var Q = t.pendingProps;
                            LC(_, Q);
                            break;
                    }
                break;
            }
            default: return;
        }
    } }
    function og(e, t) { t.flags = t.flags & ~dr | xt, yp(e, t); }
    function lg(e, t) { switch (e.tag) {
        case q: {
            var n = e.type;
            e.pendingProps;
            var a = fC(t, n);
            return a !== null ? (e.stateNode = a, Zt = e, oa = hC(a), !0) : !1;
        }
        case ne: {
            var r = e.pendingProps, i = dC(t, r);
            return i !== null ? (e.stateNode = i, Zt = e, oa = null, !0) : !1;
        }
        case ue: {
            var o = pC(t);
            if (o !== null) {
                var l = { dehydrated: o, treeContext: KC(), retryLane: $n };
                e.memoizedState = l;
                var u = ij(o);
                return u.return = e, e.child = u, Zt = e, oa = null, !0;
            }
            return !1;
        }
        default: return !1;
    } }
    function gp(e) { return (e.mode & ze) !== pe && (e.flags & We) === ve; }
    function bp(e) { throw new Error("Hydration failed because the initial UI does not match what was rendered on the server."); }
    function Ep(e) { if (Ra) {
        var t = oa;
        if (!t) {
            gp(e) && (yp(Zt, e), bp()), og(Zt, e), Ra = !1, Zt = e;
            return;
        }
        var n = t;
        if (!lg(e, t)) {
            gp(e) && (yp(Zt, e), bp()), t = lu(n);
            var a = Zt;
            if (!t || !lg(e, t)) {
                og(Zt, e), Ra = !1, Zt = e;
                return;
            }
            ig(a, n);
        }
    } }
    function t0(e, t, n) { var a = e.stateNode, r = !Vi, i = bC(a, e.type, e.memoizedProps, t, n, e, r); return e.updateQueue = i, i !== null; }
    function n0(e) { var t = e.stateNode, n = e.memoizedProps, a = EC(t, n, e); if (a) {
        var r = Zt;
        if (r !== null)
            switch (r.tag) {
                case j: {
                    var i = r.stateNode.containerInfo, o = (r.mode & ze) !== pe;
                    CC(i, t, n, o);
                    break;
                }
                case q: {
                    var l = r.type, u = r.memoizedProps, d = r.stateNode, m = (r.mode & ze) !== pe;
                    DC(l, u, d, t, n, m);
                    break;
                }
            }
    } return a; }
    function a0(e) { var t = e.memoizedState, n = t !== null ? t.dehydrated : null; if (!n)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."); SC(n, e); }
    function r0(e) { var t = e.memoizedState, n = t !== null ? t.dehydrated : null; if (!n)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."); return NC(n); }
    function ug(e) { for (var t = e.return; t !== null && t.tag !== q && t.tag !== j && t.tag !== ue;)
        t = t.return; Zt = t; }
    function sc(e) { if (e !== Zt)
        return !1; if (!Ra)
        return ug(e), Ra = !0, !1; if (e.tag !== j && (e.tag !== q || xC(e.type) && !tp(e.type, e.memoizedProps))) {
        var t = oa;
        if (t)
            if (gp(e))
                sg(e), bp();
            else
                for (; t;)
                    ig(e, t), t = lu(t);
    } return ug(e), e.tag === ue ? oa = r0(e) : oa = Zt ? lu(e.stateNode) : null, !0; }
    function i0() { return Ra && oa !== null; }
    function sg(e) { for (var t = oa; t;)
        rg(e, t), t = lu(t); }
    function Uo() { Zt = null, oa = null, Ra = !1, Vi = !1; }
    function cg() { Kr !== null && (aE(Kr), Kr = null); }
    function en() { return Ra; }
    function Sp(e) { Kr === null ? Kr = [e] : Kr.push(e); }
    var o0 = h.ReactCurrentBatchConfig, l0 = null;
    function u0() { return o0.transition; }
    var xa = { recordUnsafeLifecycleWarnings: function (e, t) { }, flushPendingUnsafeLifecycleWarnings: function () { }, recordLegacyContextWarning: function (e, t) { }, flushLegacyContextWarning: function () { }, discardPendingWarnings: function () { } };
    {
        var s0 = function (e) { for (var t = null, n = e; n !== null;)
            n.mode & bt && (t = n), n = n.return; return t; }, zi = function (e) { var t = []; return e.forEach(function (n) { t.push(n); }), t.sort().join(", "); }, fu = [], du = [], pu = [], mu = [], vu = [], hu = [], Fi = new Set;
        xa.recordUnsafeLifecycleWarnings = function (e, t) { Fi.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && fu.push(e), e.mode & bt && typeof t.UNSAFE_componentWillMount == "function" && du.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && pu.push(e), e.mode & bt && typeof t.UNSAFE_componentWillReceiveProps == "function" && mu.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && vu.push(e), e.mode & bt && typeof t.UNSAFE_componentWillUpdate == "function" && hu.push(e)); }, xa.flushPendingUnsafeLifecycleWarnings = function () {
            var e = new Set;
            fu.length > 0 && (fu.forEach(function (S) { e.add(xe(S) || "Component"), Fi.add(S.type); }), fu = []);
            var t = new Set;
            du.length > 0 && (du.forEach(function (S) { t.add(xe(S) || "Component"), Fi.add(S.type); }), du = []);
            var n = new Set;
            pu.length > 0 && (pu.forEach(function (S) { n.add(xe(S) || "Component"), Fi.add(S.type); }), pu = []);
            var a = new Set;
            mu.length > 0 && (mu.forEach(function (S) { a.add(xe(S) || "Component"), Fi.add(S.type); }), mu = []);
            var r = new Set;
            vu.length > 0 && (vu.forEach(function (S) { r.add(xe(S) || "Component"), Fi.add(S.type); }), vu = []);
            var i = new Set;
            if (hu.length > 0 && (hu.forEach(function (S) { i.add(xe(S) || "Component"), Fi.add(S.type); }), hu = []), t.size > 0) {
                var o = zi(t);
                f(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, o);
            }
            if (a.size > 0) {
                var l = zi(a);
                f(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, l);
            }
            if (i.size > 0) {
                var u = zi(i);
                f(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, u);
            }
            if (e.size > 0) {
                var d = zi(e);
                T(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, d);
            }
            if (n.size > 0) {
                var m = zi(n);
                T(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, m);
            }
            if (r.size > 0) {
                var N = zi(r);
                T(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, N);
            }
        };
        var cc = new Map, fg = new Set;
        xa.recordLegacyContextWarning = function (e, t) { var n = s0(e); if (n === null) {
            f("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
            return;
        } if (!fg.has(e.type)) {
            var a = cc.get(n);
            (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (a === void 0 && (a = [], cc.set(n, a)), a.push(e));
        } }, xa.flushLegacyContextWarning = function () {
            cc.forEach(function (e, t) {
                if (e.length !== 0) {
                    var n = e[0], a = new Set;
                    e.forEach(function (i) { a.add(xe(i) || "Component"), fg.add(i.type); });
                    var r = zi(a);
                    try {
                        ft(n), f(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, r);
                    }
                    finally {
                        It();
                    }
                }
            });
        }, xa.discardPendingWarnings = function () { fu = [], du = [], pu = [], mu = [], vu = [], hu = [], cc = new Map; };
    }
    var Np, Tp, Rp, xp, Cp, dg = function (e, t) { };
    Np = !1, Tp = !1, Rp = {}, xp = {}, Cp = {}, dg = function (e, t) { if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
            throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var n = xe(t) || "Component";
        xp[n] || (xp[n] = !0, f('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
    } };
    function c0(e) { return e.prototype && e.prototype.isReactComponent; }
    function yu(e, t, n) {
        var a = n.ref;
        if (a !== null && typeof a != "function" && typeof a != "object") {
            if ((e.mode & bt || Ft) && !(n._owner && n._self && n._owner.stateNode !== n._self) && !(n._owner && n._owner.tag !== A) && !(typeof n.type == "function" && !c0(n.type)) && n._owner) {
                var r = xe(e) || "Component";
                Rp[r] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, a), Rp[r] = !0);
            }
            if (n._owner) {
                var i = n._owner, o;
                if (i) {
                    var l = i;
                    if (l.tag !== A)
                        throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
                    o = l.stateNode;
                }
                if (!o)
                    throw new Error("Missing owner for string ref " + a + ". This error is likely caused by a bug in React. Please file an issue.");
                var u = o;
                nr(a, "ref");
                var d = "" + a;
                if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === d)
                    return t.ref;
                var m = function (N) { var S = u.refs; N === null ? delete S[d] : S[d] = N; };
                return m._stringRef = d, m;
            }
            else {
                if (typeof a != "string")
                    throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
                if (!n._owner)
                    throw new Error("Element ref was specified as a string (" + a + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
            }
        }
        return a;
    }
    function fc(e, t) { var n = Object.prototype.toString.call(t); throw new Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead."); }
    function dc(e) { {
        var t = xe(e) || "Component";
        if (Cp[t])
            return;
        Cp[t] = !0, f("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
    } }
    function pg(e) { var t = e._payload, n = e._init; return n(t); }
    function mg(e) { function t(R, L) { if (e) {
        var x = R.deletions;
        x === null ? (R.deletions = [L], R.flags |= Si) : x.push(L);
    } } function n(R, L) { if (!e)
        return null; for (var x = L; x !== null;)
        t(R, x), x = x.sibling; return null; } function a(R, L) { for (var x = new Map, H = L; H !== null;)
        H.key !== null ? x.set(H.key, H) : x.set(H.index, H), H = H.sibling; return x; } function r(R, L) { var x = Wi(R, L); return x.index = 0, x.sibling = null, x; } function i(R, L, x) { if (R.index = x, !e)
        return R.flags |= yh, L; var H = R.alternate; if (H !== null) {
        var ee = H.index;
        return ee < L ? (R.flags |= xt, L) : ee;
    }
    else
        return R.flags |= xt, L; } function o(R) { return e && R.alternate === null && (R.flags |= xt), R; } function l(R, L, x, H) { if (L === null || L.tag !== ne) {
        var ee = Sv(x, R.mode, H);
        return ee.return = R, ee;
    }
    else {
        var X = r(L, x);
        return X.return = R, X;
    } } function u(R, L, x, H) { var ee = x.type; if (ee === za)
        return m(R, L, x.props.children, H, x.key); if (L !== null && (L.elementType === ee || bE(L, x) || typeof ee == "object" && ee !== null && ee.$$typeof === de && pg(ee) === L.type)) {
        var X = r(L, x.props);
        return X.ref = yu(R, L, x), X.return = R, X._debugSource = x._source, X._debugOwner = x._owner, X;
    } var he = Ev(x, R.mode, H); return he.ref = yu(R, L, x), he.return = R, he; } function d(R, L, x, H) { if (L === null || L.tag !== P || L.stateNode.containerInfo !== x.containerInfo || L.stateNode.implementation !== x.implementation) {
        var ee = Nv(x, R.mode, H);
        return ee.return = R, ee;
    }
    else {
        var X = r(L, x.children || []);
        return X.return = R, X;
    } } function m(R, L, x, H, ee) { if (L === null || L.tag !== Ce) {
        var X = oi(x, R.mode, H, ee);
        return X.return = R, X;
    }
    else {
        var he = r(L, x);
        return he.return = R, he;
    } } function N(R, L, x) { if (typeof L == "string" && L !== "" || typeof L == "number") {
        var H = Sv("" + L, R.mode, x);
        return H.return = R, H;
    } if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
            case na: {
                var ee = Ev(L, R.mode, x);
                return ee.ref = yu(R, null, L), ee.return = R, ee;
            }
            case In: {
                var X = Nv(L, R.mode, x);
                return X.return = R, X;
            }
            case de: {
                var he = L._payload, Re = L._init;
                return N(R, Re(he), x);
            }
        }
        if (Le(L) || ba(L)) {
            var et = oi(L, R.mode, x, null);
            return et.return = R, et;
        }
        fc(R, L);
    } return typeof L == "function" && dc(R), null; } function S(R, L, x, H) { var ee = L !== null ? L.key : null; if (typeof x == "string" && x !== "" || typeof x == "number")
        return ee !== null ? null : l(R, L, "" + x, H); if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
            case na: return x.key === ee ? u(R, L, x, H) : null;
            case In: return x.key === ee ? d(R, L, x, H) : null;
            case de: {
                var X = x._payload, he = x._init;
                return S(R, L, he(X), H);
            }
        }
        if (Le(x) || ba(x))
            return ee !== null ? null : m(R, L, x, H, null);
        fc(R, x);
    } return typeof x == "function" && dc(R), null; } function C(R, L, x, H, ee) { if (typeof H == "string" && H !== "" || typeof H == "number") {
        var X = R.get(x) || null;
        return l(L, X, "" + H, ee);
    } if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
            case na: {
                var he = R.get(H.key === null ? x : H.key) || null;
                return u(L, he, H, ee);
            }
            case In: {
                var Re = R.get(H.key === null ? x : H.key) || null;
                return d(L, Re, H, ee);
            }
            case de:
                var et = H._payload, Ie = H._init;
                return C(R, L, x, Ie(et), ee);
        }
        if (Le(H) || ba(H)) {
            var Nt = R.get(x) || null;
            return m(L, Nt, H, ee, null);
        }
        fc(L, H);
    } return typeof H == "function" && dc(L), null; } function _(R, L, x) { {
        if (typeof R != "object" || R === null)
            return L;
        switch (R.$$typeof) {
            case na:
            case In:
                dg(R, x);
                var H = R.key;
                if (typeof H != "string")
                    break;
                if (L === null) {
                    L = new Set, L.add(H);
                    break;
                }
                if (!L.has(H)) {
                    L.add(H);
                    break;
                }
                f("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", H);
                break;
            case de:
                var ee = R._payload, X = R._init;
                _(X(ee), L, x);
                break;
        }
    } return L; } function M(R, L, x, H) { for (var ee = null, X = 0; X < x.length; X++) {
        var he = x[X];
        ee = _(he, ee, R);
    } for (var Re = null, et = null, Ie = L, Nt = 0, $e = 0, Et = null; Ie !== null && $e < x.length; $e++) {
        Ie.index > $e ? (Et = Ie, Ie = null) : Et = Ie.sibling;
        var yn = S(R, Ie, x[$e], H);
        if (yn === null) {
            Ie === null && (Ie = Et);
            break;
        }
        e && Ie && yn.alternate === null && t(R, Ie), Nt = i(yn, Nt, $e), et === null ? Re = yn : et.sibling = yn, et = yn, Ie = Et;
    } if ($e === x.length) {
        if (n(R, Ie), en()) {
            var un = $e;
            Ui(R, un);
        }
        return Re;
    } if (Ie === null) {
        for (; $e < x.length; $e++) {
            var Xn = N(R, x[$e], H);
            Xn !== null && (Nt = i(Xn, Nt, $e), et === null ? Re = Xn : et.sibling = Xn, et = Xn);
        }
        if (en()) {
            var An = $e;
            Ui(R, An);
        }
        return Re;
    } for (var On = a(R, Ie); $e < x.length; $e++) {
        var gn = C(On, R, $e, x[$e], H);
        gn !== null && (e && gn.alternate !== null && On.delete(gn.key === null ? $e : gn.key), Nt = i(gn, Nt, $e), et === null ? Re = gn : et.sibling = gn, et = gn);
    } if (e && On.forEach(function (el) { return t(R, el); }), en()) {
        var _r = $e;
        Ui(R, _r);
    } return Re; } function Q(R, L, x, H) { var ee = ba(x); if (typeof ee != "function")
        throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."); {
        typeof Symbol == "function" && x[Symbol.toStringTag] === "Generator" && (Tp || f("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Tp = !0), x.entries === ee && (Np || f("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Np = !0);
        var X = ee.call(x);
        if (X)
            for (var he = null, Re = X.next(); !Re.done; Re = X.next()) {
                var et = Re.value;
                he = _(et, he, R);
            }
    } var Ie = ee.call(x); if (Ie == null)
        throw new Error("An iterable object provided no iterator."); for (var Nt = null, $e = null, Et = L, yn = 0, un = 0, Xn = null, An = Ie.next(); Et !== null && !An.done; un++, An = Ie.next()) {
        Et.index > un ? (Xn = Et, Et = null) : Xn = Et.sibling;
        var On = S(R, Et, An.value, H);
        if (On === null) {
            Et === null && (Et = Xn);
            break;
        }
        e && Et && On.alternate === null && t(R, Et), yn = i(On, yn, un), $e === null ? Nt = On : $e.sibling = On, $e = On, Et = Xn;
    } if (An.done) {
        if (n(R, Et), en()) {
            var gn = un;
            Ui(R, gn);
        }
        return Nt;
    } if (Et === null) {
        for (; !An.done; un++, An = Ie.next()) {
            var _r = N(R, An.value, H);
            _r !== null && (yn = i(_r, yn, un), $e === null ? Nt = _r : $e.sibling = _r, $e = _r);
        }
        if (en()) {
            var el = un;
            Ui(R, el);
        }
        return Nt;
    } for (var Ku = a(R, Et); !An.done; un++, An = Ie.next()) {
        var Za = C(Ku, R, un, An.value, H);
        Za !== null && (e && Za.alternate !== null && Ku.delete(Za.key === null ? un : Za.key), yn = i(Za, yn, un), $e === null ? Nt = Za : $e.sibling = Za, $e = Za);
    } if (e && Ku.forEach(function (kj) { return t(R, kj); }), en()) {
        var Uj = un;
        Ui(R, Uj);
    } return Nt; } function fe(R, L, x, H) { if (L !== null && L.tag === ne) {
        n(R, L.sibling);
        var ee = r(L, x);
        return ee.return = R, ee;
    } n(R, L); var X = Sv(x, R.mode, H); return X.return = R, X; } function le(R, L, x, H) { for (var ee = x.key, X = L; X !== null;) {
        if (X.key === ee) {
            var he = x.type;
            if (he === za) {
                if (X.tag === Ce) {
                    n(R, X.sibling);
                    var Re = r(X, x.props.children);
                    return Re.return = R, Re._debugSource = x._source, Re._debugOwner = x._owner, Re;
                }
            }
            else if (X.elementType === he || bE(X, x) || typeof he == "object" && he !== null && he.$$typeof === de && pg(he) === X.type) {
                n(R, X.sibling);
                var et = r(X, x.props);
                return et.ref = yu(R, X, x), et.return = R, et._debugSource = x._source, et._debugOwner = x._owner, et;
            }
            n(R, X);
            break;
        }
        else
            t(R, X);
        X = X.sibling;
    } if (x.type === za) {
        var Ie = oi(x.props.children, R.mode, H, x.key);
        return Ie.return = R, Ie;
    }
    else {
        var Nt = Ev(x, R.mode, H);
        return Nt.ref = yu(R, L, x), Nt.return = R, Nt;
    } } function Pe(R, L, x, H) { for (var ee = x.key, X = L; X !== null;) {
        if (X.key === ee)
            if (X.tag === P && X.stateNode.containerInfo === x.containerInfo && X.stateNode.implementation === x.implementation) {
                n(R, X.sibling);
                var he = r(X, x.children || []);
                return he.return = R, he;
            }
            else {
                n(R, X);
                break;
            }
        else
            t(R, X);
        X = X.sibling;
    } var Re = Nv(x, R.mode, H); return Re.return = R, Re; } function Ue(R, L, x, H) { var ee = typeof x == "object" && x !== null && x.type === za && x.key === null; if (ee && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
            case na: return o(le(R, L, x, H));
            case In: return o(Pe(R, L, x, H));
            case de:
                var X = x._payload, he = x._init;
                return Ue(R, L, he(X), H);
        }
        if (Le(x))
            return M(R, L, x, H);
        if (ba(x))
            return Q(R, L, x, H);
        fc(R, x);
    } return typeof x == "string" && x !== "" || typeof x == "number" ? o(fe(R, L, "" + x, H)) : (typeof x == "function" && dc(R), n(R, L)); } return Ue; }
    var ko = mg(!0), vg = mg(!1);
    function f0(e, t) { if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented."); if (t.child !== null) {
        var n = t.child, a = Wi(n, n.pendingProps);
        for (t.child = a, a.return = t; n.sibling !== null;)
            n = n.sibling, a = a.sibling = Wi(n, n.pendingProps), a.return = t;
        a.sibling = null;
    } }
    function d0(e, t) { for (var n = e.child; n !== null;)
        Z_(n, t), n = n.sibling; }
    var Dp = qr(null), _p;
    _p = {};
    var pc = null, Vo = null, jp = null, mc = !1;
    function vc() { pc = null, Vo = null, jp = null, mc = !1; }
    function hg() { mc = !0; }
    function yg() { mc = !1; }
    function gg(e, t, n) { vn(Dp, t._currentValue, e), t._currentValue = n, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== _p && f("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = _p; }
    function Ap(e, t) { var n = Dp.current; mn(Dp, t), e._currentValue = n; }
    function Op(e, t, n) { for (var a = e; a !== null;) {
        var r = a.alternate;
        if (So(a.childLanes, t) ? r !== null && !So(r.childLanes, t) && (r.childLanes = Ae(r.childLanes, t)) : (a.childLanes = Ae(a.childLanes, t), r !== null && (r.childLanes = Ae(r.childLanes, t))), a === n)
            break;
        a = a.return;
    } a !== n && f("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."); }
    function p0(e, t, n) { m0(e, t, n); }
    function m0(e, t, n) { var a = e.child; for (a !== null && (a.return = e); a !== null;) {
        var r = void 0, i = a.dependencies;
        if (i !== null) {
            r = a.child;
            for (var o = i.firstContext; o !== null;) {
                if (o.context === t) {
                    if (a.tag === A) {
                        var l = Ul(n), u = Nr(it, l);
                        u.tag = yc;
                        var d = a.updateQueue;
                        if (d !== null) {
                            var m = d.shared, N = m.pending;
                            N === null ? u.next = u : (u.next = N.next, N.next = u), m.pending = u;
                        }
                    }
                    a.lanes = Ae(a.lanes, n);
                    var S = a.alternate;
                    S !== null && (S.lanes = Ae(S.lanes, n)), Op(a.return, n, e), i.lanes = Ae(i.lanes, n);
                    break;
                }
                o = o.next;
            }
        }
        else if (a.tag === $)
            r = a.type === e.type ? null : a.child;
        else if (a.tag === Be) {
            var C = a.return;
            if (C === null)
                throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
            C.lanes = Ae(C.lanes, n);
            var _ = C.alternate;
            _ !== null && (_.lanes = Ae(_.lanes, n)), Op(C, n, e), r = a.sibling;
        }
        else
            r = a.child;
        if (r !== null)
            r.return = a;
        else
            for (r = a; r !== null;) {
                if (r === e) {
                    r = null;
                    break;
                }
                var M = r.sibling;
                if (M !== null) {
                    M.return = r.return, r = M;
                    break;
                }
                r = r.return;
            }
        a = r;
    } }
    function zo(e, t) { pc = e, Vo = null, jp = null; var n = e.dependencies; if (n !== null) {
        var a = n.firstContext;
        a !== null && (Yn(n.lanes, t) && wu(), n.firstContext = null);
    } }
    function Ct(e) { mc && f("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."); var t = e._currentValue; if (jp !== e) {
        var n = { context: e, memoizedValue: t, next: null };
        if (Vo === null) {
            if (pc === null)
                throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            Vo = n, pc.dependencies = { lanes: z, firstContext: n };
        }
        else
            Vo = Vo.next = n;
    } return t; }
    var Pi = null;
    function wp(e) { Pi === null ? Pi = [e] : Pi.push(e); }
    function v0() { if (Pi !== null) {
        for (var e = 0; e < Pi.length; e++) {
            var t = Pi[e], n = t.interleaved;
            if (n !== null) {
                t.interleaved = null;
                var a = n.next, r = t.pending;
                if (r !== null) {
                    var i = r.next;
                    r.next = a, n.next = i;
                }
                t.pending = n;
            }
        }
        Pi = null;
    } }
    function bg(e, t, n, a) { var r = t.interleaved; return r === null ? (n.next = n, wp(t)) : (n.next = r.next, r.next = n), t.interleaved = n, hc(e, a); }
    function h0(e, t, n, a) { var r = t.interleaved; r === null ? (n.next = n, wp(t)) : (n.next = r.next, r.next = n), t.interleaved = n; }
    function y0(e, t, n, a) { var r = t.interleaved; return r === null ? (n.next = n, wp(t)) : (n.next = r.next, r.next = n), t.interleaved = n, hc(e, a); }
    function Vn(e, t) { return hc(e, t); }
    var g0 = hc;
    function hc(e, t) { e.lanes = Ae(e.lanes, t); var n = e.alternate; n !== null && (n.lanes = Ae(n.lanes, t)), n === null && (e.flags & (xt | dr)) !== ve && vE(e); for (var a = e, r = e.return; r !== null;)
        r.childLanes = Ae(r.childLanes, t), n = r.alternate, n !== null ? n.childLanes = Ae(n.childLanes, t) : (r.flags & (xt | dr)) !== ve && vE(e), a = r, r = r.return; if (a.tag === j) {
        var i = a.stateNode;
        return i;
    }
    else
        return null; }
    var Eg = 0, Sg = 1, yc = 2, Mp = 3, gc = !1, Lp, bc;
    Lp = !1, bc = null;
    function Up(e) { var t = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: z }, effects: null }; e.updateQueue = t; }
    function Ng(e, t) { var n = t.updateQueue, a = e.updateQueue; if (n === a) {
        var r = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects };
        t.updateQueue = r;
    } }
    function Nr(e, t) { var n = { eventTime: e, lane: t, tag: Eg, payload: null, callback: null, next: null }; return n; }
    function Qr(e, t, n) { var a = e.updateQueue; if (a === null)
        return null; var r = a.shared; if (bc === r && !Lp && (f("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Lp = !0), h_()) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, g0(e, n);
    }
    else
        return y0(e, r, t, n); }
    function Ec(e, t, n) { var a = t.updateQueue; if (a !== null) {
        var r = a.shared;
        if (Uh(n)) {
            var i = r.lanes;
            i = Vh(i, e.pendingLanes);
            var o = Ae(i, n);
            r.lanes = o, Dd(e, o);
        }
    } }
    function kp(e, t) { var n = e.updateQueue, a = e.alternate; if (a !== null) {
        var r = a.updateQueue;
        if (n === r) {
            var i = null, o = null, l = n.firstBaseUpdate;
            if (l !== null) {
                var u = l;
                do {
                    var d = { eventTime: u.eventTime, lane: u.lane, tag: u.tag, payload: u.payload, callback: u.callback, next: null };
                    o === null ? i = o = d : (o.next = d, o = d), u = u.next;
                } while (u !== null);
                o === null ? i = o = t : (o.next = t, o = t);
            }
            else
                i = o = t;
            n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
            return;
        }
    } var m = n.lastBaseUpdate; m === null ? n.firstBaseUpdate = t : m.next = t, n.lastBaseUpdate = t; }
    function b0(e, t, n, a, r, i) { switch (n.tag) {
        case Sg: {
            var o = n.payload;
            if (typeof o == "function") {
                hg();
                var l = o.call(i, a, r);
                {
                    if (e.mode & bt) {
                        Yt(!0);
                        try {
                            o.call(i, a, r);
                        }
                        finally {
                            Yt(!1);
                        }
                    }
                    yg();
                }
                return l;
            }
            return o;
        }
        case Mp: e.flags = e.flags & ~Cn | We;
        case Eg: {
            var u = n.payload, d;
            if (typeof u == "function") {
                hg(), d = u.call(i, a, r);
                {
                    if (e.mode & bt) {
                        Yt(!0);
                        try {
                            u.call(i, a, r);
                        }
                        finally {
                            Yt(!1);
                        }
                    }
                    yg();
                }
            }
            else
                d = u;
            return d == null ? a : Me({}, a, d);
        }
        case yc: return gc = !0, a;
    } return a; }
    function Sc(e, t, n, a) { var r = e.updateQueue; gc = !1, bc = r.shared; var i = r.firstBaseUpdate, o = r.lastBaseUpdate, l = r.shared.pending; if (l !== null) {
        r.shared.pending = null;
        var u = l, d = u.next;
        u.next = null, o === null ? i = d : o.next = d, o = u;
        var m = e.alternate;
        if (m !== null) {
            var N = m.updateQueue, S = N.lastBaseUpdate;
            S !== o && (S === null ? N.firstBaseUpdate = d : S.next = d, N.lastBaseUpdate = u);
        }
    } if (i !== null) {
        var C = r.baseState, _ = z, M = null, Q = null, fe = null, le = i;
        do {
            var Pe = le.lane, Ue = le.eventTime;
            if (So(a, Pe)) {
                if (fe !== null) {
                    var L = { eventTime: Ue, lane: qt, tag: le.tag, payload: le.payload, callback: le.callback, next: null };
                    fe = fe.next = L;
                }
                C = b0(e, r, le, C, t, n);
                var x = le.callback;
                if (x !== null && le.lane !== qt) {
                    e.flags |= hh;
                    var H = r.effects;
                    H === null ? r.effects = [le] : H.push(le);
                }
            }
            else {
                var R = { eventTime: Ue, lane: Pe, tag: le.tag, payload: le.payload, callback: le.callback, next: null };
                fe === null ? (Q = fe = R, M = C) : fe = fe.next = R, _ = Ae(_, Pe);
            }
            if (le = le.next, le === null) {
                if (l = r.shared.pending, l === null)
                    break;
                var ee = l, X = ee.next;
                ee.next = null, le = X, r.lastBaseUpdate = ee, r.shared.pending = null;
            }
        } while (!0);
        fe === null && (M = C), r.baseState = M, r.firstBaseUpdate = Q, r.lastBaseUpdate = fe;
        var he = r.shared.interleaved;
        if (he !== null) {
            var Re = he;
            do
                _ = Ae(_, Re.lane), Re = Re.next;
            while (Re !== he);
        }
        else
            i === null && (r.shared.lanes = z);
        $u(_), e.lanes = _, e.memoizedState = C;
    } bc = null; }
    function E0(e, t) { if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e)); e.call(t); }
    function Tg() { gc = !1; }
    function Nc() { return gc; }
    function Rg(e, t, n) { var a = t.effects; if (t.effects = null, a !== null)
        for (var r = 0; r < a.length; r++) {
            var i = a[r], o = i.callback;
            o !== null && (i.callback = null, E0(o, n));
        } }
    var gu = {}, Xr = qr(gu), bu = qr(gu), Tc = qr(gu);
    function Rc(e) { if (e === gu)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."); return e; }
    function xg() { var e = Rc(Tc.current); return e; }
    function Vp(e, t) { vn(Tc, t, e), vn(bu, e, e), vn(Xr, gu, e); var n = Vx(t); mn(Xr, e), vn(Xr, n, e); }
    function Fo(e) { mn(Xr, e), mn(bu, e), mn(Tc, e); }
    function zp() { var e = Rc(Xr.current); return e; }
    function Cg(e) { Rc(Tc.current); var t = Rc(Xr.current), n = zx(t, e.type); t !== n && (vn(bu, e, e), vn(Xr, n, e)); }
    function Fp(e) { bu.current === e && (mn(Xr, e), mn(bu, e)); }
    var S0 = 0, Dg = 1, _g = 1, Eu = 2, Ca = qr(S0);
    function Pp(e, t) { return (e & t) !== 0; }
    function Po(e) { return e & Dg; }
    function Hp(e, t) { return e & Dg | t; }
    function N0(e, t) { return e | t; }
    function Jr(e, t) { vn(Ca, t, e); }
    function Ho(e) { mn(Ca, e); }
    function T0(e, t) { var n = e.memoizedState; return n !== null ? n.dehydrated !== null : (e.memoizedProps, !0); }
    function xc(e) { for (var t = e; t !== null;) {
        if (t.tag === ue) {
            var n = t.memoizedState;
            if (n !== null) {
                var a = n.dehydrated;
                if (a === null || Yy(a) || ip(a))
                    return t;
            }
        }
        else if (t.tag === Ye && t.memoizedProps.revealOrder !== void 0) {
            var r = (t.flags & We) !== ve;
            if (r)
                return t;
        }
        else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue;
        }
        if (t === e)
            return null;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
    } return null; }
    var zn = 0, Ot = 1, qa = 2, wt = 4, tn = 8, Bp = [];
    function Ip() { for (var e = 0; e < Bp.length; e++) {
        var t = Bp[e];
        t._workInProgressVersionPrimary = null;
    } Bp.length = 0; }
    function R0(e, t) { var n = t._getVersion, a = n(t._source); e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, a] : e.mutableSourceEagerHydrationData.push(t, a); }
    var Z = h.ReactCurrentDispatcher, Su = h.ReactCurrentBatchConfig, $p, Bo;
    $p = new Set;
    var Hi = z, Ze = null, Mt = null, Lt = null, Cc = !1, Nu = !1, Tu = 0, x0 = 0, C0 = 25, U = null, la = null, Zr = -1, Yp = !1;
    function Ke() { {
        var e = U;
        la === null ? la = [e] : la.push(e);
    } }
    function G() { {
        var e = U;
        la !== null && (Zr++, la[Zr] !== e && D0(e));
    } }
    function Io(e) { e != null && !Le(e) && f("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", U, typeof e); }
    function D0(e) {
        {
            var t = xe(Ze);
            if (!$p.has(t) && ($p.add(t), la !== null)) {
                for (var n = "", a = 30, r = 0; r <= Zr; r++) {
                    for (var i = la[r], o = r === Zr ? e : i, l = r + 1 + ". " + i; l.length < a;)
                        l += " ";
                    l += o + `
`, n += l;
                }
                f(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, n);
            }
        }
    }
    function hn() {
        throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function qp(e, t) {
        if (Yp)
            return !1;
        if (t === null)
            return f("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", U), !1;
        e.length !== t.length && f(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, U, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!Wn(e[n], t[n]))
                return !1;
        return !0;
    }
    function $o(e, t, n, a, r, i) { Hi = i, Ze = t, la = e !== null ? e._debugHookTypes : null, Zr = -1, Yp = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = z, e !== null && e.memoizedState !== null ? Z.current = Qg : la !== null ? Z.current = Kg : Z.current = Wg; var o = n(a, r); if (Nu) {
        var l = 0;
        do {
            if (Nu = !1, Tu = 0, l >= C0)
                throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
            l += 1, Yp = !1, Mt = null, Lt = null, t.updateQueue = null, Zr = -1, Z.current = Xg, o = n(a, r);
        } while (Nu);
    } Z.current = Fc, t._debugHookTypes = la; var u = Mt !== null && Mt.next !== null; if (Hi = z, Ze = null, Mt = null, Lt = null, U = null, la = null, Zr = -1, e !== null && (e.flags & pr) !== (t.flags & pr) && (e.mode & ze) !== pe && f("Internal React error: Expected static flag was missing. Please notify the React team."), Cc = !1, u)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement."); return o; }
    function Yo() { var e = Tu !== 0; return Tu = 0, e; }
    function jg(e, t, n) { t.updateQueue = e.updateQueue, (t.mode & Ba) !== pe ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = Ds(e.lanes, n); }
    function Ag() { if (Z.current = Fc, Cc) {
        for (var e = Ze.memoizedState; e !== null;) {
            var t = e.queue;
            t !== null && (t.pending = null), e = e.next;
        }
        Cc = !1;
    } Hi = z, Ze = null, Mt = null, Lt = null, la = null, Zr = -1, U = null, Ig = !1, Nu = !1, Tu = 0; }
    function Ga() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return Lt === null ? Ze.memoizedState = Lt = e : Lt = Lt.next = e, Lt; }
    function ua() { var e; if (Mt === null) {
        var t = Ze.alternate;
        t !== null ? e = t.memoizedState : e = null;
    }
    else
        e = Mt.next; var n; if (Lt === null ? n = Ze.memoizedState : n = Lt.next, n !== null)
        Lt = n, n = Lt.next, Mt = e;
    else {
        if (e === null)
            throw new Error("Rendered more hooks than during the previous render.");
        Mt = e;
        var a = { memoizedState: Mt.memoizedState, baseState: Mt.baseState, baseQueue: Mt.baseQueue, queue: Mt.queue, next: null };
        Lt === null ? Ze.memoizedState = Lt = a : Lt = Lt.next = a;
    } return Lt; }
    function Og() { return { lastEffect: null, stores: null }; }
    function Gp(e, t) { return typeof t == "function" ? t(e) : t; }
    function Wp(e, t, n) { var a = Ga(), r; n !== void 0 ? r = n(t) : r = t, a.memoizedState = a.baseState = r; var i = { pending: null, interleaved: null, lanes: z, dispatch: null, lastRenderedReducer: e, lastRenderedState: r }; a.queue = i; var o = i.dispatch = O0.bind(null, Ze, i); return [a.memoizedState, o]; }
    function Kp(e, t, n) { var a = ua(), r = a.queue; if (r === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue."); r.lastRenderedReducer = e; var i = Mt, o = i.baseQueue, l = r.pending; if (l !== null) {
        if (o !== null) {
            var u = o.next, d = l.next;
            o.next = d, l.next = u;
        }
        i.baseQueue !== o && f("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), i.baseQueue = o = l, r.pending = null;
    } if (o !== null) {
        var m = o.next, N = i.baseState, S = null, C = null, _ = null, M = m;
        do {
            var Q = M.lane;
            if (So(Hi, Q)) {
                if (_ !== null) {
                    var le = { lane: qt, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null };
                    _ = _.next = le;
                }
                if (M.hasEagerState)
                    N = M.eagerState;
                else {
                    var Pe = M.action;
                    N = e(N, Pe);
                }
            }
            else {
                var fe = { lane: Q, action: M.action, hasEagerState: M.hasEagerState, eagerState: M.eagerState, next: null };
                _ === null ? (C = _ = fe, S = N) : _ = _.next = fe, Ze.lanes = Ae(Ze.lanes, Q), $u(Q);
            }
            M = M.next;
        } while (M !== null && M !== m);
        _ === null ? S = N : _.next = C, Wn(N, a.memoizedState) || wu(), a.memoizedState = N, a.baseState = S, a.baseQueue = _, r.lastRenderedState = N;
    } var Ue = r.interleaved; if (Ue !== null) {
        var R = Ue;
        do {
            var L = R.lane;
            Ze.lanes = Ae(Ze.lanes, L), $u(L), R = R.next;
        } while (R !== Ue);
    }
    else
        o === null && (r.lanes = z); var x = r.dispatch; return [a.memoizedState, x]; }
    function Qp(e, t, n) { var a = ua(), r = a.queue; if (r === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue."); r.lastRenderedReducer = e; var i = r.dispatch, o = r.pending, l = a.memoizedState; if (o !== null) {
        r.pending = null;
        var u = o.next, d = u;
        do {
            var m = d.action;
            l = e(l, m), d = d.next;
        } while (d !== u);
        Wn(l, a.memoizedState) || wu(), a.memoizedState = l, a.baseQueue === null && (a.baseState = l), r.lastRenderedState = l;
    } return [l, i]; }
    function bO(e, t, n) { }
    function EO(e, t, n) { }
    function Xp(e, t, n) { var a = Ze, r = Ga(), i, o = en(); if (o) {
        if (n === void 0)
            throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        i = n(), Bo || i !== n() && (f("The result of getServerSnapshot should be cached to avoid an infinite loop"), Bo = !0);
    }
    else {
        if (i = t(), !Bo) {
            var l = t();
            Wn(i, l) || (f("The result of getSnapshot should be cached to avoid an infinite loop"), Bo = !0);
        }
        var u = rf();
        if (u === null)
            throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Cs(u, Hi) || wg(a, t, i);
    } r.memoizedState = i; var d = { value: i, getSnapshot: t }; return r.queue = d, Oc(Lg.bind(null, a, d, e), [e]), a.flags |= Vr, Ru(Ot | tn, Mg.bind(null, a, d, i, t), void 0, null), i; }
    function Dc(e, t, n) { var a = Ze, r = ua(), i = t(); if (!Bo) {
        var o = t();
        Wn(i, o) || (f("The result of getSnapshot should be cached to avoid an infinite loop"), Bo = !0);
    } var l = r.memoizedState, u = !Wn(l, i); u && (r.memoizedState = i, wu()); var d = r.queue; if (Cu(Lg.bind(null, a, d, e), [e]), d.getSnapshot !== t || u || Lt !== null && Lt.memoizedState.tag & Ot) {
        a.flags |= Vr, Ru(Ot | tn, Mg.bind(null, a, d, i, t), void 0, null);
        var m = rf();
        if (m === null)
            throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Cs(m, Hi) || wg(a, t, i);
    } return i; }
    function wg(e, t, n) { e.flags |= Gf; var a = { getSnapshot: t, value: n }, r = Ze.updateQueue; if (r === null)
        r = Og(), Ze.updateQueue = r, r.stores = [a];
    else {
        var i = r.stores;
        i === null ? r.stores = [a] : i.push(a);
    } }
    function Mg(e, t, n, a) { t.value = n, t.getSnapshot = a, Ug(t) && kg(e); }
    function Lg(e, t, n) { var a = function () { Ug(t) && kg(e); }; return n(a); }
    function Ug(e) { var t = e.getSnapshot, n = e.value; try {
        var a = t();
        return !Wn(n, a);
    }
    catch {
        return !0;
    } }
    function kg(e) { var t = Vn(e, Ee); t !== null && zt(t, e, Ee, it); }
    function _c(e) { var t = Ga(); typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e; var n = { pending: null, interleaved: null, lanes: z, dispatch: null, lastRenderedReducer: Gp, lastRenderedState: e }; t.queue = n; var a = n.dispatch = w0.bind(null, Ze, n); return [t.memoizedState, a]; }
    function Jp(e) { return Kp(Gp); }
    function Zp(e) { return Qp(Gp); }
    function Ru(e, t, n, a) { var r = { tag: e, create: t, destroy: n, deps: a, next: null }, i = Ze.updateQueue; if (i === null)
        i = Og(), Ze.updateQueue = i, i.lastEffect = r.next = r;
    else {
        var o = i.lastEffect;
        if (o === null)
            i.lastEffect = r.next = r;
        else {
            var l = o.next;
            o.next = r, r.next = l, i.lastEffect = r;
        }
    } return r; }
    function em(e) { var t = Ga(); {
        var n = { current: e };
        return t.memoizedState = n, n;
    } }
    function jc(e) { var t = ua(); return t.memoizedState; }
    function xu(e, t, n, a) { var r = Ga(), i = a === void 0 ? null : a; Ze.flags |= e, r.memoizedState = Ru(Ot | t, n, void 0, i); }
    function Ac(e, t, n, a) { var r = ua(), i = a === void 0 ? null : a, o = void 0; if (Mt !== null) {
        var l = Mt.memoizedState;
        if (o = l.destroy, i !== null) {
            var u = l.deps;
            if (qp(i, u)) {
                r.memoizedState = Ru(t, n, o, i);
                return;
            }
        }
    } Ze.flags |= e, r.memoizedState = Ru(Ot | t, n, o, i); }
    function Oc(e, t) { return (Ze.mode & Ba) !== pe ? xu(Xf | Vr | Qf, tn, e, t) : xu(Vr | Qf, tn, e, t); }
    function Cu(e, t) { return Ac(Vr, tn, e, t); }
    function tm(e, t) { return xu(Ge, qa, e, t); }
    function wc(e, t) { return Ac(Ge, qa, e, t); }
    function nm(e, t) { var n = Ge; return n |= Ri, (Ze.mode & Ba) !== pe && (n |= zr), xu(n, wt, e, t); }
    function Mc(e, t) { return Ac(Ge, wt, e, t); }
    function Vg(e, t) { if (typeof t == "function") {
        var n = t, a = e();
        return n(a), function () { n(null); };
    }
    else if (t != null) {
        var r = t;
        r.hasOwnProperty("current") || f("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(r).join(", ") + "}");
        var i = e();
        return r.current = i, function () { r.current = null; };
    } }
    function am(e, t, n) { typeof t != "function" && f("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null"); var a = n != null ? n.concat([e]) : null, r = Ge; return r |= Ri, (Ze.mode & Ba) !== pe && (r |= zr), xu(r, wt, Vg.bind(null, t, e), a); }
    function Lc(e, t, n) { typeof t != "function" && f("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null"); var a = n != null ? n.concat([e]) : null; return Ac(Ge, wt, Vg.bind(null, t, e), a); }
    function _0(e, t) { }
    var Uc = _0;
    function rm(e, t) { var n = Ga(), a = t === void 0 ? null : t; return n.memoizedState = [e, a], e; }
    function kc(e, t) { var n = ua(), a = t === void 0 ? null : t, r = n.memoizedState; if (r !== null && a !== null) {
        var i = r[1];
        if (qp(a, i))
            return r[0];
    } return n.memoizedState = [e, a], e; }
    function im(e, t) { var n = Ga(), a = t === void 0 ? null : t, r = e(); return n.memoizedState = [r, a], r; }
    function Vc(e, t) { var n = ua(), a = t === void 0 ? null : t, r = n.memoizedState; if (r !== null && a !== null) {
        var i = r[1];
        if (qp(a, i))
            return r[0];
    } var o = e(); return n.memoizedState = [o, a], o; }
    function om(e) { var t = Ga(); return t.memoizedState = e, e; }
    function zg(e) { var t = ua(), n = Mt, a = n.memoizedState; return Pg(t, a, e); }
    function Fg(e) { var t = ua(); if (Mt === null)
        return t.memoizedState = e, e; var n = Mt.memoizedState; return Pg(t, n, e); }
    function Pg(e, t, n) { var a = !pT(Hi); if (a) {
        if (!Wn(n, t)) {
            var r = kh();
            Ze.lanes = Ae(Ze.lanes, r), $u(r), e.baseState = !0;
        }
        return t;
    }
    else
        return e.baseState && (e.baseState = !1, wu()), e.memoizedState = n, n; }
    function j0(e, t, n) { var a = Na(); Gt(NT(a, vr)), e(!0); var r = Su.transition; Su.transition = {}; var i = Su.transition; Su.transition._updatedFibers = new Set; try {
        e(!1), t();
    }
    finally {
        if (Gt(a), Su.transition = r, r === null && i._updatedFibers) {
            var o = i._updatedFibers.size;
            o > 10 && T("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), i._updatedFibers.clear();
        }
    } }
    function lm() { var e = _c(!1), t = e[0], n = e[1], a = j0.bind(null, n), r = Ga(); return r.memoizedState = a, [t, a]; }
    function Hg() { var e = Jp(), t = e[0], n = ua(), a = n.memoizedState; return [t, a]; }
    function Bg() { var e = Zp(), t = e[0], n = ua(), a = n.memoizedState; return [t, a]; }
    var Ig = !1;
    function A0() { return Ig; }
    function um() { var e = Ga(), t = rf(), n = t.identifierPrefix, a; if (en()) {
        var r = GC();
        a = ":" + n + "R" + r;
        var i = Tu++;
        i > 0 && (a += "H" + i.toString(32)), a += ":";
    }
    else {
        var o = x0++;
        a = ":" + n + "r" + o.toString(32) + ":";
    } return e.memoizedState = a, a; }
    function zc() { var e = ua(), t = e.memoizedState; return t; }
    function O0(e, t, n) { typeof arguments[3] == "function" && f("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."); var a = ri(e), r = { lane: a, action: n, hasEagerState: !1, eagerState: null, next: null }; if ($g(e))
        Yg(t, r);
    else {
        var i = bg(e, t, r, a);
        if (i !== null) {
            var o = jn();
            zt(i, e, a, o), qg(i, t, a);
        }
    } Gg(e, a); }
    function w0(e, t, n) { typeof arguments[3] == "function" && f("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."); var a = ri(e), r = { lane: a, action: n, hasEagerState: !1, eagerState: null, next: null }; if ($g(e))
        Yg(t, r);
    else {
        var i = e.alternate;
        if (e.lanes === z && (i === null || i.lanes === z)) {
            var o = t.lastRenderedReducer;
            if (o !== null) {
                var l;
                l = Z.current, Z.current = Da;
                try {
                    var u = t.lastRenderedState, d = o(u, n);
                    if (r.hasEagerState = !0, r.eagerState = d, Wn(d, u)) {
                        h0(e, t, r, a);
                        return;
                    }
                }
                catch { }
                finally {
                    Z.current = l;
                }
            }
        }
        var m = bg(e, t, r, a);
        if (m !== null) {
            var N = jn();
            zt(m, e, a, N), qg(m, t, a);
        }
    } Gg(e, a); }
    function $g(e) { var t = e.alternate; return e === Ze || t !== null && t === Ze; }
    function Yg(e, t) { Nu = Cc = !0; var n = e.pending; n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t; }
    function qg(e, t, n) { if (Uh(n)) {
        var a = t.lanes;
        a = Vh(a, e.pendingLanes);
        var r = Ae(a, n);
        t.lanes = r, Dd(e, r);
    } }
    function Gg(e, t, n) { nd(e, t); }
    var Fc = { readContext: Ct, useCallback: hn, useContext: hn, useEffect: hn, useImperativeHandle: hn, useInsertionEffect: hn, useLayoutEffect: hn, useMemo: hn, useReducer: hn, useRef: hn, useState: hn, useDebugValue: hn, useDeferredValue: hn, useTransition: hn, useMutableSource: hn, useSyncExternalStore: hn, useId: hn, unstable_isNewReconciler: sn }, Wg = null, Kg = null, Qg = null, Xg = null, Wa = null, Da = null, Pc = null;
    {
        var sm = function () { f("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."); }, Se = function () { f("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks"); };
        Wg = { readContext: function (e) { return Ct(e); }, useCallback: function (e, t) { return U = "useCallback", Ke(), Io(t), rm(e, t); }, useContext: function (e) { return U = "useContext", Ke(), Ct(e); }, useEffect: function (e, t) { return U = "useEffect", Ke(), Io(t), Oc(e, t); }, useImperativeHandle: function (e, t, n) { return U = "useImperativeHandle", Ke(), Io(n), am(e, t, n); }, useInsertionEffect: function (e, t) { return U = "useInsertionEffect", Ke(), Io(t), tm(e, t); }, useLayoutEffect: function (e, t) { return U = "useLayoutEffect", Ke(), Io(t), nm(e, t); }, useMemo: function (e, t) { U = "useMemo", Ke(), Io(t); var n = Z.current; Z.current = Wa; try {
                return im(e, t);
            }
            finally {
                Z.current = n;
            } }, useReducer: function (e, t, n) { U = "useReducer", Ke(); var a = Z.current; Z.current = Wa; try {
                return Wp(e, t, n);
            }
            finally {
                Z.current = a;
            } }, useRef: function (e) { return U = "useRef", Ke(), em(e); }, useState: function (e) { U = "useState", Ke(); var t = Z.current; Z.current = Wa; try {
                return _c(e);
            }
            finally {
                Z.current = t;
            } }, useDebugValue: function (e, t) { return U = "useDebugValue", Ke(), void 0; }, useDeferredValue: function (e) { return U = "useDeferredValue", Ke(), om(e); }, useTransition: function () { return U = "useTransition", Ke(), lm(); }, useMutableSource: function (e, t, n) { return U = "useMutableSource", Ke(), void 0; }, useSyncExternalStore: function (e, t, n) { return U = "useSyncExternalStore", Ke(), Xp(e, t, n); }, useId: function () { return U = "useId", Ke(), um(); }, unstable_isNewReconciler: sn }, Kg = { readContext: function (e) { return Ct(e); }, useCallback: function (e, t) { return U = "useCallback", G(), rm(e, t); }, useContext: function (e) { return U = "useContext", G(), Ct(e); }, useEffect: function (e, t) { return U = "useEffect", G(), Oc(e, t); }, useImperativeHandle: function (e, t, n) { return U = "useImperativeHandle", G(), am(e, t, n); }, useInsertionEffect: function (e, t) { return U = "useInsertionEffect", G(), tm(e, t); }, useLayoutEffect: function (e, t) { return U = "useLayoutEffect", G(), nm(e, t); }, useMemo: function (e, t) { U = "useMemo", G(); var n = Z.current; Z.current = Wa; try {
                return im(e, t);
            }
            finally {
                Z.current = n;
            } }, useReducer: function (e, t, n) { U = "useReducer", G(); var a = Z.current; Z.current = Wa; try {
                return Wp(e, t, n);
            }
            finally {
                Z.current = a;
            } }, useRef: function (e) { return U = "useRef", G(), em(e); }, useState: function (e) { U = "useState", G(); var t = Z.current; Z.current = Wa; try {
                return _c(e);
            }
            finally {
                Z.current = t;
            } }, useDebugValue: function (e, t) { return U = "useDebugValue", G(), void 0; }, useDeferredValue: function (e) { return U = "useDeferredValue", G(), om(e); }, useTransition: function () { return U = "useTransition", G(), lm(); }, useMutableSource: function (e, t, n) { return U = "useMutableSource", G(), void 0; }, useSyncExternalStore: function (e, t, n) { return U = "useSyncExternalStore", G(), Xp(e, t, n); }, useId: function () { return U = "useId", G(), um(); }, unstable_isNewReconciler: sn }, Qg = { readContext: function (e) { return Ct(e); }, useCallback: function (e, t) { return U = "useCallback", G(), kc(e, t); }, useContext: function (e) { return U = "useContext", G(), Ct(e); }, useEffect: function (e, t) { return U = "useEffect", G(), Cu(e, t); }, useImperativeHandle: function (e, t, n) { return U = "useImperativeHandle", G(), Lc(e, t, n); }, useInsertionEffect: function (e, t) { return U = "useInsertionEffect", G(), wc(e, t); }, useLayoutEffect: function (e, t) { return U = "useLayoutEffect", G(), Mc(e, t); }, useMemo: function (e, t) { U = "useMemo", G(); var n = Z.current; Z.current = Da; try {
                return Vc(e, t);
            }
            finally {
                Z.current = n;
            } }, useReducer: function (e, t, n) { U = "useReducer", G(); var a = Z.current; Z.current = Da; try {
                return Kp(e, t, n);
            }
            finally {
                Z.current = a;
            } }, useRef: function (e) { return U = "useRef", G(), jc(); }, useState: function (e) { U = "useState", G(); var t = Z.current; Z.current = Da; try {
                return Jp(e);
            }
            finally {
                Z.current = t;
            } }, useDebugValue: function (e, t) { return U = "useDebugValue", G(), Uc(); }, useDeferredValue: function (e) { return U = "useDeferredValue", G(), zg(e); }, useTransition: function () { return U = "useTransition", G(), Hg(); }, useMutableSource: function (e, t, n) { return U = "useMutableSource", G(), void 0; }, useSyncExternalStore: function (e, t, n) { return U = "useSyncExternalStore", G(), Dc(e, t); }, useId: function () { return U = "useId", G(), zc(); }, unstable_isNewReconciler: sn }, Xg = { readContext: function (e) { return Ct(e); }, useCallback: function (e, t) { return U = "useCallback", G(), kc(e, t); }, useContext: function (e) { return U = "useContext", G(), Ct(e); }, useEffect: function (e, t) { return U = "useEffect", G(), Cu(e, t); }, useImperativeHandle: function (e, t, n) { return U = "useImperativeHandle", G(), Lc(e, t, n); }, useInsertionEffect: function (e, t) { return U = "useInsertionEffect", G(), wc(e, t); }, useLayoutEffect: function (e, t) { return U = "useLayoutEffect", G(), Mc(e, t); }, useMemo: function (e, t) { U = "useMemo", G(); var n = Z.current; Z.current = Pc; try {
                return Vc(e, t);
            }
            finally {
                Z.current = n;
            } }, useReducer: function (e, t, n) { U = "useReducer", G(); var a = Z.current; Z.current = Pc; try {
                return Qp(e, t, n);
            }
            finally {
                Z.current = a;
            } }, useRef: function (e) { return U = "useRef", G(), jc(); }, useState: function (e) { U = "useState", G(); var t = Z.current; Z.current = Pc; try {
                return Zp(e);
            }
            finally {
                Z.current = t;
            } }, useDebugValue: function (e, t) { return U = "useDebugValue", G(), Uc(); }, useDeferredValue: function (e) { return U = "useDeferredValue", G(), Fg(e); }, useTransition: function () { return U = "useTransition", G(), Bg(); }, useMutableSource: function (e, t, n) { return U = "useMutableSource", G(), void 0; }, useSyncExternalStore: function (e, t, n) { return U = "useSyncExternalStore", G(), Dc(e, t); }, useId: function () { return U = "useId", G(), zc(); }, unstable_isNewReconciler: sn }, Wa = { readContext: function (e) { return sm(), Ct(e); }, useCallback: function (e, t) { return U = "useCallback", Se(), Ke(), rm(e, t); }, useContext: function (e) { return U = "useContext", Se(), Ke(), Ct(e); }, useEffect: function (e, t) { return U = "useEffect", Se(), Ke(), Oc(e, t); }, useImperativeHandle: function (e, t, n) { return U = "useImperativeHandle", Se(), Ke(), am(e, t, n); }, useInsertionEffect: function (e, t) { return U = "useInsertionEffect", Se(), Ke(), tm(e, t); }, useLayoutEffect: function (e, t) { return U = "useLayoutEffect", Se(), Ke(), nm(e, t); }, useMemo: function (e, t) { U = "useMemo", Se(), Ke(); var n = Z.current; Z.current = Wa; try {
                return im(e, t);
            }
            finally {
                Z.current = n;
            } }, useReducer: function (e, t, n) { U = "useReducer", Se(), Ke(); var a = Z.current; Z.current = Wa; try {
                return Wp(e, t, n);
            }
            finally {
                Z.current = a;
            } }, useRef: function (e) { return U = "useRef", Se(), Ke(), em(e); }, useState: function (e) { U = "useState", Se(), Ke(); var t = Z.current; Z.current = Wa; try {
                return _c(e);
            }
            finally {
                Z.current = t;
            } }, useDebugValue: function (e, t) { return U = "useDebugValue", Se(), Ke(), void 0; }, useDeferredValue: function (e) { return U = "useDeferredValue", Se(), Ke(), om(e); }, useTransition: function () { return U = "useTransition", Se(), Ke(), lm(); }, useMutableSource: function (e, t, n) { return U = "useMutableSource", Se(), Ke(), void 0; }, useSyncExternalStore: function (e, t, n) { return U = "useSyncExternalStore", Se(), Ke(), Xp(e, t, n); }, useId: function () { return U = "useId", Se(), Ke(), um(); }, unstable_isNewReconciler: sn }, Da = { readContext: function (e) { return sm(), Ct(e); }, useCallback: function (e, t) { return U = "useCallback", Se(), G(), kc(e, t); }, useContext: function (e) { return U = "useContext", Se(), G(), Ct(e); }, useEffect: function (e, t) { return U = "useEffect", Se(), G(), Cu(e, t); }, useImperativeHandle: function (e, t, n) { return U = "useImperativeHandle", Se(), G(), Lc(e, t, n); }, useInsertionEffect: function (e, t) { return U = "useInsertionEffect", Se(), G(), wc(e, t); }, useLayoutEffect: function (e, t) { return U = "useLayoutEffect", Se(), G(), Mc(e, t); }, useMemo: function (e, t) { U = "useMemo", Se(), G(); var n = Z.current; Z.current = Da; try {
                return Vc(e, t);
            }
            finally {
                Z.current = n;
            } }, useReducer: function (e, t, n) { U = "useReducer", Se(), G(); var a = Z.current; Z.current = Da; try {
                return Kp(e, t, n);
            }
            finally {
                Z.current = a;
            } }, useRef: function (e) { return U = "useRef", Se(), G(), jc(); }, useState: function (e) { U = "useState", Se(), G(); var t = Z.current; Z.current = Da; try {
                return Jp(e);
            }
            finally {
                Z.current = t;
            } }, useDebugValue: function (e, t) { return U = "useDebugValue", Se(), G(), Uc(); }, useDeferredValue: function (e) { return U = "useDeferredValue", Se(), G(), zg(e); }, useTransition: function () { return U = "useTransition", Se(), G(), Hg(); }, useMutableSource: function (e, t, n) { return U = "useMutableSource", Se(), G(), void 0; }, useSyncExternalStore: function (e, t, n) { return U = "useSyncExternalStore", Se(), G(), Dc(e, t); }, useId: function () { return U = "useId", Se(), G(), zc(); }, unstable_isNewReconciler: sn }, Pc = { readContext: function (e) { return sm(), Ct(e); }, useCallback: function (e, t) { return U = "useCallback", Se(), G(), kc(e, t); }, useContext: function (e) { return U = "useContext", Se(), G(), Ct(e); }, useEffect: function (e, t) { return U = "useEffect", Se(), G(), Cu(e, t); }, useImperativeHandle: function (e, t, n) { return U = "useImperativeHandle", Se(), G(), Lc(e, t, n); }, useInsertionEffect: function (e, t) { return U = "useInsertionEffect", Se(), G(), wc(e, t); }, useLayoutEffect: function (e, t) { return U = "useLayoutEffect", Se(), G(), Mc(e, t); }, useMemo: function (e, t) { U = "useMemo", Se(), G(); var n = Z.current; Z.current = Da; try {
                return Vc(e, t);
            }
            finally {
                Z.current = n;
            } }, useReducer: function (e, t, n) { U = "useReducer", Se(), G(); var a = Z.current; Z.current = Da; try {
                return Qp(e, t, n);
            }
            finally {
                Z.current = a;
            } }, useRef: function (e) { return U = "useRef", Se(), G(), jc(); }, useState: function (e) { U = "useState", Se(), G(); var t = Z.current; Z.current = Da; try {
                return Zp(e);
            }
            finally {
                Z.current = t;
            } }, useDebugValue: function (e, t) { return U = "useDebugValue", Se(), G(), Uc(); }, useDeferredValue: function (e) { return U = "useDeferredValue", Se(), G(), Fg(e); }, useTransition: function () { return U = "useTransition", Se(), G(), Bg(); }, useMutableSource: function (e, t, n) { return U = "useMutableSource", Se(), G(), void 0; }, useSyncExternalStore: function (e, t, n) { return U = "useSyncExternalStore", Se(), G(), Dc(e, t); }, useId: function () { return U = "useId", Se(), G(), zc(); }, unstable_isNewReconciler: sn };
    }
    var ei = p.unstable_now, Jg = 0, Hc = -1, Du = -1, Bc = -1, cm = !1, Ic = !1;
    function Zg() { return cm; }
    function M0() { Ic = !0; }
    function L0() { cm = !1, Ic = !1; }
    function U0() { cm = Ic, Ic = !1; }
    function eb() { return Jg; }
    function tb() { Jg = ei(); }
    function fm(e) { Du = ei(), e.actualStartTime < 0 && (e.actualStartTime = ei()); }
    function nb(e) { Du = -1; }
    function $c(e, t) { if (Du >= 0) {
        var n = ei() - Du;
        e.actualDuration += n, t && (e.selfBaseDuration = n), Du = -1;
    } }
    function Ka(e) { if (Hc >= 0) {
        var t = ei() - Hc;
        Hc = -1;
        for (var n = e.return; n !== null;) {
            switch (n.tag) {
                case j:
                    var a = n.stateNode;
                    a.effectDuration += t;
                    return;
                case ye:
                    var r = n.stateNode;
                    r.effectDuration += t;
                    return;
            }
            n = n.return;
        }
    } }
    function dm(e) { if (Bc >= 0) {
        var t = ei() - Bc;
        Bc = -1;
        for (var n = e.return; n !== null;) {
            switch (n.tag) {
                case j:
                    var a = n.stateNode;
                    a !== null && (a.passiveEffectDuration += t);
                    return;
                case ye:
                    var r = n.stateNode;
                    r !== null && (r.passiveEffectDuration += t);
                    return;
            }
            n = n.return;
        }
    } }
    function Qa() { Hc = ei(); }
    function pm() { Bc = ei(); }
    function mm(e) { for (var t = e.child; t;)
        e.actualDuration += t.actualDuration, t = t.sibling; }
    function _a(e, t) { if (e && e.defaultProps) {
        var n = Me({}, t), a = e.defaultProps;
        for (var r in a)
            n[r] === void 0 && (n[r] = a[r]);
        return n;
    } return t; }
    var vm = {}, hm, ym, gm, bm, Em, ab, Yc, Sm, Nm, Tm, _u;
    {
        hm = new Set, ym = new Set, gm = new Set, bm = new Set, Sm = new Set, Em = new Set, Nm = new Set, Tm = new Set, _u = new Set;
        var rb = new Set;
        Yc = function (e, t) { if (!(e === null || typeof e == "function")) {
            var n = t + "_" + e;
            rb.has(n) || (rb.add(n), f("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        } }, ab = function (e, t) { if (t === void 0) {
            var n = qe(e) || "Component";
            Em.has(n) || (Em.add(n), f("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
        } }, Object.defineProperty(vm, "_processChildContext", { enumerable: !1, value: function () { throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal)."); } }), Object.freeze(vm);
    }
    function Rm(e, t, n, a) { var r = e.memoizedState, i = n(a, r); {
        if (e.mode & bt) {
            Yt(!0);
            try {
                i = n(a, r);
            }
            finally {
                Yt(!1);
            }
        }
        ab(t, i);
    } var o = i == null ? r : Me({}, r, i); if (e.memoizedState = o, e.lanes === z) {
        var l = e.updateQueue;
        l.baseState = o;
    } }
    var xm = { isMounted: CN, enqueueSetState: function (e, t, n) { var a = fo(e), r = jn(), i = ri(a), o = Nr(r, i); o.payload = t, n != null && (Yc(n, "setState"), o.callback = n); var l = Qr(a, o, i); l !== null && (zt(l, a, i, r), Ec(l, a, i)), nd(a, i); }, enqueueReplaceState: function (e, t, n) { var a = fo(e), r = jn(), i = ri(a), o = Nr(r, i); o.tag = Sg, o.payload = t, n != null && (Yc(n, "replaceState"), o.callback = n); var l = Qr(a, o, i); l !== null && (zt(l, a, i, r), Ec(l, a, i)), nd(a, i); }, enqueueForceUpdate: function (e, t) { var n = fo(e), a = jn(), r = ri(n), i = Nr(a, r); i.tag = yc, t != null && (Yc(t, "forceUpdate"), i.callback = t); var o = Qr(n, i, r); o !== null && (zt(o, n, r, a), Ec(o, n, r)), aT(n, r); } };
    function ib(e, t, n, a, r, i, o) { var l = e.stateNode; if (typeof l.shouldComponentUpdate == "function") {
        var u = l.shouldComponentUpdate(a, i, o);
        {
            if (e.mode & bt) {
                Yt(!0);
                try {
                    u = l.shouldComponentUpdate(a, i, o);
                }
                finally {
                    Yt(!1);
                }
            }
            u === void 0 && f("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", qe(t) || "Component");
        }
        return u;
    } return t.prototype && t.prototype.isPureReactComponent ? !Ql(n, a) || !Ql(r, i) : !0; }
    function k0(e, t, n) {
        var a = e.stateNode;
        {
            var r = qe(t) || "Component", i = a.render;
            i || (t.prototype && typeof t.prototype.render == "function" ? f("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", r) : f("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", r)), a.getInitialState && !a.getInitialState.isReactClassApproved && !a.state && f("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", r), a.getDefaultProps && !a.getDefaultProps.isReactClassApproved && f("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", r), a.propTypes && f("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", r), a.contextType && f("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", r), t.childContextTypes && !_u.has(t) && (e.mode & bt) === pe && (_u.add(t), f(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, r)), t.contextTypes && !_u.has(t) && (e.mode & bt) === pe && (_u.add(t), f(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, r)), a.contextTypes && f("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", r), t.contextType && t.contextTypes && !Nm.has(t) && (Nm.add(t), f("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", r)), typeof a.componentShouldUpdate == "function" && f("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", r), t.prototype && t.prototype.isPureReactComponent && typeof a.shouldComponentUpdate < "u" && f("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", qe(t) || "A pure component"), typeof a.componentDidUnmount == "function" && f("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", r), typeof a.componentDidReceiveProps == "function" && f("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", r), typeof a.componentWillRecieveProps == "function" && f("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", r), typeof a.UNSAFE_componentWillRecieveProps == "function" && f("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", r);
            var o = a.props !== n;
            a.props !== void 0 && o && f("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", r, r), a.defaultProps && f("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", r, r), typeof a.getSnapshotBeforeUpdate == "function" && typeof a.componentDidUpdate != "function" && !gm.has(t) && (gm.add(t), f("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", qe(t))), typeof a.getDerivedStateFromProps == "function" && f("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", r), typeof a.getDerivedStateFromError == "function" && f("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", r), typeof t.getSnapshotBeforeUpdate == "function" && f("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", r);
            var l = a.state;
            l && (typeof l != "object" || Le(l)) && f("%s.state: must be set to an object or null", r), typeof a.getChildContext == "function" && typeof t.childContextTypes != "object" && f("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", r);
        }
    }
    function ob(e, t) { t.updater = xm, e.stateNode = t, NN(t, e), t._reactInternalInstance = vm; }
    function lb(e, t, n) {
        var a = !1, r = Kn, i = Kn, o = t.contextType;
        if ("contextType" in t) {
            var l = o === null || o !== void 0 && o.$$typeof === K && o._context === void 0;
            if (!l && !Tm.has(t)) {
                Tm.add(t);
                var u = "";
                o === void 0 ? u = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof o != "object" ? u = " However, it is set to a " + typeof o + "." : o.$$typeof === F ? u = " Did you accidentally pass the Context.Provider instead?" : o._context !== void 0 ? u = " Did you accidentally pass the Context.Consumer instead?" : u = " However, it is set to an object with keys {" + Object.keys(o).join(", ") + "}.", f("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", qe(t) || "Component", u);
            }
        }
        if (typeof o == "object" && o !== null)
            i = Ct(o);
        else {
            r = Oo(e, t, !0);
            var d = t.contextTypes;
            a = d != null, i = a ? wo(e, r) : Kn;
        }
        var m = new t(n, i);
        if (e.mode & bt) {
            Yt(!0);
            try {
                m = new t(n, i);
            }
            finally {
                Yt(!1);
            }
        }
        var N = e.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null;
        ob(e, m);
        {
            if (typeof t.getDerivedStateFromProps == "function" && N === null) {
                var S = qe(t) || "Component";
                ym.has(S) || (ym.add(S), f("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", S, m.state === null ? "null" : "undefined", S));
            }
            if (typeof t.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function") {
                var C = null, _ = null, M = null;
                if (typeof m.componentWillMount == "function" && m.componentWillMount.__suppressDeprecationWarning !== !0 ? C = "componentWillMount" : typeof m.UNSAFE_componentWillMount == "function" && (C = "UNSAFE_componentWillMount"), typeof m.componentWillReceiveProps == "function" && m.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? _ = "componentWillReceiveProps" : typeof m.UNSAFE_componentWillReceiveProps == "function" && (_ = "UNSAFE_componentWillReceiveProps"), typeof m.componentWillUpdate == "function" && m.componentWillUpdate.__suppressDeprecationWarning !== !0 ? M = "componentWillUpdate" : typeof m.UNSAFE_componentWillUpdate == "function" && (M = "UNSAFE_componentWillUpdate"), C !== null || _ !== null || M !== null) {
                    var Q = qe(t) || "Component", fe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
                    bm.has(Q) || (bm.add(Q), f(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Q, fe, C !== null ? `
  ` + C : "", _ !== null ? `
  ` + _ : "", M !== null ? `
  ` + M : ""));
                }
            }
        }
        return a && Qy(e, r, i), m;
    }
    function V0(e, t) { var n = t.state; typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && (f("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", xe(e) || "Component"), xm.enqueueReplaceState(t, t.state, null)); }
    function ub(e, t, n, a) { var r = t.state; if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== r) {
        {
            var i = xe(e) || "Component";
            hm.has(i) || (hm.add(i), f("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", i));
        }
        xm.enqueueReplaceState(t, t.state, null);
    } }
    function Cm(e, t, n, a) { k0(e, t, n); var r = e.stateNode; r.props = n, r.state = e.memoizedState, r.refs = {}, Up(e); var i = t.contextType; if (typeof i == "object" && i !== null)
        r.context = Ct(i);
    else {
        var o = Oo(e, t, !0);
        r.context = wo(e, o);
    } {
        if (r.state === n) {
            var l = qe(t) || "Component";
            Sm.has(l) || (Sm.add(l), f("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", l));
        }
        e.mode & bt && xa.recordLegacyContextWarning(e, r), xa.recordUnsafeLifecycleWarnings(e, r);
    } r.state = e.memoizedState; var u = t.getDerivedStateFromProps; if (typeof u == "function" && (Rm(e, t, u, n), r.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof r.getSnapshotBeforeUpdate != "function" && (typeof r.UNSAFE_componentWillMount == "function" || typeof r.componentWillMount == "function") && (V0(e, r), Sc(e, n, r, a), r.state = e.memoizedState), typeof r.componentDidMount == "function") {
        var d = Ge;
        d |= Ri, (e.mode & Ba) !== pe && (d |= zr), e.flags |= d;
    } }
    function z0(e, t, n, a) { var r = e.stateNode, i = e.memoizedProps; r.props = i; var o = r.context, l = t.contextType, u = Kn; if (typeof l == "object" && l !== null)
        u = Ct(l);
    else {
        var d = Oo(e, t, !0);
        u = wo(e, d);
    } var m = t.getDerivedStateFromProps, N = typeof m == "function" || typeof r.getSnapshotBeforeUpdate == "function"; !N && (typeof r.UNSAFE_componentWillReceiveProps == "function" || typeof r.componentWillReceiveProps == "function") && (i !== n || o !== u) && ub(e, r, n, u), Tg(); var S = e.memoizedState, C = r.state = S; if (Sc(e, n, r, a), C = e.memoizedState, i === n && S === C && !nc() && !Nc()) {
        if (typeof r.componentDidMount == "function") {
            var _ = Ge;
            _ |= Ri, (e.mode & Ba) !== pe && (_ |= zr), e.flags |= _;
        }
        return !1;
    } typeof m == "function" && (Rm(e, t, m, n), C = e.memoizedState); var M = Nc() || ib(e, t, i, n, S, C, u); if (M) {
        if (!N && (typeof r.UNSAFE_componentWillMount == "function" || typeof r.componentWillMount == "function") && (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function") {
            var Q = Ge;
            Q |= Ri, (e.mode & Ba) !== pe && (Q |= zr), e.flags |= Q;
        }
    }
    else {
        if (typeof r.componentDidMount == "function") {
            var fe = Ge;
            fe |= Ri, (e.mode & Ba) !== pe && (fe |= zr), e.flags |= fe;
        }
        e.memoizedProps = n, e.memoizedState = C;
    } return r.props = n, r.state = C, r.context = u, M; }
    function F0(e, t, n, a, r) { var i = t.stateNode; Ng(e, t); var o = t.memoizedProps, l = t.type === t.elementType ? o : _a(t.type, o); i.props = l; var u = t.pendingProps, d = i.context, m = n.contextType, N = Kn; if (typeof m == "object" && m !== null)
        N = Ct(m);
    else {
        var S = Oo(t, n, !0);
        N = wo(t, S);
    } var C = n.getDerivedStateFromProps, _ = typeof C == "function" || typeof i.getSnapshotBeforeUpdate == "function"; !_ && (typeof i.UNSAFE_componentWillReceiveProps == "function" || typeof i.componentWillReceiveProps == "function") && (o !== u || d !== N) && ub(t, i, a, N), Tg(); var M = t.memoizedState, Q = i.state = M; if (Sc(t, a, i, r), Q = t.memoizedState, o === u && M === Q && !nc() && !Nc() && !da)
        return typeof i.componentDidUpdate == "function" && (o !== e.memoizedProps || M !== e.memoizedState) && (t.flags |= Ge), typeof i.getSnapshotBeforeUpdate == "function" && (o !== e.memoizedProps || M !== e.memoizedState) && (t.flags |= mo), !1; typeof C == "function" && (Rm(t, n, C, a), Q = t.memoizedState); var fe = Nc() || ib(t, n, l, a, M, Q, N) || da; return fe ? (!_ && (typeof i.UNSAFE_componentWillUpdate == "function" || typeof i.componentWillUpdate == "function") && (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, Q, N), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(a, Q, N)), typeof i.componentDidUpdate == "function" && (t.flags |= Ge), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= mo)) : (typeof i.componentDidUpdate == "function" && (o !== e.memoizedProps || M !== e.memoizedState) && (t.flags |= Ge), typeof i.getSnapshotBeforeUpdate == "function" && (o !== e.memoizedProps || M !== e.memoizedState) && (t.flags |= mo), t.memoizedProps = a, t.memoizedState = Q), i.props = a, i.state = Q, i.context = N, fe; }
    function Bi(e, t) { return { value: e, source: t, stack: hi(t), digest: null }; }
    function Dm(e, t, n) { return { value: e, source: null, stack: n ?? null, digest: t ?? null }; }
    function P0(e, t) { return !0; }
    function _m(e, t) {
        try {
            var n = P0(e, t);
            if (n === !1)
                return;
            var a = t.value, r = t.source, i = t.stack, o = i !== null ? i : "";
            if (a != null && a._suppressLogging) {
                if (e.tag === A)
                    return;
                console.error(a);
            }
            var l = r ? xe(r) : null, u = l ? "The above error occurred in the <" + l + "> component:" : "The above error occurred in one of your React components:", d;
            if (e.tag === j)
                d = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
            else {
                var m = xe(e) || "Anonymous";
                d = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + m + ".");
            }
            var N = u + `
` + o + `

` + ("" + d);
            console.error(N);
        }
        catch (S) {
            setTimeout(function () { throw S; });
        }
    }
    var H0 = typeof WeakMap == "function" ? WeakMap : Map;
    function sb(e, t, n) { var a = Nr(it, n); a.tag = Mp, a.payload = { element: null }; var r = t.value; return a.callback = function () { M_(r), _m(e, t); }, a; }
    function jm(e, t, n) { var a = Nr(it, n); a.tag = Mp; var r = e.type.getDerivedStateFromError; if (typeof r == "function") {
        var i = t.value;
        a.payload = function () { return r(i); }, a.callback = function () { EE(e), _m(e, t); };
    } var o = e.stateNode; return o !== null && typeof o.componentDidCatch == "function" && (a.callback = function () { EE(e), _m(e, t), typeof r != "function" && O_(this); var u = t.value, d = t.stack; this.componentDidCatch(u, { componentStack: d !== null ? d : "" }), typeof r != "function" && (Yn(e.lanes, Ee) || f("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", xe(e) || "Unknown")); }), a; }
    function cb(e, t, n) { var a = e.pingCache, r; if (a === null ? (a = e.pingCache = new H0, r = new Set, a.set(t, r)) : (r = a.get(t), r === void 0 && (r = new Set, a.set(t, r))), !r.has(n)) {
        r.add(n);
        var i = L_.bind(null, e, t, n);
        Sa && Yu(e, n), t.then(i, i);
    } }
    function B0(e, t, n, a) { var r = e.updateQueue; if (r === null) {
        var i = new Set;
        i.add(n), e.updateQueue = i;
    }
    else
        r.add(n); }
    function I0(e, t) { var n = e.tag; if ((e.mode & ze) === pe && (n === O || n === te || n === oe)) {
        var a = e.alternate;
        a ? (e.updateQueue = a.updateQueue, e.memoizedState = a.memoizedState, e.lanes = a.lanes) : (e.updateQueue = null, e.memoizedState = null);
    } }
    function fb(e) { var t = e; do {
        if (t.tag === ue && T0(t))
            return t;
        t = t.return;
    } while (t !== null); return null; }
    function db(e, t, n, a, r) { if ((e.mode & ze) === pe) {
        if (e === t)
            e.flags |= Cn;
        else {
            if (e.flags |= We, n.flags |= Wf, n.flags &= -52805, n.tag === A) {
                var i = n.alternate;
                if (i === null)
                    n.tag = He;
                else {
                    var o = Nr(it, Ee);
                    o.tag = yc, Qr(n, o, Ee);
                }
            }
            n.lanes = Ae(n.lanes, Ee);
        }
        return e;
    } return e.flags |= Cn, e.lanes = r, e; }
    function $0(e, t, n, a, r) { if (n.flags |= Es, Sa && Yu(e, r), a !== null && typeof a == "object" && typeof a.then == "function") {
        var i = a;
        I0(n), en() && n.mode & ze && ag();
        var o = fb(t);
        if (o !== null) {
            o.flags &= ~fr, db(o, t, n, e, r), o.mode & ze && cb(e, i, r), B0(o, e, i);
            return;
        }
        else {
            if (!dT(r)) {
                cb(e, i, r), uv();
                return;
            }
            var l = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
            a = l;
        }
    }
    else if (en() && n.mode & ze) {
        ag();
        var u = fb(t);
        if (u !== null) {
            (u.flags & Cn) === ve && (u.flags |= fr), db(u, t, n, e, r), Sp(Bi(a, n));
            return;
        }
    } a = Bi(a, n), T_(a); var d = t; do {
        switch (d.tag) {
            case j: {
                var m = a;
                d.flags |= Cn;
                var N = Ul(r);
                d.lanes = Ae(d.lanes, N);
                var S = sb(d, m, N);
                kp(d, S);
                return;
            }
            case A:
                var C = a, _ = d.type, M = d.stateNode;
                if ((d.flags & We) === ve && (typeof _.getDerivedStateFromError == "function" || M !== null && typeof M.componentDidCatch == "function" && !fE(M))) {
                    d.flags |= Cn;
                    var Q = Ul(r);
                    d.lanes = Ae(d.lanes, Q);
                    var fe = jm(d, C, Q);
                    kp(d, fe);
                    return;
                }
                break;
        }
        d = d.return;
    } while (d !== null); }
    function Y0() { return null; }
    var ju = h.ReactCurrentOwner, ja = !1, Am, Au, Om, wm, Mm, Ii, Lm, qc, Ou;
    Am = {}, Au = {}, Om = {}, wm = {}, Mm = {}, Ii = !1, Lm = {}, qc = {}, Ou = {};
    function Dn(e, t, n, a) { e === null ? t.child = vg(t, null, n, a) : t.child = ko(t, e.child, n, a); }
    function q0(e, t, n, a) { t.child = ko(t, e.child, null, a), t.child = ko(t, null, n, a); }
    function pb(e, t, n, a, r) { if (t.type !== t.elementType) {
        var i = n.propTypes;
        i && Ta(i, a, "prop", qe(n));
    } var o = n.render, l = t.ref, u, d; zo(t, r), jl(t); {
        if (ju.current = t, aa(!0), u = $o(e, t, o, a, l, r), d = Yo(), t.mode & bt) {
            Yt(!0);
            try {
                u = $o(e, t, o, a, l, r), d = Yo();
            }
            finally {
                Yt(!1);
            }
        }
        aa(!1);
    } return yo(), e !== null && !ja ? (jg(e, t, r), Tr(e, t, r)) : (en() && d && vp(t), t.flags |= po, Dn(e, t, u, r), t.child); }
    function mb(e, t, n, a, r) { if (e === null) {
        var i = n.type;
        if (X_(i) && n.compare === null && n.defaultProps === void 0) {
            var o = i;
            return o = Zo(i), t.tag = oe, t.type = o, Vm(t, i), vb(e, t, o, a, r);
        }
        {
            var l = i.propTypes;
            if (l && Ta(l, a, "prop", qe(i)), n.defaultProps !== void 0) {
                var u = qe(i) || "Unknown";
                Ou[u] || (f("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", u), Ou[u] = !0);
            }
        }
        var d = bv(n.type, null, a, t, t.mode, r);
        return d.ref = t.ref, d.return = t, t.child = d, d;
    } {
        var m = n.type, N = m.propTypes;
        N && Ta(N, a, "prop", qe(m));
    } var S = e.child, C = Im(e, r); if (!C) {
        var _ = S.memoizedProps, M = n.compare;
        if (M = M !== null ? M : Ql, M(_, a) && e.ref === t.ref)
            return Tr(e, t, r);
    } t.flags |= po; var Q = Wi(S, a); return Q.ref = t.ref, Q.return = t, t.child = Q, Q; }
    function vb(e, t, n, a, r) { if (t.type !== t.elementType) {
        var i = t.elementType;
        if (i.$$typeof === de) {
            var o = i, l = o._payload, u = o._init;
            try {
                i = u(l);
            }
            catch {
                i = null;
            }
            var d = i && i.propTypes;
            d && Ta(d, a, "prop", qe(i));
        }
    } if (e !== null) {
        var m = e.memoizedProps;
        if (Ql(m, a) && e.ref === t.ref && t.type === e.type)
            if (ja = !1, t.pendingProps = a = m, Im(e, r))
                (e.flags & Wf) !== ve && (ja = !0);
            else
                return t.lanes = e.lanes, Tr(e, t, r);
    } return Um(e, t, n, a, r); }
    function hb(e, t, n) { var a = t.pendingProps, r = a.children, i = e !== null ? e.memoizedState : null; if (a.mode === "hidden" || Hn)
        if ((t.mode & ze) === pe) {
            var o = { baseLanes: z, cachePool: null, transitions: null };
            t.memoizedState = o, of(t, n);
        }
        else if (Yn(n, $n)) {
            var N = { baseLanes: z, cachePool: null, transitions: null };
            t.memoizedState = N;
            var S = i !== null ? i.baseLanes : n;
            of(t, S);
        }
        else {
            var l = null, u;
            if (i !== null) {
                var d = i.baseLanes;
                u = Ae(d, n);
            }
            else
                u = n;
            t.lanes = t.childLanes = $n;
            var m = { baseLanes: u, cachePool: l, transitions: null };
            return t.memoizedState = m, t.updateQueue = null, of(t, u), null;
        }
    else {
        var C;
        i !== null ? (C = Ae(i.baseLanes, n), t.memoizedState = null) : C = n, of(t, C);
    } return Dn(e, t, r, n), t.child; }
    function G0(e, t, n) { var a = t.pendingProps; return Dn(e, t, a, n), t.child; }
    function W0(e, t, n) { var a = t.pendingProps.children; return Dn(e, t, a, n), t.child; }
    function K0(e, t, n) { {
        t.flags |= Ge;
        {
            var a = t.stateNode;
            a.effectDuration = 0, a.passiveEffectDuration = 0;
        }
    } var r = t.pendingProps, i = r.children; return Dn(e, t, i, n), t.child; }
    function yb(e, t) { var n = t.ref; (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= Ni, t.flags |= Kf); }
    function Um(e, t, n, a, r) { if (t.type !== t.elementType) {
        var i = n.propTypes;
        i && Ta(i, a, "prop", qe(n));
    } var o; {
        var l = Oo(t, n, !0);
        o = wo(t, l);
    } var u, d; zo(t, r), jl(t); {
        if (ju.current = t, aa(!0), u = $o(e, t, n, a, o, r), d = Yo(), t.mode & bt) {
            Yt(!0);
            try {
                u = $o(e, t, n, a, o, r), d = Yo();
            }
            finally {
                Yt(!1);
            }
        }
        aa(!1);
    } return yo(), e !== null && !ja ? (jg(e, t, r), Tr(e, t, r)) : (en() && d && vp(t), t.flags |= po, Dn(e, t, u, r), t.child); }
    function gb(e, t, n, a, r) { {
        switch (dj(t)) {
            case !1: {
                var i = t.stateNode, o = t.type, l = new o(t.memoizedProps, i.context), u = l.state;
                i.updater.enqueueSetState(i, u, null);
                break;
            }
            case !0: {
                t.flags |= We, t.flags |= Cn;
                var d = new Error("Simulated error coming from DevTools"), m = Ul(r);
                t.lanes = Ae(t.lanes, m);
                var N = jm(t, Bi(d, t), m);
                kp(t, N);
                break;
            }
        }
        if (t.type !== t.elementType) {
            var S = n.propTypes;
            S && Ta(S, a, "prop", qe(n));
        }
    } var C; Ya(n) ? (C = !0, rc(t)) : C = !1, zo(t, r); var _ = t.stateNode, M; _ === null ? (Wc(e, t), lb(t, n, a), Cm(t, n, a, r), M = !0) : e === null ? M = z0(t, n, a, r) : M = F0(e, t, n, a, r); var Q = km(e, t, n, M, C, r); {
        var fe = t.stateNode;
        M && fe.props !== a && (Ii || f("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", xe(t) || "a component"), Ii = !0);
    } return Q; }
    function km(e, t, n, a, r, i) { yb(e, t); var o = (t.flags & We) !== ve; if (!a && !o)
        return r && Zy(t, n, !1), Tr(e, t, i); var l = t.stateNode; ju.current = t; var u; if (o && typeof n.getDerivedStateFromError != "function")
        u = null, nb();
    else {
        jl(t);
        {
            if (aa(!0), u = l.render(), t.mode & bt) {
                Yt(!0);
                try {
                    l.render();
                }
                finally {
                    Yt(!1);
                }
            }
            aa(!1);
        }
        yo();
    } return t.flags |= po, e !== null && o ? q0(e, t, u, i) : Dn(e, t, u, i), t.memoizedState = l.state, r && Zy(t, n, !0), t.child; }
    function bb(e) { var t = e.stateNode; t.pendingContext ? Xy(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Xy(e, t.context, !1), Vp(e, t.containerInfo); }
    function Q0(e, t, n) { if (bb(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React."); var a = t.pendingProps, r = t.memoizedState, i = r.element; Ng(e, t), Sc(t, a, null, n); var o = t.memoizedState; t.stateNode; var l = o.element; if (r.isDehydrated) {
        var u = { element: l, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, d = t.updateQueue;
        if (d.baseState = u, t.memoizedState = u, t.flags & fr) {
            var m = Bi(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
            return Eb(e, t, l, n, m);
        }
        else if (l !== i) {
            var N = Bi(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
            return Eb(e, t, l, n, N);
        }
        else {
            ZC(t);
            var S = vg(t, null, l, n);
            t.child = S;
            for (var C = S; C;)
                C.flags = C.flags & ~xt | dr, C = C.sibling;
        }
    }
    else {
        if (Uo(), l === i)
            return Tr(e, t, n);
        Dn(e, t, l, n);
    } return t.child; }
    function Eb(e, t, n, a, r) { return Uo(), Sp(r), t.flags |= fr, Dn(e, t, n, a), t.child; }
    function X0(e, t, n) { Cg(t), e === null && Ep(t); var a = t.type, r = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = r.children, l = tp(a, r); return l ? o = null : i !== null && tp(a, i) && (t.flags |= Dl), yb(e, t), Dn(e, t, o, n), t.child; }
    function J0(e, t) { return e === null && Ep(t), null; }
    function Z0(e, t, n, a) { Wc(e, t); var r = t.pendingProps, i = n, o = i._payload, l = i._init, u = l(o); t.type = u; var d = t.tag = J_(u), m = _a(u, r), N; switch (d) {
        case O: return Vm(t, u), t.type = u = Zo(u), N = Um(null, t, u, m, a), N;
        case A: return t.type = u = pv(u), N = gb(null, t, u, m, a), N;
        case te: return t.type = u = mv(u), N = pb(null, t, u, m, a), N;
        case V: {
            if (t.type !== t.elementType) {
                var S = u.propTypes;
                S && Ta(S, m, "prop", qe(u));
            }
            return N = mb(null, t, u, _a(u.type, m), a), N;
        }
    } var C = ""; throw u !== null && typeof u == "object" && u.$$typeof === de && (C = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + u + ". " + ("Lazy element type must resolve to a class or function." + C)); }
    function eD(e, t, n, a, r) { Wc(e, t), t.tag = A; var i; return Ya(n) ? (i = !0, rc(t)) : i = !1, zo(t, r), lb(t, n, a), Cm(t, n, a, r), km(null, t, n, !0, i, r); }
    function tD(e, t, n, a) { Wc(e, t); var r = t.pendingProps, i; {
        var o = Oo(t, n, !1);
        i = wo(t, o);
    } zo(t, a); var l, u; jl(t); {
        if (n.prototype && typeof n.prototype.render == "function") {
            var d = qe(n) || "Unknown";
            Am[d] || (f("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", d, d), Am[d] = !0);
        }
        t.mode & bt && xa.recordLegacyContextWarning(t, null), aa(!0), ju.current = t, l = $o(null, t, n, r, i, a), u = Yo(), aa(!1);
    } if (yo(), t.flags |= po, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0) {
        var m = qe(n) || "Unknown";
        Au[m] || (f("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", m, m, m), Au[m] = !0);
    } if (typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0) {
        {
            var N = qe(n) || "Unknown";
            Au[N] || (f("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", N, N, N), Au[N] = !0);
        }
        t.tag = A, t.memoizedState = null, t.updateQueue = null;
        var S = !1;
        return Ya(n) ? (S = !0, rc(t)) : S = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Up(t), ob(t, l), Cm(t, n, r, a), km(null, t, n, !0, S, a);
    }
    else {
        if (t.tag = O, t.mode & bt) {
            Yt(!0);
            try {
                l = $o(null, t, n, r, i, a), u = Yo();
            }
            finally {
                Yt(!1);
            }
        }
        return en() && u && vp(t), Dn(null, t, l, a), Vm(t, n), t.child;
    } }
    function Vm(e, t) {
        {
            if (t && t.childContextTypes && f("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
                var n = "", a = Ur();
                a && (n += `

Check the render method of \`` + a + "`.");
                var r = a || "", i = e._debugSource;
                i && (r = i.fileName + ":" + i.lineNumber), Mm[r] || (Mm[r] = !0, f("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", n));
            }
            if (t.defaultProps !== void 0) {
                var o = qe(t) || "Unknown";
                Ou[o] || (f("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", o), Ou[o] = !0);
            }
            if (typeof t.getDerivedStateFromProps == "function") {
                var l = qe(t) || "Unknown";
                wm[l] || (f("%s: Function components do not support getDerivedStateFromProps.", l), wm[l] = !0);
            }
            if (typeof t.contextType == "object" && t.contextType !== null) {
                var u = qe(t) || "Unknown";
                Om[u] || (f("%s: Function components do not support contextType.", u), Om[u] = !0);
            }
        }
    }
    var zm = { dehydrated: null, treeContext: null, retryLane: qt };
    function Fm(e) { return { baseLanes: e, cachePool: Y0(), transitions: null }; }
    function nD(e, t) { var n = null; return { baseLanes: Ae(e.baseLanes, t), cachePool: n, transitions: e.transitions }; }
    function aD(e, t, n, a) { if (t !== null) {
        var r = t.memoizedState;
        if (r === null)
            return !1;
    } return Pp(e, Eu); }
    function rD(e, t) { return Ds(e.childLanes, t); }
    function Sb(e, t, n) { var a = t.pendingProps; pj(t) && (t.flags |= We); var r = Ca.current, i = !1, o = (t.flags & We) !== ve; if (o || aD(r, e) ? (i = !0, t.flags &= ~We) : (e === null || e.memoizedState !== null) && (r = N0(r, _g)), r = Po(r), Jr(t, r), e === null) {
        Ep(t);
        var l = t.memoizedState;
        if (l !== null) {
            var u = l.dehydrated;
            if (u !== null)
                return sD(t, u);
        }
        var d = a.children, m = a.fallback;
        if (i) {
            var N = iD(t, d, m, n), S = t.child;
            return S.memoizedState = Fm(n), t.memoizedState = zm, N;
        }
        else
            return Pm(t, d);
    }
    else {
        var C = e.memoizedState;
        if (C !== null) {
            var _ = C.dehydrated;
            if (_ !== null)
                return cD(e, t, o, a, _, C, n);
        }
        if (i) {
            var M = a.fallback, Q = a.children, fe = lD(e, t, Q, M, n), le = t.child, Pe = e.child.memoizedState;
            return le.memoizedState = Pe === null ? Fm(n) : nD(Pe, n), le.childLanes = rD(e, n), t.memoizedState = zm, fe;
        }
        else {
            var Ue = a.children, R = oD(e, t, Ue, n);
            return t.memoizedState = null, R;
        }
    } }
    function Pm(e, t, n) { var a = e.mode, r = { mode: "visible", children: t }, i = Hm(r, a); return i.return = e, e.child = i, i; }
    function iD(e, t, n, a) { var r = e.mode, i = e.child, o = { mode: "hidden", children: t }, l, u; return (r & ze) === pe && i !== null ? (l = i, l.childLanes = z, l.pendingProps = o, e.mode & Je && (l.actualDuration = 0, l.actualStartTime = -1, l.selfBaseDuration = 0, l.treeBaseDuration = 0), u = oi(n, r, a, null)) : (l = Hm(o, r), u = oi(n, r, a, null)), l.return = e, u.return = e, l.sibling = u, e.child = l, u; }
    function Hm(e, t, n) { return NE(e, t, z, null); }
    function Nb(e, t) { return Wi(e, t); }
    function oD(e, t, n, a) { var r = e.child, i = r.sibling, o = Nb(r, { mode: "visible", children: n }); if ((t.mode & ze) === pe && (o.lanes = a), o.return = t, o.sibling = null, i !== null) {
        var l = t.deletions;
        l === null ? (t.deletions = [i], t.flags |= Si) : l.push(i);
    } return t.child = o, o; }
    function lD(e, t, n, a, r) { var i = t.mode, o = e.child, l = o.sibling, u = { mode: "hidden", children: n }, d; if ((i & ze) === pe && t.child !== o) {
        var m = t.child;
        d = m, d.childLanes = z, d.pendingProps = u, t.mode & Je && (d.actualDuration = 0, d.actualStartTime = -1, d.selfBaseDuration = o.selfBaseDuration, d.treeBaseDuration = o.treeBaseDuration), t.deletions = null;
    }
    else
        d = Nb(o, u), d.subtreeFlags = o.subtreeFlags & pr; var N; return l !== null ? N = Wi(l, a) : (N = oi(a, i, r, null), N.flags |= xt), N.return = t, d.return = t, d.sibling = N, t.child = d, N; }
    function Gc(e, t, n, a) { a !== null && Sp(a), ko(t, e.child, null, n); var r = t.pendingProps, i = r.children, o = Pm(t, i); return o.flags |= xt, t.memoizedState = null, o; }
    function uD(e, t, n, a, r) { var i = t.mode, o = { mode: "visible", children: n }, l = Hm(o, i), u = oi(a, i, r, null); return u.flags |= xt, l.return = t, u.return = t, l.sibling = u, t.child = l, (t.mode & ze) !== pe && ko(t, e.child, null, r), u; }
    function sD(e, t, n) { return (e.mode & ze) === pe ? (f("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ee) : ip(t) ? e.lanes = Di : e.lanes = $n, null; }
    function cD(e, t, n, a, r, i, o) { if (n)
        if (t.flags & fr) {
            t.flags &= ~fr;
            var R = Dm(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
            return Gc(e, t, o, R);
        }
        else {
            if (t.memoizedState !== null)
                return t.child = e.child, t.flags |= We, null;
            var L = a.children, x = a.fallback, H = uD(e, t, L, x, o), ee = t.child;
            return ee.memoizedState = Fm(o), t.memoizedState = zm, H;
        }
    else {
        if (XC(), (t.mode & ze) === pe)
            return Gc(e, t, o, null);
        if (ip(r)) {
            var l, u, d;
            {
                var m = mC(r);
                l = m.digest, u = m.message, d = m.stack;
            }
            var N;
            u ? N = new Error(u) : N = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
            var S = Dm(N, l, d);
            return Gc(e, t, o, S);
        }
        var C = Yn(o, e.childLanes);
        if (ja || C) {
            var _ = rf();
            if (_ !== null) {
                var M = ET(_, o);
                if (M !== qt && M !== i.retryLane) {
                    i.retryLane = M;
                    var Q = it;
                    Vn(e, M), zt(_, e, M, Q);
                }
            }
            uv();
            var fe = Dm(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
            return Gc(e, t, o, fe);
        }
        else if (Yy(r)) {
            t.flags |= We, t.child = e.child;
            var le = U_.bind(null, e);
            return vC(r, le), null;
        }
        else {
            e0(t, r, i.treeContext);
            var Pe = a.children, Ue = Pm(t, Pe);
            return Ue.flags |= dr, Ue;
        }
    } }
    function Tb(e, t, n) { e.lanes = Ae(e.lanes, t); var a = e.alternate; a !== null && (a.lanes = Ae(a.lanes, t)), Op(e.return, t, n); }
    function fD(e, t, n) { for (var a = t; a !== null;) {
        if (a.tag === ue) {
            var r = a.memoizedState;
            r !== null && Tb(a, n, e);
        }
        else if (a.tag === Ye)
            Tb(a, n, e);
        else if (a.child !== null) {
            a.child.return = a, a = a.child;
            continue;
        }
        if (a === e)
            return;
        for (; a.sibling === null;) {
            if (a.return === null || a.return === e)
                return;
            a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
    } }
    function dD(e) { for (var t = e, n = null; t !== null;) {
        var a = t.alternate;
        a !== null && xc(a) === null && (n = t), t = t.sibling;
    } return n; }
    function pD(e) { if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !Lm[e])
        if (Lm[e] = !0, typeof e == "string")
            switch (e.toLowerCase()) {
                case "together":
                case "forwards":
                case "backwards": {
                    f('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
                    break;
                }
                case "forward":
                case "backward": {
                    f('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
                    break;
                }
                default:
                    f('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
                    break;
            }
        else
            f('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e); }
    function mD(e, t) { e !== void 0 && !qc[e] && (e !== "collapsed" && e !== "hidden" ? (qc[e] = !0, f('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (qc[e] = !0, f('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e))); }
    function Rb(e, t) { {
        var n = Le(e), a = !n && typeof ba(e) == "function";
        if (n || a) {
            var r = n ? "array" : "iterable";
            return f("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", r, t, r), !1;
        }
    } return !0; }
    function vD(e, t) { if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Le(e)) {
            for (var n = 0; n < e.length; n++)
                if (!Rb(e[n], n))
                    return;
        }
        else {
            var a = ba(e);
            if (typeof a == "function") {
                var r = a.call(e);
                if (r)
                    for (var i = r.next(), o = 0; !i.done; i = r.next()) {
                        if (!Rb(i.value, o))
                            return;
                        o++;
                    }
            }
            else
                f('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        } }
    function Bm(e, t, n, a, r) { var i = e.memoizedState; i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: a, tail: n, tailMode: r } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = n, i.tailMode = r); }
    function xb(e, t, n) { var a = t.pendingProps, r = a.revealOrder, i = a.tail, o = a.children; pD(r), mD(i, r), vD(o, r), Dn(e, t, o, n); var l = Ca.current, u = Pp(l, Eu); if (u)
        l = Hp(l, Eu), t.flags |= We;
    else {
        var d = e !== null && (e.flags & We) !== ve;
        d && fD(t, t.child, n), l = Po(l);
    } if (Jr(t, l), (t.mode & ze) === pe)
        t.memoizedState = null;
    else
        switch (r) {
            case "forwards": {
                var m = dD(t.child), N;
                m === null ? (N = t.child, t.child = null) : (N = m.sibling, m.sibling = null), Bm(t, !1, N, m, i);
                break;
            }
            case "backwards": {
                var S = null, C = t.child;
                for (t.child = null; C !== null;) {
                    var _ = C.alternate;
                    if (_ !== null && xc(_) === null) {
                        t.child = C;
                        break;
                    }
                    var M = C.sibling;
                    C.sibling = S, S = C, C = M;
                }
                Bm(t, !0, S, null, i);
                break;
            }
            case "together": {
                Bm(t, !1, null, null, void 0);
                break;
            }
            default: t.memoizedState = null;
        } return t.child; }
    function hD(e, t, n) { Vp(t, t.stateNode.containerInfo); var a = t.pendingProps; return e === null ? t.child = ko(t, null, a, n) : Dn(e, t, a, n), t.child; }
    var Cb = !1;
    function yD(e, t, n) { var a = t.type, r = a._context, i = t.pendingProps, o = t.memoizedProps, l = i.value; {
        "value" in i || Cb || (Cb = !0, f("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var u = t.type.propTypes;
        u && Ta(u, i, "prop", "Context.Provider");
    } if (gg(t, r, l), o !== null) {
        var d = o.value;
        if (Wn(d, l)) {
            if (o.children === i.children && !nc())
                return Tr(e, t, n);
        }
        else
            p0(t, r, n);
    } var m = i.children; return Dn(e, t, m, n), t.child; }
    var Db = !1;
    function gD(e, t, n) { var a = t.type; a._context === void 0 ? a !== a.Consumer && (Db || (Db = !0, f("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : a = a._context; var r = t.pendingProps, i = r.children; typeof i != "function" && f("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), zo(t, n); var o = Ct(a); jl(t); var l; return ju.current = t, aa(!0), l = i(o), aa(!1), yo(), t.flags |= po, Dn(e, t, l, n), t.child; }
    function wu() { ja = !0; }
    function Wc(e, t) { (t.mode & ze) === pe && e !== null && (e.alternate = null, t.alternate = null, t.flags |= xt); }
    function Tr(e, t, n) { return e !== null && (t.dependencies = e.dependencies), nb(), $u(t.lanes), Yn(n, t.childLanes) ? (f0(e, t), t.child) : null; }
    function bD(e, t, n) { {
        var a = t.return;
        if (a === null)
            throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, n.index = t.index, n.sibling = t.sibling, n.return = t.return, n.ref = t.ref, t === a.child)
            a.child = n;
        else {
            var r = a.child;
            if (r === null)
                throw new Error("Expected parent to have a child.");
            for (; r.sibling !== t;)
                if (r = r.sibling, r === null)
                    throw new Error("Expected to find the previous sibling.");
            r.sibling = n;
        }
        var i = a.deletions;
        return i === null ? (a.deletions = [e], a.flags |= Si) : i.push(e), n.flags |= xt, n;
    } }
    function Im(e, t) { var n = e.lanes; return !!Yn(n, t); }
    function ED(e, t, n) { switch (t.tag) {
        case j:
            bb(t), t.stateNode, Uo();
            break;
        case q:
            Cg(t);
            break;
        case A: {
            var a = t.type;
            Ya(a) && rc(t);
            break;
        }
        case P:
            Vp(t, t.stateNode.containerInfo);
            break;
        case $: {
            var r = t.memoizedProps.value, i = t.type._context;
            gg(t, i, r);
            break;
        }
        case ye:
            {
                var o = Yn(n, t.childLanes);
                o && (t.flags |= Ge);
                {
                    var l = t.stateNode;
                    l.effectDuration = 0, l.passiveEffectDuration = 0;
                }
            }
            break;
        case ue: {
            var u = t.memoizedState;
            if (u !== null) {
                if (u.dehydrated !== null)
                    return Jr(t, Po(Ca.current)), t.flags |= We, null;
                var d = t.child, m = d.childLanes;
                if (Yn(n, m))
                    return Sb(e, t, n);
                Jr(t, Po(Ca.current));
                var N = Tr(e, t, n);
                return N !== null ? N.sibling : null;
            }
            else
                Jr(t, Po(Ca.current));
            break;
        }
        case Ye: {
            var S = (e.flags & We) !== ve, C = Yn(n, t.childLanes);
            if (S) {
                if (C)
                    return xb(e, t, n);
                t.flags |= We;
            }
            var _ = t.memoizedState;
            if (_ !== null && (_.rendering = null, _.tail = null, _.lastEffect = null), Jr(t, Ca.current), C)
                break;
            return null;
        }
        case Ne:
        case St: return t.lanes = z, hb(e, t, n);
    } return Tr(e, t, n); }
    function _b(e, t, n) { if (t._debugNeedsRemount && e !== null)
        return bD(e, t, bv(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes)); if (e !== null) {
        var a = e.memoizedProps, r = t.pendingProps;
        if (a !== r || nc() || t.type !== e.type)
            ja = !0;
        else {
            var i = Im(e, n);
            if (!i && (t.flags & We) === ve)
                return ja = !1, ED(e, t, n);
            (e.flags & Wf) !== ve ? ja = !0 : ja = !1;
        }
    }
    else if (ja = !1, en() && YC(t)) {
        var o = t.index, l = qC();
        ng(t, l, o);
    } switch (t.lanes = z, t.tag) {
        case B: return tD(e, t, t.type, n);
        case _e: {
            var u = t.elementType;
            return Z0(e, t, u, n);
        }
        case O: {
            var d = t.type, m = t.pendingProps, N = t.elementType === d ? m : _a(d, m);
            return Um(e, t, d, N, n);
        }
        case A: {
            var S = t.type, C = t.pendingProps, _ = t.elementType === S ? C : _a(S, C);
            return gb(e, t, S, _, n);
        }
        case j: return Q0(e, t, n);
        case q: return X0(e, t, n);
        case ne: return J0(e, t);
        case ue: return Sb(e, t, n);
        case P: return hD(e, t, n);
        case te: {
            var M = t.type, Q = t.pendingProps, fe = t.elementType === M ? Q : _a(M, Q);
            return pb(e, t, M, fe, n);
        }
        case Ce: return G0(e, t, n);
        case ie: return W0(e, t, n);
        case ye: return K0(e, t, n);
        case $: return yD(e, t, n);
        case De: return gD(e, t, n);
        case V: {
            var le = t.type, Pe = t.pendingProps, Ue = _a(le, Pe);
            if (t.type !== t.elementType) {
                var R = le.propTypes;
                R && Ta(R, Ue, "prop", qe(le));
            }
            return Ue = _a(le.type, Ue), mb(e, t, le, Ue, n);
        }
        case oe: return vb(e, t, t.type, t.pendingProps, n);
        case He: {
            var L = t.type, x = t.pendingProps, H = t.elementType === L ? x : _a(L, x);
            return eD(e, t, L, H, n);
        }
        case Ye: return xb(e, t, n);
        case ge: break;
        case Ne: return hb(e, t, n);
    } throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."); }
    function qo(e) { e.flags |= Ge; }
    function jb(e) { e.flags |= Ni, e.flags |= Kf; }
    var Ab, $m, Ob, wb;
    Ab = function (e, t, n, a) { for (var r = t.child; r !== null;) {
        if (r.tag === q || r.tag === ne)
            Bx(e, r.stateNode);
        else if (r.tag !== P) {
            if (r.child !== null) {
                r.child.return = r, r = r.child;
                continue;
            }
        }
        if (r === t)
            return;
        for (; r.sibling === null;) {
            if (r.return === null || r.return === t)
                return;
            r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
    } }, $m = function (e, t) { }, Ob = function (e, t, n, a, r) { var i = e.memoizedProps; if (i !== a) {
        var o = t.stateNode, l = zp(), u = $x(o, n, i, a, r, l);
        t.updateQueue = u, u && qo(t);
    } }, wb = function (e, t, n, a) { n !== a && qo(t); };
    function Mu(e, t) { if (!en())
        switch (e.tailMode) {
            case "hidden": {
                for (var n = e.tail, a = null; n !== null;)
                    n.alternate !== null && (a = n), n = n.sibling;
                a === null ? e.tail = null : a.sibling = null;
                break;
            }
            case "collapsed": {
                for (var r = e.tail, i = null; r !== null;)
                    r.alternate !== null && (i = r), r = r.sibling;
                i === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : i.sibling = null;
                break;
            }
        } }
    function nn(e) { var t = e.alternate !== null && e.alternate.child === e.child, n = z, a = ve; if (t) {
        if ((e.mode & Je) !== pe) {
            for (var u = e.selfBaseDuration, d = e.child; d !== null;)
                n = Ae(n, Ae(d.lanes, d.childLanes)), a |= d.subtreeFlags & pr, a |= d.flags & pr, u += d.treeBaseDuration, d = d.sibling;
            e.treeBaseDuration = u;
        }
        else
            for (var m = e.child; m !== null;)
                n = Ae(n, Ae(m.lanes, m.childLanes)), a |= m.subtreeFlags & pr, a |= m.flags & pr, m.return = e, m = m.sibling;
        e.subtreeFlags |= a;
    }
    else {
        if ((e.mode & Je) !== pe) {
            for (var r = e.actualDuration, i = e.selfBaseDuration, o = e.child; o !== null;)
                n = Ae(n, Ae(o.lanes, o.childLanes)), a |= o.subtreeFlags, a |= o.flags, r += o.actualDuration, i += o.treeBaseDuration, o = o.sibling;
            e.actualDuration = r, e.treeBaseDuration = i;
        }
        else
            for (var l = e.child; l !== null;)
                n = Ae(n, Ae(l.lanes, l.childLanes)), a |= l.subtreeFlags, a |= l.flags, l.return = e, l = l.sibling;
        e.subtreeFlags |= a;
    } return e.childLanes = n, t; }
    function SD(e, t, n) { if (i0() && (t.mode & ze) !== pe && (t.flags & We) === ve)
        return sg(t), Uo(), t.flags |= fr | Es | Cn, !1; var a = sc(t); if (n !== null && n.dehydrated !== null)
        if (e === null) {
            if (!a)
                throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
            if (a0(t), nn(t), (t.mode & Je) !== pe) {
                var r = n !== null;
                if (r) {
                    var i = t.child;
                    i !== null && (t.treeBaseDuration -= i.treeBaseDuration);
                }
            }
            return !1;
        }
        else {
            if (Uo(), (t.flags & We) === ve && (t.memoizedState = null), t.flags |= Ge, nn(t), (t.mode & Je) !== pe) {
                var o = n !== null;
                if (o) {
                    var l = t.child;
                    l !== null && (t.treeBaseDuration -= l.treeBaseDuration);
                }
            }
            return !1;
        }
    else
        return cg(), !0; }
    function Mb(e, t, n) { var a = t.pendingProps; switch (hp(t), t.tag) {
        case B:
        case _e:
        case oe:
        case O:
        case te:
        case Ce:
        case ie:
        case ye:
        case De:
        case V: return nn(t), null;
        case A: {
            var r = t.type;
            return Ya(r) && ac(t), nn(t), null;
        }
        case j: {
            var i = t.stateNode;
            if (Fo(t), dp(t), Ip(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), e === null || e.child === null) {
                var o = sc(t);
                if (o)
                    qo(t);
                else if (e !== null) {
                    var l = e.memoizedState;
                    (!l.isDehydrated || (t.flags & fr) !== ve) && (t.flags |= mo, cg());
                }
            }
            return $m(e, t), nn(t), null;
        }
        case q: {
            Fp(t);
            var u = xg(), d = t.type;
            if (e !== null && t.stateNode != null)
                Ob(e, t, d, a, u), e.ref !== t.ref && jb(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
                    return nn(t), null;
                }
                var m = zp(), N = sc(t);
                if (N)
                    t0(t, u, m) && qo(t);
                else {
                    var S = Hx(d, a, u, m, t);
                    Ab(S, t, !1, !1), t.stateNode = S, Ix(S, d, a, u) && qo(t);
                }
                t.ref !== null && jb(t);
            }
            return nn(t), null;
        }
        case ne: {
            var C = a;
            if (e && t.stateNode != null) {
                var _ = e.memoizedProps;
                wb(e, t, _, C);
            }
            else {
                if (typeof C != "string" && t.stateNode === null)
                    throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
                var M = xg(), Q = zp(), fe = sc(t);
                fe ? n0(t) && qo(t) : t.stateNode = Yx(C, M, Q, t);
            }
            return nn(t), null;
        }
        case ue: {
            Ho(t);
            var le = t.memoizedState;
            if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                var Pe = SD(e, t, le);
                if (!Pe)
                    return t.flags & Cn ? t : null;
            }
            if ((t.flags & We) !== ve)
                return t.lanes = n, (t.mode & Je) !== pe && mm(t), t;
            var Ue = le !== null, R = e !== null && e.memoizedState !== null;
            if (Ue !== R && Ue) {
                var L = t.child;
                if (L.flags |= Ti, (t.mode & ze) !== pe) {
                    var x = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
                    x || Pp(Ca.current, _g) ? N_() : uv();
                }
            }
            var H = t.updateQueue;
            if (H !== null && (t.flags |= Ge), nn(t), (t.mode & Je) !== pe && Ue) {
                var ee = t.child;
                ee !== null && (t.treeBaseDuration -= ee.treeBaseDuration);
            }
            return null;
        }
        case P: return Fo(t), $m(e, t), e === null && zC(t.stateNode.containerInfo), nn(t), null;
        case $:
            var X = t.type._context;
            return Ap(X, t), nn(t), null;
        case He: {
            var he = t.type;
            return Ya(he) && ac(t), nn(t), null;
        }
        case Ye: {
            Ho(t);
            var Re = t.memoizedState;
            if (Re === null)
                return nn(t), null;
            var et = (t.flags & We) !== ve, Ie = Re.rendering;
            if (Ie === null)
                if (et)
                    Mu(Re, !1);
                else {
                    var Nt = R_() && (e === null || (e.flags & We) === ve);
                    if (!Nt)
                        for (var $e = t.child; $e !== null;) {
                            var Et = xc($e);
                            if (Et !== null) {
                                et = !0, t.flags |= We, Mu(Re, !1);
                                var yn = Et.updateQueue;
                                return yn !== null && (t.updateQueue = yn, t.flags |= Ge), t.subtreeFlags = ve, d0(t, n), Jr(t, Hp(Ca.current, Eu)), t.child;
                            }
                            $e = $e.sibling;
                        }
                    Re.tail !== null && $t() > eE() && (t.flags |= We, et = !0, Mu(Re, !1), t.lanes = wh);
                }
            else {
                if (!et) {
                    var un = xc(Ie);
                    if (un !== null) {
                        t.flags |= We, et = !0;
                        var Xn = un.updateQueue;
                        if (Xn !== null && (t.updateQueue = Xn, t.flags |= Ge), Mu(Re, !0), Re.tail === null && Re.tailMode === "hidden" && !Ie.alternate && !en())
                            return nn(t), null;
                    }
                    else
                        $t() * 2 - Re.renderingStartTime > eE() && n !== $n && (t.flags |= We, et = !0, Mu(Re, !1), t.lanes = wh);
                }
                if (Re.isBackwards)
                    Ie.sibling = t.child, t.child = Ie;
                else {
                    var An = Re.last;
                    An !== null ? An.sibling = Ie : t.child = Ie, Re.last = Ie;
                }
            }
            if (Re.tail !== null) {
                var On = Re.tail;
                Re.rendering = On, Re.tail = On.sibling, Re.renderingStartTime = $t(), On.sibling = null;
                var gn = Ca.current;
                return et ? gn = Hp(gn, Eu) : gn = Po(gn), Jr(t, gn), On;
            }
            return nn(t), null;
        }
        case ge: break;
        case Ne:
        case St: {
            lv(t);
            var _r = t.memoizedState, el = _r !== null;
            if (e !== null) {
                var Ku = e.memoizedState, Za = Ku !== null;
                Za !== el && !Hn && (t.flags |= Ti);
            }
            return !el || (t.mode & ze) === pe ? nn(t) : Yn(Ja, $n) && (nn(t), t.subtreeFlags & (xt | Ge) && (t.flags |= Ti)), null;
        }
        case ct: return null;
        case Dt: return null;
    } throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."); }
    function ND(e, t, n) { switch (hp(t), t.tag) {
        case A: {
            var a = t.type;
            Ya(a) && ac(t);
            var r = t.flags;
            return r & Cn ? (t.flags = r & ~Cn | We, (t.mode & Je) !== pe && mm(t), t) : null;
        }
        case j: {
            t.stateNode, Fo(t), dp(t), Ip();
            var i = t.flags;
            return (i & Cn) !== ve && (i & We) === ve ? (t.flags = i & ~Cn | We, t) : null;
        }
        case q: return Fp(t), null;
        case ue: {
            Ho(t);
            var o = t.memoizedState;
            if (o !== null && o.dehydrated !== null) {
                if (t.alternate === null)
                    throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
                Uo();
            }
            var l = t.flags;
            return l & Cn ? (t.flags = l & ~Cn | We, (t.mode & Je) !== pe && mm(t), t) : null;
        }
        case Ye: return Ho(t), null;
        case P: return Fo(t), null;
        case $:
            var u = t.type._context;
            return Ap(u, t), null;
        case Ne:
        case St: return lv(t), null;
        case ct: return null;
        default: return null;
    } }
    function Lb(e, t, n) { switch (hp(t), t.tag) {
        case A: {
            var a = t.type.childContextTypes;
            a != null && ac(t);
            break;
        }
        case j: {
            t.stateNode, Fo(t), dp(t), Ip();
            break;
        }
        case q: {
            Fp(t);
            break;
        }
        case P:
            Fo(t);
            break;
        case ue:
            Ho(t);
            break;
        case Ye:
            Ho(t);
            break;
        case $:
            var r = t.type._context;
            Ap(r, t);
            break;
        case Ne:
        case St:
            lv(t);
            break;
    } }
    var Ub = null;
    Ub = new Set;
    var Kc = !1, an = !1, TD = typeof WeakSet == "function" ? WeakSet : Set, ae = null, Go = null, Wo = null;
    function RD(e) { Yf(null, function () { throw e; }), qf(); }
    var xD = function (e, t) { if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Je)
        try {
            Qa(), t.componentWillUnmount();
        }
        finally {
            Ka(e);
        }
    else
        t.componentWillUnmount(); };
    function kb(e, t) { try {
        ti(wt, e);
    }
    catch (n) {
        nt(e, t, n);
    } }
    function Ym(e, t, n) { try {
        xD(e, n);
    }
    catch (a) {
        nt(e, t, a);
    } }
    function CD(e, t, n) { try {
        n.componentDidMount();
    }
    catch (a) {
        nt(e, t, a);
    } }
    function Vb(e, t) { try {
        Fb(e);
    }
    catch (n) {
        nt(e, t, n);
    } }
    function Ko(e, t) { var n = e.ref; if (n !== null)
        if (typeof n == "function") {
            var a;
            try {
                if (bn && tr && e.mode & Je)
                    try {
                        Qa(), a = n(null);
                    }
                    finally {
                        Ka(e);
                    }
                else
                    a = n(null);
            }
            catch (r) {
                nt(e, t, r);
            }
            typeof a == "function" && f("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", xe(e));
        }
        else
            n.current = null; }
    function Qc(e, t, n) { try {
        n();
    }
    catch (a) {
        nt(e, t, a);
    } }
    var zb = !1;
    function DD(e, t) { Fx(e.containerInfo), ae = t, _D(); var n = zb; return zb = !1, n; }
    function _D() { for (; ae !== null;) {
        var e = ae, t = e.child;
        (e.subtreeFlags & Jf) !== ve && t !== null ? (t.return = e, ae = t) : jD();
    } }
    function jD() { for (; ae !== null;) {
        var e = ae;
        ft(e);
        try {
            AD(e);
        }
        catch (n) {
            nt(e, e.return, n);
        }
        It();
        var t = e.sibling;
        if (t !== null) {
            t.return = e.return, ae = t;
            return;
        }
        ae = e.return;
    } }
    function AD(e) { var t = e.alternate, n = e.flags; if ((n & mo) !== ve) {
        switch (ft(e), e.tag) {
            case O:
            case te:
            case oe: break;
            case A: {
                if (t !== null) {
                    var a = t.memoizedProps, r = t.memoizedState, i = e.stateNode;
                    e.type === e.elementType && !Ii && (i.props !== e.memoizedProps && f("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", xe(e) || "instance"), i.state !== e.memoizedState && f("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", xe(e) || "instance"));
                    var o = i.getSnapshotBeforeUpdate(e.elementType === e.type ? a : _a(e.type, a), r);
                    {
                        var l = Ub;
                        o === void 0 && !l.has(e.type) && (l.add(e.type), f("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", xe(e)));
                    }
                    i.__reactInternalSnapshotBeforeUpdate = o;
                }
                break;
            }
            case j: {
                {
                    var u = e.stateNode;
                    cC(u.containerInfo);
                }
                break;
            }
            case q:
            case ne:
            case P:
            case He: break;
            default: throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        It();
    } }
    function Aa(e, t, n) { var a = t.updateQueue, r = a !== null ? a.lastEffect : null; if (r !== null) {
        var i = r.next, o = i;
        do {
            if ((o.tag & e) === e) {
                var l = o.destroy;
                o.destroy = void 0, l !== void 0 && ((e & tn) !== zn ? YN(t) : (e & wt) !== zn && Dh(t), (e & qa) !== zn && qu(!0), Qc(t, n, l), (e & qa) !== zn && qu(!1), (e & tn) !== zn ? qN() : (e & wt) !== zn && _h());
            }
            o = o.next;
        } while (o !== i);
    } }
    function ti(e, t) {
        var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
        if (a !== null) {
            var r = a.next, i = r;
            do {
                if ((i.tag & e) === e) {
                    (e & tn) !== zn ? IN(t) : (e & wt) !== zn && GN(t);
                    var o = i.create;
                    (e & qa) !== zn && qu(!0), i.destroy = o(), (e & qa) !== zn && qu(!1), (e & tn) !== zn ? $N() : (e & wt) !== zn && WN();
                    {
                        var l = i.destroy;
                        if (l !== void 0 && typeof l != "function") {
                            var u = void 0;
                            (i.tag & wt) !== ve ? u = "useLayoutEffect" : (i.tag & qa) !== ve ? u = "useInsertionEffect" : u = "useEffect";
                            var d = void 0;
                            l === null ? d = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof l.then == "function" ? d = `

It looks like you wrote ` + u + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + u + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : d = " You returned: " + l, f("%s must not return anything besides a function, which is used for clean-up.%s", u, d);
                        }
                    }
                }
                i = i.next;
            } while (i !== r);
        }
    }
    function OD(e, t) { if ((t.flags & Ge) !== ve)
        switch (t.tag) {
            case ye: {
                var n = t.stateNode.passiveEffectDuration, a = t.memoizedProps, r = a.id, i = a.onPostCommit, o = eb(), l = t.alternate === null ? "mount" : "update";
                Zg() && (l = "nested-update"), typeof i == "function" && i(r, l, n, o);
                var u = t.return;
                e: for (; u !== null;) {
                    switch (u.tag) {
                        case j:
                            var d = u.stateNode;
                            d.passiveEffectDuration += n;
                            break e;
                        case ye:
                            var m = u.stateNode;
                            m.passiveEffectDuration += n;
                            break e;
                    }
                    u = u.return;
                }
                break;
            }
        } }
    function wD(e, t, n, a) { if ((n.flags & _l) !== ve)
        switch (n.tag) {
            case O:
            case te:
            case oe: {
                if (!an)
                    if (n.mode & Je)
                        try {
                            Qa(), ti(wt | Ot, n);
                        }
                        finally {
                            Ka(n);
                        }
                    else
                        ti(wt | Ot, n);
                break;
            }
            case A: {
                var r = n.stateNode;
                if (n.flags & Ge && !an)
                    if (t === null)
                        if (n.type === n.elementType && !Ii && (r.props !== n.memoizedProps && f("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", xe(n) || "instance"), r.state !== n.memoizedState && f("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", xe(n) || "instance")), n.mode & Je)
                            try {
                                Qa(), r.componentDidMount();
                            }
                            finally {
                                Ka(n);
                            }
                        else
                            r.componentDidMount();
                    else {
                        var i = n.elementType === n.type ? t.memoizedProps : _a(n.type, t.memoizedProps), o = t.memoizedState;
                        if (n.type === n.elementType && !Ii && (r.props !== n.memoizedProps && f("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", xe(n) || "instance"), r.state !== n.memoizedState && f("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", xe(n) || "instance")), n.mode & Je)
                            try {
                                Qa(), r.componentDidUpdate(i, o, r.__reactInternalSnapshotBeforeUpdate);
                            }
                            finally {
                                Ka(n);
                            }
                        else
                            r.componentDidUpdate(i, o, r.__reactInternalSnapshotBeforeUpdate);
                    }
                var l = n.updateQueue;
                l !== null && (n.type === n.elementType && !Ii && (r.props !== n.memoizedProps && f("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", xe(n) || "instance"), r.state !== n.memoizedState && f("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", xe(n) || "instance")), Rg(n, l, r));
                break;
            }
            case j: {
                var u = n.updateQueue;
                if (u !== null) {
                    var d = null;
                    if (n.child !== null)
                        switch (n.child.tag) {
                            case q:
                                d = n.child.stateNode;
                                break;
                            case A:
                                d = n.child.stateNode;
                                break;
                        }
                    Rg(n, u, d);
                }
                break;
            }
            case q: {
                var m = n.stateNode;
                if (t === null && n.flags & Ge) {
                    var N = n.type, S = n.memoizedProps;
                    Qx(m, N, S);
                }
                break;
            }
            case ne: break;
            case P: break;
            case ye: {
                {
                    var C = n.memoizedProps, _ = C.onCommit, M = C.onRender, Q = n.stateNode.effectDuration, fe = eb(), le = t === null ? "mount" : "update";
                    Zg() && (le = "nested-update"), typeof M == "function" && M(n.memoizedProps.id, le, n.actualDuration, n.treeBaseDuration, n.actualStartTime, fe);
                    {
                        typeof _ == "function" && _(n.memoizedProps.id, le, Q, fe), j_(n);
                        var Pe = n.return;
                        e: for (; Pe !== null;) {
                            switch (Pe.tag) {
                                case j:
                                    var Ue = Pe.stateNode;
                                    Ue.effectDuration += Q;
                                    break e;
                                case ye:
                                    var R = Pe.stateNode;
                                    R.effectDuration += Q;
                                    break e;
                            }
                            Pe = Pe.return;
                        }
                    }
                }
                break;
            }
            case ue: {
                PD(e, n);
                break;
            }
            case Ye:
            case He:
            case ge:
            case Ne:
            case St:
            case Dt: break;
            default: throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        } an || n.flags & Ni && Fb(n); }
    function MD(e) { switch (e.tag) {
        case O:
        case te:
        case oe: {
            if (e.mode & Je)
                try {
                    Qa(), kb(e, e.return);
                }
                finally {
                    Ka(e);
                }
            else
                kb(e, e.return);
            break;
        }
        case A: {
            var t = e.stateNode;
            typeof t.componentDidMount == "function" && CD(e, e.return, t), Vb(e, e.return);
            break;
        }
        case q: {
            Vb(e, e.return);
            break;
        }
    } }
    function LD(e, t) { for (var n = null, a = e;;) {
        if (a.tag === q) {
            if (n === null) {
                n = a;
                try {
                    var r = a.stateNode;
                    t ? oC(r) : uC(a.stateNode, a.memoizedProps);
                }
                catch (o) {
                    nt(e, e.return, o);
                }
            }
        }
        else if (a.tag === ne) {
            if (n === null)
                try {
                    var i = a.stateNode;
                    t ? lC(i) : sC(i, a.memoizedProps);
                }
                catch (o) {
                    nt(e, e.return, o);
                }
        }
        else if (!((a.tag === Ne || a.tag === St) && a.memoizedState !== null && a !== e)) {
            if (a.child !== null) {
                a.child.return = a, a = a.child;
                continue;
            }
        }
        if (a === e)
            return;
        for (; a.sibling === null;) {
            if (a.return === null || a.return === e)
                return;
            n === a && (n = null), a = a.return;
        }
        n === a && (n = null), a.sibling.return = a.return, a = a.sibling;
    } }
    function Fb(e) { var t = e.ref; if (t !== null) {
        var n = e.stateNode, a;
        switch (e.tag) {
            case q:
                a = n;
                break;
            default: a = n;
        }
        if (typeof t == "function") {
            var r;
            if (e.mode & Je)
                try {
                    Qa(), r = t(a);
                }
                finally {
                    Ka(e);
                }
            else
                r = t(a);
            typeof r == "function" && f("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", xe(e));
        }
        else
            t.hasOwnProperty("current") || f("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", xe(e)), t.current = a;
    } }
    function UD(e) { var t = e.alternate; t !== null && (t.return = null), e.return = null; }
    function Pb(e) { var t = e.alternate; t !== null && (e.alternate = null, Pb(t)); {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === q) {
            var n = e.stateNode;
            n !== null && HC(n);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    } }
    function kD(e) { for (var t = e.return; t !== null;) {
        if (Hb(t))
            return t;
        t = t.return;
    } throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."); }
    function Hb(e) { return e.tag === q || e.tag === j || e.tag === P; }
    function Bb(e) { var t = e; e: for (;;) {
        for (; t.sibling === null;) {
            if (t.return === null || Hb(t.return))
                return null;
            t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== q && t.tag !== ne && t.tag !== Be;) {
            if (t.flags & xt || t.child === null || t.tag === P)
                continue e;
            t.child.return = t, t = t.child;
        }
        if (!(t.flags & xt))
            return t.stateNode;
    } }
    function VD(e) { var t = kD(e); switch (t.tag) {
        case q: {
            var n = t.stateNode;
            t.flags & Dl && ($y(n), t.flags &= ~Dl);
            var a = Bb(e);
            Gm(e, a, n);
            break;
        }
        case j:
        case P: {
            var r = t.stateNode.containerInfo, i = Bb(e);
            qm(e, i, r);
            break;
        }
        default: throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
    } }
    function qm(e, t, n) { var a = e.tag, r = a === q || a === ne; if (r) {
        var i = e.stateNode;
        t ? nC(n, i, t) : eC(n, i);
    }
    else if (a !== P) {
        var o = e.child;
        if (o !== null) {
            qm(o, t, n);
            for (var l = o.sibling; l !== null;)
                qm(l, t, n), l = l.sibling;
        }
    } }
    function Gm(e, t, n) { var a = e.tag, r = a === q || a === ne; if (r) {
        var i = e.stateNode;
        t ? tC(n, i, t) : Zx(n, i);
    }
    else if (a !== P) {
        var o = e.child;
        if (o !== null) {
            Gm(o, t, n);
            for (var l = o.sibling; l !== null;)
                Gm(l, t, n), l = l.sibling;
        }
    } }
    var rn = null, Oa = !1;
    function zD(e, t, n) { {
        var a = t;
        e: for (; a !== null;) {
            switch (a.tag) {
                case q: {
                    rn = a.stateNode, Oa = !1;
                    break e;
                }
                case j: {
                    rn = a.stateNode.containerInfo, Oa = !0;
                    break e;
                }
                case P: {
                    rn = a.stateNode.containerInfo, Oa = !0;
                    break e;
                }
            }
            a = a.return;
        }
        if (rn === null)
            throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        Ib(e, t, n), rn = null, Oa = !1;
    } UD(n); }
    function ni(e, t, n) { for (var a = n.child; a !== null;)
        Ib(e, t, a), a = a.sibling; }
    function Ib(e, t, n) { switch (FN(n), n.tag) {
        case q: an || Ko(n, t);
        case ne: {
            {
                var a = rn, r = Oa;
                rn = null, ni(e, t, n), rn = a, Oa = r, rn !== null && (Oa ? rC(rn, n.stateNode) : aC(rn, n.stateNode));
            }
            return;
        }
        case Be: {
            rn !== null && (Oa ? iC(rn, n.stateNode) : rp(rn, n.stateNode));
            return;
        }
        case P: {
            {
                var i = rn, o = Oa;
                rn = n.stateNode.containerInfo, Oa = !0, ni(e, t, n), rn = i, Oa = o;
            }
            return;
        }
        case O:
        case te:
        case V:
        case oe: {
            if (!an) {
                var l = n.updateQueue;
                if (l !== null) {
                    var u = l.lastEffect;
                    if (u !== null) {
                        var d = u.next, m = d;
                        do {
                            var N = m, S = N.destroy, C = N.tag;
                            S !== void 0 && ((C & qa) !== zn ? Qc(n, t, S) : (C & wt) !== zn && (Dh(n), n.mode & Je ? (Qa(), Qc(n, t, S), Ka(n)) : Qc(n, t, S), _h())), m = m.next;
                        } while (m !== d);
                    }
                }
            }
            ni(e, t, n);
            return;
        }
        case A: {
            if (!an) {
                Ko(n, t);
                var _ = n.stateNode;
                typeof _.componentWillUnmount == "function" && Ym(n, t, _);
            }
            ni(e, t, n);
            return;
        }
        case ge: {
            ni(e, t, n);
            return;
        }
        case Ne: {
            if (n.mode & ze) {
                var M = an;
                an = M || n.memoizedState !== null, ni(e, t, n), an = M;
            }
            else
                ni(e, t, n);
            break;
        }
        default: {
            ni(e, t, n);
            return;
        }
    } }
    function FD(e) { e.memoizedState; }
    function PD(e, t) { var n = t.memoizedState; if (n === null) {
        var a = t.alternate;
        if (a !== null) {
            var r = a.memoizedState;
            if (r !== null) {
                var i = r.dehydrated;
                i !== null && RC(i);
            }
        }
    } }
    function $b(e) { var t = e.updateQueue; if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new TD), t.forEach(function (a) { var r = k_.bind(null, e, a); if (!n.has(a)) {
            if (n.add(a), Sa)
                if (Go !== null && Wo !== null)
                    Yu(Wo, Go);
                else
                    throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            a.then(r, r);
        } });
    } }
    function HD(e, t, n) { Go = n, Wo = e, ft(t), Yb(t, e), ft(t), Go = null, Wo = null; }
    function wa(e, t, n) { var a = t.deletions; if (a !== null)
        for (var r = 0; r < a.length; r++) {
            var i = a[r];
            try {
                zD(e, t, i);
            }
            catch (u) {
                nt(i, t, u);
            }
        } var o = ss(); if (t.subtreeFlags & Zf)
        for (var l = t.child; l !== null;)
            ft(l), Yb(l, e), l = l.sibling; ft(o); }
    function Yb(e, t, n) { var a = e.alternate, r = e.flags; switch (e.tag) {
        case O:
        case te:
        case V:
        case oe: {
            if (wa(t, e), Xa(e), r & Ge) {
                try {
                    Aa(qa | Ot, e, e.return), ti(qa | Ot, e);
                }
                catch (he) {
                    nt(e, e.return, he);
                }
                if (e.mode & Je) {
                    try {
                        Qa(), Aa(wt | Ot, e, e.return);
                    }
                    catch (he) {
                        nt(e, e.return, he);
                    }
                    Ka(e);
                }
                else
                    try {
                        Aa(wt | Ot, e, e.return);
                    }
                    catch (he) {
                        nt(e, e.return, he);
                    }
            }
            return;
        }
        case A: {
            wa(t, e), Xa(e), r & Ni && a !== null && Ko(a, a.return);
            return;
        }
        case q: {
            wa(t, e), Xa(e), r & Ni && a !== null && Ko(a, a.return);
            {
                if (e.flags & Dl) {
                    var i = e.stateNode;
                    try {
                        $y(i);
                    }
                    catch (he) {
                        nt(e, e.return, he);
                    }
                }
                if (r & Ge) {
                    var o = e.stateNode;
                    if (o != null) {
                        var l = e.memoizedProps, u = a !== null ? a.memoizedProps : l, d = e.type, m = e.updateQueue;
                        if (e.updateQueue = null, m !== null)
                            try {
                                Xx(o, m, d, u, l, e);
                            }
                            catch (he) {
                                nt(e, e.return, he);
                            }
                    }
                }
            }
            return;
        }
        case ne: {
            if (wa(t, e), Xa(e), r & Ge) {
                if (e.stateNode === null)
                    throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
                var N = e.stateNode, S = e.memoizedProps, C = a !== null ? a.memoizedProps : S;
                try {
                    Jx(N, C, S);
                }
                catch (he) {
                    nt(e, e.return, he);
                }
            }
            return;
        }
        case j: {
            if (wa(t, e), Xa(e), r & Ge && a !== null) {
                var _ = a.memoizedState;
                if (_.isDehydrated)
                    try {
                        TC(t.containerInfo);
                    }
                    catch (he) {
                        nt(e, e.return, he);
                    }
            }
            return;
        }
        case P: {
            wa(t, e), Xa(e);
            return;
        }
        case ue: {
            wa(t, e), Xa(e);
            var M = e.child;
            if (M.flags & Ti) {
                var Q = M.stateNode, fe = M.memoizedState, le = fe !== null;
                if (Q.isHidden = le, le) {
                    var Pe = M.alternate !== null && M.alternate.memoizedState !== null;
                    Pe || S_();
                }
            }
            if (r & Ge) {
                try {
                    FD(e);
                }
                catch (he) {
                    nt(e, e.return, he);
                }
                $b(e);
            }
            return;
        }
        case Ne: {
            var Ue = a !== null && a.memoizedState !== null;
            if (e.mode & ze) {
                var R = an;
                an = R || Ue, wa(t, e), an = R;
            }
            else
                wa(t, e);
            if (Xa(e), r & Ti) {
                var L = e.stateNode, x = e.memoizedState, H = x !== null, ee = e;
                if (L.isHidden = H, H && !Ue && (ee.mode & ze) !== pe) {
                    ae = ee;
                    for (var X = ee.child; X !== null;)
                        ae = X, ID(X), X = X.sibling;
                }
                LD(ee, H);
            }
            return;
        }
        case Ye: {
            wa(t, e), Xa(e), r & Ge && $b(e);
            return;
        }
        case ge: return;
        default: {
            wa(t, e), Xa(e);
            return;
        }
    } }
    function Xa(e) { var t = e.flags; if (t & xt) {
        try {
            VD(e);
        }
        catch (n) {
            nt(e, e.return, n);
        }
        e.flags &= ~xt;
    } t & dr && (e.flags &= ~dr); }
    function BD(e, t, n) { Go = n, Wo = t, ae = e, qb(e, t, n), Go = null, Wo = null; }
    function qb(e, t, n) { for (var a = (e.mode & ze) !== pe; ae !== null;) {
        var r = ae, i = r.child;
        if (r.tag === Ne && a) {
            var o = r.memoizedState !== null, l = o || Kc;
            if (l) {
                Wm(e, t, n);
                continue;
            }
            else {
                var u = r.alternate, d = u !== null && u.memoizedState !== null, m = d || an, N = Kc, S = an;
                Kc = l, an = m, an && !S && (ae = r, $D(r));
                for (var C = i; C !== null;)
                    ae = C, qb(C, t, n), C = C.sibling;
                ae = r, Kc = N, an = S, Wm(e, t, n);
                continue;
            }
        }
        (r.subtreeFlags & _l) !== ve && i !== null ? (i.return = r, ae = i) : Wm(e, t, n);
    } }
    function Wm(e, t, n) { for (; ae !== null;) {
        var a = ae;
        if ((a.flags & _l) !== ve) {
            var r = a.alternate;
            ft(a);
            try {
                wD(t, r, a, n);
            }
            catch (o) {
                nt(a, a.return, o);
            }
            It();
        }
        if (a === e) {
            ae = null;
            return;
        }
        var i = a.sibling;
        if (i !== null) {
            i.return = a.return, ae = i;
            return;
        }
        ae = a.return;
    } }
    function ID(e) { for (; ae !== null;) {
        var t = ae, n = t.child;
        switch (t.tag) {
            case O:
            case te:
            case V:
            case oe: {
                if (t.mode & Je)
                    try {
                        Qa(), Aa(wt, t, t.return);
                    }
                    finally {
                        Ka(t);
                    }
                else
                    Aa(wt, t, t.return);
                break;
            }
            case A: {
                Ko(t, t.return);
                var a = t.stateNode;
                typeof a.componentWillUnmount == "function" && Ym(t, t.return, a);
                break;
            }
            case q: {
                Ko(t, t.return);
                break;
            }
            case Ne: {
                var r = t.memoizedState !== null;
                if (r) {
                    Gb(e);
                    continue;
                }
                break;
            }
        }
        n !== null ? (n.return = t, ae = n) : Gb(e);
    } }
    function Gb(e) { for (; ae !== null;) {
        var t = ae;
        if (t === e) {
            ae = null;
            return;
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, ae = n;
            return;
        }
        ae = t.return;
    } }
    function $D(e) { for (; ae !== null;) {
        var t = ae, n = t.child;
        if (t.tag === Ne) {
            var a = t.memoizedState !== null;
            if (a) {
                Wb(e);
                continue;
            }
        }
        n !== null ? (n.return = t, ae = n) : Wb(e);
    } }
    function Wb(e) { for (; ae !== null;) {
        var t = ae;
        ft(t);
        try {
            MD(t);
        }
        catch (a) {
            nt(t, t.return, a);
        }
        if (It(), t === e) {
            ae = null;
            return;
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, ae = n;
            return;
        }
        ae = t.return;
    } }
    function YD(e, t, n, a) { ae = t, qD(t, e, n, a); }
    function qD(e, t, n, a) { for (; ae !== null;) {
        var r = ae, i = r.child;
        (r.subtreeFlags & vo) !== ve && i !== null ? (i.return = r, ae = i) : GD(e, t, n, a);
    } }
    function GD(e, t, n, a) { for (; ae !== null;) {
        var r = ae;
        if ((r.flags & Vr) !== ve) {
            ft(r);
            try {
                WD(t, r, n, a);
            }
            catch (o) {
                nt(r, r.return, o);
            }
            It();
        }
        if (r === e) {
            ae = null;
            return;
        }
        var i = r.sibling;
        if (i !== null) {
            i.return = r.return, ae = i;
            return;
        }
        ae = r.return;
    } }
    function WD(e, t, n, a) { switch (t.tag) {
        case O:
        case te:
        case oe: {
            if (t.mode & Je) {
                pm();
                try {
                    ti(tn | Ot, t);
                }
                finally {
                    dm(t);
                }
            }
            else
                ti(tn | Ot, t);
            break;
        }
    } }
    function KD(e) { ae = e, QD(); }
    function QD() { for (; ae !== null;) {
        var e = ae, t = e.child;
        if ((ae.flags & Si) !== ve) {
            var n = e.deletions;
            if (n !== null) {
                for (var a = 0; a < n.length; a++) {
                    var r = n[a];
                    ae = r, ZD(r, e);
                }
                {
                    var i = e.alternate;
                    if (i !== null) {
                        var o = i.child;
                        if (o !== null) {
                            i.child = null;
                            do {
                                var l = o.sibling;
                                o.sibling = null, o = l;
                            } while (o !== null);
                        }
                    }
                }
                ae = e;
            }
        }
        (e.subtreeFlags & vo) !== ve && t !== null ? (t.return = e, ae = t) : XD();
    } }
    function XD() { for (; ae !== null;) {
        var e = ae;
        (e.flags & Vr) !== ve && (ft(e), JD(e), It());
        var t = e.sibling;
        if (t !== null) {
            t.return = e.return, ae = t;
            return;
        }
        ae = e.return;
    } }
    function JD(e) { switch (e.tag) {
        case O:
        case te:
        case oe: {
            e.mode & Je ? (pm(), Aa(tn | Ot, e, e.return), dm(e)) : Aa(tn | Ot, e, e.return);
            break;
        }
    } }
    function ZD(e, t) { for (; ae !== null;) {
        var n = ae;
        ft(n), t_(n, t), It();
        var a = n.child;
        a !== null ? (a.return = n, ae = a) : e_(e);
    } }
    function e_(e) { for (; ae !== null;) {
        var t = ae, n = t.sibling, a = t.return;
        if (Pb(t), t === e) {
            ae = null;
            return;
        }
        if (n !== null) {
            n.return = a, ae = n;
            return;
        }
        ae = a;
    } }
    function t_(e, t) { switch (e.tag) {
        case O:
        case te:
        case oe: {
            e.mode & Je ? (pm(), Aa(tn, e, t), dm(e)) : Aa(tn, e, t);
            break;
        }
    } }
    function n_(e) { switch (e.tag) {
        case O:
        case te:
        case oe: {
            try {
                ti(wt | Ot, e);
            }
            catch (n) {
                nt(e, e.return, n);
            }
            break;
        }
        case A: {
            var t = e.stateNode;
            try {
                t.componentDidMount();
            }
            catch (n) {
                nt(e, e.return, n);
            }
            break;
        }
    } }
    function a_(e) { switch (e.tag) {
        case O:
        case te:
        case oe: {
            try {
                ti(tn | Ot, e);
            }
            catch (t) {
                nt(e, e.return, t);
            }
            break;
        }
    } }
    function r_(e) { switch (e.tag) {
        case O:
        case te:
        case oe: {
            try {
                Aa(wt | Ot, e, e.return);
            }
            catch (n) {
                nt(e, e.return, n);
            }
            break;
        }
        case A: {
            var t = e.stateNode;
            typeof t.componentWillUnmount == "function" && Ym(e, e.return, t);
            break;
        }
    } }
    function i_(e) { switch (e.tag) {
        case O:
        case te:
        case oe: try {
            Aa(tn | Ot, e, e.return);
        }
        catch (t) {
            nt(e, e.return, t);
        }
    } }
    if (typeof Symbol == "function" && Symbol.for) {
        var Lu = Symbol.for;
        Lu("selector.component"), Lu("selector.has_pseudo_class"), Lu("selector.role"), Lu("selector.test_id"), Lu("selector.text");
    }
    var o_ = [];
    function l_() { o_.forEach(function (e) { return e(); }); }
    var u_ = h.ReactCurrentActQueue;
    function s_(e) { {
        var t = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0, n = typeof jest < "u";
        return n && t !== !1;
    } }
    function Kb() { {
        var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
        return !e && u_.current !== null && f("The current testing environment is not configured to support act(...)"), e;
    } }
    var c_ = Math.ceil, Km = h.ReactCurrentDispatcher, Qm = h.ReactCurrentOwner, on = h.ReactCurrentBatchConfig, Ma = h.ReactCurrentActQueue, Ut = 0, Qb = 1, ln = 2, sa = 4, Rr = 0, Uu = 1, $i = 2, Xc = 3, ku = 4, Xb = 5, Xm = 6, Fe = Ut, _n = null, ht = null, kt = z, Ja = z, Jm = qr(z), Vt = Rr, Vu = null, Jc = z, zu = z, Zc = z, Fu = null, Fn = null, Zm = 0, Jb = 500, Zb = 1 / 0, f_ = 500, xr = null;
    function Pu() { Zb = $t() + f_; }
    function eE() { return Zb; }
    var ef = !1, ev = null, Qo = null, Yi = !1, ai = null, Hu = z, tv = [], nv = null, d_ = 50, Bu = 0, av = null, rv = !1, tf = !1, p_ = 50, Xo = 0, nf = null, Iu = it, af = z, tE = !1;
    function rf() { return _n; }
    function jn() { return (Fe & (ln | sa)) !== Ut ? $t() : (Iu !== it || (Iu = $t()), Iu); }
    function ri(e) { var t = e.mode; if ((t & ze) === pe)
        return Ee; if ((Fe & ln) !== Ut && kt !== z)
        return Ul(kt); var n = u0() !== l0; if (n) {
        if (on.transition !== null) {
            var a = on.transition;
            a._updatedFibers || (a._updatedFibers = new Set), a._updatedFibers.add(e);
        }
        return af === qt && (af = kh()), af;
    } var r = Na(); if (r !== qt)
        return r; var i = qx(); return i; }
    function m_(e) { var t = e.mode; return (t & ze) === pe ? Ee : hT(); }
    function zt(e, t, n, a) { z_(), tE && f("useInsertionEffect must not schedule updates."), rv && (tf = !0), kl(e, n, a), (Fe & ln) !== z && e === _n ? H_(t) : (Sa && Fh(e, t, n), B_(t), e === _n && ((Fe & ln) === Ut && (zu = Ae(zu, n)), Vt === ku && ii(e, kt)), Pn(e, a), n === Ee && Fe === Ut && (t.mode & ze) === pe && !Ma.isBatchingLegacy && (Pu(), tg())); }
    function v_(e, t, n) { var a = e.current; a.lanes = t, kl(e, t, n), Pn(e, n); }
    function h_(e) { return (Fe & ln) !== Ut; }
    function Pn(e, t) { var n = e.callbackNode; cT(e, t); var a = xs(e, e === _n ? kt : z); if (a === z) {
        n !== null && yE(n), e.callbackNode = null, e.callbackPriority = qt;
        return;
    } var r = ji(a), i = e.callbackPriority; if (i === r && !(Ma.current !== null && n !== fv)) {
        n == null && i !== Ee && f("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
    } n != null && yE(n); var o; if (r === Ee)
        e.tag === Gr ? (Ma.isBatchingLegacy !== null && (Ma.didScheduleLegacyUpdate = !0), $C(rE.bind(null, e))) : eg(rE.bind(null, e)), Ma.current !== null ? Ma.current.push(Wr) : Wx(function () { (Fe & (ln | sa)) === Ut && Wr(); }), o = null;
    else {
        var l;
        switch (Bh(a)) {
            case qn:
                l = Ss;
                break;
            case vr:
                l = ed;
                break;
            case hr:
                l = Ci;
                break;
            case _s:
                l = td;
                break;
            default:
                l = Ci;
                break;
        }
        o = dv(l, nE.bind(null, e));
    } e.callbackPriority = r, e.callbackNode = o; }
    function nE(e, t) { if (L0(), Iu = it, af = z, (Fe & (ln | sa)) !== Ut)
        throw new Error("Should not already be working."); var n = e.callbackNode, a = Dr(); if (a && e.callbackNode !== n)
        return null; var r = xs(e, e === _n ? kt : z); if (r === z)
        return null; var i = !Cs(e, r) && !vT(e, r) && !t, o = i ? C_(e, r) : lf(e, r); if (o !== Rr) {
        if (o === $i) {
            var l = Td(e);
            l !== z && (r = l, o = iv(e, l));
        }
        if (o === Uu) {
            var u = Vu;
            throw qi(e, z), ii(e, r), Pn(e, $t()), u;
        }
        if (o === Xm)
            ii(e, r);
        else {
            var d = !Cs(e, r), m = e.current.alternate;
            if (d && !g_(m)) {
                if (o = lf(e, r), o === $i) {
                    var N = Td(e);
                    N !== z && (r = N, o = iv(e, N));
                }
                if (o === Uu) {
                    var S = Vu;
                    throw qi(e, z), ii(e, r), Pn(e, $t()), S;
                }
            }
            e.finishedWork = m, e.finishedLanes = r, y_(e, o, r);
        }
    } return Pn(e, $t()), e.callbackNode === n ? nE.bind(null, e) : null; }
    function iv(e, t) { var n = Fu; if (js(e)) {
        var a = qi(e, t);
        a.flags |= fr, VC(e.containerInfo);
    } var r = lf(e, t); if (r !== $i) {
        var i = Fn;
        Fn = n, i !== null && aE(i);
    } return r; }
    function aE(e) { Fn === null ? Fn = e : Fn.push.apply(Fn, e); }
    function y_(e, t, n) { switch (t) {
        case Rr:
        case Uu: throw new Error("Root did not complete. This is a bug in React.");
        case $i: {
            Gi(e, Fn, xr);
            break;
        }
        case Xc: {
            if (ii(e, n), Lh(n) && !gE()) {
                var a = Zm + Jb - $t();
                if (a > 10) {
                    var r = xs(e, z);
                    if (r !== z)
                        break;
                    var i = e.suspendedLanes;
                    if (!So(i, n)) {
                        jn(), zh(e, i);
                        break;
                    }
                    e.timeoutHandle = np(Gi.bind(null, e, Fn, xr), a);
                    break;
                }
            }
            Gi(e, Fn, xr);
            break;
        }
        case ku: {
            if (ii(e, n), mT(n))
                break;
            if (!gE()) {
                var o = uT(e, n), l = o, u = $t() - l, d = V_(u) - u;
                if (d > 10) {
                    e.timeoutHandle = np(Gi.bind(null, e, Fn, xr), d);
                    break;
                }
            }
            Gi(e, Fn, xr);
            break;
        }
        case Xb: {
            Gi(e, Fn, xr);
            break;
        }
        default: throw new Error("Unknown root exit status.");
    } }
    function g_(e) { for (var t = e;;) {
        if (t.flags & Gf) {
            var n = t.updateQueue;
            if (n !== null) {
                var a = n.stores;
                if (a !== null)
                    for (var r = 0; r < a.length; r++) {
                        var i = a[r], o = i.getSnapshot, l = i.value;
                        try {
                            if (!Wn(o(), l))
                                return !1;
                        }
                        catch {
                            return !1;
                        }
                    }
            }
        }
        var u = t.child;
        if (t.subtreeFlags & Gf && u !== null) {
            u.return = t, t = u;
            continue;
        }
        if (t === e)
            return !0;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e)
                return !0;
            t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
    } return !0; }
    function ii(e, t) { t = Ds(t, Zc), t = Ds(t, zu), gT(e, t); }
    function rE(e) { if (U0(), (Fe & (ln | sa)) !== Ut)
        throw new Error("Should not already be working."); Dr(); var t = xs(e, z); if (!Yn(t, Ee))
        return Pn(e, $t()), null; var n = lf(e, t); if (e.tag !== Gr && n === $i) {
        var a = Td(e);
        a !== z && (t = a, n = iv(e, a));
    } if (n === Uu) {
        var r = Vu;
        throw qi(e, z), ii(e, t), Pn(e, $t()), r;
    } if (n === Xm)
        throw new Error("Root did not complete. This is a bug in React."); var i = e.current.alternate; return e.finishedWork = i, e.finishedLanes = t, Gi(e, Fn, xr), Pn(e, $t()), null; }
    function b_(e, t) { t !== z && (Dd(e, Ae(t, Ee)), Pn(e, $t()), (Fe & (ln | sa)) === Ut && (Pu(), Wr())); }
    function ov(e, t) { var n = Fe; Fe |= Qb; try {
        return e(t);
    }
    finally {
        Fe = n, Fe === Ut && !Ma.isBatchingLegacy && (Pu(), tg());
    } }
    function E_(e, t, n, a, r) { var i = Na(), o = on.transition; try {
        return on.transition = null, Gt(qn), e(t, n, a, r);
    }
    finally {
        Gt(i), on.transition = o, Fe === Ut && Pu();
    } }
    function Cr(e) { ai !== null && ai.tag === Gr && (Fe & (ln | sa)) === Ut && Dr(); var t = Fe; Fe |= Qb; var n = on.transition, a = Na(); try {
        return on.transition = null, Gt(qn), e ? e() : void 0;
    }
    finally {
        Gt(a), on.transition = n, Fe = t, (Fe & (ln | sa)) === Ut && Wr();
    } }
    function iE() { return (Fe & (ln | sa)) !== Ut; }
    function of(e, t) { vn(Jm, Ja, e), Ja = Ae(Ja, t); }
    function lv(e) { Ja = Jm.current, mn(Jm, e); }
    function qi(e, t) { e.finishedWork = null, e.finishedLanes = z; var n = e.timeoutHandle; if (n !== ap && (e.timeoutHandle = ap, Gx(n)), ht !== null)
        for (var a = ht.return; a !== null;) {
            var r = a.alternate;
            Lb(r, a), a = a.return;
        } _n = e; var i = Wi(e.current, null); return ht = i, kt = Ja = t, Vt = Rr, Vu = null, Jc = z, zu = z, Zc = z, Fu = null, Fn = null, v0(), xa.discardPendingWarnings(), i; }
    function oE(e, t) { do {
        var n = ht;
        try {
            if (vc(), Ag(), It(), Qm.current = null, n === null || n.return === null) {
                Vt = Uu, Vu = t, ht = null;
                return;
            }
            if (bn && n.mode & Je && $c(n, !0), pa)
                if (yo(), t !== null && typeof t == "object" && typeof t.then == "function") {
                    var a = t;
                    QN(n, a, kt);
                }
                else
                    KN(n, t, kt);
            $0(e, n.return, n, t, kt), cE(n);
        }
        catch (r) {
            t = r, ht === n && n !== null ? (n = n.return, ht = n) : n = ht;
            continue;
        }
        return;
    } while (!0); }
    function lE() { var e = Km.current; return Km.current = Fc, e === null ? Fc : e; }
    function uE(e) { Km.current = e; }
    function S_() { Zm = $t(); }
    function $u(e) { Jc = Ae(e, Jc); }
    function N_() { Vt === Rr && (Vt = Xc); }
    function uv() { (Vt === Rr || Vt === Xc || Vt === $i) && (Vt = ku), _n !== null && (Rd(Jc) || Rd(zu)) && ii(_n, kt); }
    function T_(e) { Vt !== ku && (Vt = $i), Fu === null ? Fu = [e] : Fu.push(e); }
    function R_() { return Vt === Rr; }
    function lf(e, t) { var n = Fe; Fe |= ln; var a = lE(); if (_n !== e || kt !== t) {
        if (Sa) {
            var r = e.memoizedUpdaters;
            r.size > 0 && (Yu(e, kt), r.clear()), Ph(e, t);
        }
        xr = Hh(), qi(e, t);
    } jh(t); do
        try {
            x_();
            break;
        }
        catch (i) {
            oE(e, i);
        }
    while (!0); if (vc(), Fe = n, uE(a), ht !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue."); return Ah(), _n = null, kt = z, Vt; }
    function x_() { for (; ht !== null;)
        sE(ht); }
    function C_(e, t) { var n = Fe; Fe |= ln; var a = lE(); if (_n !== e || kt !== t) {
        if (Sa) {
            var r = e.memoizedUpdaters;
            r.size > 0 && (Yu(e, kt), r.clear()), Ph(e, t);
        }
        xr = Hh(), Pu(), qi(e, t);
    } jh(t); do
        try {
            D_();
            break;
        }
        catch (i) {
            oE(e, i);
        }
    while (!0); return vc(), uE(a), Fe = n, ht !== null ? (tT(), Rr) : (Ah(), _n = null, kt = z, Vt); }
    function D_() { for (; ht !== null && !jN();)
        sE(ht); }
    function sE(e) { var t = e.alternate; ft(e); var n; (e.mode & Je) !== pe ? (fm(e), n = sv(t, e, Ja), $c(e, !0)) : n = sv(t, e, Ja), It(), e.memoizedProps = e.pendingProps, n === null ? cE(e) : ht = n, Qm.current = null; }
    function cE(e) { var t = e; do {
        var n = t.alternate, a = t.return;
        if ((t.flags & Es) === ve) {
            ft(t);
            var r = void 0;
            if ((t.mode & Je) === pe ? r = Mb(n, t, Ja) : (fm(t), r = Mb(n, t, Ja), $c(t, !1)), It(), r !== null) {
                ht = r;
                return;
            }
        }
        else {
            var i = ND(n, t);
            if (i !== null) {
                i.flags &= TN, ht = i;
                return;
            }
            if ((t.mode & Je) !== pe) {
                $c(t, !1);
                for (var o = t.actualDuration, l = t.child; l !== null;)
                    o += l.actualDuration, l = l.sibling;
                t.actualDuration = o;
            }
            if (a !== null)
                a.flags |= Es, a.subtreeFlags = ve, a.deletions = null;
            else {
                Vt = Xm, ht = null;
                return;
            }
        }
        var u = t.sibling;
        if (u !== null) {
            ht = u;
            return;
        }
        t = a, ht = t;
    } while (t !== null); Vt === Rr && (Vt = Xb); }
    function Gi(e, t, n) { var a = Na(), r = on.transition; try {
        on.transition = null, Gt(qn), __(e, t, n, a);
    }
    finally {
        on.transition = r, Gt(a);
    } return null; }
    function __(e, t, n, a) { do
        Dr();
    while (ai !== null); if (F_(), (Fe & (ln | sa)) !== Ut)
        throw new Error("Should not already be working."); var r = e.finishedWork, i = e.finishedLanes; if (BN(i), r === null)
        return Ch(), null; if (i === z && f("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = z, r === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."); e.callbackNode = null, e.callbackPriority = qt; var o = Ae(r.lanes, r.childLanes); bT(e, o), e === _n && (_n = null, ht = null, kt = z), ((r.subtreeFlags & vo) !== ve || (r.flags & vo) !== ve) && (Yi || (Yi = !0, nv = n, dv(Ci, function () { return Dr(), null; }))); var l = (r.subtreeFlags & (Jf | Zf | _l | vo)) !== ve, u = (r.flags & (Jf | Zf | _l | vo)) !== ve; if (l || u) {
        var d = on.transition;
        on.transition = null;
        var m = Na();
        Gt(qn);
        var N = Fe;
        Fe |= sa, Qm.current = null, DD(e, r), tb(), HD(e, r, i), Px(e.containerInfo), e.current = r, XN(i), BD(r, e, i), JN(), AN(), Fe = N, Gt(m), on.transition = d;
    }
    else
        e.current = r, tb(); var S = Yi; if (Yi ? (Yi = !1, ai = e, Hu = i) : (Xo = 0, nf = null), o = e.pendingLanes, o === z && (Qo = null), S || mE(e.current, !1), VN(r.stateNode, a), Sa && e.memoizedUpdaters.clear(), l_(), Pn(e, $t()), t !== null)
        for (var C = e.onRecoverableError, _ = 0; _ < t.length; _++) {
            var M = t[_], Q = M.stack, fe = M.digest;
            C(M.value, { componentStack: Q, digest: fe });
        } if (ef) {
        ef = !1;
        var le = ev;
        throw ev = null, le;
    } return Yn(Hu, Ee) && e.tag !== Gr && Dr(), o = e.pendingLanes, Yn(o, Ee) ? (M0(), e === av ? Bu++ : (Bu = 0, av = e)) : Bu = 0, Wr(), Ch(), null; }
    function Dr() { if (ai !== null) {
        var e = Bh(Hu), t = TT(hr, e), n = on.transition, a = Na();
        try {
            return on.transition = null, Gt(t), A_();
        }
        finally {
            Gt(a), on.transition = n;
        }
    } return !1; }
    function j_(e) { tv.push(e), Yi || (Yi = !0, dv(Ci, function () { return Dr(), null; })); }
    function A_() { if (ai === null)
        return !1; var e = nv; nv = null; var t = ai, n = Hu; if (ai = null, Hu = z, (Fe & (ln | sa)) !== Ut)
        throw new Error("Cannot flush passive effects while already rendering."); rv = !0, tf = !1, ZN(n); var a = Fe; Fe |= sa, KD(t.current), YD(t, t.current, n, e); {
        var r = tv;
        tv = [];
        for (var i = 0; i < r.length; i++) {
            var o = r[i];
            OD(t, o);
        }
    } eT(), mE(t.current, !0), Fe = a, Wr(), tf ? t === nf ? Xo++ : (Xo = 0, nf = t) : Xo = 0, rv = !1, tf = !1, zN(t); {
        var l = t.current.stateNode;
        l.effectDuration = 0, l.passiveEffectDuration = 0;
    } return !0; }
    function fE(e) { return Qo !== null && Qo.has(e); }
    function O_(e) { Qo === null ? Qo = new Set([e]) : Qo.add(e); }
    function w_(e) { ef || (ef = !0, ev = e); }
    var M_ = w_;
    function dE(e, t, n) { var a = Bi(n, t), r = sb(e, a, Ee), i = Qr(e, r, Ee), o = jn(); i !== null && (kl(i, Ee, o), Pn(i, o)); }
    function nt(e, t, n) {
        if (RD(n), qu(!1), e.tag === j) {
            dE(e, e, n);
            return;
        }
        var a = null;
        for (a = t; a !== null;) {
            if (a.tag === j) {
                dE(a, e, n);
                return;
            }
            else if (a.tag === A) {
                var r = a.type, i = a.stateNode;
                if (typeof r.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && !fE(i)) {
                    var o = Bi(n, e), l = jm(a, o, Ee), u = Qr(a, l, Ee), d = jn();
                    u !== null && (kl(u, Ee, d), Pn(u, d));
                    return;
                }
            }
            a = a.return;
        }
        f(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, n);
    }
    function L_(e, t, n) { var a = e.pingCache; a !== null && a.delete(t); var r = jn(); zh(e, n), I_(e), _n === e && So(kt, n) && (Vt === ku || Vt === Xc && Lh(kt) && $t() - Zm < Jb ? qi(e, z) : Zc = Ae(Zc, n)), Pn(e, r); }
    function pE(e, t) { t === qt && (t = m_(e)); var n = jn(), a = Vn(e, t); a !== null && (kl(a, t, n), Pn(a, n)); }
    function U_(e) { var t = e.memoizedState, n = qt; t !== null && (n = t.retryLane), pE(e, n); }
    function k_(e, t) { var n = qt, a; switch (e.tag) {
        case ue:
            a = e.stateNode;
            var r = e.memoizedState;
            r !== null && (n = r.retryLane);
            break;
        case Ye:
            a = e.stateNode;
            break;
        default: throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
    } a !== null && a.delete(t), pE(e, n); }
    function V_(e) { return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : c_(e / 1960) * 1960; }
    function z_() { if (Bu > d_)
        throw Bu = 0, av = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."); Xo > p_ && (Xo = 0, nf = null, f("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.")); }
    function F_() { xa.flushLegacyContextWarning(), xa.flushPendingUnsafeLifecycleWarnings(); }
    function mE(e, t) { ft(e), uf(e, zr, r_), t && uf(e, Xf, i_), uf(e, zr, n_), t && uf(e, Xf, a_), It(); }
    function uf(e, t, n) { for (var a = e, r = null; a !== null;) {
        var i = a.subtreeFlags & t;
        a !== r && a.child !== null && i !== ve ? a = a.child : ((a.flags & t) !== ve && n(a), a.sibling !== null ? a = a.sibling : a = r = a.return);
    } }
    var sf = null;
    function vE(e) { {
        if ((Fe & ln) !== Ut || !(e.mode & ze))
            return;
        var t = e.tag;
        if (t !== B && t !== j && t !== A && t !== O && t !== te && t !== V && t !== oe)
            return;
        var n = xe(e) || "ReactComponent";
        if (sf !== null) {
            if (sf.has(n))
                return;
            sf.add(n);
        }
        else
            sf = new Set([n]);
        var a = Tn;
        try {
            ft(e), f("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        }
        finally {
            a ? ft(e) : It();
        }
    } }
    var sv;
    {
        var P_ = null;
        sv = function (e, t, n) { var a = TE(P_, t); try {
            return _b(e, t, n);
        }
        catch (i) {
            if (JC() || i !== null && typeof i == "object" && typeof i.then == "function")
                throw i;
            if (vc(), Ag(), Lb(e, t), TE(t, a), t.mode & Je && fm(t), Yf(null, _b, null, e, t, n), EN()) {
                var r = qf();
                typeof r == "object" && r !== null && r._suppressLogging && typeof i == "object" && i !== null && !i._suppressLogging && (i._suppressLogging = !0);
            }
            throw i;
        } };
    }
    var hE = !1, cv;
    cv = new Set;
    function H_(e) { if (yi && !A0())
        switch (e.tag) {
            case O:
            case te:
            case oe: {
                var t = ht && xe(ht) || "Unknown", n = t;
                if (!cv.has(n)) {
                    cv.add(n);
                    var a = xe(e) || "Unknown";
                    f("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", a, t, t);
                }
                break;
            }
            case A: {
                hE || (f("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), hE = !0);
                break;
            }
        } }
    function Yu(e, t) { if (Sa) {
        var n = e.memoizedUpdaters;
        n.forEach(function (a) { Fh(e, a, t); });
    } }
    var fv = {};
    function dv(e, t) { {
        var n = Ma.current;
        return n !== null ? (n.push(t), fv) : xh(e, t);
    } }
    function yE(e) { if (e !== fv)
        return _N(e); }
    function gE() { return Ma.current !== null; }
    function B_(e) {
        {
            if (e.mode & ze) {
                if (!Kb())
                    return;
            }
            else if (!s_() || Fe !== Ut || e.tag !== O && e.tag !== te && e.tag !== oe)
                return;
            if (Ma.current === null) {
                var t = Tn;
                try {
                    ft(e), f(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, xe(e));
                }
                finally {
                    t ? ft(e) : It();
                }
            }
        }
    }
    function I_(e) {
        e.tag !== Gr && Kb() && Ma.current === null && f(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function qu(e) { tE = e; }
    var ca = null, Jo = null, $_ = function (e) { ca = e; };
    function Zo(e) { {
        if (ca === null)
            return e;
        var t = ca(e);
        return t === void 0 ? e : t.current;
    } }
    function pv(e) { return Zo(e); }
    function mv(e) { {
        if (ca === null)
            return e;
        var t = ca(e);
        if (t === void 0) {
            if (e != null && typeof e.render == "function") {
                var n = Zo(e.render);
                if (e.render !== n) {
                    var a = { $$typeof: ce, render: n };
                    return e.displayName !== void 0 && (a.displayName = e.displayName), a;
                }
            }
            return e;
        }
        return t.current;
    } }
    function bE(e, t) { {
        if (ca === null)
            return !1;
        var n = e.elementType, a = t.type, r = !1, i = typeof a == "object" && a !== null ? a.$$typeof : null;
        switch (e.tag) {
            case A: {
                typeof a == "function" && (r = !0);
                break;
            }
            case O: {
                (typeof a == "function" || i === de) && (r = !0);
                break;
            }
            case te: {
                (i === ce || i === de) && (r = !0);
                break;
            }
            case V:
            case oe: {
                (i === je || i === de) && (r = !0);
                break;
            }
            default: return !1;
        }
        if (r) {
            var o = ca(n);
            if (o !== void 0 && o === ca(a))
                return !0;
        }
        return !1;
    } }
    function EE(e) { {
        if (ca === null || typeof WeakSet != "function")
            return;
        Jo === null && (Jo = new WeakSet), Jo.add(e);
    } }
    var Y_ = function (e, t) { {
        if (ca === null)
            return;
        var n = t.staleFamilies, a = t.updatedFamilies;
        Dr(), Cr(function () { vv(e.current, a, n); });
    } }, q_ = function (e, t) { {
        if (e.context !== Kn)
            return;
        Dr(), Cr(function () { Gu(t, e, null, null); });
    } };
    function vv(e, t, n) { {
        var a = e.alternate, r = e.child, i = e.sibling, o = e.tag, l = e.type, u = null;
        switch (o) {
            case O:
            case oe:
            case A:
                u = l;
                break;
            case te:
                u = l.render;
                break;
        }
        if (ca === null)
            throw new Error("Expected resolveFamily to be set during hot reload.");
        var d = !1, m = !1;
        if (u !== null) {
            var N = ca(u);
            N !== void 0 && (n.has(N) ? m = !0 : t.has(N) && (o === A ? m = !0 : d = !0));
        }
        if (Jo !== null && (Jo.has(e) || a !== null && Jo.has(a)) && (m = !0), m && (e._debugNeedsRemount = !0), m || d) {
            var S = Vn(e, Ee);
            S !== null && zt(S, e, Ee, it);
        }
        r !== null && !m && vv(r, t, n), i !== null && vv(i, t, n);
    } }
    var G_ = function (e, t) { {
        var n = new Set, a = new Set(t.map(function (r) { return r.current; }));
        return hv(e.current, a, n), n;
    } };
    function hv(e, t, n) { {
        var a = e.child, r = e.sibling, i = e.tag, o = e.type, l = null;
        switch (i) {
            case O:
            case oe:
            case A:
                l = o;
                break;
            case te:
                l = o.render;
                break;
        }
        var u = !1;
        l !== null && t.has(l) && (u = !0), u ? W_(e, n) : a !== null && hv(a, t, n), r !== null && hv(r, t, n);
    } }
    function W_(e, t) { {
        var n = K_(e, t);
        if (n)
            return;
        for (var a = e;;) {
            switch (a.tag) {
                case q:
                    t.add(a.stateNode);
                    return;
                case P:
                    t.add(a.stateNode.containerInfo);
                    return;
                case j:
                    t.add(a.stateNode.containerInfo);
                    return;
            }
            if (a.return === null)
                throw new Error("Expected to reach root first.");
            a = a.return;
        }
    } }
    function K_(e, t) { for (var n = e, a = !1;;) {
        if (n.tag === q)
            a = !0, t.add(n.stateNode);
        else if (n.child !== null) {
            n.child.return = n, n = n.child;
            continue;
        }
        if (n === e)
            return a;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === e)
                return a;
            n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
    } return !1; }
    var yv;
    {
        yv = !1;
        try {
            var SE = Object.preventExtensions({});
        }
        catch {
            yv = !0;
        }
    }
    function Q_(e, t, n, a) { this.tag = e, this.key = n, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = a, this.flags = ve, this.subtreeFlags = ve, this.deletions = null, this.lanes = z, this.childLanes = z, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !yv && typeof Object.preventExtensions == "function" && Object.preventExtensions(this); }
    var Qn = function (e, t, n, a) { return new Q_(e, t, n, a); };
    function gv(e) { var t = e.prototype; return !!(t && t.isReactComponent); }
    function X_(e) { return typeof e == "function" && !gv(e) && e.defaultProps === void 0; }
    function J_(e) { if (typeof e == "function")
        return gv(e) ? A : O; if (e != null) {
        var t = e.$$typeof;
        if (t === ce)
            return te;
        if (t === je)
            return V;
    } return B; }
    function Wi(e, t) { var n = e.alternate; n === null ? (n = Qn(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n._debugSource = e._debugSource, n._debugOwner = e._debugOwner, n._debugHookTypes = e._debugHookTypes, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = ve, n.subtreeFlags = ve, n.deletions = null, n.actualDuration = 0, n.actualStartTime = -1), n.flags = e.flags & pr, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue; var a = e.dependencies; switch (n.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.selfBaseDuration = e.selfBaseDuration, n.treeBaseDuration = e.treeBaseDuration, n._debugNeedsRemount = e._debugNeedsRemount, n.tag) {
        case B:
        case O:
        case oe:
            n.type = Zo(e.type);
            break;
        case A:
            n.type = pv(e.type);
            break;
        case te:
            n.type = mv(e.type);
            break;
    } return n; }
    function Z_(e, t) { e.flags &= pr | xt; var n = e.alternate; if (n === null)
        e.childLanes = z, e.lanes = t, e.child = null, e.subtreeFlags = ve, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
    else {
        e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = ve, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type;
        var a = n.dependencies;
        e.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration;
    } return e; }
    function ej(e, t, n) { var a; return e === ic ? (a = ze, t === !0 && (a |= bt, a |= Ba)) : a = pe, Sa && (a |= Je), Qn(j, null, null, a); }
    function bv(e, t, n, a, r, i) {
        var o = B, l = e;
        if (typeof e == "function")
            gv(e) ? (o = A, l = pv(l)) : l = Zo(l);
        else if (typeof e == "string")
            o = q;
        else
            e: switch (e) {
                case za: return oi(n.children, r, i, t);
                case fi:
                    o = ie, r |= bt, (r & ze) !== pe && (r |= Ba);
                    break;
                case b: return tj(n, r, i, t);
                case ke: return nj(n, r, i, t);
                case be: return aj(n, r, i, t);
                case ut: return NE(n, r, i, t);
                case dn:
                case jt:
                case Fa:
                case ga:
                case lt:
                default: {
                    if (typeof e == "object" && e !== null)
                        switch (e.$$typeof) {
                            case F:
                                o = $;
                                break e;
                            case K:
                                o = De;
                                break e;
                            case ce:
                                o = te, l = mv(l);
                                break e;
                            case je:
                                o = V;
                                break e;
                            case de:
                                o = _e, l = null;
                                break e;
                        }
                    var u = "";
                    {
                        (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                        var d = a ? xe(a) : null;
                        d && (u += `

Check the render method of \`` + d + "`.");
                    }
                    throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + u));
                }
            }
        var m = Qn(o, n, t, r);
        return m.elementType = e, m.type = l, m.lanes = i, m._debugOwner = a, m;
    }
    function Ev(e, t, n) { var a = null; a = e._owner; var r = e.type, i = e.key, o = e.props, l = bv(r, i, o, a, t, n); return l._debugSource = e._source, l._debugOwner = e._owner, l; }
    function oi(e, t, n, a) { var r = Qn(Ce, e, a, t); return r.lanes = n, r; }
    function tj(e, t, n, a) { typeof e.id != "string" && f('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id); var r = Qn(ye, e, a, t | Je); return r.elementType = b, r.lanes = n, r.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, r; }
    function nj(e, t, n, a) { var r = Qn(ue, e, a, t); return r.elementType = ke, r.lanes = n, r; }
    function aj(e, t, n, a) { var r = Qn(Ye, e, a, t); return r.elementType = be, r.lanes = n, r; }
    function NE(e, t, n, a) { var r = Qn(Ne, e, a, t); r.elementType = ut, r.lanes = n; var i = { isHidden: !1 }; return r.stateNode = i, r; }
    function Sv(e, t, n) { var a = Qn(ne, e, null, t); return a.lanes = n, a; }
    function rj() { var e = Qn(q, null, null, pe); return e.elementType = "DELETED", e; }
    function ij(e) { var t = Qn(Be, null, null, pe); return t.stateNode = e, t; }
    function Nv(e, t, n) { var a = e.children !== null ? e.children : [], r = Qn(P, a, e.key, t); return r.lanes = n, r.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, r; }
    function TE(e, t) { return e === null && (e = Qn(B, null, null, pe)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e; }
    function oj(e, t, n, a, r) { this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = ap, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = qt, this.eventTimes = Cd(z), this.expirationTimes = Cd(it), this.pendingLanes = z, this.suspendedLanes = z, this.pingedLanes = z, this.expiredLanes = z, this.mutableReadLanes = z, this.finishedLanes = z, this.entangledLanes = z, this.entanglements = Cd(z), this.identifierPrefix = a, this.onRecoverableError = r, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0; {
        this.memoizedUpdaters = new Set;
        for (var i = this.pendingUpdatersLaneMap = [], o = 0; o < ad; o++)
            i.push(new Set);
    } switch (t) {
        case ic:
            this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
            break;
        case Gr:
            this._debugRootType = n ? "hydrate()" : "render()";
            break;
    } }
    function RE(e, t, n, a, r, i, o, l, u, d) { var m = new oj(e, t, n, l, u), N = ej(t, i); m.current = N, N.stateNode = m; {
        var S = { element: a, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        N.memoizedState = S;
    } return Up(N), m; }
    var Tv = "18.3.1";
    function lj(e, t, n) { var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null; return ea(a), { $$typeof: In, key: a == null ? null : "" + a, children: e, containerInfo: t, implementation: n }; }
    var Rv, xv;
    Rv = !1, xv = {};
    function xE(e) { if (!e)
        return Kn; var t = fo(e), n = IC(t); if (t.tag === A) {
        var a = t.type;
        if (Ya(a))
            return Jy(t, a, n);
    } return n; }
    function uj(e, t) { {
        var n = fo(e);
        if (n === void 0) {
            if (typeof e.render == "function")
                throw new Error("Unable to find node on an unmounted component.");
            var a = Object.keys(e).join(",");
            throw new Error("Argument appears to not be a ReactComponent. Keys: " + a);
        }
        var r = Nh(n);
        if (r === null)
            return null;
        if (r.mode & bt) {
            var i = xe(n) || "Component";
            if (!xv[i]) {
                xv[i] = !0;
                var o = Tn;
                try {
                    ft(r), n.mode & bt ? f("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, i) : f("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, i);
                }
                finally {
                    o ? ft(o) : It();
                }
            }
        }
        return r.stateNode;
    } }
    function CE(e, t, n, a, r, i, o, l) { var u = !1, d = null; return RE(e, t, u, d, n, a, r, i, o); }
    function DE(e, t, n, a, r, i, o, l, u, d) { var m = !0, N = RE(n, a, m, e, r, i, o, l, u); N.context = xE(null); var S = N.current, C = jn(), _ = ri(S), M = Nr(C, _); return M.callback = t ?? null, Qr(S, M, _), v_(N, _, C), N; }
    function Gu(e, t, n, a) {
        kN(t, e);
        var r = t.current, i = jn(), o = ri(r);
        nT(o);
        var l = xE(n);
        t.context === null ? t.context = l : t.pendingContext = l, yi && Tn !== null && !Rv && (Rv = !0, f(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, xe(Tn) || "Unknown"));
        var u = Nr(i, o);
        u.payload = { element: e }, a = a === void 0 ? null : a, a !== null && (typeof a != "function" && f("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", a), u.callback = a);
        var d = Qr(r, u, o);
        return d !== null && (zt(d, r, o, i), Ec(d, r, o)), o;
    }
    function cf(e) { var t = e.current; if (!t.child)
        return null; switch (t.child.tag) {
        case q: return t.child.stateNode;
        default: return t.child.stateNode;
    } }
    function sj(e) { switch (e.tag) {
        case j: {
            var t = e.stateNode;
            if (js(t)) {
                var n = fT(t);
                b_(t, n);
            }
            break;
        }
        case ue: {
            Cr(function () { var r = Vn(e, Ee); if (r !== null) {
                var i = jn();
                zt(r, e, Ee, i);
            } });
            var a = Ee;
            Cv(e, a);
            break;
        }
    } }
    function _E(e, t) { var n = e.memoizedState; n !== null && n.dehydrated !== null && (n.retryLane = yT(n.retryLane, t)); }
    function Cv(e, t) { _E(e, t); var n = e.alternate; n && _E(n, t); }
    function cj(e) { if (e.tag === ue) {
        var t = wl, n = Vn(e, t);
        if (n !== null) {
            var a = jn();
            zt(n, e, t, a);
        }
        Cv(e, t);
    } }
    function fj(e) { if (e.tag === ue) {
        var t = ri(e), n = Vn(e, t);
        if (n !== null) {
            var a = jn();
            zt(n, e, t, a);
        }
        Cv(e, t);
    } }
    function jE(e) { var t = DN(e); return t === null ? null : t.stateNode; }
    var AE = function (e) { return null; };
    function dj(e) { return AE(e); }
    var OE = function (e) { return !1; };
    function pj(e) { return OE(e); }
    var wE = null, ME = null, LE = null, UE = null, kE = null, VE = null, zE = null, FE = null, PE = null;
    {
        var HE = function (e, t, n) { var a = t[n], r = Le(e) ? e.slice() : Me({}, e); return n + 1 === t.length ? (Le(r) ? r.splice(a, 1) : delete r[a], r) : (r[a] = HE(e[a], t, n + 1), r); }, BE = function (e, t) { return HE(e, t, 0); }, IE = function (e, t, n, a) { var r = t[a], i = Le(e) ? e.slice() : Me({}, e); if (a + 1 === t.length) {
            var o = n[a];
            i[o] = i[r], Le(i) ? i.splice(r, 1) : delete i[r];
        }
        else
            i[r] = IE(e[r], t, n, a + 1); return i; }, $E = function (e, t, n) { if (t.length !== n.length) {
            T("copyWithRename() expects paths of the same length");
            return;
        }
        else
            for (var a = 0; a < n.length - 1; a++)
                if (t[a] !== n[a]) {
                    T("copyWithRename() expects paths to be the same except for the deepest key");
                    return;
                } return IE(e, t, n, 0); }, YE = function (e, t, n, a) { if (n >= t.length)
            return a; var r = t[n], i = Le(e) ? e.slice() : Me({}, e); return i[r] = YE(e[r], t, n + 1, a), i; }, qE = function (e, t, n) { return YE(e, t, 0, n); }, Dv = function (e, t) { for (var n = e.memoizedState; n !== null && t > 0;)
            n = n.next, t--; return n; };
        wE = function (e, t, n, a) { var r = Dv(e, t); if (r !== null) {
            var i = qE(r.memoizedState, n, a);
            r.memoizedState = i, r.baseState = i, e.memoizedProps = Me({}, e.memoizedProps);
            var o = Vn(e, Ee);
            o !== null && zt(o, e, Ee, it);
        } }, ME = function (e, t, n) { var a = Dv(e, t); if (a !== null) {
            var r = BE(a.memoizedState, n);
            a.memoizedState = r, a.baseState = r, e.memoizedProps = Me({}, e.memoizedProps);
            var i = Vn(e, Ee);
            i !== null && zt(i, e, Ee, it);
        } }, LE = function (e, t, n, a) { var r = Dv(e, t); if (r !== null) {
            var i = $E(r.memoizedState, n, a);
            r.memoizedState = i, r.baseState = i, e.memoizedProps = Me({}, e.memoizedProps);
            var o = Vn(e, Ee);
            o !== null && zt(o, e, Ee, it);
        } }, UE = function (e, t, n) { e.pendingProps = qE(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps); var a = Vn(e, Ee); a !== null && zt(a, e, Ee, it); }, kE = function (e, t) { e.pendingProps = BE(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps); var n = Vn(e, Ee); n !== null && zt(n, e, Ee, it); }, VE = function (e, t, n) { e.pendingProps = $E(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps); var a = Vn(e, Ee); a !== null && zt(a, e, Ee, it); }, zE = function (e) { var t = Vn(e, Ee); t !== null && zt(t, e, Ee, it); }, FE = function (e) { AE = e; }, PE = function (e) { OE = e; };
    }
    function mj(e) { var t = Nh(e); return t === null ? null : t.stateNode; }
    function vj(e) { return null; }
    function hj() { return Tn; }
    function yj(e) { var t = e.findFiberByHostInstance, n = h.ReactCurrentDispatcher; return UN({ bundleType: e.bundleType, version: e.version, rendererPackageName: e.rendererPackageName, rendererConfig: e.rendererConfig, overrideHookState: wE, overrideHookStateDeletePath: ME, overrideHookStateRenamePath: LE, overrideProps: UE, overridePropsDeletePath: kE, overridePropsRenamePath: VE, setErrorHandler: FE, setSuspenseHandler: PE, scheduleUpdate: zE, currentDispatcherRef: n, findHostInstanceByFiber: mj, findFiberByHostInstance: t || vj, findHostInstancesForRefresh: G_, scheduleRefresh: Y_, scheduleRoot: q_, setRefreshHandler: $_, getCurrentFiber: hj, reconcilerVersion: Tv }); }
    var GE = typeof reportError == "function" ? reportError : function (e) { console.error(e); };
    function _v(e) { this._internalRoot = e; }
    ff.prototype.render = _v.prototype.render = function (e) { var t = this._internalRoot; if (t === null)
        throw new Error("Cannot update an unmounted root."); {
        typeof arguments[1] == "function" ? f("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : df(arguments[1]) ? f("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && f("You passed a second argument to root.render(...) but it only accepts one argument.");
        var n = t.containerInfo;
        if (n.nodeType !== Rt) {
            var a = jE(t.current);
            a && a.parentNode !== n && f("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
    } Gu(e, t, null, null); }, ff.prototype.unmount = _v.prototype.unmount = function () { typeof arguments[0] == "function" && f("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."); var e = this._internalRoot; if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        iE() && f("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Cr(function () { Gu(null, e, null, null); }), Gy(t);
    } };
    function gj(e, t) {
        if (!df(e))
            throw new Error("createRoot(...): Target container is not a DOM element.");
        WE(e);
        var n = !1, a = !1, r = "", i = GE;
        t != null && (t.hydrate ? T("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === na && f(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
        var o = CE(e, ic, null, n, a, r, i);
        Js(o.current, e);
        var l = e.nodeType === Rt ? e.parentNode : e;
        return Zl(l), new _v(o);
    }
    function ff(e) { this._internalRoot = e; }
    function bj(e) { e && LT(e); }
    ff.prototype.unstable_scheduleHydration = bj;
    function Ej(e, t, n) { if (!df(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element."); WE(e), t === void 0 && f("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"); var a = n ?? null, r = n != null && n.hydratedSources || null, i = !1, o = !1, l = "", u = GE; n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (u = n.onRecoverableError)); var d = DE(t, null, e, ic, a, i, o, l, u); if (Js(d.current, e), Zl(e), r)
        for (var m = 0; m < r.length; m++) {
            var N = r[m];
            R0(d, N);
        } return new ff(d); }
    function df(e) { return !!(e && (e.nodeType === Un || e.nodeType === cr || e.nodeType === Lf)); }
    function Wu(e) { return !!(e && (e.nodeType === Un || e.nodeType === cr || e.nodeType === Lf || e.nodeType === Rt && e.nodeValue === " react-mount-point-unstable ")); }
    function WE(e) { e.nodeType === Un && e.tagName && e.tagName.toUpperCase() === "BODY" && f("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), cu(e) && (e._reactRootContainer ? f("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : f("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it.")); }
    var Sj = h.ReactCurrentOwner, KE;
    KE = function (e) { if (e._reactRootContainer && e.nodeType !== Rt) {
        var t = jE(e._reactRootContainer.current);
        t && t.parentNode !== e && f("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
    } var n = !!e._reactRootContainer, a = jv(e), r = !!(a && Yr(a)); r && !n && f("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Un && e.tagName && e.tagName.toUpperCase() === "BODY" && f("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app."); };
    function jv(e) { return e ? e.nodeType === cr ? e.documentElement : e.firstChild : null; }
    function QE() { }
    function Nj(e, t, n, a, r) { if (r) {
        if (typeof a == "function") {
            var i = a;
            a = function () { var S = cf(o); i.call(S); };
        }
        var o = DE(t, a, e, Gr, null, !1, !1, "", QE);
        e._reactRootContainer = o, Js(o.current, e);
        var l = e.nodeType === Rt ? e.parentNode : e;
        return Zl(l), Cr(), o;
    }
    else {
        for (var u; u = e.lastChild;)
            e.removeChild(u);
        if (typeof a == "function") {
            var d = a;
            a = function () { var S = cf(m); d.call(S); };
        }
        var m = CE(e, Gr, null, !1, !1, "", QE);
        e._reactRootContainer = m, Js(m.current, e);
        var N = e.nodeType === Rt ? e.parentNode : e;
        return Zl(N), Cr(function () { Gu(t, m, n, a); }), m;
    } }
    function Tj(e, t) { e !== null && typeof e != "function" && f("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e); }
    function pf(e, t, n, a, r) { KE(n), Tj(r === void 0 ? null : r, "render"); var i = n._reactRootContainer, o; if (!i)
        o = Nj(n, t, e, r, a);
    else {
        if (o = i, typeof r == "function") {
            var l = r;
            r = function () { var u = cf(o); l.call(u); };
        }
        Gu(t, o, e, r);
    } return cf(o); }
    var XE = !1;
    function Rj(e) { {
        XE || (XE = !0, f("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = Sj.current;
        if (t !== null && t.stateNode !== null) {
            var n = t.stateNode._warnedAboutRefsInRender;
            n || f("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", qe(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
    } return e == null ? null : e.nodeType === Un ? e : uj(e, "findDOMNode"); }
    function xj(e, t, n) { if (f("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wu(t))
        throw new Error("Target container is not a DOM element."); {
        var a = cu(t) && t._reactRootContainer === void 0;
        a && f("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
    } return pf(null, e, t, !0, n); }
    function Cj(e, t, n) { if (f("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wu(t))
        throw new Error("Target container is not a DOM element."); {
        var a = cu(t) && t._reactRootContainer === void 0;
        a && f("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
    } return pf(null, e, t, !1, n); }
    function Dj(e, t, n, a) { if (f("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Wu(n))
        throw new Error("Target container is not a DOM element."); if (e == null || !SN(e))
        throw new Error("parentComponent must be a valid React Component"); return pf(e, t, n, !1, a); }
    var JE = !1;
    function _j(e) { if (JE || (JE = !0, f("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Wu(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element."); {
        var t = cu(e) && e._reactRootContainer === void 0;
        t && f("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
    } if (e._reactRootContainer) {
        {
            var n = jv(e), a = n && !Yr(n);
            a && f("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Cr(function () { pf(null, null, e, !1, function () { e._reactRootContainer = null, Gy(e); }); }), !0;
    }
    else {
        {
            var r = jv(e), i = !!(r && Yr(r)), o = e.nodeType === Un && Wu(e.parentNode) && !!e.parentNode._reactRootContainer;
            i && f("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", o ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
    } }
    RT(sj), CT(cj), DT(fj), _T(Na), jT(ST), (typeof Map != "function" || Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && f("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), cN(Ax), pN(ov, E_, Cr);
    function jj(e, t) { var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null; if (!df(t))
        throw new Error("Target container is not a DOM element."); return lj(e, t, null, n); }
    function Aj(e, t, n, a) { return Dj(e, t, n, a); }
    var Av = { usingClientEntryPoint: !1, Events: [Yr, Ao, Zs, sh, ch, ov] };
    function Oj(e, t) { return Av.usingClientEntryPoint || f('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), gj(e, t); }
    function wj(e, t, n) { return Av.usingClientEntryPoint || f('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Ej(e, t, n); }
    function Mj(e) { return iE() && f("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Cr(e); }
    var Lj = yj({ findFiberByHostInstance: Mi, bundleType: 1, version: Tv, rendererPackageName: "react-dom" });
    if (!Lj && Xt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
        var ZE = window.location.protocol;
        /^(https?|file):$/.test(ZE) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (ZE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Av, Jn.createPortal = jj, Jn.createRoot = Oj, Jn.findDOMNode = Rj, Jn.flushSync = Mj, Jn.hydrate = xj, Jn.hydrateRoot = wj, Jn.render = Cj, Jn.unmountComponentAtNode = _j, Jn.unstable_batchedUpdates = ov, Jn.unstable_renderSubtreeIntoContainer = Aj, Jn.version = Tv, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error);
})();
fS.exports = Jn;
var Bj = fS.exports, Ov = Bj;
{
    var mf = Ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Uv.createRoot = function (c, p) { mf.usingClientEntryPoint = !0; try {
        return Ov.createRoot(c, p);
    }
    finally {
        mf.usingClientEntryPoint = !1;
    } }, Uv.hydrateRoot = function (c, p, h) { mf.usingClientEntryPoint = !0; try {
        return Ov.hydrateRoot(c, p, h);
    }
    finally {
        mf.usingClientEntryPoint = !1;
    } };
} /**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Qu() { return Qu = Object.assign ? Object.assign.bind() : function (c) { for (var p = 1; p < arguments.length; p++) {
    var h = arguments[p];
    for (var E in h)
        Object.prototype.hasOwnProperty.call(h, E) && (c[E] = h[E]);
} return c; }, Qu.apply(this, arguments); }
var li;
(function (c) { c.Pop = "POP", c.Push = "PUSH", c.Replace = "REPLACE"; })(li || (li = {}));
const eS = "popstate";
function Ij(c) { c === void 0 && (c = {}); function p(E, y) { let { pathname: T, search: f, hash: k } = E.location; return kv("", { pathname: T, search: f, hash: k }, y.state && y.state.usr || null, y.state && y.state.key || "default"); } function h(E, y) { return typeof y == "string" ? y : Xu(y); } return Yj(p, h, null, c); }
function pt(c, p) { if (c === !1 || c === null || typeof c > "u")
    throw new Error(p); }
function Ua(c, p) { if (!c) {
    typeof console < "u" && console.warn(p);
    try {
        throw new Error(p);
    }
    catch { }
} }
function $j() { return Math.random().toString(36).substr(2, 8); }
function tS(c, p) { return { usr: c.state, key: c.key, idx: p }; }
function kv(c, p, h, E) { return h === void 0 && (h = null), Qu({ pathname: typeof c == "string" ? c : c.pathname, search: "", hash: "" }, typeof p == "string" ? nl(p) : p, { state: h, key: p && p.key || E || $j() }); }
function Xu(c) { let { pathname: p = "/", search: h = "", hash: E = "" } = c; return h && h !== "?" && (p += h.charAt(0) === "?" ? h : "?" + h), E && E !== "#" && (p += E.charAt(0) === "#" ? E : "#" + E), p; }
function nl(c) { let p = {}; if (c) {
    let h = c.indexOf("#");
    h >= 0 && (p.hash = c.substr(h), c = c.substr(0, h));
    let E = c.indexOf("?");
    E >= 0 && (p.search = c.substr(E), c = c.substr(0, E)), c && (p.pathname = c);
} return p; }
function Yj(c, p, h, E) { E === void 0 && (E = {}); let { window: y = document.defaultView, v5Compat: T = !1 } = E, f = y.history, k = li.Pop, O = null, A = B(); A == null && (A = 0, f.replaceState(Qu({}, f.state, { idx: A }), "")); function B() { return (f.state || { idx: null }).idx; } function j() { k = li.Pop; let ie = B(), De = ie == null ? null : ie - A; A = ie, O && O({ action: k, location: Ce.location, delta: De }); } function P(ie, De) { k = li.Push; let $ = kv(Ce.location, ie, De); A = B() + 1; let te = tS($, A), ye = Ce.createHref($); try {
    f.pushState(te, "", ye);
}
catch (ue) {
    if (ue instanceof DOMException && ue.name === "DataCloneError")
        throw ue;
    y.location.assign(ye);
} T && O && O({ action: k, location: Ce.location, delta: 1 }); } function q(ie, De) { k = li.Replace; let $ = kv(Ce.location, ie, De); A = B(); let te = tS($, A), ye = Ce.createHref($); f.replaceState(te, "", ye), T && O && O({ action: k, location: Ce.location, delta: 0 }); } function ne(ie) { let De = y.location.origin !== "null" ? y.location.origin : y.location.href, $ = typeof ie == "string" ? ie : Xu(ie); return $ = $.replace(/ $/, "%20"), pt(De, "No window.location.(origin|href) available to create URL for href: " + $), new URL($, De); } let Ce = { get action() { return k; }, get location() { return c(y, f); }, listen(ie) { if (O)
        throw new Error("A history only accepts one active listener"); return y.addEventListener(eS, j), O = ie, () => { y.removeEventListener(eS, j), O = null; }; }, createHref(ie) { return p(y, ie); }, createURL: ne, encodeLocation(ie) { let De = ne(ie); return { pathname: De.pathname, search: De.search, hash: De.hash }; }, push: P, replace: q, go(ie) { return f.go(ie); } }; return Ce; }
var nS;
(function (c) { c.data = "data", c.deferred = "deferred", c.redirect = "redirect", c.error = "error"; })(nS || (nS = {}));
function qj(c, p, h) { return h === void 0 && (h = "/"), Gj(c, p, h); }
function Gj(c, p, h, E) { let y = typeof p == "string" ? nl(p) : p, T = ui(y.pathname || "/", h); if (T == null)
    return null; let f = mS(c); Wj(f); let k = null; for (let O = 0; k == null && O < f.length; ++O) {
    let A = iA(T);
    k = aA(f[O], A);
} return k; }
function mS(c, p, h, E) { p === void 0 && (p = []), h === void 0 && (h = []), E === void 0 && (E = ""); let y = (T, f, k) => { let O = { relativePath: k === void 0 ? T.path || "" : k, caseSensitive: T.caseSensitive === !0, childrenIndex: f, route: T }; O.relativePath.startsWith("/") && (pt(O.relativePath.startsWith(E), 'Absolute route path "' + O.relativePath + '" nested under path ' + ('"' + E + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), O.relativePath = O.relativePath.slice(E.length)); let A = Or([E, O.relativePath]), B = h.concat(O); T.children && T.children.length > 0 && (pt(T.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + A + '".')), mS(T.children, p, B, A)), !(T.path == null && !T.index) && p.push({ path: A, score: tA(A, T.index), routesMeta: B }); }; return c.forEach((T, f) => { var k; if (T.path === "" || !((k = T.path) != null && k.includes("?")))
    y(T, f);
else
    for (let O of vS(T.path))
        y(T, f, O); }), p; }
function vS(c) { let p = c.split("/"); if (p.length === 0)
    return []; let [h, ...E] = p, y = h.endsWith("?"), T = h.replace(/\?$/, ""); if (E.length === 0)
    return y ? [T, ""] : [T]; let f = vS(E.join("/")), k = []; return k.push(...f.map(O => O === "" ? T : [T, O].join("/"))), y && k.push(...f), k.map(O => c.startsWith("/") && O === "" ? "/" : O); }
function Wj(c) { c.sort((p, h) => p.score !== h.score ? h.score - p.score : nA(p.routesMeta.map(E => E.childrenIndex), h.routesMeta.map(E => E.childrenIndex))); }
const Kj = /^:[\w-]+$/, Qj = 3, Xj = 2, Jj = 1, Zj = 10, eA = -2, aS = c => c === "*";
function tA(c, p) { let h = c.split("/"), E = h.length; return h.some(aS) && (E += eA), p && (E += Xj), h.filter(y => !aS(y)).reduce((y, T) => y + (Kj.test(T) ? Qj : T === "" ? Jj : Zj), E); }
function nA(c, p) { return c.length === p.length && c.slice(0, -1).every((E, y) => E === p[y]) ? c[c.length - 1] - p[p.length - 1] : 0; }
function aA(c, p, h) { let { routesMeta: E } = c, y = {}, T = "/", f = []; for (let k = 0; k < E.length; ++k) {
    let O = E[k], A = k === E.length - 1, B = T === "/" ? p : p.slice(T.length) || "/", j = Vv({ path: O.relativePath, caseSensitive: O.caseSensitive, end: A }, B), P = O.route;
    if (!j)
        return null;
    Object.assign(y, j.params), f.push({ params: y, pathname: Or([T, j.pathname]), pathnameBase: sA(Or([T, j.pathnameBase])), route: P }), j.pathnameBase !== "/" && (T = Or([T, j.pathnameBase]));
} return f; }
function Vv(c, p) { typeof c == "string" && (c = { path: c, caseSensitive: !1, end: !0 }); let [h, E] = rA(c.path, c.caseSensitive, c.end), y = p.match(h); if (!y)
    return null; let T = y[0], f = T.replace(/(.)\/+$/, "$1"), k = y.slice(1); return { params: E.reduce((A, B, j) => { let { paramName: P, isOptional: q } = B; if (P === "*") {
        let Ce = k[j] || "";
        f = T.slice(0, T.length - Ce.length).replace(/(.)\/+$/, "$1");
    } const ne = k[j]; return q && !ne ? A[P] = void 0 : A[P] = (ne || "").replace(/%2F/g, "/"), A; }, {}), pathname: T, pathnameBase: f, pattern: c }; }
function rA(c, p, h) { p === void 0 && (p = !1), h === void 0 && (h = !0), Ua(c === "*" || !c.endsWith("*") || c.endsWith("/*"), 'Route path "' + c + '" will be treated as if it were ' + ('"' + c.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + c.replace(/\*$/, "/*") + '".')); let E = [], y = "^" + c.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (f, k, O) => (E.push({ paramName: k, isOptional: O != null }), O ? "/?([^\\/]+)?" : "/([^\\/]+)")); return c.endsWith("*") ? (E.push({ paramName: "*" }), y += c === "*" || c === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : h ? y += "\\/*$" : c !== "" && c !== "/" && (y += "(?:(?=\\/|$))"), [new RegExp(y, p ? void 0 : "i"), E]; }
function iA(c) { try {
    return c.split("/").map(p => decodeURIComponent(p).replace(/\//g, "%2F")).join("/");
}
catch (p) {
    return Ua(!1, 'The URL path "' + c + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + p + ").")), c;
} }
function ui(c, p) { if (p === "/")
    return c; if (!c.toLowerCase().startsWith(p.toLowerCase()))
    return null; let h = p.endsWith("/") ? p.length - 1 : p.length, E = c.charAt(h); return E && E !== "/" ? null : c.slice(h) || "/"; }
function oA(c, p) { p === void 0 && (p = "/"); let { pathname: h, search: E = "", hash: y = "" } = typeof c == "string" ? nl(c) : c; return { pathname: h ? h.startsWith("/") ? h : lA(h, p) : p, search: cA(E), hash: fA(y) }; }
function lA(c, p) { let h = p.replace(/\/+$/, "").split("/"); return c.split("/").forEach(y => { y === ".." ? h.length > 1 && h.pop() : y !== "." && h.push(y); }), h.length > 1 ? h.join("/") : "/"; }
function wv(c, p, h, E) { return "Cannot include a '" + c + "' character in a manually specified " + ("`to." + p + "` field [" + JSON.stringify(E) + "].  Please separate it out to the ") + ("`to." + h + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'; }
function uA(c) { return c.filter((p, h) => h === 0 || p.route.path && p.route.path.length > 0); }
function Fv(c, p) { let h = uA(c); return p ? h.map((E, y) => y === h.length - 1 ? E.pathname : E.pathnameBase) : h.map(E => E.pathnameBase); }
function Pv(c, p, h, E) { E === void 0 && (E = !1); let y; typeof c == "string" ? y = nl(c) : (y = Qu({}, c), pt(!y.pathname || !y.pathname.includes("?"), wv("?", "pathname", "search", y)), pt(!y.pathname || !y.pathname.includes("#"), wv("#", "pathname", "hash", y)), pt(!y.search || !y.search.includes("#"), wv("#", "search", "hash", y))); let T = c === "" || y.pathname === "", f = T ? "/" : y.pathname, k; if (f == null)
    k = h;
else {
    let j = p.length - 1;
    if (!E && f.startsWith("..")) {
        let P = f.split("/");
        for (; P[0] === "..";)
            P.shift(), j -= 1;
        y.pathname = P.join("/");
    }
    k = j >= 0 ? p[j] : "/";
} let O = oA(y, k), A = f && f !== "/" && f.endsWith("/"), B = (T || f === ".") && h.endsWith("/"); return !O.pathname.endsWith("/") && (A || B) && (O.pathname += "/"), O; }
const Or = c => c.join("/").replace(/\/\/+/g, "/"), sA = c => c.replace(/\/+$/, "").replace(/^\/*/, "/"), cA = c => !c || c === "?" ? "" : c.startsWith("?") ? c : "?" + c, fA = c => !c || c === "#" ? "" : c.startsWith("#") ? c : "#" + c;
function dA(c) { return c != null && typeof c.status == "number" && typeof c.statusText == "string" && typeof c.internal == "boolean" && "data" in c; }
const hS = ["post", "put", "patch", "delete"];
new Set(hS);
const pA = ["get", ...hS];
new Set(pA); /**
* React Router v6.30.1
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/
function Ju() { return Ju = Object.assign ? Object.assign.bind() : function (c) { for (var p = 1; p < arguments.length; p++) {
    var h = arguments[p];
    for (var E in h)
        Object.prototype.hasOwnProperty.call(h, E) && (c[E] = h[E]);
} return c; }, Ju.apply(this, arguments); }
const es = I.createContext(null);
es.displayName = "DataRouter";
const Hv = I.createContext(null);
Hv.displayName = "DataRouterState";
const mA = I.createContext(null);
mA.displayName = "Await";
const fa = I.createContext(null);
fa.displayName = "Navigation";
const ts = I.createContext(null);
ts.displayName = "Location";
const er = I.createContext({ outlet: null, matches: [], isDataRoute: !1 });
er.displayName = "Route";
const Bv = I.createContext(null);
Bv.displayName = "RouteError";
function vA(c, p) { let { relative: h } = p === void 0 ? {} : p; al() || pt(!1, "useHref() may be used only in the context of a <Router> component."); let { basename: E, navigator: y } = I.useContext(fa), { hash: T, pathname: f, search: k } = ns(c, { relative: h }), O = f; return E !== "/" && (O = f === "/" ? E : Or([E, f])), y.createHref({ pathname: O, search: k, hash: T }); }
function al() { return I.useContext(ts) != null; }
function Qi() { return al() || pt(!1, "useLocation() may be used only in the context of a <Router> component."), I.useContext(ts).location; }
const yS = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function gS(c) { I.useContext(fa).static || I.useLayoutEffect(c); }
function Ef() { let { isDataRoute: c } = I.useContext(er); return c ? jA() : hA(); }
function hA() { al() || pt(!1, "useNavigate() may be used only in the context of a <Router> component."); let c = I.useContext(es), { basename: p, future: h, navigator: E } = I.useContext(fa), { matches: y } = I.useContext(er), { pathname: T } = Qi(), f = JSON.stringify(Fv(y, h.v7_relativeSplatPath)), k = I.useRef(!1); return gS(() => { k.current = !0; }), I.useCallback(function (A, B) { if (B === void 0 && (B = {}), Ua(k.current, yS), !k.current)
    return; if (typeof A == "number") {
    E.go(A);
    return;
} let j = Pv(A, JSON.parse(f), T, B.relative === "path"); c == null && p !== "/" && (j.pathname = j.pathname === "/" ? p : Or([p, j.pathname])), (B.replace ? E.replace : E.push)(j, B.state, B); }, [p, E, f, T, c]); }
function ns(c, p) { let { relative: h } = p === void 0 ? {} : p, { future: E } = I.useContext(fa), { matches: y } = I.useContext(er), { pathname: T } = Qi(), f = JSON.stringify(Fv(y, E.v7_relativeSplatPath)); return I.useMemo(() => Pv(c, JSON.parse(f), T, h === "path"), [c, f, T, h]); }
function yA(c, p) { return gA(c, p); }
function gA(c, p, h, E) {
    al() || pt(!1, "useRoutes() may be used only in the context of a <Router> component.");
    let { navigator: y } = I.useContext(fa), { matches: T } = I.useContext(er), f = T[T.length - 1], k = f ? f.params : {}, O = f ? f.pathname : "/", A = f ? f.pathnameBase : "/", B = f && f.route;
    {
        let $ = B && B.path || "";
        ES(O, !B || $.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + O + '" (under <Route path="' + $ + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + $ + '"> to <Route ') + ('path="' + ($ === "/" ? "*" : $ + "/*") + '">.'));
    }
    let j = Qi(), P;
    if (p) {
        var q;
        let $ = typeof p == "string" ? nl(p) : p;
        A === "/" || (q = $.pathname) != null && q.startsWith(A) || pt(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + A + '" ') + ('but pathname "' + $.pathname + '" was given in the `location` prop.')), P = $;
    }
    else
        P = j;
    let ne = P.pathname || "/", Ce = ne;
    if (A !== "/") {
        let $ = A.replace(/^\//, "").split("/");
        Ce = "/" + ne.replace(/^\//, "").split("/").slice($.length).join("/");
    }
    let ie = qj(c, { pathname: Ce });
    Ua(B || ie != null, 'No routes matched location "' + P.pathname + P.search + P.hash + '" '), Ua(ie == null || ie[ie.length - 1].route.element !== void 0 || ie[ie.length - 1].route.Component !== void 0 || ie[ie.length - 1].route.lazy !== void 0, 'Matched leaf route at location "' + P.pathname + P.search + P.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.');
    let De = TA(ie && ie.map($ => Object.assign({}, $, { params: Object.assign({}, k, $.params), pathname: Or([A, y.encodeLocation ? y.encodeLocation($.pathname).pathname : $.pathname]), pathnameBase: $.pathnameBase === "/" ? A : Or([A, y.encodeLocation ? y.encodeLocation($.pathnameBase).pathname : $.pathnameBase]) })), T, h, E);
    return p && De ? I.createElement(ts.Provider, { value: { location: Ju({ pathname: "/", search: "", hash: "", state: null, key: "default" }, P), navigationType: li.Pop } }, De) : De;
}
function bA() { let c = _A(), p = dA(c) ? c.status + " " + c.statusText : c instanceof Error ? c.message : JSON.stringify(c), h = c instanceof Error ? c.stack : null, E = "rgba(200,200,200, 0.5)", y = { padding: "0.5rem", backgroundColor: E }, T = { padding: "2px 4px", backgroundColor: E }, f = null; return console.error("Error handled by React Router default ErrorBoundary:", c), f = I.createElement(I.Fragment, null, I.createElement("p", null, "💿 Hey developer 👋"), I.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", I.createElement("code", { style: T }, "ErrorBoundary"), " or", " ", I.createElement("code", { style: T }, "errorElement"), " prop on your route.")), I.createElement(I.Fragment, null, I.createElement("h2", null, "Unexpected Application Error!"), I.createElement("h3", { style: { fontStyle: "italic" } }, p), h ? I.createElement("pre", { style: y }, h) : null, f); }
const EA = I.createElement(bA, null);
class SA extends I.Component {
    constructor(p) { super(p), this.state = { location: p.location, revalidation: p.revalidation, error: p.error }; }
    static getDerivedStateFromError(p) { return { error: p }; }
    static getDerivedStateFromProps(p, h) { return h.location !== p.location || h.revalidation !== "idle" && p.revalidation === "idle" ? { error: p.error, location: p.location, revalidation: p.revalidation } : { error: p.error !== void 0 ? p.error : h.error, location: h.location, revalidation: p.revalidation || h.revalidation }; }
    componentDidCatch(p, h) { console.error("React Router caught the following error during render", p, h); }
    render() { return this.state.error !== void 0 ? I.createElement(er.Provider, { value: this.props.routeContext }, I.createElement(Bv.Provider, { value: this.state.error, children: this.props.component })) : this.props.children; }
}
function NA(c) { let { routeContext: p, match: h, children: E } = c, y = I.useContext(es); return y && y.static && y.staticContext && (h.route.errorElement || h.route.ErrorBoundary) && (y.staticContext._deepestRenderedBoundaryId = h.route.id), I.createElement(er.Provider, { value: p }, E); }
function TA(c, p, h, E) { var y; if (p === void 0 && (p = []), h === void 0 && (h = null), E === void 0 && (E = null), c == null) {
    var T;
    if (!h)
        return null;
    if (h.errors)
        c = h.matches;
    else if ((T = E) != null && T.v7_partialHydration && p.length === 0 && !h.initialized && h.matches.length > 0)
        c = h.matches;
    else
        return null;
} let f = c, k = (y = h) == null ? void 0 : y.errors; if (k != null) {
    let B = f.findIndex(j => j.route.id && (k == null ? void 0 : k[j.route.id]) !== void 0);
    B >= 0 || pt(!1, "Could not find a matching route for errors on route IDs: " + Object.keys(k).join(",")), f = f.slice(0, Math.min(f.length, B + 1));
} let O = !1, A = -1; if (h && E && E.v7_partialHydration)
    for (let B = 0; B < f.length; B++) {
        let j = f[B];
        if ((j.route.HydrateFallback || j.route.hydrateFallbackElement) && (A = B), j.route.id) {
            let { loaderData: P, errors: q } = h, ne = j.route.loader && P[j.route.id] === void 0 && (!q || q[j.route.id] === void 0);
            if (j.route.lazy || ne) {
                O = !0, A >= 0 ? f = f.slice(0, A + 1) : f = [f[0]];
                break;
            }
        }
    } return f.reduceRight((B, j, P) => { let q, ne = !1, Ce = null, ie = null; h && (q = k && j.route.id ? k[j.route.id] : void 0, Ce = j.route.errorElement || EA, O && (A < 0 && P === 0 ? (ES("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), ne = !0, ie = null) : A === P && (ne = !0, ie = j.route.hydrateFallbackElement || null))); let De = p.concat(f.slice(0, P + 1)), $ = () => { let te; return q ? te = Ce : ne ? te = ie : j.route.Component ? te = I.createElement(j.route.Component, null) : j.route.element ? te = j.route.element : te = B, I.createElement(NA, { match: j, routeContext: { outlet: B, matches: De, isDataRoute: h != null }, children: te }); }; return h && (j.route.ErrorBoundary || j.route.errorElement || P === 0) ? I.createElement(SA, { location: h.location, revalidation: h.revalidation, component: Ce, error: q, children: $(), routeContext: { outlet: null, matches: De, isDataRoute: !0 } }) : $(); }, null); }
var bS = function (c) { return c.UseBlocker = "useBlocker", c.UseRevalidator = "useRevalidator", c.UseNavigateStable = "useNavigate", c; }(bS || {}), Zu = function (c) { return c.UseBlocker = "useBlocker", c.UseLoaderData = "useLoaderData", c.UseActionData = "useActionData", c.UseRouteError = "useRouteError", c.UseNavigation = "useNavigation", c.UseRouteLoaderData = "useRouteLoaderData", c.UseMatches = "useMatches", c.UseRevalidator = "useRevalidator", c.UseNavigateStable = "useNavigate", c.UseRouteId = "useRouteId", c; }(Zu || {});
function Iv(c) { return c + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router."; }
function RA(c) { let p = I.useContext(es); return p || pt(!1, Iv(c)), p; }
function xA(c) { let p = I.useContext(Hv); return p || pt(!1, Iv(c)), p; }
function CA(c) { let p = I.useContext(er); return p || pt(!1, Iv(c)), p; }
function $v(c) { let p = CA(c), h = p.matches[p.matches.length - 1]; return h.route.id || pt(!1, c + ' can only be used on routes that contain a unique "id"'), h.route.id; }
function DA() { return $v(Zu.UseRouteId); }
function _A() { var c; let p = I.useContext(Bv), h = xA(Zu.UseRouteError), E = $v(Zu.UseRouteError); return p !== void 0 ? p : (c = h.errors) == null ? void 0 : c[E]; }
function jA() { let { router: c } = RA(bS.UseNavigateStable), p = $v(Zu.UseNavigateStable), h = I.useRef(!1); return gS(() => { h.current = !0; }), I.useCallback(function (y, T) { T === void 0 && (T = {}), Ua(h.current, yS), h.current && (typeof y == "number" ? c.navigate(y) : c.navigate(y, Ju({ fromRouteId: p }, T))); }, [c, p]); }
const rS = {};
function ES(c, p, h) { !p && !rS[c] && (rS[c] = !0, Ua(!1, h)); }
const iS = {};
function AA(c, p) { iS[p] || (iS[p] = !0, console.warn(p)); }
const oS = (c, p, h) => AA(c, "⚠️ React Router Future Flag Warning: " + p + ". " + ("You can use the `" + c + "` future flag to opt-in early. ") + ("For more information, see " + h + "."));
function OA(c, p) { (c == null ? void 0 : c.v7_startTransition) === void 0 && oS("v7_startTransition", "React Router will begin wrapping state updates in `React.startTransition` in v7", "https://reactrouter.com/v6/upgrading/future#v7_starttransition"), (c == null ? void 0 : c.v7_relativeSplatPath) === void 0 && oS("v7_relativeSplatPath", "Relative route resolution within Splat routes is changing in v7", "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"); }
function wA(c) { let { to: p, replace: h, state: E, relative: y } = c; al() || pt(!1, "<Navigate> may be used only in the context of a <Router> component."); let { future: T, static: f } = I.useContext(fa); Ua(!f, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."); let { matches: k } = I.useContext(er), { pathname: O } = Qi(), A = Ef(), B = Pv(p, Fv(k, T.v7_relativeSplatPath), O, y === "path"), j = JSON.stringify(B); return I.useEffect(() => A(JSON.parse(j), { replace: h, state: E, relative: y }), [A, j, y, h, E]), null; }
function jr(c) { pt(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."); }
function MA(c) { let { basename: p = "/", children: h = null, location: E, navigationType: y = li.Pop, navigator: T, static: f = !1, future: k } = c; al() && pt(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."); let O = p.replace(/^\/*/, "/"), A = I.useMemo(() => ({ basename: O, navigator: T, static: f, future: Ju({ v7_relativeSplatPath: !1 }, k) }), [O, k, T, f]); typeof E == "string" && (E = nl(E)); let { pathname: B = "/", search: j = "", hash: P = "", state: q = null, key: ne = "default" } = E, Ce = I.useMemo(() => { let ie = ui(B, O); return ie == null ? null : { location: { pathname: ie, search: j, hash: P, state: q, key: ne }, navigationType: y }; }, [O, B, j, P, q, ne, y]); return Ua(Ce != null, '<Router basename="' + O + '"> is not able to match the URL ' + ('"' + B + j + P + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), Ce == null ? null : I.createElement(fa.Provider, { value: A }, I.createElement(ts.Provider, { children: h, value: Ce })); }
function LA(c) { let { children: p, location: h } = c; return yA(zv(p), h); }
new Promise(() => { });
function zv(c, p) { p === void 0 && (p = []); let h = []; return I.Children.forEach(c, (E, y) => { if (!I.isValidElement(E))
    return; let T = [...p, y]; if (E.type === I.Fragment) {
    h.push.apply(h, zv(E.props.children, T));
    return;
} E.type !== jr && pt(!1, "[" + (typeof E.type == "string" ? E.type : E.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>"), !E.props.index || !E.props.children || pt(!1, "An index route cannot have child routes."); let f = { id: E.props.id || T.join("-"), caseSensitive: E.props.caseSensitive, element: E.props.element, Component: E.props.Component, index: E.props.index, path: E.props.path, loader: E.props.loader, action: E.props.action, errorElement: E.props.errorElement, ErrorBoundary: E.props.ErrorBoundary, hasErrorBoundary: E.props.ErrorBoundary != null || E.props.errorElement != null, shouldRevalidate: E.props.shouldRevalidate, handle: E.props.handle, lazy: E.props.lazy }; E.props.children && (f.children = zv(E.props.children, T)), h.push(f); }), h; } /**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function tl() { return tl = Object.assign ? Object.assign.bind() : function (c) { for (var p = 1; p < arguments.length; p++) {
    var h = arguments[p];
    for (var E in h)
        Object.prototype.hasOwnProperty.call(h, E) && (c[E] = h[E]);
} return c; }, tl.apply(this, arguments); }
function Yv(c, p) { if (c == null)
    return {}; var h = {}, E = Object.keys(c), y, T; for (T = 0; T < E.length; T++)
    y = E[T], !(p.indexOf(y) >= 0) && (h[y] = c[y]); return h; }
const hf = "get", yf = "application/x-www-form-urlencoded";
function Sf(c) { return c != null && typeof c.tagName == "string"; }
function UA(c) { return Sf(c) && c.tagName.toLowerCase() === "button"; }
function kA(c) { return Sf(c) && c.tagName.toLowerCase() === "form"; }
function VA(c) { return Sf(c) && c.tagName.toLowerCase() === "input"; }
function zA(c) { return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey); }
function FA(c, p) { return c.button === 0 && (!p || p === "_self") && !zA(c); }
let vf = null;
function PA() { if (vf === null)
    try {
        new FormData(document.createElement("form"), 0), vf = !1;
    }
    catch {
        vf = !0;
    } return vf; }
const HA = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
function Mv(c) { return c != null && !HA.has(c) ? (Ua(!1, '"' + c + '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` ' + ('and will default to "' + yf + '"')), null) : c; }
function BA(c, p) { let h, E, y, T, f; if (kA(c)) {
    let k = c.getAttribute("action");
    E = k ? ui(k, p) : null, h = c.getAttribute("method") || hf, y = Mv(c.getAttribute("enctype")) || yf, T = new FormData(c);
}
else if (UA(c) || VA(c) && (c.type === "submit" || c.type === "image")) {
    let k = c.form;
    if (k == null)
        throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let O = c.getAttribute("formaction") || k.getAttribute("action");
    if (E = O ? ui(O, p) : null, h = c.getAttribute("formmethod") || k.getAttribute("method") || hf, y = Mv(c.getAttribute("formenctype")) || Mv(k.getAttribute("enctype")) || yf, T = new FormData(k, c), !PA()) {
        let { name: A, type: B, value: j } = c;
        if (B === "image") {
            let P = A ? A + "." : "";
            T.append(P + "x", "0"), T.append(P + "y", "0");
        }
        else
            A && T.append(A, j);
    }
}
else {
    if (Sf(c))
        throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    h = hf, E = null, y = yf, f = c;
} return T && y === "text/plain" && (f = T, T = void 0), { action: E, method: h.toLowerCase(), encType: y, formData: T, body: f }; }
const IA = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"], $A = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"], YA = ["fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"], qA = "6";
try {
    window.__reactRouterVersion = qA;
}
catch { }
const SS = I.createContext({ isTransitioning: !1 });
SS.displayName = "ViewTransition";
const GA = I.createContext(new Map);
GA.displayName = "Fetchers";
const WA = "startTransition", lS = Pj[WA];
function KA(c) { let { basename: p, children: h, future: E, window: y } = c, T = I.useRef(); T.current == null && (T.current = Ij({ window: y, v5Compat: !0 })); let f = T.current, [k, O] = I.useState({ action: f.action, location: f.location }), { v7_startTransition: A } = E || {}, B = I.useCallback(j => { A && lS ? lS(() => O(j)) : O(j); }, [O, A]); return I.useLayoutEffect(() => f.listen(B), [f, B]), I.useEffect(() => OA(E), [E]), I.createElement(MA, { basename: p, children: h, location: k.location, navigationType: k.action, navigator: f, future: E }); }
const QA = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", XA = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Ar = I.forwardRef(function (p, h) { let { onClick: E, relative: y, reloadDocument: T, replace: f, state: k, target: O, to: A, preventScrollReset: B, viewTransition: j } = p, P = Yv(p, IA), { basename: q } = I.useContext(fa), ne, Ce = !1; if (typeof A == "string" && XA.test(A) && (ne = A, QA))
    try {
        let te = new URL(window.location.href), ye = A.startsWith("//") ? new URL(te.protocol + A) : new URL(A), ue = ui(ye.pathname, q);
        ye.origin === te.origin && ue != null ? A = ue + ye.search + ye.hash : Ce = !0;
    }
    catch {
        Ua(!1, '<Link to="' + A + '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.');
    } let ie = vA(A, { relative: y }), De = tO(A, { replace: f, state: k, target: O, preventScrollReset: B, relative: y, viewTransition: j }); function $(te) { E && E(te), te.defaultPrevented || De(te); } return I.createElement("a", tl({}, P, { href: ne || ie, onClick: Ce || T ? E : $, ref: h, target: O })); });
Ar.displayName = "Link";
const JA = I.forwardRef(function (p, h) { let { "aria-current": E = "page", caseSensitive: y = !1, className: T = "", end: f = !1, style: k, to: O, viewTransition: A, children: B } = p, j = Yv(p, $A), P = ns(O, { relative: j.relative }), q = Qi(), ne = I.useContext(Hv), { navigator: Ce, basename: ie } = I.useContext(fa), De = ne != null && lO(P) && A === !0, $ = Ce.encodeLocation ? Ce.encodeLocation(P).pathname : P.pathname, te = q.pathname, ye = ne && ne.navigation && ne.navigation.location ? ne.navigation.location.pathname : null; y || (te = te.toLowerCase(), ye = ye ? ye.toLowerCase() : null, $ = $.toLowerCase()), ye && ie && (ye = ui(ye, ie) || ye); const ue = $ !== "/" && $.endsWith("/") ? $.length - 1 : $.length; let V = te === $ || !f && te.startsWith($) && te.charAt(ue) === "/", oe = ye != null && (ye === $ || !f && ye.startsWith($) && ye.charAt($.length) === "/"), _e = { isActive: V, isPending: oe, isTransitioning: De }, He = V ? E : void 0, Be; typeof T == "function" ? Be = T(_e) : Be = [T, V ? "active" : null, oe ? "pending" : null, De ? "transitioning" : null].filter(Boolean).join(" "); let Ye = typeof k == "function" ? k(_e) : k; return I.createElement(Ar, tl({}, j, { "aria-current": He, className: Be, ref: h, style: Ye, to: O, viewTransition: A }), typeof B == "function" ? B(_e) : B); });
JA.displayName = "NavLink";
const ZA = I.forwardRef((c, p) => { let { fetcherKey: h, navigate: E, reloadDocument: y, replace: T, state: f, method: k = hf, action: O, onSubmit: A, relative: B, preventScrollReset: j, viewTransition: P } = c, q = Yv(c, YA), ne = iO(), Ce = oO(O, { relative: B }), ie = k.toLowerCase() === "get" ? "get" : "post", De = $ => { if (A && A($), $.defaultPrevented)
    return; $.preventDefault(); let te = $.nativeEvent.submitter, ye = (te == null ? void 0 : te.getAttribute("formmethod")) || k; ne(te || $.currentTarget, { fetcherKey: h, method: ye, navigate: E, replace: T, state: f, relative: B, preventScrollReset: j, viewTransition: P }); }; return I.createElement("form", tl({ ref: p, method: ie, action: Ce, onSubmit: y ? A : De }, q)); });
ZA.displayName = "Form";
var bf;
(function (c) { c.UseScrollRestoration = "useScrollRestoration", c.UseSubmit = "useSubmit", c.UseSubmitFetcher = "useSubmitFetcher", c.UseFetcher = "useFetcher", c.useViewTransitionState = "useViewTransitionState"; })(bf || (bf = {}));
var uS;
(function (c) { c.UseFetcher = "useFetcher", c.UseFetchers = "useFetchers", c.UseScrollRestoration = "useScrollRestoration"; })(uS || (uS = {}));
function eO(c) { return c + " must be used within a data router.  See https://reactrouter.com/v6/routers/picking-a-router."; }
function NS(c) { let p = I.useContext(es); return p || pt(!1, eO(c)), p; }
function tO(c, p) { let { target: h, replace: E, state: y, preventScrollReset: T, relative: f, viewTransition: k } = p === void 0 ? {} : p, O = Ef(), A = Qi(), B = ns(c, { relative: f }); return I.useCallback(j => { if (FA(j, h)) {
    j.preventDefault();
    let P = E !== void 0 ? E : Xu(A) === Xu(B);
    O(c, { replace: P, state: y, preventScrollReset: T, relative: f, viewTransition: k });
} }, [A, O, B, E, y, h, c, T, f, k]); }
function nO() { if (typeof document > "u")
    throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead."); }
let aO = 0, rO = () => "__" + String(++aO) + "__";
function iO() { let { router: c } = NS(bf.UseSubmit), { basename: p } = I.useContext(fa), h = DA(); return I.useCallback(function (E, y) { y === void 0 && (y = {}), nO(); let { action: T, method: f, encType: k, formData: O, body: A } = BA(E, p); if (y.navigate === !1) {
    let B = y.fetcherKey || rO();
    c.fetch(B, h, y.action || T, { preventScrollReset: y.preventScrollReset, formData: O, body: A, formMethod: y.method || f, formEncType: y.encType || k, flushSync: y.flushSync });
}
else
    c.navigate(y.action || T, { preventScrollReset: y.preventScrollReset, formData: O, body: A, formMethod: y.method || f, formEncType: y.encType || k, replace: y.replace, state: y.state, fromRouteId: h, flushSync: y.flushSync, viewTransition: y.viewTransition }); }, [c, p, h]); }
function oO(c, p) { let { relative: h } = p === void 0 ? {} : p, { basename: E } = I.useContext(fa), y = I.useContext(er); y || pt(!1, "useFormAction must be used inside a RouteContext"); let [T] = y.matches.slice(-1), f = tl({}, ns(c || ".", { relative: h })), k = Qi(); if (c == null) {
    f.search = k.search;
    let O = new URLSearchParams(f.search), A = O.getAll("index");
    if (A.some(j => j === "")) {
        O.delete("index"), A.filter(P => P).forEach(P => O.append("index", P));
        let j = O.toString();
        f.search = j ? "?" + j : "";
    }
} return (!c || c === ".") && T.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), E !== "/" && (f.pathname = f.pathname === "/" ? E : Or([E, f.pathname])), Xu(f); }
function lO(c, p) { p === void 0 && (p = {}); let h = I.useContext(SS); h == null && pt(!1, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"); let { basename: E } = NS(bf.useViewTransitionState), y = ns(c, { relative: p.relative }); if (!h.isTransitioning)
    return !1; let T = ui(h.currentLocation.pathname, E) || h.currentLocation.pathname, f = ui(h.nextLocation.pathname, E) || h.nextLocation.pathname; return Vv(y.pathname, f) != null || Vv(y.pathname, T) != null; }
const uO = () => { var $, te, ye, ue; const [c, p] = I.useState("auth"), [h, E] = I.useState({}), [y, T] = I.useState({}), [f, k] = I.useState({}), [O, A] = I.useState(localStorage.getItem("token") || ""), B = () => ({ "Content-Type": "application/json", ...O && { Authorization: `Bearer ${O}` } }), j = async (V, oe = "GET", _e = null) => { const He = `${oe}-${V}`; T(Be => ({ ...Be, [He]: !0 })); try {
    const Be = { method: oe, headers: B() };
    _e && oe !== "GET" && oe !== "HEAD" && (Be.body = JSON.stringify(_e));
    const Ye = await fetch(`/api${V}`, Be);
    let ge;
    try {
        ge = await Ye.json();
    }
    catch {
        ge = { message: "Response is not JSON" };
    }
    E(Ne => ({ ...Ne, [He]: { status: Ye.status, data: ge, timestamp: new Date().toISOString() } }));
}
catch (Be) {
    E(Ye => ({ ...Ye, [He]: { status: "ERROR", data: { error: Be.message }, timestamp: new Date().toISOString() } }));
}
finally {
    T(Be => ({ ...Be, [He]: !1 }));
} }, P = async () => { const { username: V, password: oe } = f.auth || {}; if (!V || !oe)
    return; await j("/auth/login", "POST", { username: V, password: oe }); const _e = h["POST-/auth/login"]; (_e == null ? void 0 : _e.status) === 200 && _e.data.token && (A(_e.data.token), localStorage.setItem("token", _e.data.token), _e.data.role && localStorage.setItem("role", _e.data.role)); }, q = V => { p(V), E({}), T({}), k(oe => { const _e = { ...oe }; return _e[V] || (_e[V] = {}), _e; }); }, ne = [{ id: "auth", label: "Authentication", endpoints: [{ path: "/auth/login", method: "POST", description: "User login", requiresAuth: !1 }] }, { id: "projects", label: "Projects", endpoints: [{ path: "/projects", method: "GET", description: "Get all projects", requiresAuth: !0 }, { path: "/projects/1", method: "GET", description: "Get project by ID", requiresAuth: !0 }, { path: "/projects", method: "POST", description: "Create new project", requiresAuth: !0 }, { path: "/projects/1", method: "PUT", description: "Update project", requiresAuth: !0 }, { path: "/projects/1", method: "DELETE", description: "Delete project", requiresAuth: !0 }] }, { id: "property-definitions", label: "Property Definitions", endpoints: [{ path: "/property-definitions", method: "GET", description: "Get all property definitions", requiresAuth: !0 }, { path: "/property-definitions/1", method: "GET", description: "Get property definition by ID", requiresAuth: !0 }, { path: "/property-definitions", method: "POST", description: "Create property definition", requiresAuth: !0 }, { path: "/property-definitions/1", method: "PUT", description: "Update property definition", requiresAuth: !0 }, { path: "/property-definitions/1", method: "DELETE", description: "Delete property definition", requiresAuth: !0 }] }, { id: "entity-properties", label: "Entity Properties", endpoints: [{ path: "/entity-properties", method: "GET", description: "Get all entity properties", requiresAuth: !0 }, { path: "/entity-properties/1", method: "GET", description: "Get entity property by ID", requiresAuth: !0 }, { path: "/entity-properties", method: "POST", description: "Create entity property", requiresAuth: !0 }, { path: "/entity-properties/1", method: "PUT", description: "Update entity property", requiresAuth: !0 }, { path: "/entity-properties/1", method: "DELETE", description: "Delete entity property", requiresAuth: !0 }] }, { id: "tasks", label: "Tasks", endpoints: [{ path: "/tasks", method: "GET", description: "Get all tasks", requiresAuth: !0 }, { path: "/tasks/1", method: "GET", description: "Get task by ID", requiresAuth: !0 }, { path: "/tasks", method: "POST", description: "Create new task", requiresAuth: !0 }, { path: "/tasks/1", method: "PUT", description: "Update task", requiresAuth: !0 }, { path: "/tasks/1", method: "DELETE", description: "Delete task", requiresAuth: !0 }, { path: "/tasks/1/complete", method: "POST", description: "Complete task", requiresAuth: !0 }] }, { id: "progress", label: "Progress", endpoints: [{ path: "/progress", method: "GET", description: "Get progress data", requiresAuth: !0 }, { path: "/progress", method: "POST", description: "Create progress entry", requiresAuth: !0 }] }, { id: "zone-summary", label: "Zone Summary", endpoints: [{ path: "/zone-summary", method: "GET", description: "Get zone summary", requiresAuth: !0 }] }, { id: "health", label: "Health Check", endpoints: [{ path: "/health", method: "GET", description: "API health check", requiresAuth: !1 }] }], Ce = V => ({ auth: [{ name: "username", label: "Username", type: "text", required: !0 }, { name: "password", label: "Password", type: "password", required: !0 }], projects: [{ name: "name", label: "Project Name", type: "text", required: !0 }, { name: "parent_project_id", label: "Parent Project ID", type: "number" }, { name: "properties", label: "Properties (JSON)", type: "textarea" }], "property-definitions": [{ name: "entity_type", label: "Entity Type", type: "text", required: !0 }, { name: "property_key", label: "Property Key", type: "text", required: !0 }, { name: "value_type", label: "Value Type", type: "select", options: ["string", "number", "date", "boolean"], required: !0 }, { name: "formatting_rules", label: "Formatting Rules", type: "text" }, { name: "is_required", label: "Is Required", type: "checkbox" }, { name: "options", label: "Options (JSON array)", type: "textarea" }], "entity-properties": [{ name: "entity_type", label: "Entity Type", type: "text", required: !0 }, { name: "entity_id", label: "Entity ID", type: "number", required: !0 }, { name: "property_definition_id", label: "Property Definition ID", type: "number", required: !0 }, { name: "value", label: "Value", type: "text", required: !0 }, { name: "value_type", label: "Value Type", type: "select", options: ["string", "number", "date", "boolean"] }], tasks: [{ name: "task_rule_id", label: "Task Rule ID", type: "number", required: !0 }, { name: "entity_type", label: "Entity Type", type: "text", required: !0 }, { name: "entity_id", label: "Entity ID", type: "number", required: !0 }, { name: "assigned_to_user_id", label: "Assigned User ID", type: "number" }, { name: "assigned_to_office_id", label: "Assigned Office ID", type: "number" }, { name: "due_date", label: "Due Date", type: "date" }], progress: [{ name: "entity_type", label: "Entity Type", type: "text", required: !0 }, { name: "entity_id", label: "Entity ID", type: "number", required: !0 }, { name: "progress_data", label: "Progress Data (JSON)", type: "textarea", required: !0 }], "zone-summary": [{ name: "zone_id", label: "Zone ID", type: "number" }, { name: "date_from", label: "Date From", type: "date" }, { name: "date_to", label: "Date To", type: "date" }], health: [] })[V] || [], ie = (V, oe) => { k(_e => ({ ..._e, [c]: { ..._e[c], [V]: oe } })); }, De = (V, oe) => { const _e = f[c] || {}; if ((oe === "POST" || oe === "PUT") && Object.keys(_e).length === 0) {
    const Ye = Ce(c).filter(ge => ge.required);
    if (Ye.length > 0) {
        alert(`Please fill in the required fields: ${Ye.map(ge => ge.label).join(", ")}`);
        return;
    }
} const He = Object.fromEntries(Object.entries(_e).filter(([Ye, ge]) => ge !== "" && ge !== null && ge !== void 0)), Be = oe === "GET" || oe === "HEAD" ? null : Object.keys(He).length > 0 ? He : null; j(V, oe, Be); }; return v.jsxDEV("div", { className: "api-demo", children: [v.jsxDEV("h2", { children: "API Endpoint Demonstrations" }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 216, columnNumber: 7 }, void 0), v.jsxDEV("p", { children: "This page demonstrates all database API endpoints and their intended outcomes." }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 217, columnNumber: 7 }, void 0), O && v.jsxDEV("div", { className: "auth-status", children: [v.jsxDEV("span", { className: "auth-indicator", children: "🔐 Authenticated" }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 221, columnNumber: 11 }, void 0), v.jsxDEV("span", { className: "role-info", children: ["Role: ", localStorage.getItem("role") || "Unknown"] }, void 0, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 222, columnNumber: 11 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 220, columnNumber: 9 }, void 0), v.jsxDEV("div", { className: "demo-tabs", children: ne.map(V => v.jsxDEV("button", { className: `tab ${c === V.id ? "active" : ""}`, onClick: () => q(V.id), children: V.label }, V.id, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 228, columnNumber: 11 }, void 0)) }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 226, columnNumber: 7 }, void 0), v.jsxDEV("div", { className: "demo-content", children: v.jsxDEV("div", { className: "endpoints-section", children: [v.jsxDEV("h3", { children: [($ = ne.find(V => V.id === c)) == null ? void 0 : $.label, " Endpoints"] }, void 0, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 240, columnNumber: 11 }, void 0), c === "auth" && v.jsxDEV("div", { className: "auth-section", children: [v.jsxDEV("h4", { children: "Login Form" }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 244, columnNumber: 15 }, void 0), v.jsxDEV("div", { className: "form-group", children: [v.jsxDEV("label", { children: "Username:" }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 246, columnNumber: 17 }, void 0), v.jsxDEV("input", { type: "text", value: ((te = f.auth) == null ? void 0 : te.username) || "", onChange: V => ie("username", V.target.value), placeholder: "Enter username" }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 247, columnNumber: 17 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 245, columnNumber: 15 }, void 0), v.jsxDEV("div", { className: "form-group", children: [v.jsxDEV("label", { children: "Password:" }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 255, columnNumber: 17 }, void 0), v.jsxDEV("input", { type: "password", value: ((ye = f.auth) == null ? void 0 : ye.password) || "", onChange: V => ie("password", V.target.value), placeholder: "Enter password" }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 256, columnNumber: 17 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 254, columnNumber: 15 }, void 0), v.jsxDEV("button", { onClick: P, disabled: y["POST-/auth/login"], children: y["POST-/auth/login"] ? "Logging in..." : "Login" }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 263, columnNumber: 15 }, void 0), O && v.jsxDEV("div", { className: "token-info", children: [v.jsxDEV("strong", { children: "Current Token:" }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 268, columnNumber: 19 }, void 0), " ", O.substring(0, 20), "..."] }, void 0, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 267, columnNumber: 17 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 243, columnNumber: 13 }, void 0), c !== "auth" && c !== "health" && v.jsxDEV("div", { className: "form-section", children: [v.jsxDEV("h4", { children: "Request Form" }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 276, columnNumber: 15 }, void 0), v.jsxDEV("div", { className: "sample-data-notice", children: [v.jsxDEV("p", { children: [v.jsxDEV("strong", { children: "💡 Tip:" }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 278, columnNumber: 20 }, void 0), " Use these sample values for testing:"] }, void 0, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 278, columnNumber: 17 }, void 0), v.jsxDEV("div", { className: "sample-values", children: [c === "projects" && v.jsxDEV("span", { children: 'Project name: "Test Project", Parent ID: 1' }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 281, columnNumber: 21 }, void 0), c === "property-definitions" && v.jsxDEV("span", { children: 'Entity type: "project", Property key: "budget", Value type: "number"' }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 284, columnNumber: 21 }, void 0), c === "entity-properties" && v.jsxDEV("span", { children: 'Entity type: "project", Entity ID: 1, Property Definition ID: 1, Value: "50000"' }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 287, columnNumber: 21 }, void 0), c === "tasks" && v.jsxDEV("span", { children: 'Task rule ID: 1, Entity type: "project", Entity ID: 1' }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 290, columnNumber: 21 }, void 0), c === "progress" && v.jsxDEV("span", { children: ['Entity type: "project", Entity ID: 1, Progress data: ', '{"progress": 75}'] }, void 0, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 293, columnNumber: 21 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 279, columnNumber: 17 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 277, columnNumber: 15 }, void 0), Ce(c).map(V => { var oe, _e, He, Be, Ye; return v.jsxDEV("div", { className: "form-group", children: [v.jsxDEV("label", { children: [V.label, ":"] }, void 0, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 299, columnNumber: 19 }, void 0), V.type === "select" ? v.jsxDEV("select", { value: ((oe = f[c]) == null ? void 0 : oe[V.name]) || "", onChange: ge => ie(V.name, ge.target.value), children: [v.jsxDEV("option", { value: "", children: "Select..." }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 305, columnNumber: 23 }, void 0), (_e = V.options) == null ? void 0 : _e.map(ge => v.jsxDEV("option", { value: ge, children: ge }, ge, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 307, columnNumber: 25 }, void 0))] }, void 0, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 301, columnNumber: 21 }, void 0) : V.type === "textarea" ? v.jsxDEV("textarea", { value: ((He = f[c]) == null ? void 0 : He[V.name]) || "", onChange: ge => ie(V.name, ge.target.value), placeholder: `Enter ${V.label.toLowerCase()}` }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 311, columnNumber: 21 }, void 0) : V.type === "checkbox" ? v.jsxDEV("input", { type: "checkbox", checked: ((Be = f[c]) == null ? void 0 : Be[V.name]) || !1, onChange: ge => ie(V.name, ge.target.checked) }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 317, columnNumber: 21 }, void 0) : v.jsxDEV("input", { type: V.type, value: ((Ye = f[c]) == null ? void 0 : Ye[V.name]) || "", onChange: ge => ie(V.name, ge.target.value), placeholder: `Enter ${V.label.toLowerCase()}` }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 323, columnNumber: 21 }, void 0)] }, V.name, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 298, columnNumber: 17 }, void 0); })] }, void 0, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 275, columnNumber: 13 }, void 0), v.jsxDEV("div", { className: "endpoints-list", children: (ue = ne.find(V => V.id === c)) == null ? void 0 : ue.endpoints.map((V, oe) => v.jsxDEV("div", { className: "endpoint-item", children: [v.jsxDEV("div", { className: "endpoint-header", children: [v.jsxDEV("span", { className: "method", "data-method": V.method, children: V.method }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 339, columnNumber: 19 }, void 0), v.jsxDEV("span", { className: "path", children: V.path }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 340, columnNumber: 19 }, void 0), v.jsxDEV("span", { className: "description", children: V.description }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 341, columnNumber: 19 }, void 0), V.requiresAuth && !O && v.jsxDEV("span", { className: "auth-required", children: "⚠️ Requires Auth" }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 343, columnNumber: 21 }, void 0), v.jsxDEV("button", { onClick: () => De(V.path, V.method), disabled: y[`${V.method}-${V.path}`] || V.requiresAuth && !O, className: "test-btn", children: y[`${V.method}-${V.path}`] ? "Testing..." : "Test" }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 345, columnNumber: 19 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 338, columnNumber: 17 }, void 0), h[`${V.method}-${V.path}`] && v.jsxDEV("div", { className: `result-section ${h[`${V.method}-${V.path}`].status >= 200 && h[`${V.method}-${V.path}`].status < 300 ? "success" : "error"}`, children: [v.jsxDEV("h5", { children: "Response:" }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 356, columnNumber: 21 }, void 0), v.jsxDEV("div", { className: "result-details", children: [v.jsxDEV("div", { children: [v.jsxDEV("strong", { children: "Status:" }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 359, columnNumber: 25 }, void 0), v.jsxDEV("span", { className: `status-code ${h[`${V.method}-${V.path}`].status >= 200 && h[`${V.method}-${V.path}`].status < 300 ? "success" : "error"}`, children: h[`${V.method}-${V.path}`].status }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 360, columnNumber: 25 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 358, columnNumber: 23 }, void 0), v.jsxDEV("div", { children: [v.jsxDEV("strong", { children: "Timestamp:" }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 364, columnNumber: 28 }, void 0), " ", new Date(h[`${V.method}-${V.path}`].timestamp).toLocaleTimeString()] }, void 0, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 364, columnNumber: 23 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 357, columnNumber: 21 }, void 0), v.jsxDEV("pre", { className: "result-data", children: JSON.stringify(h[`${V.method}-${V.path}`].data, null, 2) }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 366, columnNumber: 21 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 355, columnNumber: 19 }, void 0)] }, `${c}-${V.method}-${V.path}-${oe}`, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 337, columnNumber: 15 }, void 0)) }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 335, columnNumber: 11 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 239, columnNumber: 9 }, void 0) }, void 0, !1, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 238, columnNumber: 7 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/ApiDemo.jsx", lineNumber: 215, columnNumber: 5 }, void 0); }, sO = () => { const [c, p] = I.useState("tables"), h = [{ name: "roles", description: "User roles and permissions", columns: [{ name: "id", type: "INTEGER", constraints: "PRIMARY KEY, AUTO_INCREMENT" }, { name: "name", type: "VARCHAR(50)", constraints: "NOT NULL, UNIQUE" }, { name: "description", type: "TEXT", constraints: "NULL" }, { name: "created_at", type: "TIMESTAMP", constraints: "DEFAULT CURRENT_TIMESTAMP" }, { name: "updated_at", type: "TIMESTAMP", constraints: "DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP" }] }, { name: "offices", description: "Office locations and information", columns: [{ name: "id", type: "INTEGER", constraints: "PRIMARY KEY, AUTO_INCREMENT" }, { name: "name", type: "VARCHAR(100)", constraints: "NOT NULL" }, { name: "location", type: "VARCHAR(255)", constraints: "NULL" }, { name: "created_at", type: "TIMESTAMP", constraints: "DEFAULT CURRENT_TIMESTAMP" }, { name: "updated_at", type: "TIMESTAMP", constraints: "DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP" }] }, { name: "users", description: "User accounts and authentication", columns: [{ name: "id", type: "INTEGER", constraints: "PRIMARY KEY, AUTO_INCREMENT" }, { name: "username", type: "VARCHAR(50)", constraints: "NOT NULL, UNIQUE" }, { name: "password_hash", type: "VARCHAR(255)", constraints: "NOT NULL" }, { name: "email", type: "VARCHAR(100)", constraints: "NULL" }, { name: "role_id", type: "INTEGER", constraints: "FOREIGN KEY REFERENCES roles(id)" }, { name: "office_id", type: "INTEGER", constraints: "FOREIGN KEY REFERENCES offices(id)" }, { name: "created_at", type: "TIMESTAMP", constraints: "DEFAULT CURRENT_TIMESTAMP" }, { name: "updated_at", type: "TIMESTAMP", constraints: "DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP" }] }, { name: "projects", description: "Project management and hierarchy", columns: [{ name: "id", type: "INTEGER", constraints: "PRIMARY KEY, AUTO_INCREMENT" }, { name: "name", type: "VARCHAR(255)", constraints: "NOT NULL" }, { name: "parent_project_id", type: "INTEGER", constraints: "FOREIGN KEY REFERENCES projects(id), NULL" }, { name: "created_at", type: "TIMESTAMP", constraints: "DEFAULT CURRENT_TIMESTAMP" }, { name: "updated_at", type: "TIMESTAMP", constraints: "DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP" }] }, { name: "property_definitions", description: "Dynamic property definitions for entities", columns: [{ name: "id", type: "INTEGER", constraints: "PRIMARY KEY, AUTO_INCREMENT" }, { name: "entity_type", type: "VARCHAR(50)", constraints: "NOT NULL" }, { name: "property_key", type: "VARCHAR(100)", constraints: "NOT NULL" }, { name: "value_type", type: "ENUM", constraints: "'string', 'number', 'date', 'boolean'" }, { name: "formatting_rules", type: "TEXT", constraints: "NULL" }, { name: "is_required", type: "BOOLEAN", constraints: "DEFAULT FALSE" }, { name: "created_at", type: "TIMESTAMP", constraints: "DEFAULT CURRENT_TIMESTAMP" }, { name: "updated_at", type: "TIMESTAMP", constraints: "DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP" }] }, { name: "property_options", description: "Options for property definitions", columns: [{ name: "id", type: "INTEGER", constraints: "PRIMARY KEY, AUTO_INCREMENT" }, { name: "property_definition_id", type: "INTEGER", constraints: "FOREIGN KEY REFERENCES property_definitions(id)" }, { name: "option_value", type: "VARCHAR(255)", constraints: "NOT NULL" }, { name: "created_at", type: "TIMESTAMP", constraints: "DEFAULT CURRENT_TIMESTAMP" }] }, { name: "entity_properties", description: "Dynamic property values for entities", columns: [{ name: "id", type: "INTEGER", constraints: "PRIMARY KEY, AUTO_INCREMENT" }, { name: "entity_type", type: "VARCHAR(50)", constraints: "NOT NULL" }, { name: "entity_id", type: "INTEGER", constraints: "NOT NULL" }, { name: "property_definition_id", type: "INTEGER", constraints: "FOREIGN KEY REFERENCES property_definitions(id)" }, { name: "value", type: "TEXT", constraints: "NOT NULL" }, { name: "value_type", type: "ENUM", constraints: "'string', 'number', 'date', 'boolean'" }, { name: "created_at", type: "TIMESTAMP", constraints: "DEFAULT CURRENT_TIMESTAMP" }, { name: "updated_at", type: "TIMESTAMP", constraints: "DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP" }] }, { name: "entity_property_logs", description: "Audit trail for property changes", columns: [{ name: "id", type: "INTEGER", constraints: "PRIMARY KEY, AUTO_INCREMENT" }, { name: "entity_property_id", type: "INTEGER", constraints: "FOREIGN KEY REFERENCES entity_properties(id)" }, { name: "old_value", type: "TEXT", constraints: "NULL" }, { name: "new_value", type: "TEXT", constraints: "NOT NULL" }, { name: "changed_by_user_id", type: "INTEGER", constraints: "FOREIGN KEY REFERENCES users(id)" }, { name: "reason", type: "TEXT", constraints: "NULL" }, { name: "created_at", type: "TIMESTAMP", constraints: "DEFAULT CURRENT_TIMESTAMP" }] }, { name: "task_rules", description: "Task creation rules and templates", columns: [{ name: "id", type: "INTEGER", constraints: "PRIMARY KEY, AUTO_INCREMENT" }, { name: "name", type: "VARCHAR(255)", constraints: "NOT NULL" }, { name: "description", type: "TEXT", constraints: "NULL" }, { name: "entity_type", type: "VARCHAR(50)", constraints: "NOT NULL" }, { name: "conditions", type: "JSON", constraints: "NULL" }, { name: "created_at", type: "TIMESTAMP", constraints: "DEFAULT CURRENT_TIMESTAMP" }, { name: "updated_at", type: "TIMESTAMP", constraints: "DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP" }] }, { name: "tasks", description: "Task management and assignments", columns: [{ name: "id", type: "INTEGER", constraints: "PRIMARY KEY, AUTO_INCREMENT" }, { name: "task_rule_id", type: "INTEGER", constraints: "FOREIGN KEY REFERENCES task_rules(id)" }, { name: "entity_type", type: "VARCHAR(50)", constraints: "NOT NULL" }, { name: "entity_id", type: "INTEGER", constraints: "NOT NULL" }, { name: "assigned_to_user_id", type: "INTEGER", constraints: "FOREIGN KEY REFERENCES users(id), NULL" }, { name: "assigned_to_office_id", type: "INTEGER", constraints: "FOREIGN KEY REFERENCES offices(id), NULL" }, { name: "status", type: "ENUM", constraints: "'pending', 'completed', 'overdue'" }, { name: "due_date", type: "DATE", constraints: "NULL" }, { name: "notes", type: "TEXT", constraints: "NULL" }, { name: "created_at", type: "TIMESTAMP", constraints: "DEFAULT CURRENT_TIMESTAMP" }, { name: "updated_at", type: "TIMESTAMP", constraints: "DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP" }] }, { name: "task_logs", description: "Task activity and completion logs", columns: [{ name: "id", type: "INTEGER", constraints: "PRIMARY KEY, AUTO_INCREMENT" }, { name: "task_id", type: "INTEGER", constraints: "FOREIGN KEY REFERENCES tasks(id)" }, { name: "action", type: "VARCHAR(50)", constraints: "NOT NULL" }, { name: "notes", type: "TEXT", constraints: "NULL" }, { name: "completed_by_user_id", type: "INTEGER", constraints: "FOREIGN KEY REFERENCES users(id)" }, { name: "created_at", type: "TIMESTAMP", constraints: "DEFAULT CURRENT_TIMESTAMP" }] }, { name: "permissions", description: "Role-based permissions system", columns: [{ name: "id", type: "INTEGER", constraints: "PRIMARY KEY, AUTO_INCREMENT" }, { name: "role_id", type: "INTEGER", constraints: "FOREIGN KEY REFERENCES roles(id)" }, { name: "resource", type: "VARCHAR(100)", constraints: "NOT NULL" }, { name: "action", type: "VARCHAR(50)", constraints: "NOT NULL" }, { name: "created_at", type: "TIMESTAMP", constraints: "DEFAULT CURRENT_TIMESTAMP" }] }, { name: "approval_requests", description: "Approval workflow management", columns: [{ name: "id", type: "INTEGER", constraints: "PRIMARY KEY, AUTO_INCREMENT" }, { name: "entity_type", type: "VARCHAR(50)", constraints: "NOT NULL" }, { name: "entity_id", type: "INTEGER", constraints: "NOT NULL" }, { name: "requested_by_user_id", type: "INTEGER", constraints: "FOREIGN KEY REFERENCES users(id)" }, { name: "approved_by_user_id", type: "INTEGER", constraints: "FOREIGN KEY REFERENCES users(id), NULL" }, { name: "status", type: "ENUM", constraints: "'pending', 'approved', 'rejected'" }, { name: "notes", type: "TEXT", constraints: "NULL" }, { name: "created_at", type: "TIMESTAMP", constraints: "DEFAULT CURRENT_TIMESTAMP" }, { name: "updated_at", type: "TIMESTAMP", constraints: "DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP" }] }], E = [{ from: "users", to: "roles", type: "Many-to-One" }, { from: "users", to: "offices", type: "Many-to-One" }, { from: "projects", to: "projects", type: "Self-Reference (Hierarchy)" }, { from: "property_options", to: "property_definitions", type: "Many-to-One" }, { from: "entity_properties", to: "property_definitions", type: "Many-to-One" }, { from: "entity_property_logs", to: "entity_properties", type: "Many-to-One" }, { from: "entity_property_logs", to: "users", type: "Many-to-One" }, { from: "tasks", to: "task_rules", type: "Many-to-One" }, { from: "tasks", to: "users", type: "Many-to-One" }, { from: "tasks", to: "offices", type: "Many-to-One" }, { from: "task_logs", to: "tasks", type: "Many-to-One" }, { from: "task_logs", to: "users", type: "Many-to-One" }, { from: "permissions", to: "roles", type: "Many-to-One" }, { from: "approval_requests", to: "users", type: "Many-to-One (Requested By)" }, { from: "approval_requests", to: "users", type: "Many-to-One (Approved By)" }], y = [{ name: "project_export_view", description: "Comprehensive project data for export", columns: ["project_id", "project_name", "parent_project_name", "property_key", "property_value", "task_count", "completed_tasks", "pending_tasks", "overdue_tasks"] }]; return v.jsxDEV("div", { className: "database-schema", children: [v.jsxDEV("h2", { children: "Database Schema Overview" }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 206, columnNumber: 7 }, void 0), v.jsxDEV("p", { children: "This section shows the complete database structure and relationships for the QSData system." }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 207, columnNumber: 7 }, void 0), v.jsxDEV("div", { className: "schema-tabs", children: [v.jsxDEV("button", { className: `schema-tab ${c === "tables" ? "active" : ""}`, onClick: () => p("tables"), children: ["Tables (", h.length, ")"] }, void 0, !0, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 210, columnNumber: 9 }, void 0), v.jsxDEV("button", { className: `schema-tab ${c === "relationships" ? "active" : ""}`, onClick: () => p("relationships"), children: ["Relationships (", E.length, ")"] }, void 0, !0, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 216, columnNumber: 9 }, void 0), v.jsxDEV("button", { className: `schema-tab ${c === "views" ? "active" : ""}`, onClick: () => p("views"), children: ["Views (", y.length, ")"] }, void 0, !0, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 222, columnNumber: 9 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 209, columnNumber: 7 }, void 0), v.jsxDEV("div", { className: "schema-content", children: [c === "tables" && v.jsxDEV("div", { className: "tables-section", children: [v.jsxDEV("h3", { children: "Database Tables" }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 233, columnNumber: 13 }, void 0), v.jsxDEV("div", { className: "tables-grid", children: h.map(T => v.jsxDEV("div", { className: "table-card", children: [v.jsxDEV("div", { className: "table-header", children: [v.jsxDEV("h4", { children: T.name }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 238, columnNumber: 21 }, void 0), v.jsxDEV("span", { className: "table-description", children: T.description }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 239, columnNumber: 21 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 237, columnNumber: 19 }, void 0), v.jsxDEV("div", { className: "table-columns", children: [v.jsxDEV("h5", { children: "Columns:" }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 242, columnNumber: 21 }, void 0), v.jsxDEV("div", { className: "columns-list", children: T.columns.map(f => v.jsxDEV("div", { className: "column-item", children: [v.jsxDEV("div", { className: "column-name", children: f.name }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 246, columnNumber: 27 }, void 0), v.jsxDEV("div", { className: "column-type", children: f.type }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 247, columnNumber: 27 }, void 0), v.jsxDEV("div", { className: "column-constraints", children: f.constraints }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 248, columnNumber: 27 }, void 0)] }, f.name, !0, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 245, columnNumber: 25 }, void 0)) }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 243, columnNumber: 21 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 241, columnNumber: 19 }, void 0)] }, T.name, !0, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 236, columnNumber: 17 }, void 0)) }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 234, columnNumber: 13 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 232, columnNumber: 11 }, void 0), c === "relationships" && v.jsxDEV("div", { className: "relationships-section", children: [v.jsxDEV("h3", { children: "Table Relationships" }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 261, columnNumber: 13 }, void 0), v.jsxDEV("div", { className: "relationships-list", children: E.map((T, f) => v.jsxDEV("div", { className: "relationship-item", children: [v.jsxDEV("div", { className: "relationship-from", children: T.from }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 265, columnNumber: 19 }, void 0), v.jsxDEV("div", { className: "relationship-arrow", children: "→" }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 266, columnNumber: 19 }, void 0), v.jsxDEV("div", { className: "relationship-to", children: T.to }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 267, columnNumber: 19 }, void 0), v.jsxDEV("div", { className: "relationship-type", children: T.type }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 268, columnNumber: 19 }, void 0)] }, f, !0, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 264, columnNumber: 17 }, void 0)) }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 262, columnNumber: 13 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 260, columnNumber: 11 }, void 0), c === "views" && v.jsxDEV("div", { className: "views-section", children: [v.jsxDEV("h3", { children: "Database Views" }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 277, columnNumber: 13 }, void 0), v.jsxDEV("div", { className: "views-list", children: y.map(T => v.jsxDEV("div", { className: "view-item", children: [v.jsxDEV("div", { className: "view-header", children: [v.jsxDEV("h4", { children: T.name }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 282, columnNumber: 21 }, void 0), v.jsxDEV("span", { className: "view-description", children: T.description }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 283, columnNumber: 21 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 281, columnNumber: 19 }, void 0), v.jsxDEV("div", { className: "view-columns", children: [v.jsxDEV("h5", { children: "Columns:" }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 286, columnNumber: 21 }, void 0), v.jsxDEV("div", { className: "columns-grid", children: T.columns.map(f => v.jsxDEV("span", { className: "view-column", children: f }, f, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 289, columnNumber: 25 }, void 0)) }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 287, columnNumber: 21 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 285, columnNumber: 19 }, void 0)] }, T.name, !0, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 280, columnNumber: 17 }, void 0)) }, void 0, !1, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 278, columnNumber: 13 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 276, columnNumber: 11 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 230, columnNumber: 7 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/DatabaseSchema.jsx", lineNumber: 205, columnNumber: 5 }, void 0); }, cO = () => { const [c, p] = I.useState("authentication"), h = { authentication: { title: "Authentication", description: "User authentication and authorization endpoints", endpoints: [{ method: "POST", path: "/api/auth/login", description: "Authenticate user and receive JWT token", requestBody: { username: "string (required)", password: "string (required)" }, response: { success: { status: 200, body: { token: "jwt_token_string", role: "user_role", user: { id: 1, username: "admin", email: "admin@example.com", role: "master" } } }, error: { status: 401, body: { error: "Invalid credentials" } } }, example: { request: { username: "admin", password: "admin" }, response: { token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...", role: "master", user: { id: 1, username: "admin", email: "admin@example.com", role: "master" } } } }] }, projects: { title: "Projects", description: "Project management and hierarchy endpoints", endpoints: [{ method: "GET", path: "/api/projects", description: "Retrieve all projects with optional filtering", queryParams: { parent_id: "integer (optional)", limit: "integer (optional)", offset: "integer (optional)" }, response: { success: { status: 200, body: [{ id: 1, name: "Main Project", parent_project_id: null, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" }] } } }, { method: "GET", path: "/api/projects/:id", description: "Retrieve specific project by ID", pathParams: { id: "integer (required)" }, response: { success: { status: 200, body: { id: 1, name: "Main Project", parent_project_id: null, properties: [{ property_definition_id: 1, value: "Project Description", value_type: "string" }], created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" } }, error: { status: 404, body: { error: "Project not found" } } } }, { method: "POST", path: "/api/projects", description: "Create a new project", requestBody: { name: "string (required)", parent_project_id: "integer (optional)", properties: "array (optional)" }, response: { success: { status: 201, body: { id: 2, name: "New Project", parent_project_id: 1, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" } }, error: { status: 400, body: { error: "Project name is required" } } } }, { method: "PUT", path: "/api/projects/:id", description: "Update an existing project", pathParams: { id: "integer (required)" }, requestBody: { name: "string (optional)", parent_project_id: "integer (optional)", properties: "array (optional)" }, response: { success: { status: 200, body: { id: 1, name: "Updated Project Name", parent_project_id: null, updated_at: "2024-01-01T00:00:00Z" } } } }, { method: "DELETE", path: "/api/projects/:id", description: "Delete a project", pathParams: { id: "integer (required)" }, response: { success: { status: 204, body: null }, error: { status: 400, body: { error: "Cannot delete project with child projects" } } } }] }, "property-definitions": { title: "Property Definitions", description: "Dynamic property system for entities", endpoints: [{ method: "GET", path: "/api/property-definitions", description: "Retrieve all property definitions", queryParams: { entity_type: "string (optional)", limit: "integer (optional)", offset: "integer (optional)" }, response: { success: { status: 200, body: [{ id: 1, entity_type: "project", property_key: "description", value_type: "string", formatting_rules: null, is_required: !1, options: ["Option 1", "Option 2"], created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" }] } } }, { method: "POST", path: "/api/property-definitions", description: "Create a new property definition", requestBody: { entity_type: "string (required)", property_key: "string (required)", value_type: "string (required) - enum: string, number, date, boolean", formatting_rules: "string (optional)", is_required: "boolean (optional)", options: "array (optional)" }, response: { success: { status: 201, body: { id: 2, entity_type: "project", property_key: "budget", value_type: "number", formatting_rules: "currency", is_required: !0, options: null, created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" } } } }] }, "entity-properties": { title: "Entity Properties", description: "Dynamic property values for entities", endpoints: [{ method: "GET", path: "/api/entity-properties", description: "Retrieve entity properties with filtering", queryParams: { entity_type: "string (optional)", entity_id: "integer (optional)", property_definition_id: "integer (optional)" }, response: { success: { status: 200, body: [{ id: 1, entity_type: "project", entity_id: 1, property_definition_id: 1, value: "Project Description", value_type: "string", created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" }] } } }, { method: "POST", path: "/api/entity-properties", description: "Create or update entity property", requestBody: { entity_type: "string (required)", entity_id: "integer (required)", property_definition_id: "integer (required)", value: "string (required)", value_type: "string (optional)" }, response: { success: { status: 201, body: { id: 2, entity_type: "project", entity_id: 1, property_definition_id: 2, value: "100000", value_type: "number", created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" } } } }] }, tasks: { title: "Tasks", description: "Task management and workflow endpoints", endpoints: [{ method: "GET", path: "/api/tasks", description: "Retrieve tasks with filtering", queryParams: { status: "string (optional) - enum: pending, completed, overdue", assigned_to_user_id: "integer (optional)", assigned_to_office_id: "integer (optional)", entity_type: "string (optional)", entity_id: "integer (optional)" }, response: { success: { status: 200, body: [{ id: 1, task_rule_id: 1, entity_type: "project", entity_id: 1, assigned_to_user_id: 1, assigned_to_office_id: null, status: "pending", due_date: "2024-12-31", notes: "Complete project review", created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" }] } } }, { method: "POST", path: "/api/tasks", description: "Create a new task", requestBody: { task_rule_id: "integer (required)", entity_type: "string (required)", entity_id: "integer (required)", assigned_to_user_id: "integer (optional)", assigned_to_office_id: "integer (optional)", due_date: "date (optional)" }, response: { success: { status: 201, body: { id: 2, task_rule_id: 1, entity_type: "project", entity_id: 1, assigned_to_user_id: 1, status: "pending", due_date: "2024-12-31", created_at: "2024-01-01T00:00:00Z", updated_at: "2024-01-01T00:00:00Z" } } } }, { method: "POST", path: "/api/tasks/:id/complete", description: "Mark task as completed", pathParams: { id: "integer (required)" }, requestBody: { notes: "string (optional)" }, response: { success: { status: 200, body: { id: 1, status: "completed", completed_at: "2024-01-01T00:00:00Z", notes: "Task completed successfully" } } } }] }, progress: { title: "Progress", description: "Progress tracking and reporting endpoints", endpoints: [{ method: "GET", path: "/api/progress", description: "Retrieve progress data (requires authentication)", headers: { Authorization: "Bearer <token> (required)" }, response: { success: { status: 200, body: [{ id: 1, description: "Project setup completed", completed: !0, completed_at: "2024-01-01T00:00:00Z", created_at: "2024-01-01T00:00:00Z" }] } } }, { method: "POST", path: "/api/progress", description: "Create progress entry (requires master/originator role)", headers: { Authorization: "Bearer <token> (required)" }, requestBody: { description: "string (required)", completed: "boolean (optional)" }, response: { success: { status: 201, body: { id: 2, description: "New progress entry", completed: !1, created_at: "2024-01-01T00:00:00Z" } } } }] }, "zone-summary": { title: "Zone Summary", description: "Geographic zone-based project summaries", endpoints: [{ method: "GET", path: "/api/zone-summary", description: "Retrieve zone summary data (requires authentication)", headers: { Authorization: "Bearer <token> (required)" }, response: { success: { status: 200, body: [{ zone_id: 1, zone_name: "Zone A", total_projects: 10, completed_projects: 5, total_budget: 5e6, created_at: "2024-01-01T00:00:00Z" }] } } }] }, health: { title: "Health Check", description: "System health and status endpoints", endpoints: [{ method: "GET", path: "/api/health", description: "Check API health status", response: { success: { status: 200, body: { status: "OK", timestamp: "2024-01-01T00:00:00Z", version: "1.0.0", database: "connected" } } } }] } }, E = y => ({ GET: "#28a745", POST: "#007bff", PUT: "#ffc107", DELETE: "#dc3545" })[y] || "#6c757d"; return v.jsxDEV("div", { className: "endpoint-docs", children: [v.jsxDEV("h2", { children: "API Endpoint Documentation" }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 522, columnNumber: 7 }, void 0), v.jsxDEV("p", { children: "Comprehensive documentation for all database API endpoints with intended outcomes and examples." }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 523, columnNumber: 7 }, void 0), v.jsxDEV("div", { className: "docs-container", children: [v.jsxDEV("div", { className: "docs-sidebar", children: [v.jsxDEV("h3", { children: "Categories" }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 527, columnNumber: 11 }, void 0), v.jsxDEV("div", { className: "category-list", children: Object.keys(h).map(y => v.jsxDEV("button", { className: `category-btn ${c === y ? "active" : ""}`, onClick: () => p(y), children: h[y].title }, y, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 530, columnNumber: 15 }, void 0)) }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 528, columnNumber: 11 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 526, columnNumber: 9 }, void 0), v.jsxDEV("div", { className: "docs-content", children: [v.jsxDEV("div", { className: "category-header", children: [v.jsxDEV("h3", { children: h[c].title }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 543, columnNumber: 13 }, void 0), v.jsxDEV("p", { children: h[c].description }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 544, columnNumber: 13 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 542, columnNumber: 11 }, void 0), v.jsxDEV("div", { className: "endpoints-list", children: h[c].endpoints.map((y, T) => v.jsxDEV("div", { className: "endpoint-doc", children: [v.jsxDEV("div", { className: "endpoint-header", children: [v.jsxDEV("span", { className: "method-badge", style: { backgroundColor: E(y.method) }, children: y.method }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 551, columnNumber: 19 }, void 0), v.jsxDEV("span", { className: "endpoint-path", children: y.path }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 557, columnNumber: 19 }, void 0), v.jsxDEV("span", { className: "endpoint-description", children: y.description }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 558, columnNumber: 19 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 550, columnNumber: 17 }, void 0), v.jsxDEV("div", { className: "endpoint-details", children: [y.pathParams && v.jsxDEV("div", { className: "detail-section", children: [v.jsxDEV("h5", { children: "Path Parameters:" }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 564, columnNumber: 23 }, void 0), v.jsxDEV("div", { className: "params-list", children: Object.entries(y.pathParams).map(([f, k]) => v.jsxDEV("div", { className: "param-item", children: [v.jsxDEV("span", { className: "param-name", children: f }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 568, columnNumber: 29 }, void 0), v.jsxDEV("span", { className: "param-type", children: k }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 569, columnNumber: 29 }, void 0)] }, f, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 567, columnNumber: 27 }, void 0)) }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 565, columnNumber: 23 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 563, columnNumber: 21 }, void 0), y.queryParams && v.jsxDEV("div", { className: "detail-section", children: [v.jsxDEV("h5", { children: "Query Parameters:" }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 578, columnNumber: 23 }, void 0), v.jsxDEV("div", { className: "params-list", children: Object.entries(y.queryParams).map(([f, k]) => v.jsxDEV("div", { className: "param-item", children: [v.jsxDEV("span", { className: "param-name", children: f }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 582, columnNumber: 29 }, void 0), v.jsxDEV("span", { className: "param-type", children: k }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 583, columnNumber: 29 }, void 0)] }, f, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 581, columnNumber: 27 }, void 0)) }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 579, columnNumber: 23 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 577, columnNumber: 21 }, void 0), y.requestBody && v.jsxDEV("div", { className: "detail-section", children: [v.jsxDEV("h5", { children: "Request Body:" }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 592, columnNumber: 23 }, void 0), v.jsxDEV("div", { className: "params-list", children: Object.entries(y.requestBody).map(([f, k]) => v.jsxDEV("div", { className: "param-item", children: [v.jsxDEV("span", { className: "param-name", children: f }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 596, columnNumber: 29 }, void 0), v.jsxDEV("span", { className: "param-type", children: k }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 597, columnNumber: 29 }, void 0)] }, f, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 595, columnNumber: 27 }, void 0)) }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 593, columnNumber: 23 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 591, columnNumber: 21 }, void 0), y.headers && v.jsxDEV("div", { className: "detail-section", children: [v.jsxDEV("h5", { children: "Headers:" }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 606, columnNumber: 23 }, void 0), v.jsxDEV("div", { className: "params-list", children: Object.entries(y.headers).map(([f, k]) => v.jsxDEV("div", { className: "param-item", children: [v.jsxDEV("span", { className: "param-name", children: f }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 610, columnNumber: 29 }, void 0), v.jsxDEV("span", { className: "param-type", children: k }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 611, columnNumber: 29 }, void 0)] }, f, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 609, columnNumber: 27 }, void 0)) }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 607, columnNumber: 23 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 605, columnNumber: 21 }, void 0), v.jsxDEV("div", { className: "detail-section", children: [v.jsxDEV("h5", { children: "Response Examples:" }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 619, columnNumber: 21 }, void 0), v.jsxDEV("div", { className: "response-examples", children: [y.response.success && v.jsxDEV("div", { className: "response-example success", children: [v.jsxDEV("h6", { children: ["Success Response (", y.response.success.status, ")"] }, void 0, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 623, columnNumber: 27 }, void 0), v.jsxDEV("pre", { children: JSON.stringify(y.response.success.body, null, 2) }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 624, columnNumber: 27 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 622, columnNumber: 25 }, void 0), y.response.error && v.jsxDEV("div", { className: "response-example error", children: [v.jsxDEV("h6", { children: ["Error Response (", y.response.error.status, ")"] }, void 0, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 629, columnNumber: 27 }, void 0), v.jsxDEV("pre", { children: JSON.stringify(y.response.error.body, null, 2) }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 630, columnNumber: 27 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 628, columnNumber: 25 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 620, columnNumber: 21 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 618, columnNumber: 19 }, void 0), y.example && v.jsxDEV("div", { className: "detail-section", children: [v.jsxDEV("h5", { children: "Usage Example:" }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 638, columnNumber: 23 }, void 0), v.jsxDEV("div", { className: "example-container", children: [v.jsxDEV("div", { className: "example-request", children: [v.jsxDEV("h6", { children: "Request:" }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 641, columnNumber: 27 }, void 0), v.jsxDEV("pre", { children: JSON.stringify(y.example.request, null, 2) }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 642, columnNumber: 27 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 640, columnNumber: 25 }, void 0), v.jsxDEV("div", { className: "example-response", children: [v.jsxDEV("h6", { children: "Response:" }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 645, columnNumber: 27 }, void 0), v.jsxDEV("pre", { children: JSON.stringify(y.example.response, null, 2) }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 646, columnNumber: 27 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 644, columnNumber: 25 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 639, columnNumber: 23 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 637, columnNumber: 21 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 561, columnNumber: 17 }, void 0)] }, T, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 549, columnNumber: 15 }, void 0)) }, void 0, !1, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 547, columnNumber: 11 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 541, columnNumber: 9 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 525, columnNumber: 7 }, void 0)] }, void 0, !0, { fileName: "/app/client/src/components/EndpointDocs.jsx", lineNumber: 521, columnNumber: 5 }, void 0); };
function fO() { const [c, p] = La.useState(""), [h, E] = La.useState(""), [y, T] = La.useState(""), [f, k] = La.useState(!1), O = Ef(), A = async (B) => { B.preventDefault(), T(""), k(!0); try {
    console.log("Attempting login with:", { username: c, password: h });
    const j = await fetch("http://localhost:3000/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username: c, password: h }) });
    if (console.log("Response status:", j.status), console.log("Response headers:", j.headers), j.ok) {
        const P = await j.json();
        console.log("Login successful:", P), localStorage.setItem("token", P.token), P.role && localStorage.setItem("role", P.role), O("/dashboard");
    }
    else {
        const P = await j.json().catch(() => ({}));
        console.log("Login failed:", P), T(P.error || "Invalid credentials");
    }
}
catch (j) {
    console.error("Login error:", j), T("Network error. Please check your connection.");
}
finally {
    k(!1);
} }; return v.jsxDEV("div", { className: "login-container", children: [v.jsxDEV("h2", { children: "QSData Login" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 54, columnNumber: 7 }, this), v.jsxDEV("div", { className: "dev-credentials", children: [v.jsxDEV("h3", { children: "Development Credentials:" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 56, columnNumber: 9 }, this), v.jsxDEV("ul", { children: [v.jsxDEV("li", { children: [v.jsxDEV("strong", { children: "Admin:" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 58, columnNumber: 15 }, this), " username: ", v.jsxDEV("code", { children: "admin" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 58, columnNumber: 49 }, this), ", password: ", v.jsxDEV("code", { children: "admin" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 58, columnNumber: 79 }, this)] }, void 0, !0, { fileName: "/app/client/src/App.jsx", lineNumber: 58, columnNumber: 11 }, this), v.jsxDEV("li", { children: [v.jsxDEV("strong", { children: "User:" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 59, columnNumber: 15 }, this), " username: ", v.jsxDEV("code", { children: "user" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 59, columnNumber: 48 }, this), ", password: ", v.jsxDEV("code", { children: "user" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 59, columnNumber: 77 }, this)] }, void 0, !0, { fileName: "/app/client/src/App.jsx", lineNumber: 59, columnNumber: 11 }, this)] }, void 0, !0, { fileName: "/app/client/src/App.jsx", lineNumber: 57, columnNumber: 9 }, this), v.jsxDEV("p", { style: { color: "#28a745", fontSize: "0.9rem", marginTop: "10px" }, children: "✅ Backend is running and credentials verified!" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 61, columnNumber: 9 }, this)] }, void 0, !0, { fileName: "/app/client/src/App.jsx", lineNumber: 55, columnNumber: 7 }, this), v.jsxDEV("form", { onSubmit: A, children: [v.jsxDEV("div", { className: "form-group", children: [v.jsxDEV("label", { children: "Username" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 67, columnNumber: 11 }, this), v.jsxDEV("input", { value: c, onChange: B => p(B.target.value), disabled: f, placeholder: "Enter username" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 68, columnNumber: 11 }, this)] }, void 0, !0, { fileName: "/app/client/src/App.jsx", lineNumber: 66, columnNumber: 9 }, this), v.jsxDEV("div", { className: "form-group", children: [v.jsxDEV("label", { children: "Password" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 76, columnNumber: 11 }, this), v.jsxDEV("input", { type: "password", value: h, onChange: B => E(B.target.value), disabled: f, placeholder: "Enter password" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 77, columnNumber: 11 }, this)] }, void 0, !0, { fileName: "/app/client/src/App.jsx", lineNumber: 75, columnNumber: 9 }, this), y && v.jsxDEV("div", { className: "error-message", children: y }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 85, columnNumber: 19 }, this), v.jsxDEV("button", { type: "submit", disabled: f, children: f ? "Logging in..." : "Login" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 86, columnNumber: 9 }, this)] }, void 0, !0, { fileName: "/app/client/src/App.jsx", lineNumber: 65, columnNumber: 7 }, this)] }, void 0, !0, { fileName: "/app/client/src/App.jsx", lineNumber: 53, columnNumber: 5 }, this); }
function Nf({ children: c }) { const p = Ef(), h = () => { localStorage.removeItem("token"), localStorage.removeItem("role"), p("/"); }; return v.jsxDEV("div", { className: "layout", children: [v.jsxDEV("header", { children: [v.jsxDEV("h1", { children: "QSData" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 104, columnNumber: 9 }, this), v.jsxDEV("button", { className: "logout", onClick: h, children: "Logout" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 105, columnNumber: 9 }, this)] }, void 0, !0, { fileName: "/app/client/src/App.jsx", lineNumber: 103, columnNumber: 7 }, this), v.jsxDEV("aside", { children: v.jsxDEV("nav", { children: v.jsxDEV("ul", { children: [v.jsxDEV("li", { children: v.jsxDEV(Ar, { to: "/dashboard", children: "Dashboard" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 110, columnNumber: 17 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 110, columnNumber: 13 }, this), v.jsxDEV("li", { children: v.jsxDEV(Ar, { to: "/projects", children: "Projects" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 111, columnNumber: 17 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 111, columnNumber: 13 }, this), v.jsxDEV("li", { children: v.jsxDEV(Ar, { to: "/projects/new", children: "Add Project" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 112, columnNumber: 17 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 112, columnNumber: 13 }, this), v.jsxDEV("li", { children: v.jsxDEV(Ar, { to: "/progress", children: "Progress" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 113, columnNumber: 17 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 113, columnNumber: 13 }, this), v.jsxDEV("li", { children: v.jsxDEV(Ar, { to: "/api-demo", children: "API Demo" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 114, columnNumber: 17 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 114, columnNumber: 13 }, this), v.jsxDEV("li", { children: v.jsxDEV(Ar, { to: "/database-schema", children: "Database Schema" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 115, columnNumber: 17 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 115, columnNumber: 13 }, this), v.jsxDEV("li", { children: v.jsxDEV(Ar, { to: "/endpoint-docs", children: "API Documentation" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 116, columnNumber: 17 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 116, columnNumber: 13 }, this)] }, void 0, !0, { fileName: "/app/client/src/App.jsx", lineNumber: 109, columnNumber: 11 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 108, columnNumber: 9 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 107, columnNumber: 7 }, this), v.jsxDEV("main", { children: c }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 120, columnNumber: 7 }, this)] }, void 0, !0, { fileName: "/app/client/src/App.jsx", lineNumber: 102, columnNumber: 5 }, this); }
function dO() { return v.jsxDEV(Nf, { children: [v.jsxDEV("h2", { children: "Dashboard" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 128, columnNumber: 7 }, this), v.jsxDEV("p", { children: "Select an option from the menu." }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 129, columnNumber: 7 }, this)] }, void 0, !0, { fileName: "/app/client/src/App.jsx", lineNumber: 127, columnNumber: 5 }, this); }
function pO() { const [c] = La.useState([{ id: 1, name: "Project A", status: "In Progress" }, { id: 2, name: "Project B", status: "Completed" }]); return v.jsxDEV(Nf, { children: [v.jsxDEV("h2", { children: "Projects" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 141, columnNumber: 7 }, this), v.jsxDEV("ul", { children: c.map(p => v.jsxDEV("li", { children: [p.name, " - ", p.status] }, p.id, !0, { fileName: "/app/client/src/App.jsx", lineNumber: 144, columnNumber: 11 }, this)) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 142, columnNumber: 7 }, this)] }, void 0, !0, { fileName: "/app/client/src/App.jsx", lineNumber: 140, columnNumber: 5 }, this); }
function mO() { const [c, p] = La.useState(""), [h, E] = La.useState(""), y = T => { T.preventDefault(), alert("Project added (placeholder)"), p(""), E(""); }; return v.jsxDEV(Nf, { children: [v.jsxDEV("h2", { children: "Add Project" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 162, columnNumber: 7 }, this), v.jsxDEV("form", { onSubmit: y, children: [v.jsxDEV("label", { children: "Name" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 164, columnNumber: 9 }, this), v.jsxDEV("input", { value: c, onChange: T => p(T.target.value) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 165, columnNumber: 9 }, this), v.jsxDEV("label", { children: "Description" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 166, columnNumber: 9 }, this), v.jsxDEV("input", { value: h, onChange: T => E(T.target.value) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 167, columnNumber: 9 }, this), v.jsxDEV("button", { type: "submit", children: "Save" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 168, columnNumber: 9 }, this)] }, void 0, !0, { fileName: "/app/client/src/App.jsx", lineNumber: 163, columnNumber: 7 }, this)] }, void 0, !0, { fileName: "/app/client/src/App.jsx", lineNumber: 161, columnNumber: 5 }, this); }
function vO() { const [c, p] = La.useState([]); return La.useEffect(() => { const h = localStorage.getItem("token"); fetch("/api/progress", { headers: { Authorization: `Bearer ${h}` } }).then(E => E.json()).then(E => { Array.isArray(E) ? p(E) : p([]); }).catch(() => p([])); }, []), v.jsxDEV(Nf, { children: [v.jsxDEV("h2", { children: "Progress" }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 188, columnNumber: 7 }, this), v.jsxDEV("ul", { children: c.map(h => v.jsxDEV("li", { children: [h.description, " - ", h.completed ? "done" : "pending"] }, h.id, !0, { fileName: "/app/client/src/App.jsx", lineNumber: 191, columnNumber: 11 }, this)) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 189, columnNumber: 7 }, this)] }, void 0, !0, { fileName: "/app/client/src/App.jsx", lineNumber: 187, columnNumber: 5 }, this); }
function Ki({ children: c }) { return localStorage.getItem("token") ? c : v.jsxDEV(wA, { to: "/", replace: !0 }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 200, columnNumber: 29 }, this); }
function hO() { return v.jsxDEV(KA, { children: v.jsxDEV(LA, { children: [v.jsxDEV(jr, { path: "/", element: v.jsxDEV(fO, {}, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 207, columnNumber: 34 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 207, columnNumber: 9 }, this), v.jsxDEV(jr, { path: "/dashboard", element: v.jsxDEV(Ki, { children: v.jsxDEV(dO, {}, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 208, columnNumber: 57 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 208, columnNumber: 43 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 208, columnNumber: 9 }, this), v.jsxDEV(jr, { path: "/projects", element: v.jsxDEV(Ki, { children: v.jsxDEV(pO, {}, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 209, columnNumber: 56 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 209, columnNumber: 42 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 209, columnNumber: 9 }, this), v.jsxDEV(jr, { path: "/projects/new", element: v.jsxDEV(Ki, { children: v.jsxDEV(mO, {}, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 210, columnNumber: 60 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 210, columnNumber: 46 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 210, columnNumber: 9 }, this), v.jsxDEV(jr, { path: "/progress", element: v.jsxDEV(Ki, { children: v.jsxDEV(vO, {}, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 211, columnNumber: 56 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 211, columnNumber: 42 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 211, columnNumber: 9 }, this), v.jsxDEV(jr, { path: "/api-demo", element: v.jsxDEV(Ki, { children: v.jsxDEV(uO, {}, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 212, columnNumber: 56 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 212, columnNumber: 42 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 212, columnNumber: 9 }, this), v.jsxDEV(jr, { path: "/database-schema", element: v.jsxDEV(Ki, { children: v.jsxDEV(sO, {}, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 213, columnNumber: 63 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 213, columnNumber: 49 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 213, columnNumber: 9 }, this), v.jsxDEV(jr, { path: "/endpoint-docs", element: v.jsxDEV(Ki, { children: v.jsxDEV(cO, {}, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 214, columnNumber: 61 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 214, columnNumber: 47 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 214, columnNumber: 9 }, this)] }, void 0, !0, { fileName: "/app/client/src/App.jsx", lineNumber: 206, columnNumber: 7 }, this) }, void 0, !1, { fileName: "/app/client/src/App.jsx", lineNumber: 205, columnNumber: 5 }, this); }
const TS = document.getElementById("root");
if (!TS)
    throw new Error("Failed to find the root element");
Uv.createRoot(TS).render(v.jsxDEV(La.StrictMode, { children: v.jsxDEV(hO, {}, void 0, !1, { fileName: "/app/client/src/main.tsx", lineNumber: 11, columnNumber: 5 }, void 0) }, void 0, !1, { fileName: "/app/client/src/main.tsx", lineNumber: 10, columnNumber: 3 }, void 0));
