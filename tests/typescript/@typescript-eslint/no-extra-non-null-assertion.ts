const foo: { bar: number } | null = null;
const bar = foo!!!.bar;

function foo1(bar: number | undefined) {
  const bar1: number = bar!!!;
}

function foo2(bar?: { n: number }) {
  return bar!?.n;
}