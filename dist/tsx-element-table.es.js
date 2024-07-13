import { defineComponent as m, openBlock as y, createElementBlock as C, createElementVNode as h, ref as g, createVNode as t, resolveComponent as c, unref as p, getCurrentInstance as F, mergeProps as M, Fragment as w, isVNode as I } from "vue";
const R = "table-", V = "handle-left", S = {
  index: "索引",
  selection: "选择"
}, j = "default", z = 10, L = 1, K = "total, prev, pager, next, jumper", Z = [
  { value: "large", label: "宽松" },
  { value: "default", label: "默认" },
  { value: "small", label: "紧凑" }
];
/*! Element Plus Icons Vue v2.3.1 */
var $ = /* @__PURE__ */ m({
  name: "Open",
  __name: "open",
  setup(r) {
    return (i, s) => (y(), C("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      h("path", {
        fill: "currentColor",
        d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
      }),
      h("path", {
        fill: "currentColor",
        d: "M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454m0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088"
      })
    ]));
  }
}), G = $, W = /* @__PURE__ */ m({
  name: "Operation",
  __name: "operation",
  setup(r) {
    return (i, s) => (y(), C("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      h("path", {
        fill: "currentColor",
        d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64z"
      })
    ]));
  }
}), Y = W, q = /* @__PURE__ */ m({
  name: "Refresh",
  __name: "refresh",
  setup(r) {
    return (i, s) => (y(), C("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      h("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), X = q;
function _(r) {
  return typeof r == "function" || Object.prototype.toString.call(r) === "[object Object]" && !I(r);
}
const Q = /* @__PURE__ */ m({
  name: "TsxElementTable",
  props: {
    // Normal
    size: {
      type: String,
      default: j
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
      default: z
    },
    "v-model:currentPage": {
      type: Number,
      default: L
    }
  },
  setup(r, {
    slots: i,
    emit: s,
    expose: T
  }) {
    const f = g(r.size), x = g(null), E = g((r.table.columns || []).map((a) => ({
      ...a,
      show: !0
    }))), b = g(!1);
    T({
      getTableRef: () => x.value
    });
    function H(a) {
      const o = `${R}${a.prop}`;
      return i[o];
    }
    function N() {
      return i[V];
    }
    function B(a) {
      const o = {}, n = H(a);
      return n && (o.default = (l) => n(l)), a.show && t(c("el-table-column"), a, _(o) ? o : {
        default: () => [o]
      });
    }
    function k() {
      const a = r["v-model:currentPage"] || L, o = r["v-model:pageSize"] || z, n = (e) => {
        s("update:currentPage", e);
      }, l = (e) => {
        s("update:pageSize", e);
      };
      return t(c("el-pagination"), {
        size: p(f),
        defaultCurrentPage: a,
        pageSize: o,
        total: r.total,
        layout: K,
        onCurrentChange: n,
        onSizeChange: l
      }, null);
    }
    function A() {
      var d;
      let a;
      const {
        table: o
      } = r, n = F(), l = {};
      return Object.keys(((d = n == null ? void 0 : n.vnode) == null ? void 0 : d.props) ?? []).filter((u) => u.startsWith("on") && !u.startsWith("onUpdate")).forEach((u) => {
        const U = u.replace("on", "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        l[u] = (...D) => {
          s(U, ...D);
        };
      }), t(c("el-table"), M({
        ref: x,
        size: p(f)
      }, l, o), _(a = p(E).map((u) => B(u))) ? a : {
        default: () => [a]
      });
    }
    function P() {
      function a() {
        const n = (e) => {
          s("handle-click", e);
        }, l = N();
        return t(w, null, [t("div", {
          className: "cuHandleLeftBtnBox"
        }, [(r.handleList || []).map((e) => t(c("el-button"), {
          key: e.key,
          type: e.type || "",
          onClick: e.action ?? (() => n(e.key))
        }, {
          default: () => [e.label]
        }))]), t("div", {
          className: "cuHandleLeftSlotBox"
        }, [l && l()])]);
      }
      function o() {
        const n = {
          default: () => t(c("el-button"), {
            circle: !0,
            icon: Y
          }, null),
          dropdown: () => {
            let u;
            return t(c("el-dropdown-menu"), null, _(u = Z.map((v) => t(c("el-dropdown-item"), {
              command: v.value,
              disabled: p(f) === v.value
            }, {
              default: () => [v.label]
            }))) ? u : {
              default: () => [u]
            });
          }
        }, l = (u) => {
          f.value = u, s("size-change", u);
        }, e = () => {
          s("table-refresh");
        }, d = () => {
          b.value = !0;
        };
        return t(w, null, [t("div", null, [t(c("el-button"), {
          circle: !0,
          icon: X,
          onClick: e
        }, null)]), t("div", null, [t(c("el-dropdown"), {
          trigger: "click",
          onCommand: l
        }, _(n) ? n : {
          default: () => [n]
        })]), t("div", null, [t(c("el-button"), {
          circle: !0,
          icon: G,
          onClick: d
        }, null)])]);
      }
      return t(w, null, [t("div", {
        className: "cuHandleLeftBox"
      }, [a()]), t("div", {
        className: "cuHandleRightBox"
      }, [o()])]);
    }
    function O() {
      const a = () => {
        b.value = !1;
      }, o = (e) => t(c("el-checkbox"), {
        key: "normal",
        modelValue: e.show,
        "onUpdate:modelValue": (d) => e.show = d,
        label: e.prop
      }, {
        default: () => [e.label]
      }), n = (e) => t(c("el-checkbox"), {
        key: e.type,
        disabled: !0,
        "model-value": !0
      }, {
        default: () => [S[e.type]]
      }), l = {
        default: () => p(E).map((e) => e.type && S[e.type] ? n(e) : o(e))
      };
      return t(c("el-drawer"), {
        width: "320px",
        "append-to-body": !0,
        "model-value": b.value,
        title: "字段管理",
        onClose: a
      }, _(l) ? l : {
        default: () => [l]
      });
    }
    return () => t("div", {
      className: "TsxElementTableContainer"
    }, [t("div", {
      className: "cuHandleBox"
    }, [P(), O()]), t("div", {
      className: "cuTableBox"
    }, [A()]), t("div", {
      className: "cuPaginationBox"
    }, [k()])]);
  }
});
export {
  Q as default
};
