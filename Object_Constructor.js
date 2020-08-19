function Person(name,age,place){
    this.name=name;
    this.age=age;
    this.place=place;
    this.display=function () {
        console.log("Name:"+this.name+ "Age:"+this.age);
    }
}

var ASR=new Person("Aswin",20,"TLY")

ASR.display();
