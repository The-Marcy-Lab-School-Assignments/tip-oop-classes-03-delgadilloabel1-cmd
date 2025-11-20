class Phones {
    constructor(owner, type) {
        this.type = type
        this.owner = owner
    }
    makeCall() {
        return `${this.type} is making a call...`
    }
    recieveCall(contact) {
        return `Ring Ring Ring! Incoming call from ${contact}`
    }
}
class Iphone extends Phones() {
    constructor(owner, type, storage, color) {
        super(owner, type)
        this.storage = storage
        this.color = color
    }
    recieveCall(contact) {
        return `Bing Bing Dum Dum! Incoming call from ${contact}`
    }
    recieveImessage(contact) {
        return `DING-DING ${this.owner}'s ${this.type} recieved an imessage from ${contact}.`
    }
    makeFaceTime(contact) {
        return `${this.owner} is faceTiming ${contact}...`
    }
    recieveFaceTime(contact) {
        return `${this.owner}' ${this.type} is recieving a faceTime call from ${contact}`
    }
    takePicture() {
        this.storage -= 5
        return `${this.owner} took a picture! ${this.type} now has ${this.storage} GB of storage space.`
    }
    checkStorage() {
        return `this.storage GB avaiable`
    }
    uploadToIcloud() {
        this.storage += 5
        return `${this.owner} uploaded 5GB to their icloud account! ${this.type} now has ${this.storage} GB of storage space.`
    }

}
class Samsung extends Phones() {
    constructor(owner, type, storage, color) {
        super(owner, type)
        this.storage = storage
        this.color = color
    }
    recieveCall(contact) {
        return `Ching Zing Ding Ding! Incoming call from ${contact}`
    }
    recieveGoogleMessage(contact) {
        return `BAZINGA ${this.type}'s ${this.type} recieved an imessage from ${contact}.`
    }

}