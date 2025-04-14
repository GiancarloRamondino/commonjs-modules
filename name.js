const Name=() => {
  const first = ["Alice", "Bob", "Charlie", "David", "Eve"];
    const last = ["Smith", "Johnson", "Williams", "Jones", "Brown"];
  return {
    firstName: first[Math.floor(Math.random() * first.length)],
    lastName: last[Math.floor(Math.random() * last.length)]
  }
}
console.log(Name());

module.exports = Name;
