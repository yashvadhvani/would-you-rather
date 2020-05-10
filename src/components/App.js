import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import LeaderBoard from './LeaderBoard';
import ExpandedQuestion from './ExpandedQuestion';
import Results from './Results';
import NewQuestion from './NewQuestion';
import SignIn from './SignIn';
import { handleInitialData } from '../actions/shared';
import Nav from './Nav';


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div>
            {this.props.loading
              ? <SignIn /> :
              <Fragment>
                <Nav />
                <Route path='/' exact component={Dashboard} />
                <Route path='/leaderboard' component={LeaderBoard} />
                <Route path='/new' component={NewQuestion} />
                <Route path='/question/:id' component={ExpandedQuestion} />
                <Route path='/view/:id' component={Results} />
              </Fragment>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}


const mapStateToProps = ({ authedUser }) => {
  return {
    loading: authedUser === null
  };
}

export default connect(mapStateToProps)(App);

