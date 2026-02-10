import type { EventEmitter } from '../../stencil-public-runtime';
import type { OMenuItem } from '../o-menu-item/o-menu-item';
export interface OMenuSelectPayload {
    item: OMenuItem;
}
export declare class OMenu {
    private menu;
    private menuItems;
    private activeItem;
    host: HTMLOMenuElement;
    oMenuSelect: EventEmitter<OMenuSelectPayload>;
    handleClick: (event: MouseEvent) => void;
    handleMouseDown: (event: MouseEvent) => void;
    handleKeyDown: (event: KeyboardEvent) => void;
    handleSlotChange(): Promise<void>;
    isMenuItem(item: HTMLElement): boolean;
    getCurrentItem(): Promise<OMenuItem>;
    setCurrentItem(item: OMenuItem): Promise<void>;
    getMenuItems(): Promise<OMenuItem[]>;
    render(): any;
}
