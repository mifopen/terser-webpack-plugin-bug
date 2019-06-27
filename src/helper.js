export function helper() {
  return factory({});
}

function factory(acc) {
  function handle() {
    acc["prop1"] = 1;
    return factory({ ...acc, ["prop2"]: 1 });
  }

  const a = {};
  a.handle = handle;
  return a;
}
