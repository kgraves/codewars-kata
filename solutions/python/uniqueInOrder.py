def unique_in_order(iterable):
    res = []
    last = None

    for c in iterable:
        if not c == last:
            res.append(c)
        last = c

    return res

print unique_in_order('AAABBBbB')
