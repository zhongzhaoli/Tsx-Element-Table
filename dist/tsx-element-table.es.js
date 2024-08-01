import { defineComponent as S, openBlock as E, createElementBlock as x, createElementVNode as w, ref as m, createVNode as e, resolveComponent as u, unref as h, getCurrentInstance as j, mergeProps as M, isVNode as I, Fragment as L } from "vue";
const R = "table-", V = "handle-left", K = !0, A = {
  index: "索引",
  selection: "选择"
}, G = "default", H = 10, B = 1, W = 0, Z = !0, $ = "total, prev, pager, next, jumper", Y = [
  { value: "large", label: "宽松" },
  { value: "default", label: "默认" },
  { value: "small", label: "紧凑" }
];
/*! Element Plus Icons Vue v2.3.1 */
var q = /* @__PURE__ */ S({
  name: "Open",
  __name: "open",
  setup(t) {
    return (p, c) => (E(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
      }),
      w("path", {
        fill: "currentColor",
        d: "M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454m0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088"
      })
    ]));
  }
}), X = q, J = /* @__PURE__ */ S({
  name: "Operation",
  __name: "operation",
  setup(t) {
    return (p, c) => (E(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64z"
      })
    ]));
  }
}), Q = J, ee = /* @__PURE__ */ S({
  name: "Refresh",
  __name: "refresh",
  setup(t) {
    return (p, c) => (E(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      w("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), te = ee;
function b(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !I(t);
}
const ae = /* @__PURE__ */ S({
  name: "TsxElementTable",
  props: {
    // Normal
    size: {
      type: String,
      default: G
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
      default: H
    }
  },
  setup(t, {
    slots: p,
    emit: c,
    expose: N
  }) {
    const v = m(t.size), T = m(null), z = m((t.table.columns || []).map((r) => ({
      ...r,
      show: !0
    }))), C = m(!1);
    N({
      getTableRef: () => T.value
    });
    function O(r) {
      const l = `${R}${r.prop}`;
      return p[l];
    }
    function P() {
      return p[V];
    }
    function k(r) {
      const l = {}, s = O(r);
      return s && (l.default = (f) => s(f)), r.show && e(u("el-table-column"), r, b(l) ? l : {
        default: () => [l]
      });
    }
    function U() {
      var i, d;
      const r = (t == null ? void 0 : t.currentPage) || B, l = (t == null ? void 0 : t.pageSize) || H, s = ((i = t == null ? void 0 : t.pagination) == null ? void 0 : i.total) || W, f = ((d = t.pagination) == null ? void 0 : d.show) ?? Z;
      if (!(f === "auto" ? s > l : f)) return;
      const _ = (n) => {
        c("update:currentPage", n), c("page-change", {
          currentPage: n,
          pageSize: l
        });
      }, o = (n) => {
        c("update:pageSize", n), c("page-change", {
          currentPage: r,
          pageSize: n
        });
      };
      return e("div", {
        className: "tetPaginationBox"
      }, [e(u("el-pagination"), {
        size: h(v),
        defaultCurrentPage: r,
        pageSize: l,
        total: s,
        layout: $,
        onCurrentChange: _,
        onSizeChange: o
      }, null)]);
    }
    function D() {
      var _;
      let r;
      const {
        table: l
      } = t, s = j(), f = {};
      return Object.keys(((_ = s == null ? void 0 : s.vnode) == null ? void 0 : _.props) ?? []).filter((o) => o.startsWith("on") && !o.startsWith("onUpdate")).forEach((o) => {
        const d = o.replace("on", "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        f[o] = (...n) => {
          c(d, ...n);
        };
      }), e("div", {
        className: "tetTableBox"
      }, [e(u("el-table"), M({
        ref: T,
        size: h(v)
      }, f, l), b(r = h(z).map((o) => k(o))) ? r : {
        default: () => [r]
      })]);
    }
    function F() {
      var _;
      if (!t.handle || !(((_ = t.handle) == null ? void 0 : _.show) ?? K)) return;
      const l = h(v) === "large" ? "default" : h(v);
      function s() {
        var d;
        const o = (n) => {
          c("handle-click", n);
        }, i = P();
        return e(L, null, [e("div", {
          className: "tetHandleLeftBtnBox"
        }, [(((d = t.handle) == null ? void 0 : d.columns) || []).map((n) => e(u("el-button"), {
          size: l,
          key: n.key,
          type: n.type || "",
          onClick: n.action ?? (() => o(n.key))
        }, {
          default: () => [n.label]
        }))]), e("div", {
          className: "tetHandleLeftSlotBox"
        }, [i && i()])]);
      }
      function f() {
        const o = {
          default: () => e(u("el-button"), {
            circle: !0,
            size: l,
            icon: Q
          }, null),
          dropdown: () => {
            let a;
            return e(u("el-dropdown-menu"), null, b(a = Y.map((g) => e(u("el-dropdown-item"), {
              command: g.value,
              disabled: l === g.value
            }, {
              default: () => [g.label]
            }))) ? a : {
              default: () => [a]
            });
          }
        }, i = (a) => {
          v.value = a, c("size-change", a);
        }, d = () => {
          c("table-refresh");
        }, n = () => {
          C.value = !0;
        };
        return e(L, null, [e("div", null, [e(u("el-button"), {
          circle: !0,
          size: l,
          icon: te,
          onClick: d
        }, null)]), e("div", null, [e(u("el-dropdown"), {
          trigger: "click",
          onCommand: i
        }, b(o) ? o : {
          default: () => [o]
        })]), e("div", null, [e(u("el-button"), {
          circle: !0,
          size: l,
          icon: X,
          onClick: n
        }, null)])]);
      }
      function y() {
        const o = () => {
          C.value = !1;
        }, i = (a) => e(u("el-checkbox"), {
          key: "normal",
          modelValue: a.show,
          "onUpdate:modelValue": (g) => a.show = g,
          label: a.prop
        }, {
          default: () => [a.label]
        }), d = (a) => e(u("el-checkbox"), {
          key: a.type,
          disabled: !0,
          "model-value": !0
        }, {
          default: () => [A[a.type]]
        }), n = {
          default: () => h(z).map((a) => a.type && A[a.type] ? d(a) : i(a))
        };
        return e(u("el-drawer"), {
          width: "320px",
          "append-to-body": !0,
          "model-value": C.value,
          title: "字段管理",
          onClose: o
        }, b(n) ? n : {
          default: () => [n]
        });
      }
      return e("div", {
        className: "tetHandleBox"
      }, [e("div", {
        className: "tetHandleLeftBox"
      }, [s()]), e("div", {
        className: "tetHandleRightBox"
      }, [f()]), y()]);
    }
    return () => e("div", {
      className: "TsxElementTableContainer"
    }, [F(), D(), U()]);
  }
});
export {
  ae as default
};
