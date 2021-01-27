const words = ['Environmental', 'Systems', 'Research', 'Institute']
const longest=words.reduce((acc,curr)=>{
    if(acc.length>curr.length){return acc}
    else{return curr}
})
console.log('la palabra más larga es ', longest) 