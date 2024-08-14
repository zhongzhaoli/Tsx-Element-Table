import { defineComponent as S, openBlock as x, createElementBlock as T, createElementVNode as m, ref as w, watch as M, createVNode as e, resolveComponent as u, unref as h, getCurrentInstance as I, mergeProps as L, isVNode as R, Fragment as A } from "vue";
const V = "table-", K = "handle-left", G = !0, H = {
  index: "索引",
  selection: "选择"
}, W = "default", B = 10, N = 1, Z = 0, $ = !0, Y = "total, prev, pager, next, jumper", q = [
  { value: "large", label: "宽松" },
  { value: "default", label: "默认" },
  { value: "small", label: "紧凑" }
];
/*! Element Plus Icons Vue v2.3.1 */
var X = /* @__PURE__ */ S({
  name: "Open",
  __name: "open",
  setup(t) {
    return (p, c) => (x(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
      }),
      m("path", {
        fill: "currentColor",
        d: "M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454m0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088"
      })
    ]));
  }
}), J = X, Q = /* @__PURE__ */ S({
  name: "Operation",
  __name: "operation",
  setup(t) {
    return (p, c) => (x(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64z"
      })
    ]));
  }
}), ee = Q, te = /* @__PURE__ */ S({
  name: "Refresh",
  __name: "refresh",
  setup(t) {
    return (p, c) => (x(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      m("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), ne = te;
function b(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !R(t);
}
const le = /* @__PURE__ */ S({
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
      default: B
    }
  },
  setup(t, {
    slots: p,
    emit: c,
    expose: k
  }) {
    const v = w(t.size), z = w(null), y = w();
    M(() => t.table, (r) => {
      y.value = r.columns.map((n) => ({
        ...n,
        show: n.show ?? !0
      }));
    }, {
      deep: !0,
      immediate: !0
    });
    const C = w(!1);
    k({
      getTableRef: () => z.value
    });
    function O(r) {
      const n = `${V}${r.prop}`;
      return p[n];
    }
    function P() {
      return p[K];
    }
    function U(r) {
      const n = {}, s = O(r);
      return s && (n.default = (f) => s(f)), r.show && e(u("el-table-column"), L(r, {
        key: r.prop
      }), b(n) ? n : {
        default: () => [n]
      });
    }
    function D() {
      var i, d;
      const r = (t == null ? void 0 : t.currentPage) || N, n = (t == null ? void 0 : t.pageSize) || B, s = ((i = t == null ? void 0 : t.pagination) == null ? void 0 : i.total) || Z, f = ((d = t.pagination) == null ? void 0 : d.show) ?? $;
      if (!(f === "auto" ? s > n : f)) return;
      const _ = (a) => {
        c("update:currentPage", a), c("page-change", {
          currentPage: a,
          pageSize: n
        });
      }, o = (a) => {
        c("update:pageSize", a), c("page-change", {
          currentPage: r,
          pageSize: a
        });
      };
      return e("div", {
        className: "tetPaginationBox"
      }, [e(u("el-pagination"), {
        size: h(v),
        defaultCurrentPage: r,
        pageSize: n,
        total: s,
        layout: Y,
        onCurrentChange: _,
        onSizeChange: o
      }, null)]);
    }
    function F() {
      var _;
      let r;
      const {
        table: n
      } = t, s = I(), f = {};
      return Object.keys(((_ = s == null ? void 0 : s.vnode) == null ? void 0 : _.props) ?? []).filter((o) => o.startsWith("on") && !o.startsWith("onUpdate")).forEach((o) => {
        const d = o.replace("on", "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        f[o] = (...a) => {
          c(d, ...a);
        };
      }), e("div", {
        className: "tetTableBox"
      }, [e(u("el-table"), L({
        ref: z,
        size: h(v)
      }, f, n), b(r = h(y).map((o) => U(o))) ? r : {
        default: () => [r]
      })]);
    }
    function j() {
      var _;
      if (!t.handle || !(((_ = t.handle) == null ? void 0 : _.show) ?? G)) return;
      const n = h(v) === "large" ? "default" : h(v);
      function s() {
        var d;
        const o = (a) => {
          c("handle-click", a);
        }, i = P();
        return e(A, null, [e("div", {
          className: "tetHandleLeftBtnBox"
        }, [(((d = t.handle) == null ? void 0 : d.columns) || []).map((a) => e(u("el-button"), {
          size: n,
          key: a.key,
          type: a.type || "",
          onClick: a.action ?? (() => o(a.key))
        }, {
          default: () => [a.label]
        }))]), e("div", {
          className: "tetHandleLeftSlotBox"
        }, [i && i()])]);
      }
      function f() {
        const o = {
          default: () => e(u("el-button"), {
            circle: !0,
            size: n,
            icon: ee
          }, null),
          dropdown: () => {
            let l;
            return e(u("el-dropdown-menu"), null, b(l = q.map((g) => e(u("el-dropdown-item"), {
              command: g.value,
              disabled: n === g.value
            }, {
              default: () => [g.label]
            }))) ? l : {
              default: () => [l]
            });
          }
        }, i = (l) => {
          v.value = l, c("size-change", l);
        }, d = () => {
          c("table-refresh");
        }, a = () => {
          C.value = !0;
        };
        return e(A, null, [e("div", null, [e(u("el-button"), {
          circle: !0,
          size: n,
          icon: ne,
          onClick: d
        }, null)]), e("div", null, [e(u("el-dropdown"), {
          trigger: "click",
          onCommand: i
        }, b(o) ? o : {
          default: () => [o]
        })]), e("div", null, [e(u("el-button"), {
          circle: !0,
          size: n,
          icon: J,
          onClick: a
        }, null)])]);
      }
      function E() {
        const o = () => {
          C.value = !1;
        }, i = (l) => e(u("el-checkbox"), {
          key: "normal",
          modelValue: l.show,
          "onUpdate:modelValue": (g) => l.show = g,
          label: l.prop
        }, {
          default: () => [l.label]
        }), d = (l) => e(u("el-checkbox"), {
          key: l.type,
          disabled: !0,
          "model-value": !0
        }, {
          default: () => [H[l.type]]
        }), a = {
          default: () => h(y).map((l) => l.type && H[l.type] ? d(l) : i(l))
        };
        return e(u("el-drawer"), {
          width: "320px",
          "append-to-body": !0,
          "model-value": C.value,
          title: "字段管理",
          onClose: o
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
      }, [f()]), E()]);
    }
    return () => e("div", {
      className: "TsxElementTableContainer"
    }, [j(), F(), D()]);
  }
});
export {
  le as default
};
