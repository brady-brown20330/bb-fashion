import * as React from 'react'


const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center',
  }
}

export default class Loading extends React.Component {
  state = {
    content: this.props.text
  }

  componentDidMount () {
    const { text } = this.props

    this.interval = window.setInterval(() => {
      this.state.content === text + '...'
        ? this.setState({ content: text })
        : this.setState(({ content }) => ({ content: content + '.' }))
    }, 500)
  }
  componentWillUnmount () {
    window.clearInterval(this.interval)
  }
  render() {
    return (
      <p style={styles.content}>
        {this.state.content}
      </p>
    )
  }
}