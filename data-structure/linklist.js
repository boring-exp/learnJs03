const linkList2 = {
  val: 3,
  next: null
}

const linkList1 = {
  val: 2,
  next: linkList2
}

const linkList = {
  val: 1,
  next: linkList1
}

function getLinkListLength(list) {
  let p = list
  let i = 0;
  while (p) {
    i++
    p = p.next
  }
  return i
}

console.log(getLinkListLength(linkList))
