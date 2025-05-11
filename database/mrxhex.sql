-- -----------------------------------------------------
-- Schema mrxhex
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mrxhex` DEFAULT CHARACTER SET UTF8MB4;

USE `mrxhex`;

-- -----------------------------------------------------
-- Table `mrxhex`.`economy_activity`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mrxhex`.`economy_activity` (
  `id_economy` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `activity_name` VARCHAR(45) NOT NULL
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mrxhex`.`health_entity`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mrxhex`.`health_entity` (
  `id_health` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `health_name` VARCHAR(45) NOT NULL
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mrxhex`.`blood_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mrxhex`.`blood_type` (
  `id_blood` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `blood_name` VARCHAR(45) NOT NULL
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mrxhex`.`payment_method`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mrxhex`.`payment_method` (
  `id_payment` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `payment_method` VARCHAR(45) NOT NULL
) ENGINE = InnoDB;

-- ----------------------------------------------------- Tablas con relaciones -------------------------------------------------------------
-- -----------------------------------------------------
-- Table `mrxhex`.`entity`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mrxhex`.`entity` (
  `id_entity` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `foreigner` TINYINT(1) NOT NULL,
  `created_date` DATE NOT NULL,
  `type_identification` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL UNIQUE,
  `phone` VARCHAR(45) NULL,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NOT NULL,
  `entity_type` TINYINT(1) NOT NULL,
  `number_identification` VARCHAR(45) NOT NULL UNIQUE,
  `verification_digit` VARCHAR(45) NULL,
  `company_name` VARCHAR(45) NULL UNIQUE,
  `password` VARCHAR(100) NULL,
  `economy_activity_id_economy` INT,
  `health_entity_id_health` INT,
  `blood_type_id_blood` INT,
  `payment_method_id_payment` INT,
  CONSTRAINT `fk_entity_economy_activity` FOREIGN KEY (`economy_activity_id_economy`) REFERENCES `mrxhex`.`economy_activity` (`id_economy`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_entity_health_entity1` FOREIGN KEY (`health_entity_id_health`) REFERENCES `mrxhex`.`health_entity` (`id_health`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_entity_blood_type1` FOREIGN KEY (`blood_type_id_blood`) REFERENCES `mrxhex`.`blood_type` (`id_blood`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_entity_payment_method1` FOREIGN KEY (`payment_method_id_payment`) REFERENCES `mrxhex`.`payment_method` (`id_payment`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = INNODB;

-- -----------------------------------------------------
-- Table `mrxhex`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mrxhex`.`orders` (
  `id_orders` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `last_modified` VARCHAR(45) NOT NULL,
  `created_date` VARCHAR(45) NOT NULL,
  `sales_rep` INT,
  `tax_amount` VARCHAR(45) NOT NULL,
  `subtotal` VARCHAR(45) NOT NULL,
  `total` VARCHAR(45) NOT NULL,
  `memo_transaction` VARCHAR(45),
  `discount_amount` VARCHAR(45),
  `entity_id_entity` INT NOT NULL,
  CONSTRAINT `fk_orders_entity1` FOREIGN KEY (`entity_id_entity`) REFERENCES `mrxhex`.`entity` (`id_entity`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_orders_entity2` FOREIGN KEY (`sales_rep`) REFERENCES `mrxhex`.`entity` (`id_entity`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mrxhex`.`adress`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mrxhex`.`adress` (
  `id_adress` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `adress_dr1` VARCHAR(45) NOT NULL,
  `country` VARCHAR(45) NOT NULL,
  `town` VARCHAR(45) NOT NULL,
  `zip` VARCHAR(45) NULL,
  `memo_adress` VARCHAR(45) NULL,
  `entity_id_entity` INT NOT NULL,
  CONSTRAINT `fk_adress_entity1` FOREIGN KEY (`entity_id_entity`) REFERENCES `entity` (`id_entity`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mrxhex`.`technical_data`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mrxhex`.`technical_data` (
  `id_technical_data` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `description` VARCHAR(45) NULL,
  `name` VARCHAR(45) NOT NULL,
  `composition` VARCHAR(45) NOT NULL,
  `made_yarn` VARCHAR(45) NOT NULL,
  `type_fabric` VARCHAR(45) NOT NULL,
  `printed_fabric` TINYINT(1) NOT NULL,
  `created_date` DATE NOT NULL
) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mrxhex`.`item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mrxhex`.`item` (
  `id_item` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `code_upc` INT NOT NULL,
  `description` VARCHAR(45) NULL,
  `foreigner` TINYINT(1) NOT NULL,
  `created_date` DATE NOT NULL,
  `comercial_name` VARCHAR(45) NOT NULL,
  `cost` FLOAT NOT NULL,
  `rate` FLOAT NOT NULL,
  `technical_data_id_technical_data` INT NOT NULL,
  CONSTRAINT `fk_item_technical_data1` FOREIGN KEY (`technical_data_id_technical_data`) REFERENCES `mrxhex`.`technical_data` (`id_technical_data`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB;

-- ----------------------------------------------------- Relaciones HAS ----------------------------------------------------------------
-- -----------------------------------------------------
-- Table `mrxhex`.`orders_has_item`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mrxhex`.`order_item` (
  `id_order_item` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `description` VARCHAR(255),
  `quantity` INT NOT NULL,
  `unit_price` DECIMAL(10, 2) NOT NULL,
  `tax_amount` DECIMAL(10, 2) NOT NULL,
  `tax_percentage` DECIMAL(5, 2) DEFAULT 0.00,
  `discount_percentage` DECIMAL(5, 2) DEFAULT 0.00,
  `discount_amount` DECIMAL(10, 2),
  `total_amount` DECIMAL(10, 2) NOT NULL,
  `item_id_item` INT NOT NULL,
  `order_id_orders` INT NOT NULL,
  CONSTRAINT `fk_order_items_orders` FOREIGN KEY (`order_id_orders`) REFERENCES `mrxhex`.`orders` (`id_orders`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_order_items_items` FOREIGN KEY (`item_id_item`) REFERENCES `mrxhex`.`item` (`id_item`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = INNODB;