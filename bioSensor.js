

let getRandomArbitrary=function(min,max){
    return parseInt(Math.random() * (max - min) + min)
}


class Biosensor{
    constructor(name){
        this.name=name;
        this.live();
        this.currentHeartBeat=0;
        this.HR={
            minHR: 60,
            maxHR: 80
        }
    }

    display(){
        console.log("Person: "+this.name+"  || HR: "+this.currentHeartBeat);
    }

    heartBeat(){
        this.currentHeartBeat = getRandomArbitrary(this.HR.minHR,this.HR.maxHR);
        this.display();
    }

    live(){
        console.log("It's Alive")
        setInterval(()=>{
            this.heartBeat();
        },1000)
            
        
    }

}

let James = new Biosensor("James");
let Sara = new Biosensor("Sara");