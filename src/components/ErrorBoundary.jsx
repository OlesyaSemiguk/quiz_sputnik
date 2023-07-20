import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor() {
    super()
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }
  render() {
    if (this.state.hasError) {
      return <p>Ошибка отловлена</p>
    }
    return this.props.children
  }
}
