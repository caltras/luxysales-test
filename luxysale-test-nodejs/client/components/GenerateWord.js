import React, {PropTypes} from 'react';
import styles from './styles.css';

export default class GenerateWord extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			word:null,
			error:null
		}
		this.headers = {
			'Accept': '*/*',
			 'Content-Type': 'application/json'
		};
		this.save = this.save.bind(this);
		this.generateWord = this.generateWord.bind(this);
	}
	save(){
		if(this.state.word){
			fetch('http://localhost:3000/words',{
				method:'PUT',
				headers: this.headers,
				body: JSON.stringify({
					word: this.state.word
				})
			})
			.then(result=> result.json())
			.then(json=>{
				this.setState({word:null});
			})
			.catch(error=> {
				this.setState({error:error.message});
			});
		}else{
			this.setState({error:"Word is required."});
		}
	}
	generateWord(){
		fetch('http://localhost:8081/word/generate',{
		 		headers: this.headers
		 	}) 
            .then(result=> result.json())
            .then(json=>{
            	this.setState({word:json,error:null});
            });
	}
	render(){
		return (

			<div className={styles.flex}>
				<div className={styles.flexItem}>
					<button className={styles.btnPrimary} onClick= { this.generateWord } >Generate Word</button>
				</div>
				<div className={styles.flexItem}>
					<div className={styles.wordWrapper}>
						{ this.state.word && this.state.word.word }
					</div>
				</div>
				<div className={styles.flexItem}>
					{this.state.word && this.state.word.word && <button className={styles.btnSaveWord} onClick={ this.save }>Save Word</button> }
					{ this.state.error && <div className={styles.error }>{ this.state.error }</div> }
				</div>
			</div>
		);
	}
}