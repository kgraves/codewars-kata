def unique_in_order(iterable)
  res = []
  last = nil

  iterable.each { |c|
    res << c if not c == last
    last = c
  }

  res
end

puts unique_in_order('AAABBBbbbB')
