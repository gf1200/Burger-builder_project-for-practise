import React, { Component } from 'react';
import M from 'materialize-css';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      errorMsg: null,
      toast: false
    };

    componentWillMount() {
      this.reqInterceptors = axios.interceptors.request.use(req => {
        this.setState({ errorMsg: null });
        return req;
      });

      this.resInterceptors = axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ errorMsg: error, toast: true });
        }
      );
    }

    componentWillUnmount() {
      console.log('Will unmmount', this.resInterceptors, this.reqInterceptors);
      axios.interceptors.request.eject(this.reqInterceptors);
      axios.interceptors.response.eject(this.resInterceptors);
    }
    showToast = () => {
      this.newToast(this.state.errorMsg);
    };

    newToast = msg => {
      return M.toast({
        html: `<i class="material-icons left">info_outline</i><span>${msg}
            </span>`,
        displayLength: 6000,
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
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default withErrorHandler;
