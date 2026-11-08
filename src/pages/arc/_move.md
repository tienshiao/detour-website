<!-- Not rendered: held back until Detour can import from Arc (TASK-293). Rewrite around the importer then. -->

## Move your setup by hand

Detour doesn't import from Arc yet, so moving over is a short manual job. Do the first part while Arc still opens.

### In Arc, before December 22

1. Choose **Arc › Settings**, select **Advanced**, then **Export Data**, and save the file. Arc writes **Arc Data Export.md**, with a section for each Space listing its Favorites, pinned tabs, folders and other tabs as links.
2. To copy just one folder's links, right-click the folder in Arc's sidebar and choose **Copy All Links**.
3. If you saved passwords in Arc rather than in a password manager, export them too. Arc keeps them per Profile in its Chromium password settings (**Arc › Settings › Profiles**, then **Password**); import the file into Apple's Passwords app or the password manager you'll use with Detour.
4. Note your Air Traffic Control routes (**Arc › Settings › Links**) so you can set them up again.

### In Detour

1. **Make Detour your browser.** In **Detour › Settings › General**, click **Set as Default Browser**.
2. **Add your Profiles.** In **Settings › Profiles**, click **+** for each Arc profile you used, such as Work and Personal.
3. **Add your Spaces.** In **Settings › Spaces**, click **+** for each Arc Space, then give it a name, an emoji, a color and its Profile.
4. **Pin your tabs.** Switch to a Space, open each link from your export with <kbd>⌘T</kbd> (paste it and press Return), then press <kbd>⌘D</kbd> to pin it. For a folder, right-click an empty part of the sidebar, choose **New Folder**, and drag the pinned tabs into it.
5. **Add your Favorites.** Drag a tab onto the row of icons at the top of the sidebar.
6. **Sign in again.** Logins and cookies can't come across from Arc, so sign in to your sites once in each Profile. If you use 1Password, install its extension (next step) and approve Detour in the 1Password app.
7. **Add your extensions.** Choose **Extensions › Add Extensions…** to open the Chrome Web Store, then click **Add to Chrome** on each extension. Extensions stay off in Private windows unless you allow them in **Settings › Extensions**.
8. **Route your links.** Recreate your Air Traffic Control routes in **Settings › Links**. Little Arc's <kbd>⌥⌘N</kbd> already opens Quick Detour.

To open a batch of links at once, paste them into Terminal after `open -a Detour`, separated by spaces. Each one opens as a tab in the Space you're in, unless one of your link routes sends it somewhere else.
