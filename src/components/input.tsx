import React from 'react';
import { render } from 'react-dom';

type State = { checked: boolean }
export default class Input extends React.Component { 


   render() {
      // const { changeCheck } = this.props;
      return (
        <input
          className="toggle"
          type="checkbox"
            onChange={changeCheck}
         ></input>
      );
   }
}