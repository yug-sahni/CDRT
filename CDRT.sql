create database CDRT;
use CDRT;

-- Create Users Table
CREATE TABLE Users (
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,
    Email VARCHAR(100) NOT NULL UNIQUE,
    PhoneNumber VARCHAR(15),
    Location VARCHAR(100),
    DateOfRegistration TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Disasters Table
CREATE TABLE Disasters (
    DisasterID INT PRIMARY KEY AUTO_INCREMENT,
    DisasterType VARCHAR(50) NOT NULL,
    LocationX DOUBLE NOT NULL,
    LocationY DOUBLE NOT NULL,
    DateOfOccurrence DATE NOT NULL,
    SeverityLevel ENUM('Low', 'Moderate', 'High') NOT NULL,
    Status ENUM('Ongoing', 'Resolved') DEFAULT 'Ongoing',
    AuthoritiesReached BOOLEAN DEFAULT FALSE
);

-- Create Reports Table
CREATE TABLE Reports (
    ReportID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    DisasterID INT,
    ReportDescription TEXT NOT NULL,
    ReportDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Status ENUM('Pending', 'Verified', 'Resolved') DEFAULT 'Pending',
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE,
    FOREIGN KEY (DisasterID) REFERENCES Disasters(DisasterID) ON DELETE CASCADE
);

show tables;
desc Reports;
desc Disasters;
desc Users;