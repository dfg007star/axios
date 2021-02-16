class FlashMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: props.messages };
  }

  render() {
    return (
      <div>
        {this.state.messages.map((message) => (
          <h2 key={message.id}>{message}</h2>
        ))}
      </div>
    );
  }
}
