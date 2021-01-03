

var phones = ['iPhone 6', 'Samsung Galaxy S5', 'LG G4'];
var listik = [{name:"iPhone 6", price: 30},
              {name:"Samsung", price: 90},
              {name:"Xiaomi", price: 44},
              {name:"Huaweu", price: 123},
              {name:"Nokia", price: 100}
            ];

d3.select("body")
.selectAll("div")
.data(listik)
.enter()
.append("div")
.style("background", function(d){
    if(d.price<=50){
        return "green";
    }else{
        return "red";
    }
})
.style("margin", 10+"px")
.style("height",50+"px")
.style("width",function(d){return d.price+"px"})
.text(function(d){return d.name});