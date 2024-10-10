import { defineComponent as L, openBlock as H, createElementBlock as T, createElementVNode as x, ref as C, watch as Z, createVNode as e, resolveComponent as u, unref as h, getCurrentInstance as W, mergeProps as B, computed as X, isVNode as Y, Fragment as k } from "vue";
import N from "vuedraggable";
const O = "table-", q = "-header", J = "handle-left", Q = !0, U = {
  index: "索引",
  selection: "选择"
}, ee = "default", P = 10, D = 1, te = 0, ne = !0, ae = "total, sizes, prev, pager, next, jumper", le = [10, 20, 50, 100], oe = [
  { value: "large", label: "宽松" },
  { value: "default", label: "默认" },
  { value: "small", label: "紧凑" }
];
/*! Element Plus Icons Vue v2.3.1 */
var re = /* @__PURE__ */ L({
  name: "Open",
  __name: "open",
  setup(t) {
    return (_, i) => (H(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36z"
      }),
      x("path", {
        fill: "currentColor",
        d: "M694.044 621.227a109.227 109.227 0 1 0 0-218.454 109.227 109.227 0 0 0 0 218.454m0 72.817a182.044 182.044 0 1 1 0-364.088 182.044 182.044 0 0 1 0 364.088"
      })
    ]));
  }
}), ue = re, ce = /* @__PURE__ */ L({
  name: "Operation",
  __name: "operation",
  setup(t) {
    return (_, i) => (H(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64z"
      })
    ]));
  }
}), ie = ce, se = /* @__PURE__ */ L({
  name: "Refresh",
  __name: "refresh",
  setup(t) {
    return (_, i) => (H(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), de = se;
function y(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !Y(t);
}
const fe = /* @__PURE__ */ L({
  name: "TsxElementTable",
  components: {
    draggable: N
  },
  props: {
    // Normal
    size: {
      type: String,
      default: ee
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
      default: D
    },
    pageSize: {
      type: Number,
      default: P
    }
  },
  setup(t, {
    slots: _,
    emit: i,
    expose: F
  }) {
    const m = C(t.size), A = C(null), E = C();
    Z(() => t.table, (l) => {
      E.value = l.columns.map((a) => ({
        ...a,
        show: a.show ?? !0
      }));
    }, {
      deep: !0,
      immediate: !0
    });
    const z = C(!1);
    F({
      getTableRef: () => A.value
    });
    function V(l) {
      const a = `${O}${l.prop}`;
      return _[a];
    }
    function I(l) {
      const a = `${O}${l.prop}${q}`;
      return _[a];
    }
    function M() {
      return _[J];
    }
    function R(l) {
      const a = {}, s = V(l), g = I(l);
      return s && (a.default = (p) => s(p)), g && (a.header = (p) => g(p)), l.show && e(u("el-table-column"), B(l, {
        key: l.prop
      }), y(a) ? a : {
        default: () => [a]
      });
    }
    function j() {
      var f, d, r, w;
      const l = C((t == null ? void 0 : t.currentPage) || D), a = C((t == null ? void 0 : t.pageSize) || P), s = ((f = t == null ? void 0 : t.pagination) == null ? void 0 : f.total) || te, g = ((d = t.pagination) == null ? void 0 : d.show) ?? ne;
      if (!(g === "auto" ? s > a : g)) return;
      const v = (n) => {
        i("update:currentPage", n), i("page-change", {
          currentPage: n,
          pageSize: a
        });
      }, c = (n) => {
        i("update:pageSize", n), i("page-change", {
          currentPage: l.value,
          pageSize: n
        });
      };
      return e("div", {
        className: "tetPaginationBox"
      }, [e(u("el-pagination"), {
        size: h(m),
        "current-page": l.value,
        "onUpdate:current-page": (n) => l.value = n,
        "page-size": a.value,
        "onUpdate:page-size": (n) => a.value = n,
        total: s,
        pageSizes: ((r = t.pagination) == null ? void 0 : r.pageSizes) || le,
        layout: ((w = t.pagination) == null ? void 0 : w.layout) || ae,
        onCurrentChange: v,
        onSizeChange: c
      }, null)]);
    }
    function $() {
      var v;
      let l;
      const {
        table: a
      } = t, s = W(), g = {};
      return Object.keys(((v = s == null ? void 0 : s.vnode) == null ? void 0 : v.props) ?? []).filter((c) => c.startsWith("on") && !c.startsWith("onUpdate")).forEach((c) => {
        const d = c.replace("on", "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        g[c] = (...r) => {
          i(d, ...r);
        };
      }), e("div", {
        className: "tetTableBox"
      }, [e(u("el-table"), B({
        ref: A,
        size: h(m)
      }, g, a), y(l = (h(E) || []).map((c) => R(c))) ? l : {
        default: () => [l]
      })]);
    }
    function G() {
      var v;
      if (!t.handle || !(((v = t.handle) == null ? void 0 : v.show) ?? Q)) return;
      const a = X(() => h(m) === "large" ? "default" : h(m));
      function s() {
        var d;
        const c = (r) => {
          i("handle-click", r);
        }, f = M();
        return e(k, null, [e("div", {
          className: "tetHandleLeftBtnBox"
        }, [(((d = t.handle) == null ? void 0 : d.columns) || []).map((r) => e(u("el-button"), {
          size: h(a),
          key: r.key,
          type: r.type || "",
          onClick: r.action ?? (() => c(r.key))
        }, {
          default: () => [r.label]
        }))]), e("div", {
          className: "tetHandleLeftSlotBox"
        }, [f && f()])]);
      }
      function g() {
        const c = {
          default: () => e(u("el-button"), {
            circle: !0,
            size: h(a),
            icon: ie
          }, null),
          dropdown: () => {
            let o;
            return e(u("el-dropdown-menu"), null, y(o = oe.map((b) => e(u("el-dropdown-item"), {
              command: b.value,
              disabled: h(m) === b.value
            }, {
              default: () => [b.label]
            }))) ? o : {
              default: () => [o]
            });
          }
        }, f = (o) => {
          m.value = o, i("size-change", o);
        }, d = () => {
          i("table-refresh");
        }, r = () => {
          z.value = !0;
        }, w = (o) => {
          i("handle-right-click", o);
        };
        return e(k, null, [(() => {
          var o, b;
          if ((o = t.handle) != null && o.rightColumns)
            return (b = t.handle) == null ? void 0 : b.rightColumns.map((S) => {
              const K = {
                ...new Object(S.icon)
              };
              return e("div", null, [e(u("el-tooltip"), {
                content: S.tooltip
              }, {
                default: () => [e(u("el-button"), {
                  circle: !0,
                  loading: "loading" in S && S.loading,
                  size: h(a),
                  icon: K,
                  onClick: () => w(S.key)
                }, null)]
              })]);
            });
        })(), e("div", null, [e(u("el-tooltip"), {
          content: "表格刷新"
        }, {
          default: () => [e(u("el-button"), {
            circle: !0,
            size: h(a),
            icon: de,
            onClick: d
          }, null)]
        })]), e("div", null, [e(u("el-tooltip"), {
          content: "表格大小"
        }, {
          default: () => [e(u("el-dropdown"), {
            trigger: "click",
            onCommand: f
          }, y(c) ? c : {
            default: () => [c]
          })]
        })]), e("div", null, [e(u("el-tooltip"), {
          content: "字段管理"
        }, {
          default: () => [e(u("el-button"), {
            circle: !0,
            size: h(a),
            icon: ue,
            onClick: r
          }, null)]
        })])]);
      }
      function p() {
        const c = () => {
          z.value = !1;
        }, f = (n) => e(u("el-checkbox"), {
          key: "normal",
          modelValue: n.show,
          "onUpdate:modelValue": (o) => n.show = o,
          label: n.prop
        }, {
          default: () => [n.label]
        }), d = (n) => e(u("el-checkbox"), {
          key: n.type,
          disabled: !0,
          "model-value": !0
        }, {
          default: () => [U[n.type]]
        }), r = (n) => !n.fixed && !n.type, w = (n) => r(n.relatedContext.element);
        return e(u("el-drawer"), {
          width: "320px",
          "append-to-body": !0,
          "model-value": z.value,
          title: "字段管理",
          onClose: c
        }, {
          default: () => [e(N, {
            "item-key": "prop",
            filter: ".forbid",
            modelValue: E.value,
            "onUpdate:modelValue": (n) => E.value = n,
            animation: 200,
            move: w
          }, {
            item: (n) => {
              const {
                element: o
              } = n;
              return e("div", {
                class: {
                  columnDragItem: !0,
                  forbid: !r(o)
                }
              }, [e("div", {
                class: "iconBox"
              }, [r(o) && e("svg", {
                t: "1728528547556",
                class: "icon",
                viewBox: "0 0 1024 1024",
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                "p-id": "4317",
                width: "512",
                height: "512"
              }, [e("path", {
                d: "M909.3 506.3L781.7 405.6c-4.7-3.7-11.7-0.4-11.7 5.7V476H548V254h64.8c6 0 9.4-7 5.7-11.7L517.7 114.7c-2.9-3.7-8.5-3.7-11.3 0L405.6 242.3c-3.7 4.7-0.4 11.7 5.7 11.7H476v222H254v-64.8c0-6-7-9.4-11.7-5.7L114.7 506.3c-3.7 2.9-3.7 8.5 0 11.3l127.5 100.8c4.7 3.7 11.7 0.4 11.7-5.7V548h222v222h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7 0.4-11.7-5.7-11.7H548V548h222v64.8c0 6 7 9.4 11.7 5.7l127.5-100.8c3.7-2.9 3.7-8.5 0.1-11.4z",
                "p-id": "4318"
              }, null)])]), o.type && U[o.type] ? d(o) : f(o)]);
            }
          })]
        });
      }
      return e("div", {
        className: "tetHandleBox"
      }, [e("div", {
        className: "tetHandleLeftBox"
      }, [s()]), e("div", {
        className: "tetHandleRightBox"
      }, [g()]), p()]);
    }
    return () => e("div", {
      className: "TsxElementTableContainer"
    }, [G(), $(), j()]);
  }
});
export {
  fe as default
};
