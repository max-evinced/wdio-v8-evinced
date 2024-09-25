Feature: Capture the Evinced Demo Site

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the Evinced Demo Page
    Then Stop Evinced

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
