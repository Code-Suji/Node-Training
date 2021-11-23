// plain js
// let id = 5
// console.log(id)

// id = 5

/**
 * Basic Types
 */

let id:number = 6

let name1:string = "Abu"

let isValid : boolean = true

let x : any = 'Its just any'

let ids : number[] = [1,2,3,4,5]

let arr : any[] = [1,'its also any', 4.5]

/**
 * tuple type values can be given in sequence as defined
 */

let tuples : [number , string , boolean] = [ 1 , 'string' , false ]

/**
 * Array of arrays
 */

let employee : [number , string] []

employee = [
    [1,'test'],
    [2,'test2'],
    [3,'test3']
]

/**
 * Union
 */

let pid : string | boolean = 'test'

pid = false 

pid ='Sujith'

/**
 * Enum
 */

enum Directions {
    Up = 'Go up',
    Down  = 'Go Down',
    Left  = 'Go Left',
    Right  = 'Go Right'
}

console.log(Directions.Up)

/**
 * Objects
 */

const user : {
    id : number,
    name : string,
    age?:number
} = {
    id : 5,
    name : 'Shaji' 
}


type User = { id:number ,name:string ,age?: number , dpt : string}

const User1 : User = {id:1,name:'Shaji',dpt:'CSE'}

/**
 * functions
 */

function AddNum (x:number,y:number):number {
    return x+y
} 

console.log(AddNum(1,2))

function logger (str:any):void {
    console.log(str)
}


/**
 * Interfaces
 */

interface IUser {
    id:number,
    name:string,
    readonly age:number
}

let user1:IUser = {
    id:5,
    name:'Shaji',
    age:21
}

// user1.age = 20 does not wrk since read only

user1.name = 'test user'

interface IMathfn {
    (x:number,y:number):number
}

const add:IMathfn = (x:number,y:number) => x+y

const sub:IMathfn = (x:number,y:number) => x-y

const mul:IMathfn = (x:number,y:number) => x*y

console.log(add(10,5))

console.log(sub(10,5))

console.log(mul(10,5))

/**
 * Classes
 */

class Person {

    //vars
    id : number

    name : string


    constructor(id:number,name:string){
        this.id = id,
        this.name = name
    }

    //fns

    register() {
        console.log(`${this.name} Registered with id : ${this.id}`)
    }

}

const bruce = new Person(4,"Bruce Lee")

console.log(bruce)

bruce.register()

/**
 * Classes with interfaces
 */

interface IPerson {
    id:number
    name:string
    register():void
}

class Person1 implements IPerson{
    //vars
    id : number

    name : string

    /**
     * public
     * private
     * protected
     */

    constructor(id:number,name:string){
        this.id = id,
        this.name = name
    }

    register() {
        console.log(`${this.name} Registered with id : ${this.id}`)
    }

}

const Jack = new Person1(4,"Jack Ma")

console.log(Jack)

Jack.register()

class Emp extends Person1{
    position : string

    constructor(id:number,name:string,position:string){
        super(id,name)
        this.position = position
    }

}

const emp1 = new Emp(1,'Ajith','intern')

logger(emp1)

/**
 * Generics
 */

let getArr = <T>(item:T[]):T[] => new Array().concat(item)

let numArr = getArr([1,2,3,4,56,7,9])

let strArr = getArr(['c','java','python'])

