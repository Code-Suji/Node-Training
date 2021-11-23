interface IProduct {
    id:number
    name:string
    category : string
}

interface ICat {
    name:string
    product:IProduct[]
}

var EcomList : ICat [] = [{name:'Electronic',product:[]}]
class ECom{

    product : IProduct

    constructor(product:IProduct){
        this.product = product
    }

    addProd = ()=>{

        let obj : IProduct = {id:this.product.id,name:this.product.name,category:this.product.category}
        console.log(obj)
        let flag :number=0
        EcomList.forEach(x => {
            if(x.name == this.product.category){
                x.product.push(obj)
                flag = 1
            }
        })
            if(flag == 0){

                EcomList.push({name : this.product.category , product:[obj]})
            }

        
    }
}

let NewEcom = new ECom({id:10,name:"Head Phone",category:"Phones"})

NewEcom.addProd()

console.log(EcomList)