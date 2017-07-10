package com.luxysale.words.word;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="words")
public class Word{
	@Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

	private String word;

	public Word(){
		
	}
	public Word(String w){
		this.word = w;
	}
	public String getWord(){
		return this.word;
	}
	public void setWord(String w){
		this.word = w;
	}
}