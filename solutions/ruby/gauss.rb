def f(n)
  n.is_a? Fixnum and n>0 ? (n+1) * n/2 : false
end
