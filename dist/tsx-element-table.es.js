import { defineComponent as y, openBlock as L, createElementBlock as x, createElementVNode as E, ref as C, watch as G, createVNode as e, resolveComponent as u, unref as s, getCurrentInstance as K, mergeProps as k, computed as Z, isVNode as W, Fragment as N } from "vue";
const O = "table-", X = "-header", Y = "handle-left", q = !0, B = {
  index: "索引",
  selection: "选择"
}, J = "default", P = 10, U = 1, Q = 0, ee = !0, te = "total, sizes, prev, pager, next, jumper", ne = [10, 20, 50, 100], ae = [
  { value: "large", label: "宽松" },
  { value: "default", label: "默认" },
  { value: "small", label: "紧凑" }
];
/*! Element Plus Icons Vue v2.3.1 */
var le = /* @__PURE__ */ y({
  name: "Open",
  __name: "open",
  setup(t) {
    return (m, c) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      E("path", {
        fill: "currentColor",
        d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
      }),
      E("path", {
        fill: "currentColor",
        d: "M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454m0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088"
      })
    ]));
  }
}), oe = le, re = /* @__PURE__ */ y({
  name: "Operation",
  __name: "operation",
  setup(t) {
    return (m, c) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      E("path", {
        fill: "currentColor",
        d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64z"
      })
    ]));
  }
}), ue = re, ce = /* @__PURE__ */ y({
  name: "Refresh",
  __name: "refresh",
  setup(t) {
    return (m, c) => (L(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      E("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), se = ce;
function S(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !W(t);
}
const de = /* @__PURE__ */ y({
  name: "TsxElementTable",
  props: {
    // Normal
    size: {
      type: String,
      default: J
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
      default: U
    },
    pageSize: {
      type: Number,
      default: P
    }
  },
  setup(t, {
    slots: m,
    emit: c,
    expose: D
  }) {
    const b = C(t.size), A = C(null), z = C();
    G(() => t.table, (a) => {
      z.value = a.columns.map((n) => ({
        ...n,
        show: n.show ?? !0
      }));
    }, {
      deep: !0,
      immediate: !0
    });
    const T = C(!1);
    D({
      getTableRef: () => A.value
    });
    function F(a) {
      const n = `${O}${a.prop}`;
      return m[n];
    }
    function R(a) {
      const n = `${O}${a.prop}${X}`;
      return m[n];
    }
    function I() {
      return m[Y];
    }
    function M(a) {
      const n = {}, i = F(a), _ = R(a);
      return i && (n.default = (p) => i(p)), _ && (n.header = (p) => _(p)), a.show && e(u("el-table-column"), k(a, {
        key: a.prop
      }), S(n) ? n : {
        default: () => [n]
      });
    }
    function j() {
      var f, d, l, r;
      const a = (t == null ? void 0 : t.currentPage) || U, n = (t == null ? void 0 : t.pageSize) || P, i = ((f = t == null ? void 0 : t.pagination) == null ? void 0 : f.total) || Q, _ = ((d = t.pagination) == null ? void 0 : d.show) ?? ee;
      if (!(_ === "auto" ? i > n : _)) return;
      const v = (g) => {
        c("update:currentPage", g), c("page-change", {
          currentPage: g,
          pageSize: n
        });
      }, o = (g) => {
        c("update:pageSize", g), c("page-change", {
          currentPage: a,
          pageSize: g
        });
      };
      return e("div", {
        className: "tetPaginationBox"
      }, [e(u("el-pagination"), {
        size: s(b),
        defaultCurrentPage: a,
        pageSize: n,
        total: i,
        pageSizes: ((l = t.pagination) == null ? void 0 : l.pageSizes) || ne,
        layout: ((r = t.pagination) == null ? void 0 : r.layout) || te,
        onCurrentChange: v,
        onSizeChange: o
      }, null)]);
    }
    function V() {
      var v;
      let a;
      const {
        table: n
      } = t, i = K(), _ = {};
      return Object.keys(((v = i == null ? void 0 : i.vnode) == null ? void 0 : v.props) ?? []).filter((o) => o.startsWith("on") && !o.startsWith("onUpdate")).forEach((o) => {
        const d = o.replace("on", "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        _[o] = (...l) => {
          c(d, ...l);
        };
      }), e("div", {
        className: "tetTableBox"
      }, [e(u("el-table"), k({
        ref: A,
        size: s(b)
      }, _, n), S(a = s(z).map((o) => M(o))) ? a : {
        default: () => [a]
      })]);
    }
    function $() {
      var v;
      if (!t.handle || !(((v = t.handle) == null ? void 0 : v.show) ?? q)) return;
      const n = Z(() => s(b) === "large" ? "default" : s(b));
      function i() {
        var d;
        const o = (l) => {
          c("handle-click", l);
        }, f = I();
        return e(N, null, [e("div", {
          className: "tetHandleLeftBtnBox"
        }, [(((d = t.handle) == null ? void 0 : d.columns) || []).map((l) => e(u("el-button"), {
          size: s(n),
          key: l.key,
          type: l.type || "",
          onClick: l.action ?? (() => o(l.key))
        }, {
          default: () => [l.label]
        }))]), e("div", {
          className: "tetHandleLeftSlotBox"
        }, [f && f()])]);
      }
      function _() {
        const o = {
          default: () => e(u("el-button"), {
            circle: !0,
            size: s(n),
            icon: ue
          }, null),
          dropdown: () => {
            let h;
            return e(u("el-dropdown-menu"), null, S(h = ae.map((w) => e(u("el-dropdown-item"), {
              command: w.value,
              disabled: s(b) === w.value
            }, {
              default: () => [w.label]
            }))) ? h : {
              default: () => [h]
            });
          }
        }, f = (h) => {
          b.value = h, c("size-change", h);
        }, d = () => {
          c("table-refresh");
        }, l = () => {
          T.value = !0;
        }, r = (h) => {
          c("handle-right-click", h);
        };
        return e(N, null, [(() => {
          var h, w;
          if ((h = t.handle) != null && h.rightColumns)
            return (w = t.handle) == null ? void 0 : w.rightColumns.map((H) => e("div", null, [e(u("el-button"), {
              circle: !0,
              size: s(n),
              icon: H.icon,
              onClick: r(H.key)
            }, null)]));
        })(), e("div", null, [e(u("el-button"), {
          circle: !0,
          size: s(n),
          icon: se,
          onClick: d
        }, null)]), e("div", null, [e(u("el-dropdown"), {
          trigger: "click",
          onCommand: f
        }, S(o) ? o : {
          default: () => [o]
        })]), e("div", null, [e(u("el-button"), {
          circle: !0,
          size: s(n),
          icon: oe,
          onClick: l
        }, null)])]);
      }
      function p() {
        const o = () => {
          T.value = !1;
        }, f = (r) => e(u("el-checkbox"), {
          key: "normal",
          modelValue: r.show,
          "onUpdate:modelValue": (g) => r.show = g,
          label: r.prop
        }, {
          default: () => [r.label]
        }), d = (r) => e(u("el-checkbox"), {
          key: r.type,
          disabled: !0,
          "model-value": !0
        }, {
          default: () => [B[r.type]]
        }), l = {
          default: () => s(z).map((r) => r.type && B[r.type] ? d(r) : f(r))
        };
        return e(u("el-drawer"), {
          width: "320px",
          "append-to-body": !0,
          "model-value": T.value,
          title: "字段管理",
          onClose: o
        }, S(l) ? l : {
          default: () => [l]
        });
      }
      return e("div", {
        className: "tetHandleBox"
      }, [e("div", {
        className: "tetHandleLeftBox"
      }, [i()]), e("div", {
        className: "tetHandleRightBox"
      }, [_()]), p()]);
    }
    return () => e("div", {
      className: "TsxElementTableContainer"
    }, [$(), V(), j()]);
  }
});
export {
  de as default
};
