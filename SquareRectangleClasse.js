
class Rectangle{
    // constructeur
    constructor(w, h, name="Rectangle"){
        this._w = w;
        this._h = h;
        this._name=name;
    }
    //value verification
    widthisverify(){
        let v = typeof(this._w);
        if (v=="number") {
            return true;
        }
        return false;
    }
    heightisverify(){
        let v = typeof(this._h);
        if (v=="number") {
            return true;
        }
        return false;
    }

    //errors
    valueError(){
        return Error("check your values");
    }
    areaError(){
        return Error("area is not calculable review values");
    }
    nameError(){
        return Error("no name to your object review values");
    }

    // Dimensions
    dim(){
        return `Width : ${this._w} Height : ${this._h}`;  
    }

    //name
    objname(){

        return `Name : ${this._name}`;    
    }
    // getter
    get area(){
        return `Area :${this._w * this._h}`;   
    }

    //get dim, area and name
    getdim(){
        if((this.widthisverify()) && (this.heightisverify())){
            return this.dim();
        }
        return this.valueError();
    }
    //get area
    getarea(){
        if((this.widthisverify()) && (this.heightisverify())){
            return this.area;
        }
        return this.areaError();
    }
    //get name 
    getobjname(){
        if((this.widthisverify()) && (this.heightisverify())){
            return this.objname();
        }
        return this.nameError();
    }
    // setter 
    set w(w){
        this._w = w;
    }
    set name(name){
        this._name = name;
    }

     set h(h){
        this._h = h;
    }
    
}
class Square extends Rectangle {

    constructor(w, name="Square"){
        super(w, w, name);
    }
}

//New rectangle
let r1 = new Rectangle(2, 23);
console.log("rectangle", r1.getarea());
console.log("rectangle", r1.getdim())
console.log("rectangle", r1.getobjname());

console.log("\n");

//New Square
let square = new Square(13);
console.log("square", square.getarea());
console.log("square", square.getdim())
console.log("square", square.getobjname());