let flatten = (a: array<array<'a>>) => a->Array.reduce([], (acc, b) => [...acc, ...b])
