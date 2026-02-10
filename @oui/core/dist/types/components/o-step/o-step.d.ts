import type { EventEmitter } from '../../stencil-public-runtime';
export declare class OStep {
    hostElement: HTMLOStepElement;
    /** Visual variant of the step */
    variant: 'completed' | 'active' | 'default' | 'error';
    /** Indicates whether the step is currently selected */
    selected: boolean;
    /** Enables click interaction for the step */
    clickable: boolean;
    /** Position of the step within the stepper (internal) */
    position: 'first' | 'last' | 'single' | 'inner';
    /** (Circle Number) Index of the step (starting from 1) */
    index: number;
    /** Emitted when the step is clicked and its selection state changes */
    oSelectedChanged: EventEmitter<HTMLOStepElement>;
    private get baseIconClasses();
    private handleClick;
    render(): any;
}
