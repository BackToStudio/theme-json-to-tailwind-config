# @backto/theme-json-to-tailwind-config

A Tailwind CSS plugin that automatically synchronizes spacing values from your WordPress `theme.json` file with your Tailwind configuration.

[![npm version](https://img.shields.io/npm/v/@backto/theme-json-to-tailwind-config.svg)](https://www.npmjs.com/package/@backto/theme-json-to-tailwind-config)

## Features

- 🔄 Automatic synchronization between `theme.json` and Tailwind config
- 🎯 Zero configuration needed
- 🚀 Seamless integration with WordPress block editor
- ⚡️ Lightweight with no dependencies

## Installation

```bash
npm install @backto/theme-json-to-tailwind-config
```

## Setup

In your `tailwind.config.js`:

```js
js
const themeJson = require('./PATH_TO_YOUR_THEME/theme.json');
import themeJsonToTailwind from '@backto/theme-json-to-tailwind-config';

module.exports = {
    content: [
    // your content configuration
    ],
    plugins: [
        themeJsonToTailwind({
        themeJson: themeJson
        })
    ]
}
```


## Usage

### WordPress Theme.json Configuration

Define your spacing values in your `theme.json`:

```json
{
    "settings": {
        // ...
        "spacing": {
            //..
            "spacingSizes": [
                //..
                {
                    "name": "Extra small",
                    "slug": "xs",
                    "size": "1.25rem"
                },
                {
                    "name": "Small",
                    "slug": "sm",
                    "size": "2rem"
                }
            ]
        }
    }
}
```


### Using in Your Templates

The plugin automatically generates Tailwind utility classes based on your `theme.json` spacing values:

```html
<div class="mt-xs">...</div>
<div class="mb-sm">...</div>
```

This will generate the following CSS:

```css
.mt-20 { margin-top: 1.25rem; }
.mb-30 { margin-bottom: 2rem; }
```

## How It Works

The plugin:
1. Reads the `spacingSizes` array from your `theme.json`
2. Converts the values into Tailwind-compatible spacing units
3. Extends Tailwind's spacing configuration with your custom values

## Requirements

- Tailwind CSS v3.0.0 or higher (peer dependency)
- WordPress 5.8+ (for theme.json support)
- Node.js 18 or higher

## API Reference

### Plugin Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `themeJson` | `Object` | Yes | Your WordPress theme.json configuration object |
