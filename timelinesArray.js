const TimelinesArray = [
  {
    language: "Python",
    // time: new Date (),
    events: [
      {
        // timeCreated: new Date(),
        title: "Day 1",
        text:
          "Day 1. React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props. "
      },
      {
        // timeCreated: new Date(),
        title: "Day 2",
        text:
          "Day 2. A Stateful Component. In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render()."
      },
      {
        // timeCreated: new Date(),
        title: "Day 3",
        text:
          "Day 3. An Application. Using props and state, we can put together a small Todo application. This example uses state to track the current list of items as well as the text that the user has entered. Although event handlers appear to be rendered inline, they will be collected and implemented using event delegation."
      },
      {
        // timeCreated: new Date(),
        title: "Day 4",
        text:
          "Day 4. External Plugins. React is flexible and provides hooks that allow you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to convert the <textarea>’s value in real time."
      }
    ]
  },
  {
    language: "Jumpstart",
    events: [
      {
        // timeCreated: new Date(),
        title: "Day 1",
        text:
          "components let you split the UI into independent, reusable pieces, and think about each piece in isolation.Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen. "
      },
      {
        // timeCreated: new Date(),
        title: "Day 2",
        text:
          "Day 2. Components can refer to other components in their output. This lets us use the same component abstraction for any level of detail. A button, a form, a dialog, a screen: in React apps, all those are commonly expressed as components."
      },
      {
        // timeCreated: new Date(),
        title: "Day 3",
        text:
          "Day 3. In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application."
      },
      {
        // timeCreated: new Date(),
        title: "Day 4",
        text:
          "Day 4. Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them."
      }
    ]
  }
];

module.exports = TimelinesArray;
