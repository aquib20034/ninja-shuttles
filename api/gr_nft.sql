-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 02, 2024 at 06:48 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gr_nft`
--

-- --------------------------------------------------------

--
-- Table structure for table `whitelists`
--

CREATE TABLE `whitelists` (
  `id` int NOT NULL,
  `whitelisted_address` text,
  `inj_address` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `whitelists`
--

INSERT INTO `whitelists` (`id`, `whitelisted_address`, `inj_address`, `created_at`) VALUES
(1, '0x44d374ED62d4738b86439123E9862424d3f2Fa90', NULL, '2024-02-02 18:03:26'),
(2, '0xss02abc338F77892805E0fc0c7F58CB9c43CB34f2c', '1234567890765432', '2024-02-02 18:42:17'),
(103, '12345678', NULL, '2024-02-02 18:45:00'),
(104, '12345679', NULL, '2024-02-02 18:45:00'),
(105, '12345680', NULL, '2024-02-02 18:45:00'),
(106, '12345681', NULL, '2024-02-02 18:45:00'),
(107, '12345682', NULL, '2024-02-02 18:45:00'),
(108, '12345683', NULL, '2024-02-02 18:45:00'),
(109, '12345684', NULL, '2024-02-02 18:45:00'),
(110, '12345685', NULL, '2024-02-02 18:45:00'),
(111, '12345686', NULL, '2024-02-02 18:45:00'),
(112, '12345687', NULL, '2024-02-02 18:45:00'),
(113, '12345688', NULL, '2024-02-02 18:45:00'),
(114, '12345692', NULL, '2024-02-02 18:45:00'),
(115, '12345693', NULL, '2024-02-02 18:45:00'),
(116, '12345694', NULL, '2024-02-02 18:45:00'),
(117, '12345695', NULL, '2024-02-02 18:45:00'),
(118, '12345696', NULL, '2024-02-02 18:45:00'),
(119, '12345697', NULL, '2024-02-02 18:45:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `whitelists`
--
ALTER TABLE `whitelists`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `whitelists`
--
ALTER TABLE `whitelists`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
