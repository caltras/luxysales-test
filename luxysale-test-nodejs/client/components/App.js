import React, {PropTypes} from 'react';
import GenerateWord from './GenerateWord';
import GeneratePhrase from './GeneratePhrase';
import ShowWords from './ShowWords';
import styles from './styles.css';

export default class App extends React.Component {
  render() {
    return (
		<div>
			<GenerateWord></GenerateWord>
			<ShowWords></ShowWords>
			<GeneratePhrase></GeneratePhrase>
		</div>
    );
  }
}
