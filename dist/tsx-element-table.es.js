import { defineComponent as E, openBlock as T, createElementBlock as z, createElementVNode as S, ref as w, watch as R, createVNode as e, resolveComponent as u, unref as _, getCurrentInstance as V, mergeProps as x, computed as $, isVNode as G, Fragment as A } from "vue";
const H = "table-", K = "-header", Z = "handle-left", W = !0, N = {
  index: "索引",
  selection: "选择"
}, X = "default", O = 10, B = 1, Y = 0, q = !0, J = "total, sizes, prev, pager, next, jumper", Q = [10, 20, 50, 100, 200], ee = [
  { value: "large", label: "宽松" },
  { value: "default", label: "默认" },
  { value: "small", label: "紧凑" }
];
/*! Element Plus Icons Vue v2.3.1 */
var te = /* @__PURE__ */ E({
  name: "Open",
  __name: "open",
  setup(t) {
    return (v, c) => (T(), z("svg", {
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
}), ne = te, ae = /* @__PURE__ */ E({
  name: "Operation",
  __name: "operation",
  setup(t) {
    return (v, c) => (T(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      S("path", {
        fill: "currentColor",
        d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64z"
      })
    ]));
  }
}), le = ae, oe = /* @__PURE__ */ E({
  name: "Refresh",
  __name: "refresh",
  setup(t) {
    return (v, c) => (T(), z("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      S("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), re = oe;
function b(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !G(t);
}
const ce = /* @__PURE__ */ E({
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
    slots: v,
    emit: c,
    expose: P
  }) {
    const m = w(t.size), L = w(null), C = w();
    R(() => t.table, (l) => {
      C.value = l.columns.map((n) => ({
        ...n,
        show: n.show ?? !0
      }));
    }, {
      deep: !0,
      immediate: !0
    });
    const y = w(!1);
    P({
      getTableRef: () => L.value
    });
    function k(l) {
      const n = `${H}${l.prop}`;
      return v[n];
    }
    function U(l) {
      const n = `${H}${l.prop}${K}`;
      return v[n];
    }
    function D() {
      return v[Z];
    }
    function F(l) {
      const n = {}, s = k(l), f = U(l);
      return s && (n.default = (p) => s(p)), f && (n.header = (p) => f(p)), l.show && e(u("el-table-column"), x(l, {
        key: l.prop
      }), b(n) ? n : {
        default: () => [n]
      });
    }
    function I() {
      var h, d, o, a;
      const l = (t == null ? void 0 : t.currentPage) || B, n = (t == null ? void 0 : t.pageSize) || O, s = ((h = t == null ? void 0 : t.pagination) == null ? void 0 : h.total) || Y, f = ((d = t.pagination) == null ? void 0 : d.show) ?? q;
      if (!(f === "auto" ? s > n : f)) return;
      const g = (i) => {
        c("update:currentPage", i), c("page-change", {
          currentPage: i,
          pageSize: n
        });
      }, r = (i) => {
        c("update:pageSize", i), c("page-change", {
          currentPage: l,
          pageSize: i
        });
      };
      return e("div", {
        className: "tetPaginationBox"
      }, [e(u("el-pagination"), {
        size: _(m),
        defaultCurrentPage: l,
        pageSize: n,
        total: s,
        pageSizes: ((o = t.pagination) == null ? void 0 : o.pageSizes) || Q,
        layout: ((a = t.pagination) == null ? void 0 : a.layout) || J,
        onCurrentChange: g,
        onSizeChange: r
      }, null)]);
    }
    function M() {
      var g;
      let l;
      const {
        table: n
      } = t, s = V(), f = {};
      return Object.keys(((g = s == null ? void 0 : s.vnode) == null ? void 0 : g.props) ?? []).filter((r) => r.startsWith("on") && !r.startsWith("onUpdate")).forEach((r) => {
        const d = r.replace("on", "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        f[r] = (...o) => {
          c(d, ...o);
        };
      }), e("div", {
        className: "tetTableBox"
      }, [e(u("el-table"), x({
        ref: L,
        size: _(m)
      }, f, n), b(l = _(C).map((r) => F(r))) ? l : {
        default: () => [l]
      })]);
    }
    function j() {
      var g;
      if (!t.handle || !(((g = t.handle) == null ? void 0 : g.show) ?? W)) return;
      const n = $(() => _(m) === "large" ? "default" : _(m));
      function s() {
        var d;
        const r = (o) => {
          c("handle-click", o);
        }, h = D();
        return e(A, null, [e("div", {
          className: "tetHandleLeftBtnBox"
        }, [(((d = t.handle) == null ? void 0 : d.columns) || []).map((o) => e(u("el-button"), {
          size: _(n),
          key: o.key,
          type: o.type || "",
          onClick: o.action ?? (() => r(o.key))
        }, {
          default: () => [o.label]
        }))]), e("div", {
          className: "tetHandleLeftSlotBox"
        }, [h && h()])]);
      }
      function f() {
        const r = {
          default: () => e(u("el-button"), {
            circle: !0,
            size: _(n),
            icon: le
          }, null),
          dropdown: () => {
            let a;
            return e(u("el-dropdown-menu"), null, b(a = ee.map((i) => e(u("el-dropdown-item"), {
              command: i.value,
              disabled: _(m) === i.value
            }, {
              default: () => [i.label]
            }))) ? a : {
              default: () => [a]
            });
          }
        }, h = (a) => {
          m.value = a, c("size-change", a);
        }, d = () => {
          c("table-refresh");
        }, o = () => {
          y.value = !0;
        };
        return e(A, null, [e("div", null, [e(u("el-button"), {
          circle: !0,
          size: _(n),
          icon: re,
          onClick: d
        }, null)]), e("div", null, [e(u("el-dropdown"), {
          trigger: "click",
          onCommand: h
        }, b(r) ? r : {
          default: () => [r]
        })]), e("div", null, [e(u("el-button"), {
          circle: !0,
          size: _(n),
          icon: ne,
          onClick: o
        }, null)])]);
      }
      function p() {
        const r = () => {
          y.value = !1;
        }, h = (a) => e(u("el-checkbox"), {
          key: "normal",
          modelValue: a.show,
          "onUpdate:modelValue": (i) => a.show = i,
          label: a.prop
        }, {
          default: () => [a.label]
        }), d = (a) => e(u("el-checkbox"), {
          key: a.type,
          disabled: !0,
          "model-value": !0
        }, {
          default: () => [N[a.type]]
        }), o = {
          default: () => _(C).map((a) => a.type && N[a.type] ? d(a) : h(a))
        };
        return e(u("el-drawer"), {
          width: "320px",
          "append-to-body": !0,
          "model-value": y.value,
          title: "字段管理",
          onClose: r
        }, b(o) ? o : {
          default: () => [o]
        });
      }
      return e("div", {
        className: "tetHandleBox"
      }, [e("div", {
        className: "tetHandleLeftBox"
      }, [s()]), e("div", {
        className: "tetHandleRightBox"
      }, [f()]), p()]);
    }
    return () => e("div", {
      className: "TsxElementTableContainer"
    }, [j(), M(), I()]);
  }
});
export {
  ce as default
};
