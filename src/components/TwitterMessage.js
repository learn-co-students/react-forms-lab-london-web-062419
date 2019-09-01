import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: "",
      tweetLength: 0
    };
  }

  handleTweet = event => {
    this.setState({
      tweet: event.target.value,
      tweetLength: event.target.value.length
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          onChange={this.handleTweet}
          type="text"
          value={this.state.tweet}
        />
        {this.props.maxChars - this.state.tweetLength}
      </div>
    );
  }
}

export default TwitterMessage;
