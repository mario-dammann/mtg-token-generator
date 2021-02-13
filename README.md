# Custom MTG token generator

This generator lets you generate custom tokens for Magic: The Gathering. You can define all necessary token parameters (e.g. name, power/toughness, image, text) and print it on a sheet (DIN A4) via the browser of your choice. Check the [demo](http://mariodammann.de/projects/mtg-token-generator/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes

### Prerequisites

1. Some kind of web server (e.g. via [XAMPP](https://www.apachefriends.org/index.html) on windows).
2. [Sass](https://sass-lang.com/install) (only if you want to change the default styling)


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/webdamn/mtg-token-generator.git
   ```
2. Run your webserver

3. Watch Sass files (optionally)
   ```CMD
   sass --watch scss/styles.scss css/styles.css
   ```

## How to use

1. Open in web browser of your choice
2. Add tokens via the select
3. Open browser print function (allow background images, 100% scale, disable header/footer)
    1. allow background images
    2. set scale to 100%
    3. disable header/footer
    4. no extra border/spacing
    5. use "A4" format
4. Print on sheet
5. Cut out your new tokens and enjoy :metal:

## Creating your own tokens

1. Open file **js/tokens.js**
2. Add new token objects to the array and customize them via the supported properties

| Property         | Value                                                                                           |
|------------------|-----------------------------------------------------------------------------------------------------|
| **label**<br>(required) | The label for the token that is used as represention in the select                                  |
| **image**<br>(required) | The filename of the background-image used for the token (format: **NAME.EXTENSION**)                    |
| **color**<br>(required) | The color of the token. Use usual letter that is used in MTG for the colors (e.g. "W" for white)    |
| **name**<br>(required)  | The name of the token. Use normal types (e.g. "Cat Beast") or unique name for legendary tokens      |
| **values**       | The power and toughness of the token (only if token is a creature)                                  |
| **type**<br>(required)  | The type of the token (e.g. "Creature - Cat Beast" or "Artifact - Treasure")                        |
| **text**         | The text box of the token. Add any keyword (e.g. "Reach"), abilities (Tap effects) or other effects.  |

3. Add images to the **images** folder

## Customizing the layout/design

1. Open file **scss/_variables.scss**
2. Adjust the variables to your liking

## Copyright of example images
[@anniedoesntknow](https://www.instagram.com/anniedoesntknow/)
