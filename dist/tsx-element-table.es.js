import { defineComponent as C, openBlock as T, createElementBlock as x, createElementVNode as S, ref as w, watch as R, createVNode as e, resolveComponent as u, unref as v, getCurrentInstance as V, mergeProps as z, isVNode as $, Fragment as A } from "vue";
const H = "table-", K = "-header", G = "handle-left", W = !0, N = {
  index: "索引",
  selection: "选择"
}, Z = "default", O = 10, B = 1, X = 0, Y = !0, q = "total, prev, pager, next, jumper", J = [
  { value: "large", label: "宽松" },
  { value: "default", label: "默认" },
  { value: "small", label: "紧凑" }
];
/*! Element Plus Icons Vue v2.3.1 */
var Q = /* @__PURE__ */ C({
  name: "Open",
  __name: "open",
  setup(n) {
    return (p, c) => (T(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      S("path", {
        fill: "currentColor",
        d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
      }),
      S("path", {
        fill: "currentColor",
        d: "M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454m0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088"
      })
    ]));
  }
}), ee = Q, te = /* @__PURE__ */ C({
  name: "Operation",
  __name: "operation",
  setup(n) {
    return (p, c) => (T(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      S("path", {
        fill: "currentColor",
        d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64z"
      })
    ]));
  }
}), ne = te, ae = /* @__PURE__ */ C({
  name: "Refresh",
  __name: "refresh",
  setup(n) {
    return (p, c) => (T(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      S("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), le = ae;
function m(n) {
  return typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !$(n);
}
const re = /* @__PURE__ */ C({
  name: "TsxElementTable",
  props: {
    // Normal
    size: {
      type: String,
      default: Z
    },
    table: {
      type: Object,
      required: !0
    },
    handle: {
      type: Object,
      default: () => {
      }
    },
    pagination: {
      type: Object,
      default: () => {
      }
    },
    currentPage: {
      type: Number,
      default: B
    },
    pageSize: {
      type: Number,
      default: O
    }
  },
  setup(n, {
    slots: p,
    emit: c,
    expose: k
  }) {
    const g = w(n.size), L = w(null), E = w();
    R(() => n.table, (l) => {
      E.value = l.columns.map((t) => ({
        ...t,
        show: t.show ?? !0
      }));
    }, {
      deep: !0,
      immediate: !0
    });
    const y = w(!1);
    k({
      getTableRef: () => L.value
    });
    function P(l) {
      const t = `${H}${l.prop}`;
      return p[t];
    }
    function U(l) {
      const t = `${H}${l.prop}${K}`;
      return p[t];
    }
    function D() {
      return p[G];
    }
    function F(l) {
      const t = {}, s = P(l), i = U(l);
      return s && (t.default = (f) => s(f)), i && (t.header = (f) => i(f)), l.show && e(u("el-table-column"), z(l, {
        key: l.prop
      }), m(t) ? t : {
        default: () => [t]
      });
    }
    function M() {
      var _, d;
      const l = (n == null ? void 0 : n.currentPage) || B, t = (n == null ? void 0 : n.pageSize) || O, s = ((_ = n == null ? void 0 : n.pagination) == null ? void 0 : _.total) || X, i = ((d = n.pagination) == null ? void 0 : d.show) ?? Y;
      if (!(i === "auto" ? s > t : i)) return;
      const h = (a) => {
        c("update:currentPage", a), c("page-change", {
          currentPage: a,
          pageSize: t
        });
      }, r = (a) => {
        c("update:pageSize", a), c("page-change", {
          currentPage: l,
          pageSize: a
        });
      };
      return e("div", {
        className: "tetPaginationBox"
      }, [e(u("el-pagination"), {
        size: v(g),
        defaultCurrentPage: l,
        pageSize: t,
        total: s,
        layout: q,
        onCurrentChange: h,
        onSizeChange: r
      }, null)]);
    }
    function j() {
      var h;
      let l;
      const {
        table: t
      } = n, s = V(), i = {};
      return Object.keys(((h = s == null ? void 0 : s.vnode) == null ? void 0 : h.props) ?? []).filter((r) => r.startsWith("on") && !r.startsWith("onUpdate")).forEach((r) => {
        const d = r.replace("on", "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        i[r] = (...a) => {
          c(d, ...a);
        };
      }), e("div", {
        className: "tetTableBox"
      }, [e(u("el-table"), z({
        ref: L,
        size: v(g)
      }, i, t), m(l = v(E).map((r) => F(r))) ? l : {
        default: () => [l]
      })]);
    }
    function I() {
      var h;
      if (!n.handle || !(((h = n.handle) == null ? void 0 : h.show) ?? W)) return;
      const t = v(g) === "large" ? "default" : v(g);
      function s() {
        var d;
        const r = (a) => {
          c("handle-click", a);
        }, _ = D();
        return e(A, null, [e("div", {
          className: "tetHandleLeftBtnBox"
        }, [(((d = n.handle) == null ? void 0 : d.columns) || []).map((a) => e(u("el-button"), {
          size: t,
          key: a.key,
          type: a.type || "",
          onClick: a.action ?? (() => r(a.key))
        }, {
          default: () => [a.label]
        }))]), e("div", {
          className: "tetHandleLeftSlotBox"
        }, [_ && _()])]);
      }
      function i() {
        const r = {
          default: () => e(u("el-button"), {
            circle: !0,
            size: t,
            icon: ne
          }, null),
          dropdown: () => {
            let o;
            return e(u("el-dropdown-menu"), null, m(o = J.map((b) => e(u("el-dropdown-item"), {
              command: b.value,
              disabled: t === b.value
            }, {
              default: () => [b.label]
            }))) ? o : {
              default: () => [o]
            });
          }
        }, _ = (o) => {
          g.value = o, c("size-change", o);
        }, d = () => {
          c("table-refresh");
        }, a = () => {
          y.value = !0;
        };
        return e(A, null, [e("div", null, [e(u("el-button"), {
          circle: !0,
          size: t,
          icon: le,
          onClick: d
        }, null)]), e("div", null, [e(u("el-dropdown"), {
          trigger: "click",
          onCommand: _
        }, m(r) ? r : {
          default: () => [r]
        })]), e("div", null, [e(u("el-button"), {
          circle: !0,
          size: t,
          icon: ee,
          onClick: a
        }, null)])]);
      }
      function f() {
        const r = () => {
          y.value = !1;
        }, _ = (o) => e(u("el-checkbox"), {
          key: "normal",
          modelValue: o.show,
          "onUpdate:modelValue": (b) => o.show = b,
          label: o.prop
        }, {
          default: () => [o.label]
        }), d = (o) => e(u("el-checkbox"), {
          key: o.type,
          disabled: !0,
          "model-value": !0
        }, {
          default: () => [N[o.type]]
        }), a = {
          default: () => v(E).map((o) => o.type && N[o.type] ? d(o) : _(o))
        };
        return e(u("el-drawer"), {
          width: "320px",
          "append-to-body": !0,
          "model-value": y.value,
          title: "字段管理",
          onClose: r
        }, m(a) ? a : {
          default: () => [a]
        });
      }
      return e("div", {
        className: "tetHandleBox"
      }, [e("div", {
        className: "tetHandleLeftBox"
      }, [s()]), e("div", {
        className: "tetHandleRightBox"
      }, [i()]), f()]);
    }
    return () => e("div", {
      className: "TsxElementTableContainer"
    }, [I(), j(), M()]);
  }
});
export {
  re as default
};
