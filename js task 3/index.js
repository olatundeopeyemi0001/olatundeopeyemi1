function numChange(num) {
let result = []
for(let i = 1; i <= num; i++) {
if(i % 2 === 0 && i % 3 === 0) result.push("yu-gi")
else if(i % 3 === 0 && i % 5 === 0) result.push("gi-oh")
else if(i % 2 === 0 && i % 5 === 0) result.push("yu-oh")
else if(i % 2 === 0) result.push("yu")
else if(i % 3 === 0) result.push("gi")
else if(i % 5 === 0) result.push("oh")
else result.push(i)
}
return result
}
console.log(numChange(30))
