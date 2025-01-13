const plugin = require('tailwindcss/plugin');

/**
 * @param {Object} themeJson — Content of the theme.json file
 * @returns {Object} An object containing the formatted spacing sizes for Tailwind
 */
function extractSpacingSizes(themeJson) {
    if (!themeJson?.settings?.spacing?.spacingSizes) {
        return {};
    }

    return themeJson.settings.spacing.spacingSizes.reduce((acc, size) => {
        if (size.slug && size.size) {
            acc[size.slug] = size.size;
        }
        return acc;
    }, {});
}

/**
 * Tailwind plugin to convert theme.json configurations to Tailwind configuration
 */
module.exports = plugin.withOptions(
    function(options = {}) {
        return function({ addBase, theme }) {
            // This function will be called by Tailwind when generating styles
        }
    },
    function(options = {}) {
        const themeJson = options.themeJson || {};

        return {
            theme: {
                extend: {
                    spacing: extractSpacingSizes(themeJson)
                }
            }
        }
    }
); 