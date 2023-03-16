import './App.css';
import React from "react";
import { observer } from 'mobx-react';
import LoginForm from './LoginForm';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import Dashboard from './Page/Dashboard';
import UserStore from './stores/UserStore';

class App extends React.Component {
  async componentDidMount() {
    try{
      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application'
        }
      });
      let result = await res.json();

      if(result && result.success){
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username;
      }
      else{
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    }

    catch(e) {
      UserStore.loading = false;
      UserStore.isLoggedIn = false;
    }
  }

  async doLogout() {
    try{
      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      let result = await res.json();

      if(result && result.success){
        UserStore.isLoggedIn = false;
        UserStore.username = '';
      }
      else{
        UserStore.loading = false;
        UserStore.isLoggedIn = false;
      }
    }

    catch(e) {
      console.log(e)
    }
  }

  render() {

    if(UserStore.loading){
      return (
        <div className='app'>
          <div className='container'>
            Loading, please wait...
          </div>
        </div>
      );
    }
    else{
      if(UserStore.isLoggedIn){
        return (
          <div className='app'>
            <div className='container'>
              Welcome {UserStore.username}
              <SubmitButton text={'Log Out'} disabled={false} onClick={ () => this.doLogout() } />
            </div>
          </div>
        );
      }
    }

    return (
      <div className='container'>
        <Dashboard/>
      </div>
    );
  }
}

export default observer(App);
