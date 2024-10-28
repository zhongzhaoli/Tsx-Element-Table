import { defineComponent as L, openBlock as T, createElementBlock as A, createElementVNode as x, ref as C, watch as W, createVNode as e, resolveComponent as u, unref as h, getCurrentInstance as q, withDirectives as X, mergeProps as k, resolveDirective as Y, computed as J, isVNode as Q, Fragment as N } from "vue";
import O from "vuedraggable";
const U = "table-", ee = "-header", te = "handle-left", ne = !0, D = {
  index: "索引",
  selection: "选择"
}, ae = "default", P = 10, F = 1, le = 0, oe = !0, re = "total, sizes, prev, pager, next, jumper", ue = [10, 20, 50, 100], ce = [
  { value: "large", label: "宽松" },
  { value: "default", label: "默认" },
  { value: "small", label: "紧凑" }
];
/*! Element Plus Icons Vue v2.3.1 */
var ie = /* @__PURE__ */ L({
  name: "Open",
  __name: "open",
  setup(t) {
    return (_, i) => (T(), A("svg", {
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
}), se = ie, de = /* @__PURE__ */ L({
  name: "Operation",
  __name: "operation",
  setup(t) {
    return (_, i) => (T(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M389.44 768a96.064 96.064 0 0 1 181.12 0H896v64H570.56a96.064 96.064 0 0 1-181.12 0H128v-64zm192-288a96.064 96.064 0 0 1 181.12 0H896v64H762.56a96.064 96.064 0 0 1-181.12 0H128v-64zm-320-288a96.064 96.064 0 0 1 181.12 0H896v64H442.56a96.064 96.064 0 0 1-181.12 0H128v-64z"
      })
    ]));
  }
}), he = de, ge = /* @__PURE__ */ L({
  name: "Refresh",
  __name: "refresh",
  setup(t) {
    return (_, i) => (T(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      x("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), fe = ge;
function E(t) {
  return typeof t == "function" || Object.prototype.toString.call(t) === "[object Object]" && !Q(t);
}
const _e = /* @__PURE__ */ L({
  name: "TsxElementTable",
  components: {
    draggable: O
  },
  props: {
    // Normal
    size: {
      type: String,
      default: ae
    },
    tableColumns: {
      type: Array,
      required: !0
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
      default: F
    },
    pageSize: {
      type: Number,
      default: P
    }
  },
  setup(t, {
    slots: _,
    emit: i,
    expose: V
  }) {
    const m = C(t.size), H = C(null), y = C();
    W(() => t.tableColumns, (l) => {
      l && B(l);
    }, {
      deep: !0,
      immediate: !0
    });
    const z = C(!1);
    V({
      getTableRef: () => H.value,
      updateTableColumns: () => B(t.tableColumns)
    });
    function B(l) {
      y.value = l.map((a) => ({
        ...a,
        show: a.show ?? !0
      }));
    }
    function I(l) {
      const a = `${U}${l.prop}`;
      return _[a];
    }
    function M(l) {
      const a = `${U}${l.prop}${ee}`;
      return _[a];
    }
    function R() {
      return _[te];
    }
    function j(l) {
      const a = {}, s = I(l), g = M(l);
      return s && (a.default = (v) => s(v)), g && (a.header = (v) => g(v)), l.show && e(u("el-table-column"), k(l, {
        key: l.prop
      }), E(a) ? a : {
        default: () => [a]
      });
    }
    function $() {
      var f, d, r, b;
      const l = C((t == null ? void 0 : t.currentPage) || F), a = C((t == null ? void 0 : t.pageSize) || P), s = ((f = t == null ? void 0 : t.pagination) == null ? void 0 : f.total) || le, g = ((d = t.pagination) == null ? void 0 : d.show) ?? oe;
      if (!(g === "auto" ? s > a : g)) return;
      const p = (n) => {
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
        pageSizes: ((r = t.pagination) == null ? void 0 : r.pageSizes) || ue,
        layout: ((b = t.pagination) == null ? void 0 : b.layout) || re,
        onCurrentChange: p,
        onSizeChange: c
      }, null)]);
    }
    function G() {
      var p;
      let l;
      const {
        table: a
      } = t, s = q(), g = {};
      return Object.keys(((p = s == null ? void 0 : s.vnode) == null ? void 0 : p.props) ?? []).filter((c) => c.startsWith("on") && !c.startsWith("onUpdate")).forEach((c) => {
        const d = c.replace("on", "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        g[c] = (...r) => {
          i(d, ...r);
        };
      }), e("div", {
        className: "tetTableBox"
      }, [X(e(u("el-table"), k({
        ref: H,
        size: h(m)
      }, g, a), E(l = (h(y) || []).map((c) => j(c))) ? l : {
        default: () => [l]
      }), [[Y("loading"), t.table.loading]])]);
    }
    function K() {
      var p;
      if (!t.handle || !(((p = t.handle) == null ? void 0 : p.show) ?? ne)) return;
      const a = J(() => h(m) === "large" ? "default" : h(m));
      function s() {
        var d;
        const c = (r) => {
          i("handle-click", r);
        }, f = R();
        return e(N, null, [e("div", {
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
            icon: he
          }, null),
          dropdown: () => {
            let o;
            return e(u("el-dropdown-menu"), null, E(o = ce.map((w) => e(u("el-dropdown-item"), {
              command: w.value,
              disabled: h(m) === w.value
            }, {
              default: () => [w.label]
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
        }, b = (o) => {
          i("handle-right-click", o);
        };
        return e(N, null, [(() => {
          var o, w;
          if ((o = t.handle) != null && o.rightColumns)
            return (w = t.handle) == null ? void 0 : w.rightColumns.map((S) => {
              const Z = {
                ...new Object(S.icon)
              };
              return e("div", null, [e(u("el-tooltip"), {
                content: S.tooltip
              }, {
                default: () => [e(u("el-button"), {
                  circle: !0,
                  loading: "loading" in S && S.loading,
                  size: h(a),
                  icon: Z,
                  onClick: () => b(S.key)
                }, null)]
              })]);
            });
        })(), e("div", null, [e(u("el-tooltip"), {
          content: "表格刷新"
        }, {
          default: () => [e(u("el-button"), {
            circle: !0,
            size: h(a),
            icon: fe,
            onClick: d
          }, null)]
        })]), e("div", null, [e(u("el-tooltip"), {
          content: "表格大小"
        }, {
          default: () => [e(u("el-dropdown"), {
            trigger: "click",
            onCommand: f
          }, E(c) ? c : {
            default: () => [c]
          })]
        })]), e("div", null, [e(u("el-tooltip"), {
          content: "字段管理"
        }, {
          default: () => [e(u("el-button"), {
            circle: !0,
            size: h(a),
            icon: se,
            onClick: r
          }, null)]
        })])]);
      }
      function v() {
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
          default: () => [D[n.type]]
        }), r = (n) => !n.fixed && !n.type, b = (n) => r(n.relatedContext.element);
        return e(u("el-drawer"), {
          width: "320px",
          "append-to-body": !0,
          "model-value": z.value,
          title: "字段管理",
          onClose: c
        }, {
          default: () => [e(O, {
            "item-key": "prop",
            filter: ".forbid",
            modelValue: y.value,
            "onUpdate:modelValue": (n) => y.value = n,
            animation: 200,
            move: b
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
              }, null)])]), o.type && D[o.type] ? d(o) : f(o)]);
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
      }, [g()]), v()]);
    }
    return () => e("div", {
      className: "TsxElementTableContainer"
    }, [K(), G(), $()]);
  }
});
export {
  _e as default
};
