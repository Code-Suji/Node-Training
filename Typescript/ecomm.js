// interface IProduct {
//     name:string
//     category : string
// }
// interface ICat {
//     name:string
//     product:any[]
// }
// var EcomList : ICat [] = [{name:'Electronic',product:[{},{}]}]
// class ECom{
//     product : any
//     constructor(product:any){
//         this.product = product
//     }
//     addProd = ()=>{
//         let obj : any = {name:this.product.name,category:this.product.category}
//         console.log(obj)
//         let flag :number=0
//         EcomList.forEach(x => {
//             if(x.name == this.product.category){
//                 console.table(x)
//                 x.product.push(obj)
//                 flag = 1
//             }
//         })
//             if(flag == 0){
//                 EcomList.push({name : this.product.category , product:[obj]})
//             }
//     }
// }
// let NewEcom = new ECom({name:"Head Phone",category:"Electronic"})
// NewEcom.addProd()
// console.log(EcomList)
var logdata = function (x) {
    console.log("- - - - - - - - - - - - ");
    console.log(x);
    console.log("- - - - - - - - - - - - ");
};
var IProduct = /** @class */ (function () {
    function IProduct(pid, pname, price, rating) {
        this.pid = pid;
        this.pname = pname;
        this.price = price;
        this.rating = rating;
    }
    return IProduct;
}());
var Category = /** @class */ (function () {
    function Category(name) {
        var _this = this;
        this.PdtArray = [];
        this.addItem = function (pid, pname, price, rating) {
            _this.PdtArray.push(new IProduct(pid, pname, price, rating));
            logdata('Add Function Called');
        };
        this.listItem = function () {
            logdata(_this.name);
            _this.PdtArray.forEach(function (x) {
                logdata(x);
            });
        };
        this.deleteItem = function (id) {
            _this.PdtArray.forEach(function (x, i) {
                if (x.pid === id)
                    _this.PdtArray.splice(i, 1);
            });
            logdata('Delete Function Called');
        };
        this.updateItem = function (id, pname, price, rating) {
            _this.PdtArray.forEach(function (x, i) {
                if (x.pid === id) {
                    x.pname = pname;
                    x.price = price;
                    x.rating = rating;
                }
            });
            logdata('Update Function Called');
        };
        this.name = name;
    }
    return Category;
}());
var food = new Category('Food Items');
food.addItem(1, 'Fruits', 50, 4);
food.addItem(2, 'Veg', 60, 4);
food.listItem();
food.deleteItem(2);
food.listItem();
