import { defineComponent as z, openBlock as L, createElementBlock as x, createElementVNode as y, ref as C, watch as K, createVNode as e, resolveComponent as o, unref as s, getCurrentInstance as Z, mergeProps as B, computed as W, isVNode as X, Fragment as k } from "vue";
const N = "table-", Y = "-header", q = "handle-left", J = !0, O = {
  index: "索引",
  selection: "选择"
}, Q = "default", U = 10, P = 1, ee = 0, te = !0, ne = "total, sizes, prev, pager, next, jumper", ae = [10, 20, 50, 100], le = [
  { value: "large", label: "宽松" },
  { value: "default", label: "默认" },
  { value: "small", label: "紧凑" }
];
/*! Element Plus Icons Vue v2.3.1 */
var oe = /* @__PURE__ */ z({
  name: "Open",
  __name: "open",
  setup(t) {
    return (b, c) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
      }),
      y("path", {
        fill: "currentColor",
        d: "M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454m0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088"
      })
    ]));
  }
}), re = oe, ue = /* @__PURE__ */ z({
  name: "Operation",
  __name: "operation",
  setup(t) {
    return (b, c) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64z"
      })
    ]));
  }
}), ce = ue, ie = /* @__PURE__ */ z({
  name: "Refresh",
  __name: "refresh",
  setup(t) {
    return (b, c) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      y("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), se = ie;
function E(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !X(t);
}
const fe = /* @__PURE__ */ z({
  name: "TsxElementTable",
  props: {
    // Normal
    size: {
      type: String,
      default: Q
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
      default: P
    },
    pageSize: {
      type: Number,
      default: U
    }
  },
  setup(t, {
    slots: b,
    emit: c,
    expose: D
  }) {
    const w = C(t.size), H = C(null), T = C();
    K(() => t.table, (a) => {
      T.value = a.columns.map((n) => ({
        ...n,
        show: n.show ?? !0
      }));
    }, {
      deep: !0,
      immediate: !0
    });
    const A = C(!1);
    D({
      getTableRef: () => H.value
    });
    function F(a) {
      const n = `${N}${a.prop}`;
      return b[n];
    }
    function R(a) {
      const n = `${N}${a.prop}${Y}`;
      return b[n];
    }
    function I() {
      return b[q];
    }
    function j(a) {
      const n = {}, d = F(a), _ = R(a);
      return d && (n.default = (p) => d(p)), _ && (n.header = (p) => _(p)), a.show && e(o("el-table-column"), B(a, {
        key: a.prop
      }), E(n) ? n : {
        default: () => [n]
      });
    }
    function M() {
      var g, f, l, u;
      const a = C((t == null ? void 0 : t.currentPage) || P), n = C((t == null ? void 0 : t.pageSize) || U), d = ((g = t == null ? void 0 : t.pagination) == null ? void 0 : g.total) || ee, _ = ((f = t.pagination) == null ? void 0 : f.show) ?? te;
      if (!(_ === "auto" ? d > n : _)) return;
      const v = (i) => {
        c("update:currentPage", i), c("page-change", {
          currentPage: i,
          pageSize: n
        });
      }, r = (i) => {
        c("update:pageSize", i), c("page-change", {
          currentPage: a.value,
          pageSize: i
        });
      };
      return e("div", {
        className: "tetPaginationBox"
      }, [e(o("el-pagination"), {
        size: s(w),
        "current-page": a.value,
        "onUpdate:current-page": (i) => a.value = i,
        "page-size": n.value,
        "onUpdate:page-size": (i) => n.value = i,
        total: d,
        pageSizes: ((l = t.pagination) == null ? void 0 : l.pageSizes) || ae,
        layout: ((u = t.pagination) == null ? void 0 : u.layout) || ne,
        onCurrentChange: v,
        onSizeChange: r
      }, null)]);
    }
    function V() {
      var v;
      let a;
      const {
        table: n
      } = t, d = Z(), _ = {};
      return Object.keys(((v = d == null ? void 0 : d.vnode) == null ? void 0 : v.props) ?? []).filter((r) => r.startsWith("on") && !r.startsWith("onUpdate")).forEach((r) => {
        const f = r.replace("on", "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        _[r] = (...l) => {
          c(f, ...l);
        };
      }), e("div", {
        className: "tetTableBox"
      }, [e(o("el-table"), B({
        ref: H,
        size: s(w)
      }, _, n), E(a = (s(T) || []).map((r) => j(r))) ? a : {
        default: () => [a]
      })]);
    }
    function $() {
      var v;
      if (!t.handle || !(((v = t.handle) == null ? void 0 : v.show) ?? J)) return;
      const n = W(() => s(w) === "large" ? "default" : s(w));
      function d() {
        var f;
        const r = (l) => {
          c("handle-click", l);
        }, g = I();
        return e(k, null, [e("div", {
          className: "tetHandleLeftBtnBox"
        }, [(((f = t.handle) == null ? void 0 : f.columns) || []).map((l) => e(o("el-button"), {
          size: s(n),
          key: l.key,
          type: l.type || "",
          onClick: l.action ?? (() => r(l.key))
        }, {
          default: () => [l.label]
        }))]), e("div", {
          className: "tetHandleLeftSlotBox"
        }, [g && g()])]);
      }
      function _() {
        const r = {
          default: () => e(o("el-button"), {
            circle: !0,
            size: s(n),
            icon: ce
          }, null),
          dropdown: () => {
            let h;
            return e(o("el-dropdown-menu"), null, E(h = le.map((m) => e(o("el-dropdown-item"), {
              command: m.value,
              disabled: s(w) === m.value
            }, {
              default: () => [m.label]
            }))) ? h : {
              default: () => [h]
            });
          }
        }, g = (h) => {
          w.value = h, c("size-change", h);
        }, f = () => {
          c("table-refresh");
        }, l = () => {
          A.value = !0;
        }, u = (h) => {
          c("handle-right-click", h);
        };
        return e(k, null, [(() => {
          var h, m;
          if ((h = t.handle) != null && h.rightColumns)
            return (m = t.handle) == null ? void 0 : m.rightColumns.map((S) => {
              const G = {
                ...new Object(S.icon)
              };
              return e("div", null, [e(o("el-tooltip"), {
                content: S.tooltip
              }, {
                default: () => [e(o("el-button"), {
                  circle: !0,
                  loading: "loading" in S && S.loading,
                  size: s(n),
                  icon: G,
                  onClick: () => u(S.key)
                }, null)]
              })]);
            });
        })(), e("div", null, [e(o("el-tooltip"), {
          content: "表格刷新"
        }, {
          default: () => [e(o("el-button"), {
            circle: !0,
            size: s(n),
            icon: se,
            onClick: f
          }, null)]
        })]), e("div", null, [e(o("el-tooltip"), {
          content: "表格大小"
        }, {
          default: () => [e(o("el-dropdown"), {
            trigger: "click",
            onCommand: g
          }, E(r) ? r : {
            default: () => [r]
          })]
        })]), e("div", null, [e(o("el-tooltip"), {
          content: "字段管理"
        }, {
          default: () => [e(o("el-button"), {
            circle: !0,
            size: s(n),
            icon: re,
            onClick: l
          }, null)]
        })])]);
      }
      function p() {
        const r = () => {
          A.value = !1;
        }, g = (u) => e(o("el-checkbox"), {
          key: "normal",
          modelValue: u.show,
          "onUpdate:modelValue": (i) => u.show = i,
          label: u.prop
        }, {
          default: () => [u.label]
        }), f = (u) => e(o("el-checkbox"), {
          key: u.type,
          disabled: !0,
          "model-value": !0
        }, {
          default: () => [O[u.type]]
        }), l = {
          default: () => (s(T) || []).map((u) => u.type && O[u.type] ? f(u) : g(u))
        };
        return e(o("el-drawer"), {
          width: "320px",
          "append-to-body": !0,
          "model-value": A.value,
          title: "字段管理",
          onClose: r
        }, E(l) ? l : {
          default: () => [l]
        });
      }
      return e("div", {
        className: "tetHandleBox"
      }, [e("div", {
        className: "tetHandleLeftBox"
      }, [d()]), e("div", {
        className: "tetHandleRightBox"
      }, [_()]), p()]);
    }
    return () => e("div", {
      className: "TsxElementTableContainer"
    }, [$(), V(), M()]);
  }
});
export {
  fe as default
};
