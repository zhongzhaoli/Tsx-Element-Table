import { defineComponent as g, openBlock as C, createElementBlock as x, createElementVNode as v, ref as f, createVNode as e, resolveComponent as u, unref as i, mergeProps as O, Fragment as w, isVNode as U } from "vue";
const D = "table-", F = "handle-left", S = {
  index: "索引",
  selection: "选择"
}, M = "default", E = 10, z = 1, R = "total, prev, pager, next, jumper", V = [
  { value: "large", label: "宽松" },
  { value: "default", label: "默认" },
  { value: "small", label: "紧凑" }
];
/*! Element Plus Icons Vue v2.3.1 */
var I = /* @__PURE__ */ g({
  name: "Open",
  __name: "open",
  setup(n) {
    return (d, c) => (C(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
      }),
      v("path", {
        fill: "currentColor",
        d: "M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454m0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088"
      })
    ]));
  }
}), j = I, G = /* @__PURE__ */ g({
  name: "Operation",
  __name: "operation",
  setup(n) {
    return (d, c) => (C(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64z"
      })
    ]));
  }
}), Z = G, Y = /* @__PURE__ */ g({
  name: "Refresh",
  __name: "refresh",
  setup(n) {
    return (d, c) => (C(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      v("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), $ = Y;
function p(n) {
  return typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !U(n);
}
const K = /* @__PURE__ */ g({
  name: "TsxElementTable",
  props: {
    // Normal
    size: {
      type: String,
      default: M
    },
    table: {
      type: Object,
      required: !0
    },
    handleList: {
      type: Array,
      default: () => []
    },
    // Pagination
    total: {
      type: Number,
      default: 0
    },
    "v-model:pageSize": {
      type: Number,
      default: E
    },
    "v-model:currentPage": {
      type: Number,
      default: z
    }
  },
  emits: ["update:currentPage", "update:pageSize", "size-change", "table-refresh", "handle-click", "selection-change"],
  setup(n, {
    slots: d,
    emit: c
  }) {
    const _ = f(n.size), H = f(), y = f((n.table.columns || []).map((a) => ({
      ...a,
      show: !0
    }))), h = f(!1);
    function L(a) {
      const r = `${D}${a.prop}`;
      return d[r];
    }
    function N() {
      return d[F];
    }
    function T(a) {
      const r = {}, l = L(a);
      return l && (r.default = (o) => l(o)), a.show && e(u("el-table-column"), a, p(r) ? r : {
        default: () => [r]
      });
    }
    function B() {
      const a = n["v-model:currentPage"] || z, r = n["v-model:pageSize"] || E, l = (t) => {
        c("update:currentPage", t);
      }, o = (t) => {
        c("update:pageSize", t);
      };
      return e(u("el-pagination"), {
        size: i(_),
        defaultCurrentPage: a,
        pageSize: r,
        total: n.total,
        layout: R,
        onCurrentChange: l,
        onSizeChange: o
      }, null);
    }
    function k() {
      let a;
      const {
        table: r
      } = n, l = e(u("el-table"), O({
        ref: "tableRef",
        size: i(_)
      }, r, {
        onSelectionChange: c("selection-change")
      }), p(a = i(y).map((o) => T(o))) ? a : {
        default: () => [a]
      });
      return H.value = l, l;
    }
    function A() {
      function a() {
        const l = (t) => {
          c("handle-click", t);
        }, o = N();
        return e(w, null, [e("div", {
          className: "cuHandleLeftBtnBox"
        }, [(n.handleList || []).map((t) => e(u("el-button"), {
          key: t.key,
          type: t.type || "",
          onClick: t.action ?? (() => l(t.key))
        }, {
          default: () => [t.label]
        }))]), e("div", {
          className: "cuHandleLeftSlotBox"
        }, [o && o()])]);
      }
      function r() {
        const l = {
          default: () => e(u("el-button"), {
            circle: !0,
            icon: Z
          }, null),
          dropdown: () => {
            let s;
            return e(u("el-dropdown-menu"), null, p(s = V.map((b) => e(u("el-dropdown-item"), {
              command: b.value,
              disabled: i(_) === b.value
            }, {
              default: () => [b.label]
            }))) ? s : {
              default: () => [s]
            });
          }
        }, o = (s) => {
          _.value = s, c("size-change", s);
        }, t = () => {
          c("table-refresh");
        }, m = () => {
          h.value = !0;
        };
        return e(w, null, [e("div", null, [e(u("el-button"), {
          circle: !0,
          icon: $,
          onClick: t
        }, null)]), e("div", null, [e(u("el-dropdown"), {
          trigger: "click",
          onCommand: o
        }, p(l) ? l : {
          default: () => [l]
        })]), e("div", null, [e(u("el-button"), {
          circle: !0,
          icon: j,
          onClick: m
        }, null)])]);
      }
      return e(w, null, [e("div", {
        className: "cuHandleLeftBox"
      }, [a()]), e("div", {
        className: "cuHandleRightBox"
      }, [r()])]);
    }
    function P() {
      const a = () => {
        h.value = !1;
      }, r = (t) => e(u("el-checkbox"), {
        key: "normal",
        modelValue: t.show,
        "onUpdate:modelValue": (m) => t.show = m,
        label: t.prop
      }, {
        default: () => [t.label]
      }), l = (t) => e(u("el-checkbox"), {
        key: t.type,
        disabled: !0,
        "model-value": !0
      }, {
        default: () => [S[t.type]]
      }), o = {
        default: () => i(y).map((t) => t.type && S[t.type] ? l(t) : r(t))
      };
      return e(u("el-drawer"), {
        width: "320px",
        "append-to-body": !0,
        "model-value": h.value,
        title: "字段管理",
        onClose: a
      }, p(o) ? o : {
        default: () => [o]
      });
    }
    return () => e("div", {
      className: "TsxElementTableContainer"
    }, [e("div", {
      className: "cuHandleBox"
    }, [A(), P()]), e("div", {
      className: "cuTableBox"
    }, [k()]), e("div", {
      className: "cuPaginationBox"
    }, [B()])]);
  }
});
export {
  K as default
};
