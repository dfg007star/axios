class FlashMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: props.messages };
  }

  render() {
    return (
      <div>
        {this.state.messages.map((message) => (
          <Alert key={message.id} message={message} />
        ))}
      </div>
    );
  }
}