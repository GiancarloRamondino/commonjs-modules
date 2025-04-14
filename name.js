const Name=() => {
  const firstNames = ["Alice", "Bob", "Charlie", "David", "Eve"];
    const lastName = ["Smith", "Johnson", "Williams", "Jones", "Brown"];
  return firstNames[Math.floor(Math.random() * firstNames.length)] + " " + lastName[Math.floor(Math.random() * lastName.length)];
}
console.log(Name());