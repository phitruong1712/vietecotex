# Website Replication Project

This project contains a local replication of the Alcantara website, structured for easy editing and content replacement.

## Directory Structure

The main website files are located in the `site/` directory:

- `site/index.html`: The main homepage file. Edit this to change text and structure.
- `site/wp-content/uploads/`: Contains images and media. You can replace images here or update the references in `index.html` to point to your new images.
- `site/fonts...`: Local copies of Google Fonts and other assets.

## Running the Website Locally

To view the website, you need to run the provided Python server which handles the correct MIME types for fonts:

1.  Open a terminal in this directory.
2.  Run:
    ```bash
    python3 serve.py
    ```
3.  Open your browser and go to `http://localhost:8081/`.

## Replacing Content

1.  **Text**: Open `site/index.html` in your code editor. Search for the text you want to change (e.g., "ALCANTARA: A MULTI-FACETED UNIVERSE") and replace it with your company profile.
2.  **Images**:
    - Look for `<img>` tags in `index.html`.
    - Place your new images in `site/wp-content/uploads/` (or a new `images` folder).
    - Update the `src` attributes in `index.html` to point to your new images.
3.  **Styles**: The main CSS is in `site/wp-content/themes/alcantara/assets/styles/main.min.css`. Since it is minified, it is recommended to add a new CSS file (e.g., `custom.css`) and link it in `index.html` to override styles, rather than editing the minified file directly.

## Notes

- The original site was built with WordPress, so the file structure reflects that (`wp-content`, etc.).
- Some dynamic features (forms, search backend, etc.) will not work as this is a static replication.

