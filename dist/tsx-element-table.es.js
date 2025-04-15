import { defineComponent as L, openBlock as H, createElementBlock as T, createElementVNode as x, ref as S, watch as W, createVNode as e, resolveComponent as u, unref as f, getCurrentInstance as q, withDirectives as X, mergeProps as N, resolveDirective as Y, computed as J, isVNode as Q, Fragment as k } from "vue";
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
}), se = ie, de = /* @__PURE__ */ L({
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
}), he = de, fe = /* @__PURE__ */ L({
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
}), ge = fe;
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
    const m = S(t.size), A = S(null), y = S();
    W(() => t.tableColumns, (a) => {
      a && B(a);
    }, {
      deep: !0,
      immediate: !0
    });
    const z = S(!1);
    V({
      getTableRef: () => A.value,
      updateTableColumns: () => B(t.tableColumns)
    });
    function B(a) {
      y.value = a.map((l) => ({
        ...l,
        show: l.show ?? !0
      }));
    }
    function I(a) {
      const l = `${U}${a.prop}`;
      return _[l];
    }
    function M(a) {
      const l = `${U}${a.prop}${ee}`;
      return _[l];
    }
    function R() {
      return _[te];
    }
    function j(a) {
      const l = {}, s = I(a), g = M(a);
      s && (l.default = (d) => s(d)), g && (l.header = (d) => g(d));
      let b = a.labelClassName ? a.labelClassName.split(" ") : [];
      return t.table.border && b.push("label-border-top"), a.show && e(u("el-table-column"), N(a, {
        key: a.prop,
        "label-class-name": b.join(" ")
      }), E(l) ? l : {
        default: () => [l]
      });
    }
    function $() {
      var v, h, o, w;
      const a = S((t == null ? void 0 : t.currentPage) || F), l = S((t == null ? void 0 : t.pageSize) || P), s = ((v = t == null ? void 0 : t.pagination) == null ? void 0 : v.total) || le, g = ((h = t.pagination) == null ? void 0 : h.show) ?? oe;
      if (!(g === "auto" ? s > l : g)) return;
      const d = (n) => {
        i("update:currentPage", n), i("page-change", {
          currentPage: n,
          pageSize: l
        });
      }, c = (n) => {
        i("update:pageSize", n), i("page-change", {
          currentPage: a.value,
          pageSize: n
        });
      };
      return e("div", {
        className: "tetPaginationBox"
      }, [e(u("el-pagination"), {
        size: f(m),
        "current-page": a.value,
        "onUpdate:current-page": (n) => a.value = n,
        "page-size": l.value,
        "onUpdate:page-size": (n) => l.value = n,
        total: s,
        pageSizes: ((o = t.pagination) == null ? void 0 : o.pageSizes) || ue,
        layout: ((w = t.pagination) == null ? void 0 : w.layout) || re,
        onCurrentChange: d,
        onSizeChange: c
      }, null)]);
    }
    function G() {
      var d;
      let a;
      const {
        table: l
      } = t, s = q(), g = {};
      return Object.keys(((d = s == null ? void 0 : s.vnode) == null ? void 0 : d.props) ?? []).filter((c) => c.startsWith("on") && !c.startsWith("onUpdate")).forEach((c) => {
        const h = c.replace("on", "").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
        g[c] = (...o) => {
          i(h, ...o);
        };
      }), e("div", {
        className: "tetTableBox"
      }, [X(e(u("el-table"), N({
        ref: A,
        size: f(m)
      }, g, l, {
        height: "100%"
      }), E(a = (f(y) || []).map((c) => j(c))) ? a : {
        default: () => [a]
      }), [[Y("loading"), t.table.loading || !1]])]);
    }
    function K() {
      var d;
      if (!t.handle || !(((d = t.handle) == null ? void 0 : d.show) ?? ne)) return;
      const l = J(() => f(m) === "large" ? "default" : f(m));
      function s() {
        var h;
        const c = (o) => {
          i("handle-click", o);
        }, v = R();
        return e(k, null, [e("div", {
          className: "tetHandleLeftBtnBox"
        }, [(((h = t.handle) == null ? void 0 : h.columns) || []).filter((o) => o.show !== !1).map((o) => e(u("el-button"), {
          size: f(l),
          key: o.key,
          type: o.type || "",
          onClick: o.action ?? (() => c(o.key))
        }, {
          default: () => [o.label]
        }))]), e("div", {
          className: "tetHandleLeftSlotBox"
        }, [v && v()])]);
      }
      function g() {
        const c = {
          default: () => e(u("el-button"), {
            circle: !0,
            size: f(l),
            icon: he
          }, null),
          dropdown: () => {
            let r;
            return e(u("el-dropdown-menu"), null, E(r = ce.map((C) => e(u("el-dropdown-item"), {
              command: C.value,
              disabled: f(m) === C.value
            }, {
              default: () => [C.label]
            }))) ? r : {
              default: () => [r]
            });
          }
        }, v = (r) => {
          m.value = r, i("size-change", r);
        }, h = () => {
          i("table-refresh");
        }, o = () => {
          z.value = !0;
        }, w = (r) => {
          i("handle-right-click", r);
        };
        return e(k, null, [(() => {
          var r, C;
          if ((r = t.handle) != null && r.rightColumns)
            return (C = t.handle) == null ? void 0 : C.rightColumns.filter((p) => p.show !== !1).map((p) => {
              const Z = {
                ...new Object(p.icon)
              };
              return e("div", null, [e(u("el-tooltip"), {
                content: p.tooltip
              }, {
                default: () => [e(u("el-button"), {
                  circle: !0,
                  loading: "loading" in p && p.loading,
                  size: f(l),
                  icon: Z,
                  onClick: () => w(p.key)
                }, null)]
              })]);
            });
        })(), e("div", null, [e(u("el-tooltip"), {
          content: "表格刷新"
        }, {
          default: () => [e(u("el-button"), {
            circle: !0,
            size: f(l),
            icon: ge,
            onClick: h
          }, null)]
        })]), e("div", {
          class: "xsHidden"
        }, [e(u("el-tooltip"), {
          content: "表格大小"
        }, {
          default: () => [e(u("el-dropdown"), {
            trigger: "click",
            onCommand: v
          }, E(c) ? c : {
            default: () => [c]
          })]
        })]), e("div", {
          class: "xsHidden"
        }, [e(u("el-tooltip"), {
          content: "字段管理"
        }, {
          default: () => [e(u("el-button"), {
            circle: !0,
            size: f(l),
            icon: se,
            onClick: o
          }, null)]
        })])]);
      }
      function b() {
        const c = () => {
          z.value = !1;
        }, v = (n) => e(u("el-checkbox"), {
          key: "normal",
          modelValue: n.show,
          "onUpdate:modelValue": (r) => n.show = r,
          label: n.prop
        }, {
          default: () => [n.label]
        }), h = (n) => e(u("el-checkbox"), {
          key: n.type,
          disabled: !0,
          "model-value": !0
        }, {
          default: () => [D[n.type]]
        }), o = (n) => !n.fixed && !n.type, w = (n) => o(n.relatedContext.element);
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
            move: w
          }, {
            item: (n) => {
              const {
                element: r
              } = n;
              return e("div", {
                class: {
                  columnDragItem: !0,
                  forbid: !o(r)
                }
              }, [e("div", {
                class: "iconBox"
              }, [o(r) && e("svg", {
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
              }, null)])]), r.type && D[r.type] ? h(r) : v(r)]);
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
      }, [g()]), b()]);
    }
    return () => e("div", {
      className: "TsxElementTableContainer"
    }, [K(), G(), $()]);
  }
});
export {
  _e as default
};
