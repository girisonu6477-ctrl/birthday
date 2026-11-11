# Dona Birthday Surprise — Mobile Website

A small, mobile-first birthday website made with plain HTML, CSS, and JavaScript. It has an opening surprise screen, a full-screen photo hero, swipeable photo cards, scroll-reveal animations, a personal note reveal, floating petals, and a birthday confetti interaction.

## Preview locally

1. Extract the ZIP file.
2. Open the `dona-birthday-site` folder.
3. Double-click `index.html` to open it in a browser.

For the most reliable local preview, use VS Code:
- Open the folder in VS Code.
- Install the **Live Server** extension if you do not already have it.
- Right-click `index.html` → **Open with Live Server**.

The website is designed for phone screens (up to 430px wide). On a desktop browser, it stays centered in a phone-width layout.

## Personalize the message

Open `index.html` and search for:
- `Happy Birthday` to edit the headline.
- `Dear Dona,` to edit the birthday note.
- `Wishing you the happiest birthday` to edit the sign-off.
- Photo captions such as `A lovely glow` if you want different captions.

To replace a photo, put your new image in `assets/` and update the matching `src` in `index.html`. Keep the image names as they are if you simply want to replace the current photos.

## Publish it so Dona can open it on her phone

### Option 1 — GitHub Pages (free)

1. Sign in to GitHub and create a new **public** repository, for example `dona-birthday`.
2. Extract this ZIP on your computer.
3. Upload the *contents* of the `dona-birthday-site` folder (the `index.html`, `styles.css`, `script.js`, and `assets` folder) to the repository's root.
4. Open the repository's **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then click **Save**.
7. Wait a minute or two. GitHub Pages will show your public website address in the Pages section.
8. Open that address on your phone to test it, then send it to Dona.

Official guide: https://pages.github.com/

### Option 2 — Netlify Drop (quick drag and drop)

1. Extract the ZIP.
2. Open https://app.netlify.com/drop and sign in.
3. Drag the extracted `dona-birthday-site` folder onto the page.
4. Netlify will publish it and provide a public link you can share.

## Before sharing

- Test the link on your own phone first.
- The site uses the photos included in this folder. Anyone with the public link may be able to view them, so share it only if you have permission to use these photos.
- The page uses Google Fonts when internet access is available; it still works with fallback fonts if they cannot load.
- No tracking, database, login, or paid service is required.
# birthday
