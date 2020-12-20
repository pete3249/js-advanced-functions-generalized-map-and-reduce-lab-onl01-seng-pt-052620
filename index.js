function map(src, cb) { 
    let r = []
    for (let i=0; i < src.length; i++) {
        let theElement = src[i]
        r.push(cb(theElement))
    }
    return r;    
}

function reduce(src, cb, startingPoint) {
    let r = (!!startingPoint) ? startingPoint : src[0]
    let i = (!!startingPoint) ? 0: 1
    
    for (; i < src.length; i++) {
        r = cb(src[i], r)
    }
    return r
}
  