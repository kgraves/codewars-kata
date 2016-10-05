def find_it(seq)
  counts = Hash.new
  seq.each do |i|
    counts[i] = counts[i] ? counts[i] + 1 : 1
  end

  counts.each do |k,v|
    if v % 2 == 1 then return k end
  end

  return nil
end

def find_it_redux(seq)
  return seq.reduce(:^)
end
