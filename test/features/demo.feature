Feature: Demo API tests - Google APIs

  Scenario: Status code 200
    Given a request to 'https://google.com/'
    Then I recieve status code 200