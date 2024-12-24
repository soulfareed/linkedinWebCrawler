LinkedIn Crawler

This project is a LinkedIn web crawler built using Puppeteer, designed to extract structured data from public LinkedIn profiles or company pages. It incorporates basic anti-bot measures to avoid detection and outputs the data in JSON format.

Features

Extracts data from LinkedIn public pages.

Handles pagination or multiple URLs.

Basic anti-bot measures such as random user agents and delays.

Outputs data in a structured JSON format.

Extracted Data

Profiles: Name, Job Title, Location, and Summary/About Section.

Company Pages: Company Name, Industry, Headquarters Location, and Overview/About Section.

Prerequisites

Node.js (v14 or higher)

npm (v6 or higher)

Installation

Clone the repository:

git clone https://github.com/yourusername/linkedin-crawler.git
cd linkedin-crawler

Install dependencies:

npm install

Usage

Update the linkedinUrls array in index.js with the list of LinkedIn profile or company page URLs you want to scrape.

Run the crawler:

node index.js

The extracted data will be saved in output.json in the project directory.

Example Output

For a profile page:

[
    {
        "Name": "John Doe",
        "JobTitle": "Software Engineer",
        "Location": "San Francisco, CA",
        "Summary": "Experienced software engineer specializing in full-stack development."
    }
]

For a company page:

[
    {
        "CompanyName": "TechCorp",
        "Industry": "Information Technology",
        "HeadquartersLocation": "New York, NY",
        "Overview": "TechCorp is a leading provider of IT solutions worldwide."
    }
]

Anti-Bot Measures

Random User-Agent for each request.

Random delays between page requests to mimic human browsing.

Limitations

This crawler is designed for educational purposes and adheres to LinkedIn’s terms of service. Use it responsibly.

Data extraction relies on the current LinkedIn DOM structure. Changes to the structure may require updates to the selectors.

Contributing

Contributions are welcome! Please follow these steps:

Fork the repository.

Create a new branch for your feature or bug fix.

Commit your changes and push them to your fork.

Submit a pull request with a detailed description of your changes.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments

Built with Puppeteer.

Inspired by the need for efficient data extraction from public web pages.
