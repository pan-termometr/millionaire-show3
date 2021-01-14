-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: millionairedb
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `question` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `a` varchar(255) DEFAULT NULL,
  `b` varchar(255) DEFAULT NULL,
  `c` varchar(255) DEFAULT NULL,
  `d` varchar(255) DEFAULT NULL,
  `answer` char(1) DEFAULT NULL,
  `level` int NOT NULL,
  `question` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,'Peru','Boliwia','Argentyna','Chile','A',1,'W którym państwie znajduje się Lima?'),(2,'Buhaj','Cap','Warchlak','Odyniec','D',2,'Samiec dzika to:'),(3,'hyżym','pstrym','łysym','gniadym','B',3,'Uzupełnij staropolskie powiedzenie: Łaska pańska na ______ koniu jeździ'),(4,'Posejdon','Narcyz','Atlas','Zeus','C',4,'Kto w mitologii greckiej dźwigał Ziemię na swoich barkach?'),(5,'Arktyka','Antarktyka','Antarktyda','Atlantyda','A',5,'Obszar Ziemi otaczający biegun północny to:'),(6,'Cheiloskopia','Daktyloskopia','Fonoskopia','Termoskopia','B',6,'Technika śledcza zajmujca się badaniami porównawczymi linii papilarnych dłoni w celu ustalenia sprawcy czynu zabronionego to:'),(7,'Repartimiento','Krucjaty','Konkwista','Korrida','C',7,'Hiszpańskie wyprawy zbrojne podejmowane od końca XV wieku w celu podboju nowo odkrytych terytoriów zamorskich w Amerykach, Afryce i Indiach to:'),(8,'Eric Clapton','David Bowie','Michael Jackson','Kurt Cobain','B',8,'Kto wraz z Freddim Mercurym i zespołem Queen nagrał w 1981 r. piosenkę Under Pressure?'),(9,'Płuc','Serca','Mózgu','Nerek','B',9,'Trening typu cardio skupia się na czynności:'),(10,'Harry Potter i komnata tajemnic','Harry Potter i kamień filozoficzny','Harry Potter i czarna magia','Harry Potter i więzień Azkabanu','C',10,'Który z tych tytułów NIE należy do serii powieści o Harrym Potterze?'),(11,'Meksyk','Japonia','Stany Zjednoczone','Ukraina','C',11,'Które państwo obchodzi 4 lipca Dzień Niepodległości?'),(12,'Medycyna','Fizyka','Botanika','Psychologia','B',12,'W której dziedzinie nauki występuje teoria strun?'),(18,'60','69','71','73','C',5,'Ile lat ma Jarosław Kaczyński?'),(19,'1910','1915','1918','1920','C',1,'W którym roku Polska odzyskała niepodległość?'),(20,'Jarosław Kaczyński','Jacek Kurski','Rafał Trzaskowski','Andrzej Duda','D',1,'Kto w 2020 roku wygrał w Polsce wybory prezydenckie?'),(21,'ma i przednie, i tylne','zastąpił rubla','zakrywa całe ciało','jest samotnikiem','B',12,'Manat karaibski, tak jak afrykański, z kończyn ma tylko przednie. A manat azerbejdżański, tak jak turkmeński:');
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-14 18:40:18
