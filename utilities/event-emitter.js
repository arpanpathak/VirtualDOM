// This is constructor function for event emitter 
let EventEmitter = function(){

    // eventName:  List of callback methods for subscribers
    this.events = {};
    this.idGenerator = 0;

}

// Adding on method to the prototype of the EventEmitter
EventEmitter.prototype.on = function(eventName, callBack) {

    if(typeof callBack != 'function') {
        throw new Error('Type of callback is not a function');
    }

    if(!this.events[eventName]) {
        this.events[eventName] = [];
    }

    this.events[eventName].push( {subscriberId: ++this.idGenerator, callback: callBack} );

    // this.subscriberId = this.idGenerator;
    const newSubscription = {
        subscribedEventName: eventName,
        events: this.events,
        subscriberId: this.idGenerator,
        __proto__ : Object.create(EventEmitter.prototype)
    }

    return newSubscription;
}


// Adding emit method to the prototype of the EventEmitter
EventEmitter.prototype.emit = function(eventName, data) {
    if(!this.events[eventName]) {
        console.log("[Info] [[[No subscribers listening]]]");
    }
    this.events[eventName].forEach(subscriber => {
        subscriber.callback(data);
    });
}

EventEmitter.prototype.unsubscribe = function(){
    console.log(this.subscriberId)

    // get the index 
    let position = this.events[this.subscribedEventName]
                        .findIndex(subscriber => subscriber.subscriberId === this.subscriberId);
        
    // Splice the array
    this.events[this.subscribedEventName].splice(position,1);

    console.log(this.events);
}

function Person (name) {
    this.name = name;
}



let myEmitter = new EventEmitter();



var x = myEmitter.on('some',function(data) {
    
    console.log("Inside x ",data);

});


var y = myEmitter.on('some',function(data) {
    
    console.log("Inside y = ",data);

});


var z = myEmitter.on('some',function(data) {
    
    console.log("Inside z = ",data);

});




myEmitter.emit('some','first event');

z.unsubscribe();


// It should throw exception of not listening any subscriber because subscriber done....
myEmitter.emit('some','second event');

x.unsubscribe();

myEmitter.emit('some','third event');



