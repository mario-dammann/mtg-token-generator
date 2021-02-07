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
2. Add new token objects to the array and customize them via the supported options
3. Add images to the **images** folder

## Customizing the layout/design

1. Open file **scss/_variables.scss**
2. Adjust the variables to your liking

## Copyright of example images
[@anniedoesntknow](https://www.instagram.com/anniedoesntknow/)
