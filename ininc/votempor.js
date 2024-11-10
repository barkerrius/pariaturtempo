function Gh(a, b, c, d, e, f, g) {
  a = a.stateNode; // Get the class instance
  if (typeof a.shouldComponentUpdate === "function") {
    return a.shouldComponentUpdate(d, f, g); // If the component has `shouldComponentUpdate`, call it with the next state, next props, and next context
  } else if (b.prototype && b.prototype.isPureReactComponent) {
    // If the component is a pure component, perform a shallow comparison on props and state
    return !qc(c, d) || !qc(e, f);
  } else {
    return true; // Otherwise, always update
  }
}
