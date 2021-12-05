export default class Beat {
  static get events() {
    return {
      BIT: "bit",
    };
  }

  constructor() {
    setInterval(() => {
      console.log("bit");
    }, 600);
  }
}

class Application {
    constructor() {
        this._beat = new Beat();
    }

    _create(){
        
    }
}