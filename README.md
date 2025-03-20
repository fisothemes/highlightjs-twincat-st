# TwinCAT ST Syntax Highlighting for Highlight.js

## Overview
This repository provides a **Highlight.js** language definition for **TwinCAT Structured Text (ST)**, allowing for proper syntax highlighting in mdBook, web applications, and documentation.

## Features
- **Syntax highlighting** for TwinCAT Structured Text (ST) / IEC 61131-3
- **Supports Highlight.js** with `language-iec-st`
- **Includes keywords, functions, types, and operators**
- **Easy integration** with mdBook and web applications

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/fisothemes/highlightjs-twincat-st.git
   ```
2. Copy `src/iecst.js` into your **Highlight.js** `src/languages/` directory.
3. Rebuild Highlight.js with:
   ```bash
   node tools/build.js
   ```
4. Load the newly built `highlight.min.js` in your project.

## Usage
To enable syntax highlighting, simply use the **`language-iec-st`** class inside your `<pre><code>` blocks:

```html
<pre>
    <code class="language-iec-st">
        PROGRAM MAIN
        VAR
            fSpeed : LREAL;
        END_VAR
        fSpeed := 10.5;
        END_PROGRAM
    </code>
</pre>
```

For mdBook, download `highlight.js` from the CDN, override the mdbook `highlight.js` file by creating a `theme/` folder in the root directory of `book.toml`, pasting the CDN `highlight.js` file in there and append the contents of `src/iecst.js` to it.


## Contributing
Contributions are welcome! To add more features:
1. Fork this repository.
2. Add your changes.
3. Submit a pull request.

## Acknowledgements
This project was inspired by the [**Highlight.js**](https://github.com/highlightjs/highlight.js) framework and the need for **TwinCAT ST** support in documentation and web applications.

