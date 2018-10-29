import React, { Component } from 'react';
import M from 'materialize-css';

const withErrorHandler = WrappedComponent => {
  return class extends Component {
    state = {
      errorMsg: null,
      toast: false
    };

    // onOf = () => {
    //   this.setState({ toast: true });
    // };
    showToast = () => {
      this.newToast(this.state.errorMsg);
    };

    newToast = msg => {
      return M.toast({
        html: `<i class="material-icons left">info_outline</i><span>${msg}
            </span>`,
        completeCallback: this.clearedToast()
      });
    };
    clearedToast = () => {
      this.setState({ toast: false });
    };

    render() {
      if (this.state.toast) {
        this.showToast();
      }

      return (
        <React.Fragment>
          {/* <button onClick={this.onOf}>Toast</button> */}
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default withErrorHandler;
