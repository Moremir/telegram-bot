const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];

const isCherries = inventory.find((item)=> {
    return item.name === "bananas"
})

console.log(isCherries)