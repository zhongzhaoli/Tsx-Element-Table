import { defineComponent as C, openBlock as T, createElementBlock as x, createElementVNode as S, ref as w, watch as R, createVNode as e, resolveComponent as u, unref as g, getCurrentInstance as V, mergeProps as z, computed as $, isVNode as K, Fragment as A } from "vue";
const H = "table-", G = "-header", W = "handle-left", Z = !0, N = {
  index: "索引",
  selection: "选择"
}, X = "default", O = 10, B = 1, Y = 0, q = !0, J = "total, prev, pager, next, jumper", Q = [
  { value: "large", label: "宽松" },
  { value: "default", label: "默认" },
  { value: "small", label: "紧凑" }
];
/*! Element Plus Icons Vue v2.3.1 */
var ee = /* @__PURE__ */ C({
  name: "Open",
  __name: "open",
  setup(t) {
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
}), te = ee, ne = /* @__PURE__ */ C({
  name: "Operation",
  __name: "operation",
  setup(t) {
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
}), ae = ne, le = /* @__PURE__ */ C({
  name: "Refresh",
  __name: "refresh",
  setup(t) {
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
}), oe = le;
function b(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !K(t);
}
const ue = /* @__PURE__ */ C({
  name: "TsxElementTable",
  props: {
    // Normal
    size: {
      type: String,
      default: X
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
  setup(t, {
    slots: p,
    emit: c,
    expose: k
  }) {
    const v = w(t.size), L = w(null), E = w();
    R(() => t.table, (l) => {
      E.value = l.columns.map((n) => ({
        ...n,
        show: n.show ?? !0
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
      const n = `${H}${l.prop}`;
      return p[n];
    }
    function U(l) {
      const n = `${H}${l.prop}${G}`;
      return p[n];
    }
    function D() {
      return p[W];
    }
    function F(l) {
      const n = {}, s = P(l), i = U(l);
      return s && (n.default = (f) => s(f)), i && (n.header = (f) => i(f)), l.show && e(u("el-table-column"), z(l, {
        key: l.prop
      }), b(n) ? n : {
        default: () => [n]
      });
    }
    function M() {
      var _, d;
      const l = (t == null ? void 0 : t.currentPage) || B, n = (t == null ? void 0 : t.pageSize) || O, s = ((_ = t == null ? void 0 : t.pagination) == null ? void 0 : _.total) || Y, i = ((d = t.pagination) == null ? void 0 : d.show) ?? q;
      if (!(i === "auto" ? s > n : i)) return;
      const h = (a) => {
        c("update:currentPage", a), c("page-change", {
          currentPage: a,
          pageSize: n
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
        size: g(v),
        defaultCurrentPage: l,
        pageSize: n,
        total: s,
        layout: J,
        onCurrentChange: h,
        onSizeChange: r
      }, null)]);
    }
    function j() {
      var h;
      let l;
      const {
        table: n
      } = t, s = V(), i = {};
      return Object.keys(((h = s == null ? void 0 : s.vnode) == null ? void 0 : h.props) ?? []).filter((r) => r.startsWith("on") && !r.startsWith("onUpdate")).forEach((r) => {
        const d = r.replace("on", "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        i[r] = (...a) => {
          c(d, ...a);
        };
      }), e("div", {
        className: "tetTableBox"
      }, [e(u("el-table"), z({
        ref: L,
        size: g(v)
      }, i, n), b(l = g(E).map((r) => F(r))) ? l : {
        default: () => [l]
      })]);
    }
    function I() {
      var h;
      if (!t.handle || !(((h = t.handle) == null ? void 0 : h.show) ?? Z)) return;
      const n = $(() => g(v) === "large" ? "default" : g(v));
      function s() {
        var d;
        const r = (a) => {
          c("handle-click", a);
        }, _ = D();
        return e(A, null, [e("div", {
          className: "tetHandleLeftBtnBox"
        }, [(((d = t.handle) == null ? void 0 : d.columns) || []).map((a) => e(u("el-button"), {
          size: n,
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
            size: n,
            icon: ae
          }, null),
          dropdown: () => {
            let o;
            return e(u("el-dropdown-menu"), null, b(o = Q.map((m) => e(u("el-dropdown-item"), {
              command: m.value,
              disabled: v === m.value
            }, {
              default: () => [m.label]
            }))) ? o : {
              default: () => [o]
            });
          }
        }, _ = (o) => {
          v.value = o, c("size-change", o);
        }, d = () => {
          c("table-refresh");
        }, a = () => {
          y.value = !0;
        };
        return e(A, null, [e("div", null, [e(u("el-button"), {
          circle: !0,
          size: n,
          icon: oe,
          onClick: d
        }, null)]), e("div", null, [e(u("el-dropdown"), {
          trigger: "click",
          onCommand: _
        }, b(r) ? r : {
          default: () => [r]
        })]), e("div", null, [e(u("el-button"), {
          circle: !0,
          size: n,
          icon: te,
          onClick: a
        }, null)])]);
      }
      function f() {
        const r = () => {
          y.value = !1;
        }, _ = (o) => e(u("el-checkbox"), {
          key: "normal",
          modelValue: o.show,
          "onUpdate:modelValue": (m) => o.show = m,
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
          default: () => g(E).map((o) => o.type && N[o.type] ? d(o) : _(o))
        };
        return e(u("el-drawer"), {
          width: "320px",
          "append-to-body": !0,
          "model-value": y.value,
          title: "字段管理",
          onClose: r
        }, b(a) ? a : {
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
  ue as default
};
