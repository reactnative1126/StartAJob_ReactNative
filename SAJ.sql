-- --------------------------------------------------------
-- Host:                         5.79.66.76
-- Server version:               5.6.23-log - MySQL Community Server (GPL)
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for mekashronstartajob_directory
CREATE DATABASE IF NOT EXISTS `mekashronstartajob_directory` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_bin */;
USE `mekashronstartajob_directory`;

-- Dumping structure for table mekashronstartajob_directory.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `JobCategoryID` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `ParentID` smallint(6) DEFAULT NULL,
  `Level` tinyint(3) unsigned DEFAULT NULL,
  `JobCategoryName` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `JobCategoryName_he` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `JobCategoryName_ru` varchar(100) COLLATE utf8_bin DEFAULT NULL,
  `JobsCount` int(11) unsigned DEFAULT '0',
  `proCount` mediumint(8) unsigned DEFAULT '0',
  `isLocal` tinyint(3) unsigned DEFAULT '0',
  `TabIndex` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `isDeleted` tinyint(3) unsigned DEFAULT '0',
  `CostToBid` decimal(10,2) unsigned DEFAULT '0.00',
  `CostPerNotification` decimal(10,2) unsigned DEFAULT '2.00',
  `LastUsed` datetime DEFAULT NULL,
  `classified` tinyint(4) NOT NULL DEFAULT '0',
  `SEO_title` varchar(70) COLLATE utf8_bin DEFAULT NULL,
  `SEO_title_he` varchar(70) COLLATE utf8_bin DEFAULT NULL,
  `SEO_title_ru` varchar(70) COLLATE utf8_bin DEFAULT NULL,
  `SEO_Description` varchar(160) COLLATE utf8_bin DEFAULT NULL,
  `SEO_description_he` varchar(160) COLLATE utf8_bin DEFAULT NULL,
  `SEO_description_ru` varchar(160) COLLATE utf8_bin DEFAULT NULL,
  `UpdateDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`JobCategoryID`),
  KEY `ParentID` (`ParentID`),
  KEY `isDeleted` (`isDeleted`),
  KEY `classified` (`classified`),
  KEY `isLocal` (`isLocal`)
) ENGINE=MyISAM AUTO_INCREMENT=163 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Data exporting was unselected.

-- Dumping structure for table mekashronstartajob_directory.categories_skills
CREATE TABLE IF NOT EXISTS `categories_skills` (
  `JobCategoryID` smallint(6) DEFAULT NULL,
  `SkillID` smallint(6) DEFAULT NULL,
  `CreatedDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` tinyint(4) DEFAULT '1' COMMENT '0=Suggested, 1=Approved',
  `SuggestedCount` smallint(6) DEFAULT '0',
  `SuggestedEntityID` varchar(600) COLLATE utf8_bin DEFAULT NULL COMMENT 'Array of entityID',
  `last_used_date` datetime DEFAULT NULL,
  `selected_count` mediumint(8) unsigned NOT NULL DEFAULT '0',
  UNIQUE KEY `CategorySkill` (`JobCategoryID`,`SkillID`),
  KEY `JobCategoryID` (`JobCategoryID`),
  KEY `SkillID` (`SkillID`),
  KEY `status` (`status`),
  KEY `last_used_date` (`last_used_date`),
  KEY `selected_count` (`selected_count`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Data exporting was unselected.

-- Dumping structure for table mekashronstartajob_directory.entities_skills
CREATE TABLE IF NOT EXISTS `entities_skills` (
  `ratingType` tinyint(4) DEFAULT '1' COMMENT '1-worker rating, 2-emploer rating',
  `skillID` smallint(6) DEFAULT NULL,
  `entityID` int(10) DEFAULT NULL,
  `jobID` int(10) DEFAULT '0',
  `experienceID` int(10) DEFAULT '0',
  `createdDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `completedjobs` int(11) DEFAULT '0',
  `ratingLevel` int(1) DEFAULT '0',
  UNIQUE KEY `skill` (`skillID`,`entityID`,`ratingType`,`jobID`,`experienceID`),
  KEY `skillID` (`skillID`),
  KEY `entityID` (`entityID`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Data exporting was unselected.

-- Dumping structure for table mekashronstartajob_directory.jobs
CREATE TABLE IF NOT EXISTS `jobs` (
  `JobID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `JobCategoryID` smallint(6) NOT NULL,
  `EntityID` int(11) NOT NULL,
  `HiredEntityID` int(11) DEFAULT '0',
  `JobStatus` tinyint(3) unsigned NOT NULL DEFAULT '0',
  `Title` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `Description` varchar(5000) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `Budget` double(10,2) unsigned DEFAULT NULL,
  `CurrencyID` tinyint(3) unsigned DEFAULT NULL,
  `EmploymentType` tinyint(3) unsigned DEFAULT NULL COMMENT '1=One time. 2=Permanent full time. 3=Permanent part time. 4=Permanent from home.f',
  `JobLocation_address` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `JobLocation_cityID` int(11) unsigned DEFAULT NULL,
  `JobLocation_districtID` int(11) unsigned DEFAULT NULL,
  `JobLocation_districtID2` int(11) unsigned DEFAULT NULL,
  `JobLocation_stateISO` varchar(4) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `JobLocation_countryISO3166` varchar(3) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `JobLocation_altitude` double DEFAULT '0',
  `JobLocation_latitude` double DEFAULT '0',
  `WorkingHour_Start` time DEFAULT NULL,
  `WorkingHour_HoursPerDay` tinyint(4) DEFAULT NULL,
  `WorkingHour_DayPerWeek` tinyint(4) DEFAULT NULL,
  `PrefferedRegionID` varchar(150) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL COMMENT '1=North America, 2=Western Europe, 3=Eastern Europe, 4=India/Southern Asia, 5=Eastern Asia, 6=Middle East & Central Asia, 7=Central & South America, 8=Africa, 9=Australia/Oceania ',
  `PrefferedCityId` int(11) unsigned DEFAULT NULL,
  `PrefferedCountryISO3166` varchar(3) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `PrefferedStateISO` varchar(4) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `CreateDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `HiredDate` datetime DEFAULT NULL,
  `UpdateDate` datetime DEFAULT NULL,
  `ExpiredDate` datetime DEFAULT NULL,
  `CancelDate` datetime DEFAULT NULL,
  `CancelReason` smallint(5) unsigned DEFAULT NULL,
  `CancelReasonRemark` varchar(200) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `NewMessages` smallint(6) DEFAULT '0',
  `MinBid` mediumint(9) unsigned DEFAULT '0',
  `MaxBid` mediumint(9) unsigned DEFAULT '0',
  `TotalBids` smallint(6) unsigned DEFAULT '0',
  `costtobidUSD` double(5,2) unsigned NOT NULL DEFAULT '0.00',
  `isMailed` tinyint(4) NOT NULL DEFAULT '0',
  `isShowPhone` tinyint(1) NOT NULL DEFAULT '0',
  `PrivateJob` tinyint(1) NOT NULL DEFAULT '0',
  `isDonation` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `DonationDonners` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `DonationAmountCollected` double(10,2) unsigned NOT NULL DEFAULT '0.00',
  `Published_on_FB` tinyint(4) NOT NULL DEFAULT '0',
  `Published_on_twttr` tinyint(4) NOT NULL DEFAULT '0',
  `Published_on_Ig` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`JobID`),
  UNIQUE KEY `JobTitle` (`Title`,`EntityID`),
  KEY `JobCategoryID` (`JobCategoryID`),
  KEY `EntityID` (`EntityID`),
  KEY `HiredEntityID` (`HiredEntityID`),
  KEY `JobStatus` (`JobStatus`),
  KEY `ExpiredDate` (`ExpiredDate`),
  KEY `HiredDate` (`HiredDate`),
  KEY `isMailed` (`isMailed`),
  KEY `Title` (`Title`),
  KEY `JobLocation_altitude` (`JobLocation_altitude`),
  KEY `JobLocation_latitude` (`JobLocation_latitude`),
  KEY `isDonation` (`isDonation`)
) ENGINE=MyISAM AUTO_INCREMENT=15382 DEFAULT CHARSET=utf8;

-- Data exporting was unselected.

-- Dumping structure for table mekashronstartajob_directory.jobs_bids
CREATE TABLE IF NOT EXISTS `jobs_bids` (
  `BidID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `EntityID` int(10) DEFAULT NULL,
  `JobID` int(10) unsigned DEFAULT NULL,
  `DesiredSalary` decimal(10,2) unsigned DEFAULT '0.00',
  `CurrencyID` tinyint(3) unsigned DEFAULT NULL,
  `ComplateWithin` smallint(6) unsigned DEFAULT '0',
  `BidStatus` tinyint(3) unsigned DEFAULT '0' COMMENT '1-Waiting for approve,2-Hired, 3-Rejected, 4-Completed, 5-Cancel only worker can call it and only when bidstatus=1, 6-Completed and rated.',
  `CreateDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdateDate` datetime DEFAULT NULL,
  `deadline` datetime DEFAULT NULL,
  `BidOwnerNewMessages` smallint(6) unsigned DEFAULT '0',
  `JobOwnerNewMessages` smallint(6) unsigned DEFAULT '0',
  `UncoverPhoneDate` datetime DEFAULT NULL,
  PRIMARY KEY (`BidID`),
  UNIQUE KEY `Bid` (`EntityID`,`JobID`),
  KEY `EntityID` (`EntityID`),
  KEY `JobID` (`JobID`),
  KEY `BidStatus` (`BidStatus`)
) ENGINE=MyISAM AUTO_INCREMENT=8515 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Data exporting was unselected.

-- Dumping structure for table mekashronstartajob_directory.jobs_bids_messages
CREATE TABLE IF NOT EXISTS `jobs_bids_messages` (
  `MessageID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `EntityID` int(10) unsigned DEFAULT NULL,
  `BidID` int(11) unsigned DEFAULT NULL,
  `JobID` int(11) unsigned DEFAULT NULL,
  `MessageText` varchar(2000) COLLATE utf8_bin DEFAULT NULL,
  `CreateDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `Status` tinyint(2) DEFAULT '0' COMMENT '0=New, 1=Read, 2=Deleted',
  `type` tinyint(2) DEFAULT '0' COMMENT '0=normal, 1=system, 2=dispute',
  PRIMARY KEY (`MessageID`),
  KEY `EntityID` (`EntityID`),
  KEY `BidID` (`BidID`),
  KEY `JobID` (`JobID`),
  KEY `Status` (`Status`)
) ENGINE=MyISAM AUTO_INCREMENT=11640 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Data exporting was unselected.

-- Dumping structure for table mekashronstartajob_directory.jobs_bids_terms
CREATE TABLE IF NOT EXISTS `jobs_bids_terms` (
  `termID` int(11) NOT NULL AUTO_INCREMENT,
  `jobID` int(11) NOT NULL,
  `bidID` int(11) DEFAULT NULL,
  `requestedDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `requestedEntityID` int(11) NOT NULL,
  `salary` double(10,2) DEFAULT NULL,
  `deadline` datetime DEFAULT NULL,
  `employerApprove` tinyint(4) DEFAULT '0' COMMENT '1=approve, 2=rejected',
  `employeeApprove` tinyint(4) DEFAULT '0' COMMENT '1=approve, 2=rejected',
  `ExpiryDate` datetime DEFAULT NULL,
  PRIMARY KEY (`termID`),
  KEY `bidID` (`bidID`),
  KEY `jobID` (`jobID`),
  KEY `ExpiryDate` (`ExpiryDate`)
) ENGINE=MyISAM AUTO_INCREMENT=6380 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Data exporting was unselected.

-- Dumping structure for table mekashronstartajob_directory.jobs_complete_request
CREATE TABLE IF NOT EXISTS `jobs_complete_request` (
  `requestsID` int(11) NOT NULL AUTO_INCREMENT,
  `CreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `statusID` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0=New request, 1=Approved request, 2=Declined request',
  `StatusDate` datetime NOT NULL,
  `jobID` int(11) NOT NULL,
  `bidID` int(11) NOT NULL,
  `entityID` int(11) NOT NULL,
  `salary` double(10,2) NOT NULL,
  PRIMARY KEY (`requestsID`),
  UNIQUE KEY `request` (`jobID`,`bidID`),
  KEY `jobID` (`jobID`),
  KEY `entityID` (`entityID`)
) ENGINE=MyISAM AUTO_INCREMENT=58 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Data exporting was unselected.

-- Dumping structure for table mekashronstartajob_directory.jobs_skills
CREATE TABLE IF NOT EXISTS `jobs_skills` (
  `JobSkillID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `OwnerEntityID` int(10) unsigned DEFAULT '0',
  `JobID` int(10) unsigned DEFAULT '0',
  `SkillID` smallint(5) unsigned NOT NULL,
  `RatingLevel` tinyint(4) DEFAULT '0',
  `HiredEntityID` int(10) DEFAULT '0',
  PRIMARY KEY (`JobSkillID`),
  UNIQUE KEY `JobSkill` (`JobID`,`SkillID`,`OwnerEntityID`,`HiredEntityID`),
  KEY `JobID` (`JobID`),
  KEY `OwnerEntityID` (`OwnerEntityID`),
  KEY `AssignedEntityID` (`HiredEntityID`)
) ENGINE=MyISAM AUTO_INCREMENT=30510 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Data exporting was unselected.

-- Dumping structure for table mekashronstartajob_directory.skills
CREATE TABLE IF NOT EXISTS `skills` (
  `SkillID` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `SkillName` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `SkillName_he` varchar(50) DEFAULT NULL,
  `SkillName_ru` varchar(50) DEFAULT NULL,
  `status` tinyint(4) DEFAULT '0' COMMENT '0=Suggested, 1=Approved',
  `costToBidUSD` float DEFAULT '0',
  `SEO_title` varchar(70) DEFAULT NULL,
  `SEO_title_he` varchar(70) DEFAULT NULL,
  `SEO_title_ru` varchar(70) DEFAULT NULL,
  `SEO_description` varchar(160) DEFAULT NULL,
  `SEO_description_he` varchar(160) DEFAULT NULL,
  `SEO_description_ru` varchar(160) DEFAULT NULL,
  `UpdateDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `allow_photo_upload` tinyint(3) unsigned DEFAULT '1',
  PRIMARY KEY (`SkillID`),
  UNIQUE KEY `Skill` (`SkillName`),
  KEY `status` (`status`),
  KEY `UpdateDate` (`UpdateDate`)
) ENGINE=MyISAM AUTO_INCREMENT=781 DEFAULT CHARSET=utf8;

-- Data exporting was unselected.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
