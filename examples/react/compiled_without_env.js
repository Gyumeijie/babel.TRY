class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  render() {
    return dom("div", null, dom("h1", null, "Hello, world!"), dom("h2", null, "It is ", this.state.date.toLocaleTimeString(), "."));
  }

}

ReactDOM.render(dom(Clock, null), document.getElementById('root'));
