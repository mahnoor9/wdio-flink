Feature: The weather app

  Scenario Outline: As a user, I can shop cheapest things

    Given User is on the weather app
    When User reads the temperature and decides what to shop
    When User adds cheapest products into the cart
    Then Checkout should be successful
