import React, {PropTypes} from 'react';
import ListWords from './ListWords';
import styles from './styles.css';

export default class ShowWords extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			enabledList:false,
			words:[]
		}
		this.showList = this.showList.bind(this);
		this.close = this.close.bind(this);
	}
	showList(){
		fetch('http://localhost:8081/word',{
		 	headers: {
			    'Accept': '*/*'
			  }
		 	}) 
            .then(result=> result.json())
            .then(json=>{
            	this.setState({enabledList:true,words:json});
            });
		
	}
	close(){
		this.setState({enabledList:false,words:[]});
	}
	render(){
		return (
			<div className={styles.flex}>
				<div className={styles.flexItem}>
					<button className={styles.btnShowWords} onClick={ this.showList }>Show list</button>
					{
					this.state.enabledList && <div className={styles.wordsList}>
						<div className={styles.box}>
							<div className={styles.boxTitle}>Words</div>
							{ this.state.enabledList && <ListWords words={this.state.words}></ListWords> }
							<div className={styles.boxFooter}>
								<button className={styles.btnDefault} onClick={this.close}>Close</button>
							</div>
						</div>
					</div>
					}
				</div>
			</div>
		);
	}
}