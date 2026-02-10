import { html } from "lit";
// Load the icons data synchronously
let iconsData;
try {
    iconsData = require('/node_modules/@awesome.me/kit-a1ac577d64/icons/metadata/icons.json');
}
catch (error) {
    console.error('Error loading icons data:', error);
    iconsData = {};
}
// Extract icon names from the iconsData
const iconNames = Object.keys(iconsData).flatMap((key) => {
    return key || [];
});
// Check if iconNames is empty
if (iconNames.length === 0) {
    console.warn('No icons available.');
}
export default {
    title: 'Components/Icon',
    argTypes: {
        color: {
            options: ['#1B9DD9', '#2596be', '#062136', '#003c71', '#062136', '#EEF8FC', '#BFC4CD', '#7F909E', '#6B7280'],
            control: { type: 'select' }
        },
        size: {
            options: ['sm', 'md', 'lg'],
            control: { type: 'select' }
        },
        name: { control: 'text' }
    },
    args: {
        name: 'house',
        color: 'oec_blue',
        size: 'md'
    }
};
const Template = {
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light'
        },
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
// Vue Code Snippet
-----------------------
import { OIcon } from "@oui/vue";

<oecui-icon
  name="${args.name}"
  color="${args.color}"
  size="${args.size}"
></oecui-icon>

// React Code Snippet
-----------------------
import { OIcon } from "@oui/react";

<OIcon
  name="${args.name}"
  color="${args.color}"
  size="${args.size}"
></OIcon>
          `;
                }
            }
        }
    },
    render: (args) => html ` <o-icon name=${args.name} color=${args.color} size=${args.size}></o-icon> `
};
export const AllIcons = {
    render: () => {
        // Create a container for the search bar and icons
        const container = document.createElement('div');
        container.className = 'icon-container';
        // Create the search input
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Search icons...';
        searchInput.className = 'search-input';
        // Create a grid container for icons
        const iconGrid = document.createElement('div');
        iconGrid.className = 'icon-grid';
        const copyToClipboard = (text) => {
            const tempInput = document.createElement('input');
            tempInput.value = text;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
        };
        const renderIcons = (filteredNames) => {
            iconGrid.innerHTML = '';
            filteredNames.forEach((iconName) => {
                const iconItem = document.createElement('div');
                iconItem.className = 'icon-item';
                const iconElement = document.createElement('o-icon');
                iconElement.setAttribute('name', iconName);
                iconElement.setAttribute('color', 'oec_blue');
                iconElement.setAttribute('size', 'md');
                // Create tooltip
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = iconName;
                // Add click event to copy icon name
                iconItem.addEventListener('click', () => {
                    copyToClipboard(iconName);
                    showNotification(`Copied: ${iconName}`);
                });
                // Show tooltip on hover
                iconItem.addEventListener('mouseenter', () => {
                    tooltip.style.display = 'block';
                });
                iconItem.addEventListener('mouseleave', () => {
                    tooltip.style.display = 'none';
                });
                iconItem.appendChild(iconElement);
                iconItem.appendChild(tooltip);
                iconGrid.appendChild(iconItem);
            });
        };
        const showNotification = (message) => {
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            container.appendChild(notification);
            setTimeout(() => {
                notification.remove();
            }, 1500);
        };
        // Initial render of all icons
        renderIcons(iconNames);
        searchInput.addEventListener('input', (event) => {
            const searchQuery = event.target.value.toLowerCase();
            const filteredNames = iconNames.filter((iconName) => iconName.toLowerCase().includes(searchQuery));
            renderIcons(filteredNames);
        });
        container.appendChild(searchInput);
        container.appendChild(iconGrid);
        // Create styles
        const style = document.createElement('style');
        style.textContent = `
      .css-s230ta:has(#story--components-icon--all-icons) {
        box-shadow: none;
        border: 1px solid #ddd;
        padding: 1rem;
      }
      .icon-container {
        font-family: "Nunito Sans", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
        width: 98%;
        
      }
      .search-input {
        margin-bottom: 16px;
        width: 98%;
        border-radius: .5rem;
        border: 1px solid rgb(191, 196, 205);
        font-size: .875rem;
        line-height: 1.25rem;
        box-shadow: 1px 1px 5px #eae5e5;
        color: #1f2937;
        padding: .5rem .75rem;
      }
      .search-input:focus-within {
        outline: none;
        border: 1px solid #03A9F4;
      }
      .icon-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
        gap: 16px;
        justify-items: center;
      }
      .icon-item {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        border-radius: .4em;
        cursor : pointer;
        transition: background-color 0.3s;
      }
      .icon-item:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }
      .tooltip {
        display: none;
        position: absolute;
        background-color: #333;
        color: #fff;
        padding: 5px;
        border-radius: 4px;
        font-size: 0.75rem;
        z-index: 10;
      }
      .notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #4caf50;
        color: white;
        padding: 10px;
        border-radius: 5px;
        transition: opacity 0.5s;
      }
    `;
        container.appendChild(style);
        const toggleButton = document.querySelector('.docblock-code-toggle');
        if (toggleButton) {
            toggleButton.style.display = 'none';
        }
        return container;
    },
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                story: 'All icons from the FontAwesome kit with a search bar and copy functionality.'
            }
        }
    }
};
export const Small = Object.assign(Object.assign({}, Template), { args: {
        name: 'house',
        color: 'oec_blue',
        size: 'sm'
    }, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
// Vue Code Snippet
-----------------------
import { OIcon } from "@oui/vue";

<oecui-icon
  name="${args.name}"
  color="${args.color}"
  size="${args.size}"
></oecui-icon>

// React Code Snippet
-----------------------
import { OIcon } from "@oui/react";

<OIcon
  name="${args.name}"
  color="${args.color}"
  size="${args.size}"
></OIcon>
          `;
                }
            },
            description: {
                story: 'A basic solid icon.'
            }
        }
    } });
export const Medium = Object.assign(Object.assign({}, Template), { args: {
        name: 'house',
        color: 'oec_blue',
        size: 'md'
    }, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
// Vue Code Snippet
-----------------------
import { OIcon } from "@oui/vue";

<oecui-icon
  name="${args.name}"
  color="${args.color}"
  size="${args.size}"
></oecui-icon>

// React Code Snippet
-----------------------
import { OIcon } from "@oui/react";

<OIcon
  name="${args.name}"
  color="${args.color}"
  size="${args.size}"
></OIcon>
          `;
                }
            },
            description: {
                story: 'A basic outlined icon.'
            }
        }
    } });
export const Large = Object.assign(Object.assign({}, Template), { args: {
        name: 'house',
        color: 'oec_blue',
        size: 'lg'
    }, parameters: {
        layout: 'centered',
        docs: {
            source: {
                transform: (_, storyContext) => {
                    const { args } = storyContext;
                    return `
// Vue Code Snippet
-----------------------
import { OIcon } from "@oui/vue";

<oecui-icon
  name="${args.name}"
  color="${args.color}"
  size="${args.size}"
></oecui-icon>

// React Code Snippet
-----------------------
import { OIcon } from "@oui/react";

<OIcon
  name="${args.name}"
  color="${args.color}"
  size="${args.size}"
></OIcon>
          `;
                }
            },
            description: {
                story: 'A basic outlined icon.'
            }
        }
    } });
//# sourceMappingURL=o-icon.stories.js.map
