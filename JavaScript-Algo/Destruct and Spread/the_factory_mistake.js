let meatArr = ["beef","chicken"]
let vegetableArr = ["rabbit","carrots","potatoes","lettuce"]

let [rabbit,...vegi] = vegetableArr
meatArr = [...meatArr,rabbit]
vegetableArr = vegi
