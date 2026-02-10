import type { EventEmitter } from '../../stencil-public-runtime';
export declare class OListItem {
    hostElement: HTMLOListItemElement;
    private listItemRef?;
    value: string;
    selected: boolean;
    disabled: boolean;
    name: string;
    oItemClick: EventEmitter<{
        value: string;
        native: MouseEvent;
    }>;
    private radioRef;
    handleValueChange(): void;
    setRadio(show: boolean): Promise<void>;
    setSelected(selected: boolean): Promise<void>;
    setFocus(options?: FocusOptions): Promise<void>;
    selectedHandler(): void;
    disabledHandler(): void;
    private handleRadioChange;
    componentWillLoad(): void;
    render(): any;
}
