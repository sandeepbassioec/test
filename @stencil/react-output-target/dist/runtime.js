import { createComponent as r } from "@lit/react";
const c = ({
  defineCustomElement: e,
  tagName: o,
  transformTag: n,
  ...t
}) => {
  typeof e < "u" && e();
  const p = n ? n(o) : o;
  return r({ ...t, tagName: p });
};
export {
  c as createComponent
};
//# sourceMappingURL=runtime.js.map
