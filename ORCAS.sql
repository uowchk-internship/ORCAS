-- MySQL dump 10.13  Distrib 8.0.27, for macos11 (x86_64)
--
-- Host: 192.168.0.200    Database: orcas
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `material`
--

DROP TABLE IF EXISTS `material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `material` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `topic` varchar(1000) NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `publish_year` int NOT NULL,
  `publisher` varchar(255) DEFAULT NULL,
  `subject` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `url` varchar(1000) NOT NULL,
  `views` int NOT NULL,
  `status` varchar(50) DEFAULT NULL,
  `publish_date` date DEFAULT NULL,
  `ranking_month` varchar(255) DEFAULT NULL,
  `material_abstract` varchar(10000) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `materials_id_uindex` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=165 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material`
--

LOCK TABLES `material` WRITE;
/*!40000 ALTER TABLE `material` DISABLE KEYS */;
INSERT INTO `material` VALUES (105,'admin','Teaching Science, Technology and Society. Developing Science and Technology Series.','Solomon, Joan',1993,'https://eric.ed.gov/?id=ED371953','Science & Technology,Social Science,Others','Journal Article','https://eric.ed.gov/?id=ED371953',4,'approve',NULL,NULL,'Science and technology are often presented and taught as two separate essences. When this is done, students as well as teachers are forced to attempt to develop the appropriate linkages. This book is one of a series designed to help teachers develop their science and technological education in ways that are both satisfying to themselves and stimulating to their students. This book partitions into seven chapters. Chapter one, \"What and why is STS?,\" discusses the features and importance of Science, Technology and Society (STS) in education. Chapter two, \"Our youngest pupils,\" focuses on the social worlds of the young child and images of science which derive from these. Chapter three, \"Getting going on STS in the secondary school,\" discusses some of the different ways in which teachers have developed an innovation which led them towards STS. Chapter four, \"Teaching strategies in the secondary school,\" provides teaching strategies based on personal experiences. Chapter five, \"The examination classes,\" looks at citizenship as a goal in education. Chapter six, \"Games, simulation, and role-play,\" presents an assortment of evidence concerning simulations. Chapter seven, \"Group discussion of issues-the DISS project,\" provides insights on the subject of group discussion of science-based social issues in the classroom. (ZWH)'),(106,'student@uowmail.edu.au','How does a blockchain work',' Simply Explained',2017,'YouTuber','Science & Technology,Business','Video','https://www.youtube.com/watch?v=SSo_EIwHSd4',1,'approve',NULL,NULL,'The video explained the concept of Blockchain, and how it is implemented in cryptocurrency.'),(107,'admin','Experiential Learning Theory | 經驗學習法',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=q8QZdCisKK4&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=1',0,'approve',NULL,NULL,'Tell me and I will forget\nShow me and I may remember\nInvolve me and I will understand\n- Benjamin Franklin\n\nAs stated by the proverb, experience is a strong influence of a person\'s learning, but the question is, how can we utilise one\'s experience in his/her learning?'),(108,'admin','Milgram experiment - A Study on Obedience to Authority | 米爾格倫實驗 - 權力服從研究',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=B1IvgHtvdME&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=2',0,'approve',NULL,NULL,'What would you do if you were asked to act against your will by an authority? Will you follow the instructions or your own ideas? Psychologist Stanley Milgram had done an experiment a few decades before to see if there was a light of hope in human\'s mind, and what\'s the results? Andrew has the answer for you'),(109,'admin','Misattribution of Arousal | 吊橋效應',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=9BirDDoWc4w&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=3',0,'approve',NULL,NULL,'How do human attraction works? There are a number of theory explain how human find others attractive, but not every one of them are explaining the normal way you find something attractive. Human brains are smart, but yet easy to fool sometimes, Andrew will let you know a way in this video.'),(110,'admin','Person-Centred Counselling The Necessary Conditions for Therapeutic Change | 個人中心治療',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=R6EjLzAZDGQ&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=4',0,'approve',NULL,NULL,'Have you ever encounter moments that your friend suddenly popped up for opinions for their feelings? What should you do? Are there any correct methods to deal with it?'),(111,'admin','Mechanism and highlights | 強積金及注意事項',NULL,2022,NULL,'Business','Video','https://www.youtube.com/watch?v=cC3Y4V2WrbY&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=5',0,'approve',NULL,NULL,'Mandatory Provident Fund is something that almost everyone would have to encounter in the future, but what actually is it? What should we pay attention on? And how should invest?'),(112,'admin','Borderline Personality Disorder | 邊緣性人格障礙',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=J-xRxDvyAos&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=6',0,'approve',NULL,NULL,NULL),(113,'admin','Introduction to UX/UI | 媒體使用者體驗及介面',NULL,2022,NULL,'Science & Technology','Video','https://www.youtube.com/watch?v=amoI5MChbkQ&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=7',0,'approve',NULL,NULL,'You may have heard of the terms UX and UI in recent years, but do you know what exactly are these acronyms referring to?'),(114,'admin','Techniques for screenwriting | 編劇技巧',NULL,2022,NULL,'Arts & Humanities','Video','https://www.youtube.com/watch?v=ok3uFijRJDk&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=8',0,'approve',NULL,NULL,NULL),(115,'admin','Hero\'s Journey: Myths, Screen Writings and Life | 英雄旅程：神話、劇作與人生',NULL,2022,NULL,'Arts & Humanities','Video','https://www.youtube.com/watch?v=mhauzsbLbD4&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=9',0,'approve',NULL,NULL,'Do you wish to live a different life?\nDo you wish to be recognised?\nDo you wish to be praised for doing something heroic and great?'),(116,'admin','How to Tell a Story with Film | 電影說故事',NULL,2022,NULL,'Arts & Humanities','Video','https://www.youtube.com/watch?v=Y8PROJVeadk&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=10',0,'approve',NULL,NULL,NULL),(117,'admin','Introduction to Critical Thinking | 批判性思考',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=KyGNaWSSfqE&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=11',0,'approve',NULL,NULL,NULL),(118,'admin','Vincent by Don McLean: Lyrics analysis | 歌詞鑑賞—麥克林與梵高傳',NULL,2022,NULL,'Arts & Humanities','Video','https://www.youtube.com/watch?v=Qro1N_t8ZEo&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=12',0,'approve',NULL,NULL,NULL),(119,'admin','Equal Pay in Hong Kong | 香港的薪酬平等',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=-hYE3-bLlyw&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=13',0,'approve',NULL,NULL,NULL),(120,'admin','Is the Internet making us stupid? | 別讓互聯網令我們變笨',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=CBsa7PN2WjM&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=14',0,'approve',NULL,NULL,NULL),(121,'admin','Site selection of Government-owned incinerator | 公營焚化爐選址論',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=XudAGMWdeqI&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=15',0,'approve',NULL,NULL,NULL),(122,'admin','VARK Learning Style | VARK學習法',NULL,2022,NULL,'Arts & Humanities','Video','https://www.youtube.com/watch?v=HX-fmrDGj_U&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=16',0,'approve',NULL,NULL,'Learning is an action that you perform since the very first day that you born, it is an in-born ability, but it doesn\'t mean that you should learn with the same method that others do. Neil Flemming suggested that there are 4 learning style and visual learning is not the best (nor the worst), check the video out and see if you can figure the method that fit you best.'),(123,'admin','Contract law | 合約法',NULL,2022,NULL,'Others','Video','https://www.youtube.com/watch?v=Z-QsDCtBbu8&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=17',0,'approve',NULL,NULL,NULL),(124,'admin','Defense mechanism | 心理防禦機制',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=3VVLMphpgMk&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=18',0,'approve',NULL,NULL,NULL),(125,'admin','Autism | 自閉症',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=G0qdGWLpnjg&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=19',0,'approve',NULL,NULL,NULL),(126,'admin','Cultural Communication Breakdown | 跨文化溝通障礙',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=AAB6LnOKsEQ&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=20',0,'approve',NULL,NULL,NULL),(127,'admin','Voice-over Skills | 配音技巧',NULL,2022,NULL,'Arts & Humanities','Video','https://www.youtube.com/watch?v=fHmRQ8abnzs&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=21',0,'approve',NULL,NULL,NULL),(128,'admin','How to Improve our Konglish Accent? | 「港」好英文',NULL,2022,NULL,'Arts & Humanities','Video','https://www.youtube.com/watch?v=_fZpWPVP_KQ&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=22',0,'approve',NULL,NULL,NULL),(129,'admin','Sharing economy | 共享經濟',NULL,2022,NULL,'Business','Video','https://www.youtube.com/watch?v=uJ62bQAX7Nc&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=23',0,'approve',NULL,NULL,NULL),(130,'admin','Introduction to Cryptocurrency | 虛擬貨幣',NULL,2022,NULL,'Science & Technology','Video','https://www.youtube.com/watch?v=ZU7DzynwOII&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=24',2,'approve',NULL,NULL,NULL),(131,'admin','Stress and its coping strategies | 壓力與處理方法',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=xqyG5peHeoQ&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=25',0,'approve',NULL,NULL,NULL),(132,'admin','Social Comparison Theory | 社會比較理論',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=YKEh3OrazAI&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=26',0,'approve',NULL,NULL,NULL),(133,'admin','Structured-functional Approach | 結構功能主義',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=vPZvwU6whpU&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=27',0,'approve',NULL,NULL,NULL),(134,'admin','Stream of Consciousness | 意識流',NULL,2022,NULL,'Arts & Humanities','Video','https://www.youtube.com/watch?v=OGdsGhI-ePM&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=28',0,'approve',NULL,NULL,NULL),(135,'admin','Prejudice, Stereotypes, Discrimination and Oppression | 偏見、刻板印象、歧視與壓迫',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=SOYksbpE2iI&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=29',0,'approve',NULL,NULL,NULL),(136,'admin','Masculinity in Chinese society | 中國社會的男性展現',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=0I8opFm2Ehc&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=30',0,'approve',NULL,NULL,NULL),(137,'admin','Objectification | 物化',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=OHtcFo1yFRQ&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=31',0,'approve',NULL,NULL,NULL),(138,'admin','What is Communication? | 溝通',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=IOUtVg-emzM&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=32',0,'approve',NULL,NULL,NULL),(139,'admin','Solution-focused Therapy | 焦點解決治療',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=vGpb7ldZbIY&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=33',0,'approve',NULL,NULL,NULL),(140,'admin','Access to Justice: Legal aid Mechanism in Hong Kong | 香港法律援助機制',NULL,2022,NULL,'Others','Video','https://www.youtube.com/watch?v=k-AYYVebEE4&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=34',0,'approve',NULL,NULL,NULL),(141,'admin','Sleepwalking | 夢遊症',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=GBj632_NN38&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=35',0,'approve',NULL,NULL,NULL),(142,'admin','Flashbulb Memory | 閃光燈記憶',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=gUt7X-4dz_8&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=36',0,'approve',NULL,NULL,NULL),(143,'admin','Research Method for Social Sciences | 研究社會科學的方法',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=GlKor3XqLlM&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=37',0,'approve',NULL,NULL,NULL),(144,'admin','Suicide and Utilitarianism: Is it a morally permissible act? | 自殺、道德與功利主義',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=rU6NWCiLBgM&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=38',0,'approve',NULL,NULL,NULL),(145,'admin','How Marketing can Charge You Extra in Daily Life | 市場推廣的代價',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=WWWo5wHF4tM&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=39',0,'approve',NULL,NULL,NULL),(146,'admin','Comparing the positions and opinions of newspaper from clippings | 從剪報比較報章的立場和觀點',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=665uzwkuEg4&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=40',0,'approve',NULL,NULL,NULL),(147,'admin','The Cookies that changes the world | 改變世界的 Cookies',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=ADXP3JShhjU&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=41',1,'approve',NULL,NULL,NULL),(148,'admin','The Persistence and Sadness of \"Low Desire Society\" | 低慾望社會',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=0dkZ34fGLik&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=42',0,'approve',NULL,NULL,NULL),(149,'admin','Digital marketing advantage during the pandemic | 數碼營銷在疫情下的優勢',NULL,2022,NULL,'Business','Video','https://www.youtube.com/watch?v=wB2DnH_x4Eo&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=43',0,'approve',NULL,NULL,NULL),(150,'admin','Sexual morality: Whether same-sex marriage be legalized | 兩性道德與平等：同性婚姻應否合法化',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=KA9rz2qPNmE&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=44',0,'approve',NULL,NULL,NULL),(151,'admin','Time Management | 時間管理',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=Mb1DKK1In4M&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=45',0,'approve',NULL,NULL,NULL),(152,'admin','Design Fundamentals | 設計入門',NULL,2022,NULL,'Arts & Humanities','Video','https://www.youtube.com/watch?v=HTuKtU7ePVw&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=46',0,'approve',NULL,NULL,NULL),(153,'admin','Green Bond: Factors on its price | 什麼是綠色債券及什麼因素影響其價格',NULL,2022,NULL,'Business','Video','https://www.youtube.com/watch?v=fG2Q60ZV2mc&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=47',0,'approve',NULL,NULL,NULL),(154,'admin','Memory Retrieval | 記憶回想',NULL,2022,NULL,'Social Science','Video','https://www.youtube.com/watch?v=xuLkVvGsrTY&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=48',0,'approve',NULL,NULL,NULL),(155,'admin','Online Marketing | 如何在網絡行銷？',NULL,2022,NULL,'Business','Video','https://www.youtube.com/watch?v=qihscBEZZGg&list=PL1aHzg76R5dRLSWPCKMb2Q7c5JOA2weI_&index=49',0,'approve',NULL,NULL,NULL),(156,'admin','Ecological System Theory',NULL,2021,NULL,'Social Science','Video','https://www.youtube.com/watch?v=BUjz9cJ7Cic&list=PL1aHzg76R5dQhg1srYP6eK9fGVGpoOUAX&index=1&t=26s&ab_channel=UOWCHKStudentLearningSupportScheme',1,'approve',NULL,NULL,NULL),(157,'admin','Practical of Law – Tort Law (Negligence)',NULL,2021,NULL,'Social Science','Video','https://www.youtube.com/watch?v=9frHahxvCg0&list=PL1aHzg76R5dQhg1srYP6eK9fGVGpoOUAX&index=2&ab_channel=UOWCHKStudentLearningSupportScheme',0,'approve',NULL,NULL,NULL),(158,'admin','Rule of Law',NULL,2021,NULL,'Social Science','Video','https://www.youtube.com/watch?v=MWGBhaJsyFo&list=PL1aHzg76R5dQhg1srYP6eK9fGVGpoOUAX&index=3&ab_channel=UOWCHKStudentLearningSupportScheme',0,'approve',NULL,NULL,NULL),(159,'admin','Bystander Effect',NULL,2021,NULL,'Social Science','Video','https://www.youtube.com/watch?v=xpX37OLLJvk&list=PL1aHzg76R5dQhg1srYP6eK9fGVGpoOUAX&index=4&ab_channel=UOWCHKStudentLearningSupportScheme',0,'approve',NULL,NULL,NULL),(160,'admin','Sports and Health',NULL,2021,NULL,'Social Science','Video','https://www.youtube.com/watch?v=RHyBNIdd5fA&list=PL1aHzg76R5dQhg1srYP6eK9fGVGpoOUAX&index=5&ab_channel=UOWCHKStudentLearningSupportScheme',2,'approve',NULL,NULL,NULL),(161,'admin','Supportive Video for LASSI Achievements: Time Management',NULL,2021,NULL,'Others','Video','https://www.youtube.com/watch?v=I4eNG0mfevA&list=PL1aHzg76R5dQn8NmIggYSi5lDwuSTDkFV&index=1&ab_channel=UOWCHKStudentLearningSupportScheme',2,'approve',NULL,NULL,NULL),(162,'admin','Supportive Video for LASSI Achievements: Attitude',NULL,2021,NULL,'Others','Video','https://www.youtube.com/watch?v=eJrmZuGVyrM&list=PL1aHzg76R5dQn8NmIggYSi5lDwuSTDkFV&index=2&ab_channel=UOWCHKStudentLearningSupportScheme',1,'approve',NULL,NULL,NULL),(163,'admin','Supportive Video for LASSI Achievements: Motivation',NULL,2021,NULL,'Others','Video','https://www.youtube.com/watch?v=RX-Bcy6JHYU&list=PL1aHzg76R5dQn8NmIggYSi5lDwuSTDkFV&index=3&ab_channel=UOWCHKStudentLearningSupportScheme',0,'approve',NULL,NULL,NULL),(164,'admin','Supportive Video for LASSI Achievements: Fighting Anxiety',NULL,2022,NULL,'Others','Video','https://www.youtube.com/watch?v=CwGZeOznezs&list=PL1aHzg76R5dQn8NmIggYSi5lDwuSTDkFV&index=4&ab_channel=UOWCHKStudentLearningSupportScheme',1,'approve',NULL,NULL,NULL);
/*!40000 ALTER TABLE `material` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-20 19:29:16
