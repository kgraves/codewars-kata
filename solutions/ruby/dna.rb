def DNA_strand(dna)
  t = { A: 'T', C: 'G', G: 'C', T: 'A' }
  dna.split('').map { |l|    
    t[l.to_sym]
  }.join('')
end
