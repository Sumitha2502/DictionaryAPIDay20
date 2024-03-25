async function bar() {

var res=await fetch("https://jsonplaceholder.typicode.com/users")
var res1=await res.json()
for(var i=0;i<res1.length;i++){
    var data=res1[i].username
    console.log(data)
}


}
bar()