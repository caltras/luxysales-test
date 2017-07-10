CREATE TABLE `luxysales`.`words` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `word` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `word_UNIQUE` (`word` ASC));
