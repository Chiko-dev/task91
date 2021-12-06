export default class Beat {
  static get events() {
    return {
      BIT: "bit",
    };
  }

  constructor() {
    setInterval(() => {
      Beat.events.BIT;
      console.log("bit");
    }, 600);
  }
}
