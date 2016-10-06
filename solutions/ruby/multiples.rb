def solution(number)
  # number.times do |n|
  # end
  number.times.collect{|n| n}.reduce { |sum, n|
    (n%3==0 or n%5==0) ? sum+n : sum
  }
end

puts solution(10)
