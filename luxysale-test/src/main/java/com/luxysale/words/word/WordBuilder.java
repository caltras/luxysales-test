package com.luxysale.words.word;

import java.util.Random;

import com.luxysale.words.word.Word;

public class WordBuilder{
	
	public Word generate(){
		Random r = new Random();
	    Random wordlenght = new Random();

	    String strWord = r.ints(97,122)
	      .mapToObj(i -> (char) i)
	      .limit(wordlenght.ints(1, 20).findFirst().getAsInt())
	      .collect(StringBuilder::new, StringBuilder::append, StringBuilder::append)
	      .toString();
	    
	    Word w1 = new Word(strWord);

	    return w1;

	}
}