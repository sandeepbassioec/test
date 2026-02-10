import { OAlert as OAlert$1, defineCustomElement } from '@oui/core/components/o-alert.js';
import { OAppBar as OAppBar$1, defineCustomElement as defineCustomElement$1 } from '@oui/core/components/o-app-bar.js';
import { OAvatar as OAvatar$1, defineCustomElement as defineCustomElement$2 } from '@oui/core/components/o-avatar.js';
import { OBadge as OBadge$1, defineCustomElement as defineCustomElement$3 } from '@oui/core/components/o-badge.js';
import { OButtonGroup as OButtonGroup$1, defineCustomElement as defineCustomElement$5 } from '@oui/core/components/o-button-group.js';
import { OButton as OButton$1, defineCustomElement as defineCustomElement$4 } from '@oui/core/components/o-button.js';
import { OCallout as OCallout$1, defineCustomElement as defineCustomElement$6 } from '@oui/core/components/o-callout.js';
import { OCard as OCard$1, defineCustomElement as defineCustomElement$7 } from '@oui/core/components/o-card.js';
import { OCarouselItem as OCarouselItem$1, defineCustomElement as defineCustomElement$9 } from '@oui/core/components/o-carousel-item.js';
import { OCarousel as OCarousel$1, defineCustomElement as defineCustomElement$8 } from '@oui/core/components/o-carousel.js';
import { OCheckbox as OCheckbox$1, defineCustomElement as defineCustomElement$a } from '@oui/core/components/o-checkbox.js';
import { ODialog as ODialog$1, defineCustomElement as defineCustomElement$b } from '@oui/core/components/o-dialog.js';
import { ODivider as ODivider$1, defineCustomElement as defineCustomElement$c } from '@oui/core/components/o-divider.js';
import { ODrawer as ODrawer$1, defineCustomElement as defineCustomElement$d } from '@oui/core/components/o-drawer.js';
import { ODropdown as ODropdown$1, defineCustomElement as defineCustomElement$e } from '@oui/core/components/o-dropdown.js';
import { OFooter as OFooter$1, defineCustomElement as defineCustomElement$f } from '@oui/core/components/o-footer.js';
import { OIconButton as OIconButton$1, defineCustomElement as defineCustomElement$h } from '@oui/core/components/o-icon-button.js';
import { OIcon as OIcon$1, defineCustomElement as defineCustomElement$g } from '@oui/core/components/o-icon.js';
import { OLabel as OLabel$1, defineCustomElement as defineCustomElement$i } from '@oui/core/components/o-label.js';
import { OListItem as OListItem$1, defineCustomElement as defineCustomElement$k } from '@oui/core/components/o-list-item.js';
import { OList as OList$1, defineCustomElement as defineCustomElement$j } from '@oui/core/components/o-list.js';
import { OMenuItem as OMenuItem$1, defineCustomElement as defineCustomElement$m } from '@oui/core/components/o-menu-item.js';
import { OMenuLabel as OMenuLabel$1, defineCustomElement as defineCustomElement$n } from '@oui/core/components/o-menu-label.js';
import { OMenu as OMenu$1, defineCustomElement as defineCustomElement$l } from '@oui/core/components/o-menu.js';
import { OOption as OOption$1, defineCustomElement as defineCustomElement$o } from '@oui/core/components/o-option.js';
import { OPopup as OPopup$1, defineCustomElement as defineCustomElement$p } from '@oui/core/components/o-popup.js';
import { ORadioGroup as ORadioGroup$1, defineCustomElement as defineCustomElement$r } from '@oui/core/components/o-radio-group.js';
import { ORadio as ORadio$1, defineCustomElement as defineCustomElement$q } from '@oui/core/components/o-radio.js';
import { OSelect as OSelect$1, defineCustomElement as defineCustomElement$s } from '@oui/core/components/o-select.js';
import { OSidebar as OSidebar$1, defineCustomElement as defineCustomElement$t } from '@oui/core/components/o-sidebar.js';
import { OSkeleton as OSkeleton$1, defineCustomElement as defineCustomElement$u } from '@oui/core/components/o-skeleton.js';
import { OStep as OStep$1, defineCustomElement as defineCustomElement$v } from '@oui/core/components/o-step.js';
import { OStepper as OStepper$1, defineCustomElement as defineCustomElement$w } from '@oui/core/components/o-stepper.js';
import { OTabGroup as OTabGroup$1, defineCustomElement as defineCustomElement$y } from '@oui/core/components/o-tab-group.js';
import { OTabPanel as OTabPanel$1, defineCustomElement as defineCustomElement$z } from '@oui/core/components/o-tab-panel.js';
import { OTab as OTab$1, defineCustomElement as defineCustomElement$x } from '@oui/core/components/o-tab.js';
import { OTable as OTable$1, defineCustomElement as defineCustomElement$A } from '@oui/core/components/o-table.js';
import { OTag as OTag$1, defineCustomElement as defineCustomElement$B } from '@oui/core/components/o-tag.js';
import { OTextarea as OTextarea$1, defineCustomElement as defineCustomElement$C } from '@oui/core/components/o-textarea.js';
import { OTextfield as OTextfield$1, defineCustomElement as defineCustomElement$D } from '@oui/core/components/o-textfield.js';
import { OToast as OToast$1, defineCustomElement as defineCustomElement$E } from '@oui/core/components/o-toast.js';
import { OTooltip as OTooltip$1, defineCustomElement as defineCustomElement$F } from '@oui/core/components/o-tooltip.js';
import { createComponent } from '@stencil/react-output-target/runtime';
import React, { useState, useEffect } from 'react';
import { ThemeManager } from '@oui/core';
export { ThemeManager } from '@oui/core';

const OAlert = /*@__PURE__*/ createComponent({
    tagName: 'o-alert',
    elementClass: OAlert$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onOShow: 'oShow',
        onOHide: 'oHide'
    },
    defineCustomElement: defineCustomElement
});
const OAppBar = /*@__PURE__*/ createComponent({
    tagName: 'o-app-bar',
    elementClass: OAppBar$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$1
});
const OAvatar = /*@__PURE__*/ createComponent({
    tagName: 'o-avatar',
    elementClass: OAvatar$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$2
});
const OBadge = /*@__PURE__*/ createComponent({
    tagName: 'o-badge',
    elementClass: OBadge$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$3
});
const OButton = /*@__PURE__*/ createComponent({
    tagName: 'o-button',
    elementClass: OButton$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$4
});
const OButtonGroup = /*@__PURE__*/ createComponent({
    tagName: 'o-button-group',
    elementClass: OButtonGroup$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$5
});
const OCallout = /*@__PURE__*/ createComponent({
    tagName: 'o-callout',
    elementClass: OCallout$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$6
});
const OCard = /*@__PURE__*/ createComponent({
    tagName: 'o-card',
    elementClass: OCard$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$7
});
const OCarousel = /*@__PURE__*/ createComponent({
    tagName: 'o-carousel',
    elementClass: OCarousel$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onOSlideChange: 'oSlideChange' },
    defineCustomElement: defineCustomElement$8
});
const OCarouselItem = /*@__PURE__*/ createComponent({
    tagName: 'o-carousel-item',
    elementClass: OCarouselItem$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$9
});
const OCheckbox = /*@__PURE__*/ createComponent({
    tagName: 'o-checkbox',
    elementClass: OCheckbox$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onOChange: 'oChange',
        'onO-change': 'oChange'
    },
    defineCustomElement: defineCustomElement$a
});
const ODialog = /*@__PURE__*/ createComponent({
    tagName: 'o-dialog',
    elementClass: ODialog$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onOShow: 'oShow',
        onOHide: 'oHide',
        onORequestClose: 'oRequestClose'
    },
    defineCustomElement: defineCustomElement$b
});
const ODivider = /*@__PURE__*/ createComponent({
    tagName: 'o-divider',
    elementClass: ODivider$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$c
});
const ODrawer = /*@__PURE__*/ createComponent({
    tagName: 'o-drawer',
    elementClass: ODrawer$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onOShow: 'oShow',
        onOHide: 'oHide',
        onORequestClose: 'oRequestClose'
    },
    defineCustomElement: defineCustomElement$d
});
const ODropdown = /*@__PURE__*/ createComponent({
    tagName: 'o-dropdown',
    elementClass: ODropdown$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$e
});
const OFooter = /*@__PURE__*/ createComponent({
    tagName: 'o-footer',
    elementClass: OFooter$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$f
});
const OIcon = /*@__PURE__*/ createComponent({
    tagName: 'o-icon',
    elementClass: OIcon$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$g
});
const OIconButton = /*@__PURE__*/ createComponent({
    tagName: 'o-icon-button',
    elementClass: OIconButton$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$h
});
const OLabel = /*@__PURE__*/ createComponent({
    tagName: 'o-label',
    elementClass: OLabel$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$i
});
const OList = /*@__PURE__*/ createComponent({
    tagName: 'o-list',
    elementClass: OList$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onOItemSelected: 'oItemSelected',
        onOValueChange: 'oValueChange',
        'onO-item-selected': 'oItemSelected',
        'onO-change': 'oValueChange'
    },
    defineCustomElement: defineCustomElement$j
});
const OListItem = /*@__PURE__*/ createComponent({
    tagName: 'o-list-item',
    elementClass: OListItem$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onOItemClick: 'oItemClick' },
    defineCustomElement: defineCustomElement$k
});
const OMenu = /*@__PURE__*/ createComponent({
    tagName: 'o-menu',
    elementClass: OMenu$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onOMenuSelect: 'oMenuSelect' },
    defineCustomElement: defineCustomElement$l
});
const OMenuItem = /*@__PURE__*/ createComponent({
    tagName: 'o-menu-item',
    elementClass: OMenuItem$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$m
});
const OMenuLabel = /*@__PURE__*/ createComponent({
    tagName: 'o-menu-label',
    elementClass: OMenuLabel$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$n
});
const OOption = /*@__PURE__*/ createComponent({
    tagName: 'o-option',
    elementClass: OOption$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$o
});
const OPopup = /*@__PURE__*/ createComponent({
    tagName: 'o-popup',
    elementClass: OPopup$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$p
});
const ORadio = /*@__PURE__*/ createComponent({
    tagName: 'o-radio',
    elementClass: ORadio$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$q
});
const ORadioGroup = /*@__PURE__*/ createComponent({
    tagName: 'o-radio-group',
    elementClass: ORadioGroup$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onOChange: 'oChange',
        'onO-change': 'oChange'
    },
    defineCustomElement: defineCustomElement$r
});
const OSelect = /*@__PURE__*/ createComponent({
    tagName: 'o-select',
    elementClass: OSelect$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onOChange: 'oChange',
        'onO-change': 'oChange'
    },
    defineCustomElement: defineCustomElement$s
});
const OSidebar = /*@__PURE__*/ createComponent({
    tagName: 'o-sidebar',
    elementClass: OSidebar$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$t
});
const OSkeleton = /*@__PURE__*/ createComponent({
    tagName: 'o-skeleton',
    elementClass: OSkeleton$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$u
});
const OStep = /*@__PURE__*/ createComponent({
    tagName: 'o-step',
    elementClass: OStep$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onOSelectedChanged: 'oSelectedChanged' },
    defineCustomElement: defineCustomElement$v
});
const OStepper = /*@__PURE__*/ createComponent({
    tagName: 'o-stepper',
    elementClass: OStepper$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: { onOStepSelected: 'oStepSelected' },
    defineCustomElement: defineCustomElement$w
});
const OTab = /*@__PURE__*/ createComponent({
    tagName: 'o-tab',
    elementClass: OTab$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$x
});
const OTabGroup = /*@__PURE__*/ createComponent({
    tagName: 'o-tab-group',
    elementClass: OTabGroup$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onOTabShow: 'oTabShow',
        onOTabHide: 'oTabHide'
    },
    defineCustomElement: defineCustomElement$y
});
const OTabPanel = /*@__PURE__*/ createComponent({
    tagName: 'o-tab-panel',
    elementClass: OTabPanel$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$z
});
const OTable = /*@__PURE__*/ createComponent({
    tagName: 'o-table',
    elementClass: OTable$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$A
});
const OTag = /*@__PURE__*/ createComponent({
    tagName: 'o-tag',
    elementClass: OTag$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onORemove: 'oRemove',
        'onO-remove': 'oRemove',
        onOClick: 'oClick',
        'onO-click': 'oClick'
    },
    defineCustomElement: defineCustomElement$B
});
const OTextarea = /*@__PURE__*/ createComponent({
    tagName: 'o-textarea',
    elementClass: OTextarea$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$C
});
const OTextfield = /*@__PURE__*/ createComponent({
    tagName: 'o-textfield',
    elementClass: OTextfield$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {},
    defineCustomElement: defineCustomElement$D
});
const OToast = /*@__PURE__*/ createComponent({
    tagName: 'o-toast',
    elementClass: OToast$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onOShow: 'oShow',
        onOHide: 'oHide'
    },
    defineCustomElement: defineCustomElement$E
});
const OTooltip = /*@__PURE__*/ createComponent({
    tagName: 'o-tooltip',
    elementClass: OTooltip$1,
    // @ts-ignore - ignore potential React type mismatches between the Stencil Output Target and your project.
    react: React,
    events: {
        onOShow: 'oShow',
        onOHide: 'oHide',
        onOAfterShow: 'oAfterShow',
        onOAfterHide: 'oAfterHide'
    },
    defineCustomElement: defineCustomElement$F
});

/**
 * React hook for OUI theme management
 *
 * Provides reactive access to the current theme state and theme switching functionality.
 * Automatically updates when theme changes occur.
 *
 * @returns Object containing current theme, theme setter, and available themes
 *
 * @example
 * ```tsx
 * function ThemeSwitcher() {
 *   const { theme, setTheme, availableThemes } = useOuiTheme();
 *
 *   return (
 *     <select value={theme} onChange={(e) => setTheme(e.target.value as OuiThemeName)}>
 *       {availableThemes.map(themeName => (
 *         <option key={themeName} value={themeName}>{themeName}</option>
 *       ))}
 *     </select>
 *   );
 * }
 * ```
 */
function useOuiTheme() {
    const [theme, setThemeState] = useState(ThemeManager.getCurrentTheme());
    useEffect(() => {
        const handleThemeChange = (event) => {
            const themeEvent = event;
            setThemeState(themeEvent.detail.theme);
        };
        document.addEventListener('oui-theme-changed', handleThemeChange);
        return () => document.removeEventListener('oui-theme-changed', handleThemeChange);
    }, []);
    const setTheme = (themeName) => {
        ThemeManager.setTheme(themeName);
    };
    return {
        theme,
        setTheme,
        availableThemes: ThemeManager.getAvailableThemes()
    };
}

export { OAlert, OAppBar, OAvatar, OBadge, OButton, OButtonGroup, OCallout, OCard, OCarousel, OCarouselItem, OCheckbox, ODialog, ODivider, ODrawer, ODropdown, OFooter, OIcon, OIconButton, OLabel, OList, OListItem, OMenu, OMenuItem, OMenuLabel, OOption, OPopup, ORadio, ORadioGroup, OSelect, OSidebar, OSkeleton, OStep, OStepper, OTab, OTabGroup, OTabPanel, OTable, OTag, OTextarea, OTextfield, OToast, OTooltip, useOuiTheme };
