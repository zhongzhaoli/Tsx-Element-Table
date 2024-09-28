import { defineComponent as y, openBlock as L, createElementBlock as x, createElementVNode as E, ref as S, watch as G, createVNode as e, resolveComponent as o, unref as i, getCurrentInstance as K, mergeProps as B, computed as Z, isVNode as W, Fragment as k } from "vue";
const N = "table-", X = "-header", Y = "handle-left", q = !0, O = {
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
}), ie = ce;
function C(t) {
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
    const b = S(t.size), H = S(null), z = S();
    G(() => t.table, (a) => {
      z.value = a.columns.map((n) => ({
        ...n,
        show: n.show ?? !0
      }));
    }, {
      deep: !0,
      immediate: !0
    });
    const T = S(!1);
    D({
      getTableRef: () => H.value
    });
    function F(a) {
      const n = `${N}${a.prop}`;
      return m[n];
    }
    function R(a) {
      const n = `${N}${a.prop}${X}`;
      return m[n];
    }
    function I() {
      return m[Y];
    }
    function M(a) {
      const n = {}, s = F(a), h = R(a);
      return s && (n.default = (p) => s(p)), h && (n.header = (p) => h(p)), a.show && e(o("el-table-column"), B(a, {
        key: a.prop
      }), C(n) ? n : {
        default: () => [n]
      });
    }
    function j() {
      var _, d, l, u;
      const a = (t == null ? void 0 : t.currentPage) || U, n = (t == null ? void 0 : t.pageSize) || P, s = ((_ = t == null ? void 0 : t.pagination) == null ? void 0 : _.total) || Q, h = ((d = t.pagination) == null ? void 0 : d.show) ?? ee;
      if (!(h === "auto" ? s > n : h)) return;
      const v = (g) => {
        c("update:currentPage", g), c("page-change", {
          currentPage: g,
          pageSize: n
        });
      }, r = (g) => {
        c("update:pageSize", g), c("page-change", {
          currentPage: a,
          pageSize: g
        });
      };
      return e("div", {
        className: "tetPaginationBox"
      }, [e(o("el-pagination"), {
        size: i(b),
        defaultCurrentPage: a,
        pageSize: n,
        total: s,
        pageSizes: ((l = t.pagination) == null ? void 0 : l.pageSizes) || ne,
        layout: ((u = t.pagination) == null ? void 0 : u.layout) || te,
        onCurrentChange: v,
        onSizeChange: r
      }, null)]);
    }
    function V() {
      var v;
      let a;
      const {
        table: n
      } = t, s = K(), h = {};
      return Object.keys(((v = s == null ? void 0 : s.vnode) == null ? void 0 : v.props) ?? []).filter((r) => r.startsWith("on") && !r.startsWith("onUpdate")).forEach((r) => {
        const d = r.replace("on", "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        h[r] = (...l) => {
          c(d, ...l);
        };
      }), e("div", {
        className: "tetTableBox"
      }, [e(o("el-table"), B({
        ref: H,
        size: i(b)
      }, h, n), C(a = (i(z) || []).map((r) => M(r))) ? a : {
        default: () => [a]
      })]);
    }
    function $() {
      var v;
      if (!t.handle || !(((v = t.handle) == null ? void 0 : v.show) ?? q)) return;
      const n = Z(() => i(b) === "large" ? "default" : i(b));
      function s() {
        var d;
        const r = (l) => {
          c("handle-click", l);
        }, _ = I();
        return e(k, null, [e("div", {
          className: "tetHandleLeftBtnBox"
        }, [(((d = t.handle) == null ? void 0 : d.columns) || []).map((l) => e(o("el-button"), {
          size: i(n),
          key: l.key,
          type: l.type || "",
          onClick: l.action ?? (() => r(l.key))
        }, {
          default: () => [l.label]
        }))]), e("div", {
          className: "tetHandleLeftSlotBox"
        }, [_ && _()])]);
      }
      function h() {
        const r = {
          default: () => e(o("el-button"), {
            circle: !0,
            size: i(n),
            icon: ue
          }, null),
          dropdown: () => {
            let f;
            return e(o("el-dropdown-menu"), null, C(f = ae.map((w) => e(o("el-dropdown-item"), {
              command: w.value,
              disabled: i(b) === w.value
            }, {
              default: () => [w.label]
            }))) ? f : {
              default: () => [f]
            });
          }
        }, _ = (f) => {
          b.value = f, c("size-change", f);
        }, d = () => {
          c("table-refresh");
        }, l = () => {
          T.value = !0;
        }, u = (f) => {
          c("handle-right-click", f);
        };
        return e(k, null, [(() => {
          var f, w;
          if ((f = t.handle) != null && f.rightColumns)
            return (w = t.handle) == null ? void 0 : w.rightColumns.map((A) => e("div", null, [e(o("el-tooltip"), {
              content: A.tooltip
            }, {
              default: () => [e(o("el-button"), {
                circle: !0,
                size: i(n),
                icon: A.icon,
                onClick: u(A.key)
              }, null)]
            })]));
        })(), e("div", null, [e(o("el-tooltip"), {
          content: "表格刷新"
        }, {
          default: () => [e(o("el-button"), {
            circle: !0,
            size: i(n),
            icon: ie,
            onClick: d
          }, null)]
        })]), e("div", null, [e(o("el-tooltip"), {
          content: "表格大小"
        }, {
          default: () => [e(o("el-dropdown"), {
            trigger: "click",
            onCommand: _
          }, C(r) ? r : {
            default: () => [r]
          })]
        })]), e("div", null, [e(o("el-tooltip"), {
          content: "字段管理"
        }, {
          default: () => [e(o("el-button"), {
            circle: !0,
            size: i(n),
            icon: oe,
            onClick: l
          }, null)]
        })])]);
      }
      function p() {
        const r = () => {
          T.value = !1;
        }, _ = (u) => e(o("el-checkbox"), {
          key: "normal",
          modelValue: u.show,
          "onUpdate:modelValue": (g) => u.show = g,
          label: u.prop
        }, {
          default: () => [u.label]
        }), d = (u) => e(o("el-checkbox"), {
          key: u.type,
          disabled: !0,
          "model-value": !0
        }, {
          default: () => [O[u.type]]
        }), l = {
          default: () => (i(z) || []).map((u) => u.type && O[u.type] ? d(u) : _(u))
        };
        return e(o("el-drawer"), {
          width: "320px",
          "append-to-body": !0,
          "model-value": T.value,
          title: "字段管理",
          onClose: r
        }, C(l) ? l : {
          default: () => [l]
        });
      }
      return e("div", {
        className: "tetHandleBox"
      }, [e("div", {
        className: "tetHandleLeftBox"
      }, [s()]), e("div", {
        className: "tetHandleRightBox"
      }, [h()]), p()]);
    }
    return () => e("div", {
      className: "TsxElementTableContainer"
    }, [$(), V(), j()]);
  }
});
export {
  de as default
};
