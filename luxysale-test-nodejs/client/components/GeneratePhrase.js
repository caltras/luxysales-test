import React, {PropTypes} from 'react';
import styles from './styles.css';

export default class GeneratePhrase extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			word:null,
			error:null,
			phrase:"",
			isValidPhrase:true,
			errors : []
		}
		this.headers = {
			'Accept': '*/*',
			 'Content-Type': 'application/json'
		};
		
		this.generate = this.generate.bind(this);
	}
	generate(){
		fetch('http://localhost:3000/words/phrase', {
		 		method:'POST',
				headers: this.headers
		 	}) 
            .then(result=> result.json())
            .then(json=>{
            	this.setState({phrase:json.phrase});
            	this.check(json.phrase);
            });
	}
	check(phrase){
		this.setState({isValidPhrase:true, errors:[{message:"Checkin phrase..."}]});
		fetch('http://localhost:3000/words/phrase/check', {
		 		method:'POST',
				headers: this.headers,
				body: JSON.stringify({
					text: phrase,
					language:"en-US"
				})
		 	}) 
            .then(result=> result.json())
            .then(json=>{
            	this.setState({isValidPhrase:!!!json.errors.length,errors:json.errors});
            });
	}
	render(){

		return (

			<div className={styles.flex}>
				<div className={styles.flexItem}>
					<button className={styles.btnPhrase} onClick= { this.generate } >Generate Phrase</button>
				</div>
				<div className={styles.flexItem}>
					<div className={styles.wordWrapper} style={this.state.isValidPhrase ? {color:'black'} : {color:'red'}}>
						{ this.state.phrase }
					</div>
					<div>
						{ this.state.errors.length > 0 && "Incorret Phrase" }
						{this.state.errors.length == 0 && this.state.phrase && this.state.isValidPhrase && <span>Correct!</span>}
					</div>
				</div>
			</div>
		);
	}
}