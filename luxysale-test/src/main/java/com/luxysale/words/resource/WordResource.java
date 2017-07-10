package com.luxysale.words.resource;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ResponseBody;

import com.luxysale.words.word.Word;
import com.luxysale.words.word.WordRepository;
import com.luxysale.words.word.WordBuilder;
import com.luxysale.words.word.RandomWord;


import java.util.Random;

@RestController
public class WordResource {

  @Autowired
  private WordRepository wordRepository;

  public WordResource() {
    
  }

  @CrossOrigin
  @RequestMapping(value = "/word", method = RequestMethod.GET)
  public @ResponseBody Iterable<Word> list(){
    return wordRepository.findAll();
  }

  @CrossOrigin
  @RequestMapping(value = "/word/generate", method = RequestMethod.GET)
  public ResponseEntity<Word> generate() throws Exception {
    //WordBuilder builder = new WordBuilder();
    //Word w1 = builder.generate();
    Random wordlenght = new Random();
    Word w1 = new Word(RandomWord.getNewWord(wordlenght.ints(3, 15).findFirst().getAsInt()));

    return new ResponseEntity<Word>(w1,HttpStatus.OK);
  }

}