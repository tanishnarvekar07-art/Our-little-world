# Our Little World ❤️

A romantic, mobile-friendly anniversary website for My Dear Shreeshu.

## Open it
1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. Enter the passcode: `061124`.

## Add your photos
This starter has three cinematic photo placeholders.
1. Put your photos in the `assets` folder (for example `photo-1.jpg`, `photo-2.jpg`, `photo-3.jpg`).
2. Open `script.js` in a text editor.
3. Find the `PHOTOS` array and change it to something like:

```js
const PHOTOS = [
  { src: "assets/photo-1.jpg", alt: "Our favourite memory" },
  { src: "assets/photo-2.jpg", alt: "A day together" },
  { src: "assets/photo-3.jpg", alt: "One of our firsts" }
];
```

Use one entry per slide. For more than three photos, duplicate a `<article class="slide">...</article>` block in `index.html` and add a matching entry in `PHOTOS` in `script.js`. (If you'd like, I can do that part for you when you upload the photos.)

## Add your song
1. Put an audio file you have permission to use in `assets`, named `our-song.mp3` (or use its actual filename).
2. In `script.js`, change:
   `const MUSIC_FILE = "";`
   to:
   `const MUSIC_FILE = "assets/our-song.mp3";`
3. Save the file and reload the page.

The site starts music only after the visitor taps the music button.

## Publish free with GitHub Pages
1. Create/sign in to a GitHub account.
2. Create a new **public** repository, for example `our-little-world`.
3. Upload `index.html`, `style.css`, `script.js`, `README.md`, and the `assets` folder to the repository root.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
6. Wait for GitHub Pages to publish the site. The address will be shown in the Pages settings, typically `https://YOUR-USERNAME.github.io/our-little-world/`.
7. Open the link on your phone to test it, then share it.

GitHub's interface can change. Follow the current prompts shown in repository Settings → Pages.

## Important privacy note
This is a static website. The passcode is a front-end entrance screen, not strong security. The code and message are in `script.js`, and photos/audio uploaded to a public repository may be accessible to anyone with the URL or repository access. Do not put anything on a public website that must remain private. For stronger privacy, use a hosting service with real server-side authentication and access controls.

## Personalisation
The message is stored in `ANNIVERSARY_MESSAGE` in `script.js` and was inserted exactly as supplied in the chat. The anniversary date is not separately displayed.
