import type { EventEmitter } from '../../stencil-public-runtime';
export declare class OCarousel {
    private carousel;
    private scrollContainer;
    private paginationContainer;
    private prevEnabled;
    private nextEnabled;
    host: HTMLOCarouselElement;
    navigation: boolean;
    pagination: boolean;
    activeSlide: number;
    slides: HTMLOCarouselItemElement[];
    scrolling: boolean;
    oSlideChange: EventEmitter<{
        index: number;
        slide: HTMLOCarouselItemElement;
    }>;
    previous(): Promise<void>;
    next(): Promise<void>;
    goToSlide(index: any): Promise<void>;
    handleActiveSlideChange(): void;
    componentDidLoad(): void;
    handleSlotChange(): void;
    handleKeyDown: (event: KeyboardEvent) => Promise<void>;
    isButton(item: HTMLElement): boolean;
    setNavigation(): void;
    canScrollPrev(): boolean;
    canScrollNext(): boolean;
    isCarouselItem(item: HTMLElement): boolean;
    getSlides(): HTMLOCarouselElement[];
    scrollToSlide(slide: HTMLElement, behavior?: ScrollBehavior): void;
    getClampedValue(value: any, min: any, max: any): any;
    render(): any;
}
