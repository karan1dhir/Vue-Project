const eventValue = {
  debug: true,
  eventinfo: {
    events: [{
        state: {
          going: false,
          notGoing: false,
          notDecided: false
        },
        id: 1,
        title: "Title of mat card 1",
        images: "../assets/logo.png",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi."
      },
      {
        state: {
          going: false,
          notGoing: false,
          notDecided: false
        },
        id: 2,
        title: "Title of mat card 2",
        images: "../assets/logo.png",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter"
      },
      {
        state: {
          going: false,
          notGoing: false,
          notDecided: false
        },
        id: 3,
        title: "Title of mat card 3",
        images: "../assets/logo.png",
        content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden."
      }
    ]
  },
  setEventResponseAction(eventId, going, notGoing, notDecided) {
    const id = parseInt(eventId);
    let event = this.eventinfo.events.find(function (event) {
      return event.id == id;
    });
    if (this.debug) console.log(`setEventResponseAction triggered on event =${event.name},event-id = ${event.id} with going = ${going} , notGoing = ${notGoing} and notDecided = ${notDecided}`)
    event.state.going = going;
    event.state.notGoing = notGoing;
    event.state.notDecided = notDecided;
  }
};
export default eventValue;