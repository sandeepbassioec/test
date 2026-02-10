import type { EventEmitter } from '../../stencil-public-runtime';
export declare class OStepper {
    hostElement: HTMLOStepperElement;
    /**
     * The index of the currently selected step
     */
    selectedIndex: number;
    /**
     * Enables click navigation on the steps
     */
    clickable: boolean;
    /**
     * Emitted when the selected step changes
     */
    oStepSelected: EventEmitter<number>;
    private observer?;
    /**
     * Flags to disable the MutationObserver for unit tests
     */
    static DISABLE_MUTATION_OBSERVER: boolean;
    /**
     * Get all steps in the stepper
     */
    private getSteps;
    /**
     * Sets the selected step to the specified index
     */
    setSelectedIndex(index: number): Promise<void>;
    /**
     * Watch for changes in the selected index
     */
    selectedIndexHandler(): void;
    /**
     * Listen for step selection events
     */
    onStepSelectionChanged(event: CustomEvent<HTMLOStepElement>): void;
    /**
     * Update all steps with proper properties
     */
    private updateSteps;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    componentDidRender(): void;
    render(): any;
}
