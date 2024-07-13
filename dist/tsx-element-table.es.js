import { defineComponent as C, openBlock as E, createElementBlock as x, createElementVNode as S, ref as w, createVNode as e, resolveComponent as u, unref as f, getCurrentInstance as M, mergeProps as I, isVNode as R, Fragment as L } from "vue";
const V = "table-", K = "handle-left", G = !0, A = {
  index: "索引",
  selection: "选择"
}, W = "default", H = 10, N = 1, B = 0, Z = !0, $ = "total, prev, pager, next, jumper", Y = [
  { value: "large", label: "宽松" },
  { value: "default", label: "默认" },
  { value: "small", label: "紧凑" }
];
/*! Element Plus Icons Vue v2.3.1 */
var q = /* @__PURE__ */ C({
  name: "Open",
  __name: "open",
  setup(a) {
    return (h, d) => (E(), x("svg", {
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
}), X = q, J = /* @__PURE__ */ C({
  name: "Operation",
  __name: "operation",
  setup(a) {
    return (h, d) => (E(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      S("path", {
        fill: "currentColor",
        d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64z"
      })
    ]));
  }
}), Q = J, ee = /* @__PURE__ */ C({
  name: "Refresh",
  __name: "refresh",
  setup(a) {
    return (h, d) => (E(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      S("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), te = ee;
function m(a) {
  return typeof a == "function" || Object.prototype.toString.call(a) === "[object Object]" && !R(a);
}
const ae = /* @__PURE__ */ C({
  name: "TsxElementTable",
  props: {
    // Normal
    size: {
      type: String,
      default: W
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
      default: N
    },
    pageSize: {
      type: Number,
      default: H
    }
  },
  setup(a, {
    slots: h,
    emit: d,
    expose: O
  }) {
    const v = w(a.size), z = w(null), T = w((a.table.columns || []).map((r) => ({
      ...r,
      show: !0
    }))), y = w(!1);
    O({
      getTableRef: () => z.value
    });
    function k(r) {
      const l = `${V}${r.prop}`;
      return h[l];
    }
    function P() {
      return h[K];
    }
    function U(r) {
      const l = {}, s = k(r);
      return s && (l.default = (p) => s(p)), r.show && e(u("el-table-column"), r, m(l) ? l : {
        default: () => [l]
      });
    }
    function D() {
      var n;
      const r = a.currentPage || N, l = a.pageSize || H, s = ((n = a.pagination) == null ? void 0 : n.show) ?? Z;
      if (!(s === "auto" ? (a.pagination.total || B) > l : s)) return;
      const b = (c) => {
        d("update:currentPage", c);
      }, _ = (c) => {
        d("update:pageSize", c);
      };
      return e("div", {
        className: "tetPaginationBox"
      }, [e(u("el-pagination"), {
        size: f(v),
        defaultCurrentPage: r,
        pageSize: l,
        total: a.pagination.total || B,
        layout: $,
        onCurrentChange: b,
        onSizeChange: _
      }, null)]);
    }
    function F() {
      var _;
      let r;
      const {
        table: l
      } = a, s = M(), p = {};
      return Object.keys(((_ = s == null ? void 0 : s.vnode) == null ? void 0 : _.props) ?? []).filter((n) => n.startsWith("on") && !n.startsWith("onUpdate")).forEach((n) => {
        const i = n.replace("on", "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        p[n] = (...o) => {
          d(i, ...o);
        };
      }), e("div", {
        className: "tetTableBox"
      }, [e(u("el-table"), I({
        ref: z,
        size: f(v)
      }, p, l), m(r = f(T).map((n) => U(n))) ? r : {
        default: () => [r]
      })]);
    }
    function j() {
      var _;
      if (!(((_ = a.handle) == null ? void 0 : _.show) ?? G)) return;
      const l = f(v) === "large" ? "default" : f(v);
      function s() {
        var i;
        const n = (o) => {
          d("handle-click", o);
        }, c = P();
        return e(L, null, [e("div", {
          className: "tetHandleLeftBtnBox"
        }, [(((i = a.handle) == null ? void 0 : i.columns) || []).map((o) => e(u("el-button"), {
          size: l,
          key: o.key,
          type: o.type || "",
          onClick: o.action ?? (() => n(o.key))
        }, {
          default: () => [o.label]
        }))]), e("div", {
          className: "tetHandleLeftSlotBox"
        }, [c && c()])]);
      }
      function p() {
        const n = {
          default: () => e(u("el-button"), {
            circle: !0,
            size: l,
            icon: Q
          }, null),
          dropdown: () => {
            let t;
            return e(u("el-dropdown-menu"), null, m(t = Y.map((g) => e(u("el-dropdown-item"), {
              command: g.value,
              disabled: l === g.value
            }, {
              default: () => [g.label]
            }))) ? t : {
              default: () => [t]
            });
          }
        }, c = (t) => {
          v.value = t, d("size-change", t);
        }, i = () => {
          d("table-refresh");
        }, o = () => {
          y.value = !0;
        };
        return e(L, null, [e("div", null, [e(u("el-button"), {
          circle: !0,
          size: l,
          icon: te,
          onClick: i
        }, null)]), e("div", null, [e(u("el-dropdown"), {
          trigger: "click",
          onCommand: c
        }, m(n) ? n : {
          default: () => [n]
        })]), e("div", null, [e(u("el-button"), {
          circle: !0,
          size: l,
          icon: X,
          onClick: o
        }, null)])]);
      }
      function b() {
        const n = () => {
          y.value = !1;
        }, c = (t) => e(u("el-checkbox"), {
          key: "normal",
          modelValue: t.show,
          "onUpdate:modelValue": (g) => t.show = g,
          label: t.prop
        }, {
          default: () => [t.label]
        }), i = (t) => e(u("el-checkbox"), {
          key: t.type,
          disabled: !0,
          "model-value": !0
        }, {
          default: () => [A[t.type]]
        }), o = {
          default: () => f(T).map((t) => t.type && A[t.type] ? i(t) : c(t))
        };
        return e(u("el-drawer"), {
          width: "320px",
          "append-to-body": !0,
          "model-value": y.value,
          title: "字段管理",
          onClose: n
        }, m(o) ? o : {
          default: () => [o]
        });
      }
      return e("div", {
        className: "tetHandleBox"
      }, [e("div", {
        className: "tetHandleLeftBox"
      }, [s()]), e("div", {
        className: "tetHandleRightBox"
      }, [p()]), b()]);
    }
    return () => e("div", {
      className: "TsxElementTableContainer"
    }, [j(), F(), D()]);
  }
});
export {
  ae as default
};
