-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 29, 2018 at 11:54 PM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.2.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `codecave`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` int(255) NOT NULL,
  `answers` longtext NOT NULL,
  `questionsID` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `answers`, `questionsID`) VALUES
(101706, ',{\"ans\":\"ans1\",\"email\":\"dev@dev.dev\"},{\"ans\":\"ans2\",\"email\":\"dev@dev.dev\"},{\"ans\":\"l;akdj;la\",\"email\":\"kim@kim\"}', 46),
(101707, ',{\"ans\":\"Convert object string to JSON\",\"email\":\"dev@dev.dev\"},{\"ans\":\"al;kjdl;skfjasfdlkjfdsdfmazcxv,.mzx,.vnc.,xmcvn.zx,vmnc,.zxnvc,.xznv,xznv,xnv,xznv,.nzxv,c.nzx,.vn.,zxnv,.znxv.,nzx.,vnzx,.vnc,.zxvn,.zxnv.,xznv,.zxnv,.nxz,.vnzx,v\nal;kjdl;skfjasfdlkjfdsdfmazcxv,.mzx,.vnc.,xmcvn.zx,vmnc,.zxnvc,.xznv,xznv,xnv,xznv,.nzxv,c.nzx,.vn.,zxnv,.znxv.,nzx.,vnzx,.vnc,.zxvn,.zxnv.,xznv,.zxnv,.nxz,.vnzx,v\nal;kjdl;skfjasfdlkjfdsdfmazcxv,.mzx,.vnc.,xmcvn.zx,vmnc,.zxnvc,.xznv,xznv,xnv,xznv,.nzxv,c.nzx,.vn.,zxnv,.znxv.,nzx.,vnzx,.vnc,.zxvn,.zxnv.,xznv,.zxnv,.nxz,.vnzx,v\nal;kjdl;skfjasfdlkjfdsdfmazcxv,.mzx,.vnc.,xmcvn.zx,vmnc,.zxnvc,.xznv,xznv,xnv,xznv,.nzxv,c.nzx,.vn.,zxnv,.znxv.,nzx.,vnzx,.vnc,.zxvn,.zxnv.,xznv,.zxnv,.nxz,.vnzx,v\",\"email\":\"kim@kim\"}', 47),
(101708, ',{\"ans\":\"Just apply this {][]lkaflaknfl\",\"email\":\"kim@kim\"}', 48),
(101709, '', 49),
(101710, ',{\"ans\":\"Simple Input with two items\nSimple Input with two items\nSimple Input with two items\nSimple Input with two items\",\"email\":\"dev@dev.dev\"},{\"ans\":\"Simple Input with two items\nSimple Input with two items\nSimple Input with two items\nSimple Input with two items\nSimple Input with two items\nSimple Input with two items\nSimple Input with two items\nSimple Input with two items\nSimple Input with two items\nSimple Input with two items\nSimple Input with two items\nSimple Input with two items\",\"email\":\"dev@dev.dev\"}', 50),
(101711, '', 51),
(101712, '', 52),
(101713, '', 53),
(101714, '', 54),
(101715, ',{\"ans\":\"tag2\",\"email\":\"dev@dev.dev\"}', 55),
(101716, ',{\"ans\":\"You could use reduce for getting start and end part of the route and return the end for the next start.\",\"email\":\"dev@dev.dev\"},{\"ans\":\"a;ldhal;k\",\"email\":\"dev@dev.dev\"},{\"ans\":\"Another approach is to use map method in combination with slice. For map function, you have to pass a callback function as argument which will be applied for every item from your given array.\",\"email\":\"dev@dev.dev\"}', 56),
(101717, ',{\"ans\":\"You could use reduce for getting start and end part of the route and return the end for the next start.\",\"email\":\"dev@dev.dev\"},{\"ans\":\"Another approach is to use map method in combination with slice. For map function, you have to pass a callback function as argument which will be applied for every item from your given array.\",\"email\":\"kim@kim\"},{\"ans\":\"Another approach is to use map method in combination with slice. For map function, you have to pass a callback function as argument which will be applied for every item from your given array.\",\"email\":\"kim@kim\"}', 57),
(101718, ',{\"ans\":\"This should do the trick\",\"email\":\"dev@dev.dev\"},{\"ans\":\"original\",\"email\":\"dev@dev.dev\"}', 58);

-- --------------------------------------------------------

--
-- Table structure for table `creates`
--

CREATE TABLE `creates` (
  `id` int(11) NOT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `token` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `questions` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `creates`
--

INSERT INTO `creates` (`id`, `userName`, `password`, `email`, `token`, `createdAt`, `updatedAt`, `questions`) VALUES
(9, 'zin', '$2a$10$xzULVwOJZliDW0MjODx0UONKix6JVmGd1UpMybdS62I8xvuBGam0q', 'zin@zin.zin', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VySUQiOjksImlhdCI6MTUyOTg3NDg0M30.Au7IhC-9f_OUbXO54QJGyuFRqwz7SNU7RxRQ4nztTaI', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'ans1'),
(11, 'dev', '$2a$10$T5KbbrhwSMUW9GQFBMjUIeQXzBWMWWSZ7u52vzjoygA3eh56Th3lG', 'dev@dev.dev', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VySUQiOjE3LCJpYXQiOjE1MzIxODIzOTV9.qAnDYdmHfxRtQgzahCAtlHnnJMmrw1wzhaVrvWz2eCI', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'ans2'),
(12, 'abc@gmaiol', '$2a$10$HRQu8oSsuLFxtiEwWU7NGu9QFA8Ao65ubFnP22QxUfUVfoNTYiAT.', 'ATEEB@abc.com', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VySUQiOjEyLCJpYXQiOjE1Mjk5NDQ0MDR9.hfF1YYq9F7tUL9FsowZcR5_-A9IYAHBJY9nWBq4nAjU', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'ans3'),
(13, 'kim', '$2a$10$tTjTbjgQuLgvOwh.k8KO/u91K0RTPKBFPGLw4BUsgj8JYXXo59b9S', 'kim@kim', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVc2VySUQiOjEzLCJpYXQiOjE1MzIyNzQyMjh9.zLkfl3epu9EJ25kNN1bvUCqJ4V6nROv7ZQkh-gT8gN8', '0000-00-00 00:00:00', '0000-00-00 00:00:00', ''),
(14, 'jhon', '$2a$10$fGXFGYm4iAMkuPc9nIMYpu7ZgtiKIX5he6tKM05/q4PdT89E1805C', 'jhon@gmail.com', '', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `question` varchar(255) NOT NULL,
  `tags` longtext NOT NULL,
  `vote` int(11) NOT NULL,
  `dated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `email`, `title`, `question`, `tags`, `vote`, `dated`) VALUES
(57, 'dev@dev.dev', 'Convert array to array of objects with reduce', 'I want to convert optimizedRoute to result. I want to do this with ES6 .reduce(). Here is what I\'ve tried:', '[{\"display\":\"Javascript\",\"value\":\"Javascript\"},{\"display\":\"ReactJs\",\"value\":\"ReactJs\"}]', 0, '2018-07-29 11:22:23'),
(58, 'dev@dev.dev', 'How can I reverse an array in JavaScript without using libraries?', 'I am saving some data in order using arrays, and I want to add a function that the user can reverse the list. I can\'t think of any possible method, so if anybody knows how, please help.', '[{\"display\":\"Javascript\",\"value\":\"Javascript\"}]', 2, '2018-07-29 14:43:47');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20171125081128-create-user.js'),
('20171125081136-create-task.js'),
('20180619115401-create-create.js');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `creates`
--
ALTER TABLE `creates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `vote` (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `SequelizeMeta_name_unique` (`name`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101719;

--
-- AUTO_INCREMENT for table `creates`
--
ALTER TABLE `creates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
