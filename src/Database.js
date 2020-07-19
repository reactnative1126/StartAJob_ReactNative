import * as SQLite from 'expo-sqlite';

const database_name = "StartAJob.db";
const database_version = "1.0";
const database_description = "SQLite React Offline Database";
const database_size = 200000;




export default class Database {
    openDatabase() {
        return SQLite.openDatabase(
            database_name,
            database_version,
            database_description,
            database_size
        );
    }
    initDatabase(db) {
        if (db) {
            db.transaction((tx) => {
                tx.executeSql(`DROP TABLE IF EXISTS categories`, []);
                tx.executeSql(`CREATE TABLE IF NOT EXISTS categories (` +
                    `JobCategoryID INTEGER NOT NULL, ` + 
                    `ParentID INTEGER DEFAULT NULL, ` +
                    `Level INTEGER DEFAULT NULL, ` +
                    `JobCategoryName TEXT DEFAULT NULL, ` +
                    `JobCategoryName_he TEXT DEFAULT NULL, ` +
                    `JobCategoryName_ru TEXT DEFAULT NULL, ` +
                    `JobsCount INTEGER DEFAULT 0, ` +
                    `proCount INTEGER DEFAULT 0, ` +
                    `isLocal INTEGER DEFAULT 0, ` +
                    `TabIndex INTEGER NOT NULL DEFAULT 0, ` +
                    `isDeleted INTEGER DEFAULT 0, ` +
                    `CostToBid NUMERIC DEFAULT 0.00, ` +
                    `CostPerNotification NUMERIC DEFAULT 2.00, ` +
                    `LastUsed NUMERIC DEFAULT NULL, ` +
                    `classified INTEGER NOT NULL DEFAULT 0, ` +
                    `SEO_title TEXT DEFAULT NULL, ` +
                    `SEO_title_he TEXT DEFAULT NULL, ` +
                    `SEO_title_ru TEXT DEFAULT NULL, ` +
                    `SEO_Description TEXT DEFAULT NULL, ` +
                    `SEO_description_he TEXT DEFAULT NULL, ` +
                    `SEO_description_ru TEXT DEFAULT NULL, ` +
                    `UpdateDate TEXT DEFAULT NULL` +
                    `);`);
                // tx.executeSql(`CREATE TABLE IF NOT EXISTS categories_skills (` +
                //     `JobCategoryID INTEGER DEFAULT NULL, ` +
                //     `SkillID INTEGER DEFAULT NULL, ` +
                //     `CreatedDate TEXT, ` +
                //     `status INTEGER DEFAULT 1, ` +
                //     `SuggestedCount INTEGER DEFAULT 0, ` +
                //     `SuggestedEntityID TEXT DEFAULT NULL, ` +
                //     `last_used_date NUMERIC DEFAULT NULL, ` +
                //     `selected_count INTEGER NOT NULL DEFAULT 0` +
                //     ');');
                // tx.executeSql(`CREATE TABLE IF NOT EXISTS entities_skills (` +
                //     `ratingType INTEGER DEFAULT 1, ` +
                //     `skillID INTEGER DEFAULT NULL, ` +
                //     `entityID INTEGER DEFAULT NULL, ` +
                //     `jobID INTEGER DEFAULT 0, ` +
                //     `experienceID INTEGER DEFAULT 0, ` +
                //     `createdDate TEXT, ` +
                //     `completedjobs INTEGER DEFAULT 0, ` +
                //     `ratingLevel INTEGER DEFAULT 0` +
                //     `);`);
                tx.executeSql(`DROP TABLE IF EXISTS jobs`, []);
                tx.executeSql(`CREATE TABLE IF NOT EXISTS jobs (` +
                    `JobID INTEGER NOT NULL, ` +
                    `MainJobCategoryID INTEGER NOT NULL, ` +
                    `JobCategoryID INTEGER NOT NULL, ` +
                    `classified INTEGER DEFAULT 0, ` +
                    `EntityID INTEGER NOT NULL, ` +
                    `EntityFirstName TEXT DEFAULT NULL, ` +
                    `EntityLastName TEXT DEFAULT NULL, ` +
                    `EntityCity TEXT DEFAULT NULL, ` +
                    `EntityCountry TEXT DEFAULT NULL, ` + 
                    `ISO3166 TEXT DEFAULT NULL, ` +
                    `Title TEXT DEFAULT NULL, ` +
                    `Description TEXT DEFAULT NULL, ` +
                    `Budget NUMERIC DEFAULT NULL, ` +
                    `CurrencyID INTEGER DEFAULT NULL, ` +
                    `EmploymentType INTEGER DEFAULT NULL, ` +
                    `PrefferedCountryISO3166 TEXT DEFAULT NULL, ` +
                    `PrefferedStateISO TEXT DEFAULT NULL, ` +
                    `PrefferedCityId INTEGER DEFAULT NULL, ` +
                    `HiredEntityID INTEGER DEFAULT 0, ` +
                    `isShowPhone INTEGER NOT NULL DEFAULT 0, ` +
                    `MinOffer INTEGER DEFAULT 0, ` +
                    `MaxOffer INTEGER DEFAULT 0, ` +
                    `BidsCount INTEGER DEFAULT 0, ` + 
                    `JobLocation_altitude REAL DEFAULT 0, ` +
                    `JobLocation_latitude REAL DEFAULT 0, ` +
                    `CostToBidUSD REAL NOT NULL DEFAULT 0.00, ` +
                    `CostToBidLocal REAL NOT NULL DEFAULT 0.00, ` +
                    `CostToBidSymbol TEXT DEFAULT NULL, ` + 
                    `NewMessages INTEGER DEFAULT 0, ` +
                    `CreateDate TEXT DEFAULT NULL, ` +
                    `UpdateDate NUMERIC DEFAULT NULL, ` +
                    `JobStatus INTEGER NOT NULL DEFAULT 0, ` +
                    `JobLocation_address TEXT DEFAULT NULL, ` +
                    `JobLocation_cityID INTEGER DEFAULT NULL, ` +
                    `cityname TEXT DEFAULT NULL, ` +
                    `JobLocation_districtID INTEGER DEFAULT NULL, ` +
                    `JobLocation_districtID2 INTEGER DEFAULT NULL, ` +
                    `JobLocation_stateISO TEXT DEFAULT NULL, ` +
                    `JobLocation_countryISO3166 TEXT DEFAULT NULL, ` +
                    `CountryId INTEGER DEFAULT NULL, ` + 
                    `CountryName TEXT DEFAULT '', ` +
                    `ExpiredDate NUMERIC DEFAULT NULL, ` +
                    `WorkingHour_Start NUMERIC DEFAULT NULL, ` +
                    `WorkingHour_HoursPerDay INTEGER DEFAULT NULL, ` +
                    `WorkingHour_DayPerWeek INTEGER DEFAULT NULL, ` +
                    `CancelDate NUMERIC DEFAULT NULL, ` +
                    `CancelReason INTEGER unsigned DEFAULT NULL, ` +
                    `CancelReasonRemark TEXT DEFAULT NULL, ` +
                    `DisputeExpiryDate NUMERIC DEFAULT NULL, ` +
                    `employerEscrowId INTEGER DEFAULT NULL, ` +
                    `employeeEscrowId INTEGER DEFAULT NULL, ` +
                    `RequestedEntityId INTEGER DEFAULT NULL, ` +
                    `Distance INTEGER DEFAULT NULL, ` +
                    `Company TEXT DEFAULT NULL, ` +
                    `PlacedBid INTEGER DEFAULT NULL,` +
                    `Phone TEXT DEFAULT NULL, ` +
                    `Rating REAL DEFAULT NULL` +
                    `);`);

                // tx.executeSql(`CREATE TABLE IF NOT EXISTS jobs (` +
                //     `JobID INTEGER NOT NULL, ` +
                //     `JobCategoryID INTEGER NOT NULL, ` +
                //     `EntityID INTEGER NOT NULL, ` +
                //     `HiredEntityID INTEGER DEFAULT 0, ` +
                //     `JobStatus INTEGER NOT NULL DEFAULT 0, ` +
                //     `Title TEXT DEFAULT NULL, ` +
                //     `Description TEXT DEFAULT NULL, ` +
                //     `Budget NUMERIC DEFAULT NULL, ` +
                //     `CurrencyID INTEGER DEFAULT NULL, ` +
                //     `EmploymentType INTEGER DEFAULT NULL, ` +
                //     `JobLocation_address TEXT DEFAULT NULL, ` +
                //     `JobLocation_cityID INTEGER DEFAULT NULL, ` +
                //     `JobLocation_districtID INTEGER DEFAULT NULL, ` +
                //     `JobLocation_districtID2 INTEGER DEFAULT NULL, ` +
                //     `JobLocation_stateISO TEXT DEFAULT NULL, ` +
                //     `JobLocation_countryISO3166 TEXT DEFAULT NULL, ` +
                //     `JobLocation_altitude REAL DEFAULT 0, ` +
                //     `JobLocation_latitude REAL DEFAULT 0, ` +
                //     `WorkingHour_Start NUMERIC DEFAULT NULL, ` +
                //     `WorkingHour_HoursPerDay INTEGER DEFAULT NULL, ` +
                //     `WorkingHour_DayPerWeek INTEGER DEFAULT NULL, ` +
                //     `PrefferedRegionID TEXT DEFAULT NULL, ` +
                //     `PrefferedCityId INTEGER DEFAULT NULL, ` +
                //     `PrefferedCountryISO3166 TEXT DEFAULT NULL, ` +
                //     `PrefferedStateISO TEXT DEFAULT NULL, ` +
                //     `CreateDate TEXT, ` +
                //     `HiredDate NUMERIC DEFAULT NULL, ` +
                //     `UpdateDate NUMERIC DEFAULT NULL, ` +
                //     `ExpiredDate NUMERIC DEFAULT NULL, ` +
                //     `CancelDate NUMERIC DEFAULT NULL, ` +
                //     `CancelReason INTEGER unsigned DEFAULT NULL, ` +
                //     `CancelReasonRemark TEXT DEFAULT NULL, ` +
                //     `NewMessages INTEGER DEFAULT 0, ` +
                //     `MinBid INTEGER DEFAULT 0, ` +
                //     `MaxBid INTEGER DEFAULT 0, ` +
                //     `TotalBids INTEGER DEFAULT 0, ` +
                //     `costtobidUSD REAL NOT NULL DEFAULT 0.00, ` +
                //     `isMailed INTEGER NOT NULL DEFAULT 0, ` +
                //     `isShowPhone INTEGER NOT NULL DEFAULT 0, ` +
                //     `PrivateJob INTEGER NOT NULL DEFAULT 0, ` +
                //     `isDonation INTEGER NOT NULL DEFAULT 0, ` +
                //     `DonationDonners INTEGER NOT NULL DEFAULT 0, ` +
                //     `DonationAmountCollected REAL NOT NULL DEFAULT 0.00, ` +
                //     `Published_on_FB INTEGER NOT NULL DEFAULT 0, ` +
                //     `Published_on_twttr INTEGER NOT NULL DEFAULT 0, ` +
                //     `Published_on_Ig INTEGER NOT NULL DEFAULT 0` +
                //     `);`);
                // tx.executeSql(`CREATE TABLE IF NOT EXISTS jobs_bids (` +
                //     `BidID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ` +
                //     `EntityID INTEGER DEFAULT NULL, ` +
                //     `JobID INTEGER DEFAULT NULL, ` +
                //     `DesiredSalaryREAL DEFAULT 0.00, ` +
                //     `CurrencyID INTEGER DEFAULT NULL, ` +
                //     `ComplateWithin INTEGER DEFAULT 0, ` +
                //     `BidStatus INTEGER DEFAULT 0, ` +
                //     `CreateDate TEXT DEFAULT NULL, ` +
                //     `UpdateDate NUMERIC DEFAULT NULL, ` +
                //     `deadline NUMERIC DEFAULT NULL, ` +
                //     `BidOwnerNewMessages INTEGER DEFAULT 0, ` +
                //     `JobOwnerNewMessages INTEGER DEFAULT 0, ` +
                //     `UncoverPhoneDate NUMERIC DEFAULT NULL` +
                //     `);`);
                // tx.executeSql(`CREATE TABLE IF NOT EXISTS jobs_bids_messages (` +
                //     `MessageID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ` +
                //     `EntityID INTEGER DEFAULT NULL, ` +
                //     `BidID INTEGER DEFAULT NULL, ` +
                //     `JobID INTEGER DEFAULT NULL, ` +
                //     `MessageText TEXT DEFAULT NULL, ` +
                //     `CreateDate TEXT NULL DEFAULT NULL, ` +
                //     `Status INTEGER DEFAULT 0, ` +
                //     `type INTEGER DEFAULT 0` +
                //     `);`);
                // tx.executeSql(`CREATE TABLE IF NOT EXISTS jobs_bids_terms (` +
                //     `termID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ` +
                //     `jobID INTEGER NOT NULL, ` +
                //     `bidID INTEGER DEFAULT NULL, ` +
                //     `requestedDate TEXT DEFAULT NULL, ` +
                //     `requestedEntityID INTEGER NOT NULL, ` +
                //     `salary REAL DEFAULT NULL, ` +
                //     `deadline NUMERIC DEFAULT NULL, ` +
                //     `employerApprove INTEGER DEFAULT 0, ` +
                //     `employeeApprove INTEGER DEFAULT 0, ` +
                //     `ExpiryDate NUMERIC DEFAULT NULL` +
                //     `);`);
                // tx.executeSql(`CREATE TABLE IF NOT EXISTS jobs_complete_request (` +
                //     `requestsID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ` +
                //     `CreatedDate TEXT NOT NULL DEFAULT NULL, ` +
                //     `statusID INTEGER NOT NULL DEFAULT 0, ` +
                //     `StatusDate NUMERIC NOT NULL, ` +
                //     `jobID INTEGER NOT NULL, ` +
                //     `bidID INTEGER NOT NULL, ` +
                //     `entityID INTEGER NOT NULL, ` +
                //     `salary REAL NOT NULL` +
                //     `);`);
                // tx.executeSql(`CREATE TABLE IF NOT EXISTS jobs_skills (` +
                //     `JobSkillID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ` +
                //     `OwnerEntityID INTEGER DEFAULT 0, ` +
                //     `JobID INTEGER DEFAULT 0, ` +
                //     `SkillID INTEGER NOT NULL, ` +
                //     `RatingLevel INTEGER DEFAULT 0, ` +
                //     `HiredEntityID INTEGER DEFAULT 0` +
                //     `);`);
                tx.executeSql(`CREATE TABLE IF NOT EXISTS skills (` +
                    `SkillID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, ` +
                    `SkillName TEXT DEFAULT NULL, ` +
                    `SkillName_he TEXT DEFAULT NULL, ` +
                    `SkillName_ru TEXT DEFAULT NULL, ` +
                    `status INTEGER DEFAULT 0, ` +
                    `costToBidUSD REAL DEFAULT 0, ` +
                    `SEO_title TEXT DEFAULT NULL, ` +
                    `SEO_title_he TEXT DEFAULT NULL, ` +
                    `SEO_title_ru TEXT DEFAULT NULL, ` +
                    `SEO_description TEXT DEFAULT NULL, ` +
                    `SEO_description_he TEXT DEFAULT NULL, ` +
                    `SEO_description_ru TEXT DEFAULT NULL, ` +
                    `UpdateDate TEXT DEFAULT NULL, ` +
                    `allow_photo_upload INTEGER DEFAULT 1` +
                    `);`);
            });
        } else {
            console.log("None Database in InitDatabase");
        }
    };

    addCategories(db, categories) {
        if (db) {
            db.transaction((tx) => {
                categories.map((category) => {
                    tx.executeSql(`INSERT INTO categories ( JobCategoryID, ParentID, Level, JobCategoryName, JobsCount, proCount, isLocal, classified, SEO_title, SEO_description) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ? );`, [ category.JobCategoryID, category.ParentID, category.Level, category.JobCategoryName, category.JobsCount, category.proCount, category.isLocal, category.classified, category.SEO_title, category.SEO_description ]);
                });
            });
            this.getCategories(db);
        } else {
            console.log("None Database in InitDatabase");
        }
    }

    getCategories(db) {
        if (db) {
            db.transaction((tx) => {
                tx.executeSql(`SELECT * FROM categories;`, [], (trans, { rows }) => {
                    console.log(rows);
                });
            });
        } else {
            console.log("None Database in InitDatabase");
        }
    }

    addJobs(db, jobs) {
        if (db) {
            db.transaction((tx) => {
                jobs.map((job) => {
                    tx.executeSql(`INSERT INTO categories ( JobID, JobCategoryID, EntityID, JobCategoryName, JobsCount, proCount, isLocal, classified, SEO_title, SEO_description) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ? );`, [ category.JobCategoryID, category.ParentID, category.Level, category.JobCategoryName, category.JobsCount, category.proCount, category.isLocal, category.classified, category.SEO_title, category.SEO_description ]);
                });
            });
            // this.getJobs(db);
        } else {
            console.log("None Database in InitDatabase");
        }
    }
}