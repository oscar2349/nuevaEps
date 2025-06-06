--
-- Table structure for table `medicamentos`
--

DROP TABLE IF EXISTS `medicamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicamentos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `es_no_pos` tinyint(1) NOT NULL,
  `cantidad` int DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicamentos`
--

LOCK TABLES `medicamentos` WRITE;
/*!40000 ALTER TABLE `medicamentos` DISABLE KEYS */;
INSERT INTO `medicamentos` VALUES (1,'Paracetamol',0,200),(2,'Ibuprofeno',0,150),(3,'Metformina',0,100),(4,'Losartán',0,80),(5,'Omeprazol',0,120),(6,'Adalimumab',1,20),(7,'Rituximab',1,10),(8,'Etanercept',1,15),(9,'Trastuzumab',1,5),(10,'Nivolumab',1,8);
/*!40000 ALTER TABLE `medicamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ROLE_USER'),(2,'ROLE_ADMIN');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `solicitudes`
--

DROP TABLE IF EXISTS `solicitudes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `solicitudes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario_id` int NOT NULL,
  `medicamento_id` int NOT NULL,
  `numero_orden` varchar(100) DEFAULT NULL,
  `direccion` text,
  `telefono` varchar(20) DEFAULT NULL,
  `correo` varchar(100) DEFAULT NULL,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `medicamento_id` (`medicamento_id`),
  CONSTRAINT `solicitudes_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `solicitudes_ibfk_2` FOREIGN KEY (`medicamento_id`) REFERENCES `medicamentos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solicitudes`
--

LOCK TABLES `solicitudes` WRITE;
/*!40000 ALTER TABLE `solicitudes` DISABLE KEYS */;
INSERT INTO `solicitudes` VALUES (3,1,10,'ORD12345','Calle Falsa 123','123456789','usuario@example.com','2025-06-05 14:30:00'),(4,4,7,'TP54321','Carrera 45','3102223344','luis@example.com','2025-06-05 19:01:20'),(5,5,3,'OSM12345','Calle 123','3001112233','mari@example.com','2025-06-05 19:01:20'),(6,6,4,'OTD12345','Calle 123','3001112233','luz@example.com','2025-06-05 19:01:20'),(7,7,8,'OHH98765','Av 9 No. 22-55','3205556677','lucia@example.com','2025-06-05 19:01:20'),(8,8,5,'OMR12345','Calle 123','3001112233','maria@example.com','2025-06-05 19:01:20'),(9,9,9,'OTDD11223','Calle Falsa 123','3104445566','laura@example.com','2025-06-05 19:01:20'),(10,10,10,'ORD12345','Calle Falsa Update 123','123456789','modificado@example.com','2025-06-05 14:30:00'),(11,1,10,'ORD12345','Calle Falsa 123','123456789','modificado@example.com','2025-06-05 14:06:49'),(12,1,10,'ORD12345','Calle Falsa 123','123456789','modificado@example.com','2025-06-05 16:27:38'),(13,1,10,'ORD12345','Calle Falsa 123','123456789','modificado@example.com','2025-06-05 16:27:49'),(14,10,10,'ORD12345','Calle Falsa Update 123','123456789','modificado@example.com','2025-06-05 16:28:46');
/*!40000 ALTER TABLE `solicitudes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `enabled` tinyint(1) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'oscar o conor','$2a$10$ag1p7/7HtyCqvZ0X/1HL9u.s.eawKMAxEwt.XEO2ucwl5kngp2khu',1,'oscar@correo.com'),(2,'jhon o conor','$2a$10$LgOuC.5AnWxCYi6Oqgm1bOeXdnuGL9KNmXZxQ9n2KYsYIabS24VsS',1,'oscar@correo.com.co'),(14,'oscar o new conor','$2a$10$I3199EqRUkJumL9VwJ0THu5PLpG06vBNxd1T4Wo8RgbkK808JEaNq',1,'oscar@correonew.com');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_roles`
--

DROP TABLE IF EXISTS `users_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_roles` (
  `user_id` bigint NOT NULL,
  `role_id` bigint NOT NULL,
  UNIQUE KEY `fk_unique_users_roles_id` (`user_id`,`role_id`),
  KEY `fk_users_idx` (`user_id`),
  KEY `fk_roles_idx` (`role_id`),
  CONSTRAINT `fk_roles` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `fk_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_roles`
--

LOCK TABLES `users_roles` WRITE;
/*!40000 ALTER TABLE `users_roles` DISABLE KEYS */;
INSERT INTO `users_roles` VALUES (1,1),(1,2),(2,1),(2,2),(14,1);
/*!40000 ALTER TABLE `users_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Ana Pérez','ana@example.com','$2a$10$abcdefghij1234567890'),(2,'Carlos López','carlos@example.com','$2a$10$abcdefghij1234567890'),(3,'María Díaz','maria@example.com','$2a$10$abcdefghij1234567890'),(4,'Luis Torres','luis@example.com','$2a$10$abcdefghij1234567890'),(5,'Paula Ruiz','paula@example.com','$2a$10$abcdefghij1234567890'),(6,'José García','jose@example.com','$2a$10$abcdefghij1234567890'),(7,'Lucía Fernández','lucia@example.com','$2a$10$abcdefghij1234567890'),(8,'Andrés Ramírez','andres@example.com','$2a$10$abcdefghij1234567890'),(9,'Laura Herrera','laura@example.com','$2a$10$abcdefghij1234567890'),(10,'Diego Martínez','diego@example.com','$2a$10$abcdefghij1234567890');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;