def list names
  names.collect! { |n| n[:name] }
  last = names.pop || ''

  return last if names.empty?
  names.join(', ') + " & #{last}"
end
