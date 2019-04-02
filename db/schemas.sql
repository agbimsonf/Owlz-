CREATE DATABASE owlz_db;
USE owlz_db;


ALTER TABLE `owlz_db`.`Promoters` 
ADD COLUMN `profile_pic` VARCHAR(200) NULL DEFAULT '/assets/images/profile.png' AFTER `instagram`;
