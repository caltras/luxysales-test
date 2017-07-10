import React from 'react';  
import { createStore as initialCreateStore, compose } from 'redux';
import DevTools from 'redux-devtools';
export let createStore = initialCreateStore;
console.log(DevTools);
if (__DEV__) {  
  createStore = compose(
    //require('redux-devtools').devTools(),
    DevTools,
    require('redux-devtools/lib/persistState').persistState(
      window.location.href.match(/[?&]debug_session=([^&]+)\b/)
    )
    /*require('redux-devtools').persistState(
      window.location.href.match(/[?&]debug_session=([^&]+)\b/)
    )*/,
    createStore
  );
}

export function renderDevTools(store) {  
  if (__DEV__) {
    //let {DevTools, DebugPanel, LogMonitor} = require('redux-devtools/lib');
    //let DevTools
    return (
      <DebugPanel top right bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    );
  }
  return null;
}