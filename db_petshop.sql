-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 04, 2026 at 05:02 AM
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
-- Database: `db_petshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `daftar_hewan`
--

CREATE TABLE `daftar_hewan` (
  `id` int NOT NULL,
  `jenis_hewan` varchar(50) DEFAULT NULL,
  `spesies` varchar(50) DEFAULT NULL,
  `jumlah` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `daftar_hewan`
--

INSERT INTO `daftar_hewan` (`id`, `jenis_hewan`, `spesies`, `jumlah`) VALUES
(1, 'Kucing Persia', 'Kucing', 5),
(2, 'Gorilla', 'Kera', 1),
(3, 'Beruang Madu', 'Beruang', 5),
(4, 'Harimau Sumatera', '10', 10),
(5, 'Siamang', 'Kera', 2),
(6, 'Kelelawar', 'Megachiroptera', 1),
(7, 'Musang ', 'Musang Bulan', 2),
(8, 'Kucing Persia Turki', 'Kucing', 3),
(9, 'Anjing German Sheperd', 'Anjing', 2),
(10, 'Burung Kakaktua', 'Burung', 15),
(11, 'Kelinci Anggora', 'Kelinci', 5);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `daftar_hewan`
--
ALTER TABLE `daftar_hewan`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `daftar_hewan`
--
ALTER TABLE `daftar_hewan`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
