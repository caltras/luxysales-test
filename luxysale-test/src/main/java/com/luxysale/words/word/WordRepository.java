package com.luxysale.words.word;

import org.springframework.data.repository.CrudRepository;
import com.luxysale.words.word.Word;

public interface WordRepository extends CrudRepository<Word, Long> {

}