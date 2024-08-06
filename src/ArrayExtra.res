let map2 = (a: option<'a>, b: option<'b>, f: ('a, 'b) => 'c) => {
  switch (a, b) {
  | (Some(a), Some(b)) => Some(f(a, b))
  | _ => None
  }
}