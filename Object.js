var person={name:"Aswin",age:20,place:"KNR",}
for (x in person){
    console.log(x+":"+person[x]);
}

// FUnction Inside Object

var person1={name:"Aswin Ramesh",age:20,place:"TLY",
    display:function () {
        console.log("Name:"+this.name);
    }
}

person1.display();