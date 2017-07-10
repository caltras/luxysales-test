import React, {PropTypes} from 'react';
import styles from './styles.css';

export default class ListWords extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		const listItems = this.props.words.map((v) =>
	    	<li key={v.word}>
	      		{v.word}
	    	</li>
	  	);
		return (
			<div className={styles.contentList}>
				<ul>
					{ listItems }
				</ul>
			</div>
		);
	}
}