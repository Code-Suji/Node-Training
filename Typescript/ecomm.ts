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

let logdata = (x:any) =>{
    console.log(`- - - - - - - - - - - - `)
    console.log(x)
    console.log(`- - - - - - - - - - - - `)
}

class IProduct {
    pid:number
    pname:string
    price:number
    rating:number

    constructor(pid:number,pname:string,price:number,rating:number){
        this.pid = pid
        this.pname = pname
        this.price = price
        this.rating = rating
    }
}

class Category{
    name:string
    PdtArray : IProduct[] = []
    constructor(name:string){
        this.name= name
    }

    addItem = (pid:number,pname:string,price:number,rating:number):void => {
        this.PdtArray.push(new IProduct(pid,pname,price,rating)) 
        logdata('Add Function Called')
    }

    listItem = ()=>{
        logdata(this.name)
        this.PdtArray.forEach(x =>{
            logdata(x)
        })
    }

    deleteItem = (id:number,) => {
        this.PdtArray.forEach((x,i) =>{
            if( x.pid === id) this.PdtArray.splice(i,1)
        })

        logdata('Delete Function Called')
    }

    updateItem = (id:number,pname:string,price:number,rating:number) => {
        this.PdtArray.forEach((x,i) =>{
            if( x.pid === id){
                x.pname = pname
                x.price = price
                x.rating =rating

            }
        })
        logdata('Update Function Called')

    }
    
}

let food = new Category('Food Items')

food.addItem(1,'Fruits',50,4)

food.addItem(2,'Veg',60,4)

food.listItem()
food
food.deleteItem(2)

food.listItem()