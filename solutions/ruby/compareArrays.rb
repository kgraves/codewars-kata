def comp(array1, array2)
  return false if array1.nil? || array2.nil?
  res = array1.map { |n| n*n }.reduce(1, :^)
  res ^= array2.reduce(1, :^)
  res == 0
end
