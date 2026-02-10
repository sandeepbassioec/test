const React = require('react');
module.exports = {
	OAlert: ({ variant, open, handleCloseClick, children }) => {
		let variantClass = '';
		switch (variant) {
			case 'success':
				variantClass = 'border-border-status-success';
				break;
			case 'neutral':
				variantClass = 'border-border-status-neutral';
				break;
			case 'warning':
				variantClass = 'border-border-status-warning';
				break;
			case 'danger':
				variantClass = 'border-border-status-error';
				break;
			default:
				variantClass = 'border-border-status-info';
				break;
		}
		return (
			<div
				className={`${open ? 'block' : 'hidden'} ${variantClass} p-4 rounded-radius-md flex items-center justify-between bg-background-default text-content-default border-t-width-xl`}
				role="alert"
				aria-hidden={!open}
			>
				<span className="flex-1">{children}</span>
				<button data-testid="close-button" onClick={handleCloseClick} className="mock-icon-button">
					Close
				</button>
			</div>
		);
	},
	OAppBar: ({ children, ...rest }) => {
		return (
			<header data-testid="app-bar" className="mock-app-bar" {...rest}>
				{children}
			</header>
		);
	},
	OAvatar: ({ initials, label, children, ...rest }) => {
		const display = initials
			? initials
					.replace(/[^a-zA-Z]/g, '')
					.toUpperCase()
					.slice(0, 2)
			: children
				? null
				: 'default';

		return (
			<div data-testid="avatar" aria-label={label} className="mock-avatar" {...rest}>
				{display ? (
					<span data-testid="avatar-initials">{display}</span>
				) : (
					<span data-testid="avatar-icon">{children}</span>
				)}
			</div>
		);
	},
	OBadge: ({ variant = 'default', color = 'uncategorized', children, ...rest }) => {
		const mockCategoricalColors = {
			brand: { color: '#1B9DD9', textColor: '#E6F4FA' },
			order: { color: '#1B9DD9', textColor: '#E6F4FA' },
			payment: { color: '#542F7D', textColor: '#F0ECF7' },
			shipping: { color: '#3D857C', textColor: '#ECF5F4' },
			uncategorized: { color: '#6B7280', textColor: '#F3F4F6' }
		};

		let variantClass = '';
		switch (variant) {
			case 'default':
				variantClass = 'bg-accent_blue_1';
				break;
			case 'order':
				variantClass = 'bg-accent_blue_1';
				break;
			case 'neutral':
				variantClass = 'bg-tab_grey';
				break;
			case 'shipping':
				variantClass = 'bg-[#3D857C]';
				break;
			case 'payment':
				variantClass = 'bg-[#542F7D]';
				break;
			default:
				variantClass = '';
		}

		const colorStyles = {
			backgroundColor: mockCategoricalColors[color].textColor,
			border: `1px solid ${mockCategoricalColors[color].color}`,
			color: mockCategoricalColors[color].color
		};

		return (
			<div
				data-testid="badge"
				className={`mock-badge text-sm inline-flex items-center justify-center font-inter font-medium rounded-full px-3 py-1 max-w-full truncate ${variantClass}`}
				style={colorStyles}
				{...rest}
			>
				<span className="truncate">{children}</span>
			</div>
		);
	},
	OButton: ({ children, type, variant, className, onClick, disabled, ...rest }) => (
		<button
			type={type}
			className={`oui-button oui-button-${variant} ${className}`}
			onClick={onClick}
			disabled={disabled}
			data-testid={`button-${children.toLowerCase().replace(/ /g, '-')}`}
			{...rest}
		>
			{children}
		</button>
	),
	OButtonGroup: ({ children, ...rest }) => {
		return (
			<div data-testid="button-group" className="mock-button-group" {...rest}>
				{children}
			</div>
		);
	},
	OCallout: ({ children, ...rest }) => {
		return (
			<div className="bg-background-subtle p-4 rounded-radius-lg" {...rest}>
				{children}
			</div>
		);
	},
	OCard: ({ children, ...rest }) => {
		return (
			<div data-testid="card" className="mock-card" {...rest}>
				{children}
			</div>
		);
	},
	OCarousel: ({ navigation, pagination, onOGoToSlide, children, ...rest }) => {
		// use state to get active
		const carouselRef = React.useRef(null);
		const [carouselItems, setCarouselItems] = React.useState([]);
		const [activeItem, setActiveItem] = React.useState(null);

		const handleSlotChange = () => {
			const items = Array.from(carouselRef.current.querySelectorAll('o-carousel-item'));
			setCarouselItems(items);
			setActiveItem(0);
		};
		const previous = () => {
			if (onOGoToSlide) {
				onOGoToSlide({ detail: { index: active - 1, slide: carouselItems[activeItem - 1] } });
			}
		};
		const next = () => {
			if (onOGoToSlide) {
				onOGoToSlide({ detail: { index: active + 1, slide: carouselItems[activeItem + 1] } });
			}
		};
		const goToSlide = (index) => {
			if (onOGoToSlide) {
				onOGoToSlide({ detail: { index: index, slide: carouselItems[index] } });
			}
		};
		return (
			<div
				data-testid="ocarousel"
				className={`mock-card grid grid-cols-[min-content_1fr_min-content] grid-rows-[1fr_min-content] items-center min-h-full min-w-full relative py-4 ${navigation ? 'gap-x-4' : ''} ${pagination ? 'gap-y-4' : ''}`}
				{...rest}
			>
				<div
					className="grid grid-flow-col auto-cols-[100%] auto-rows-[100%] size-full overflow-auto overflow-y-hidden overscroll-x-contain snap-mandatory snap-x relative rounded-radius-lg focus:outline-width-lg focus:-outline-offset-2 focus-visible:outline-width-lg focus:outline-focus-ring-color-border-default focus-visible:ring-focus-ring-color-border-default"
					aria-atomic="true"
				>
					{children}
				</div>
				{navigation && (
					<div className="contents">
						<button
							data-testid="previousbutton"
							onClick={() => previous()}
							className="mock-icon-button col-start-1 col-end-auto row-start-1 row-end-auto auto-cols-min flex flex-none items-center ml-2"
							aria-label="Previous slide"
							aria-controls="scroll-container"
						>
							Previous
						</button>
						<button
							data-testid="nextbutton"
							onClick={() => next()}
							className="mock-icon-button col-start-3 col-end-auto row-start-1 row-end-auto flex flex-none items-center mr-2"
							aria-label="Next slide"
							aria-controls="scroll-container"
						>
							Next
						</button>
					</div>
				)}
				{pagination && (
					<div className="flex flex-wrap row-start-2 col-span-3 gap-2 justify-center">
						{React.Children.toArray(children).map((_, index) => (
							<button
								key={`carousel-dot-${index}`}
								className={`block cursor-pointer bg-none rounded-full p-0 m-0 ${index === activeItem ? 'bg-background-brand-knockout size-4' : 'bg-background-brand border-width-sm border-border-default size-3.5'} focus:outline-width-lg focus:-outline-offset-0 focus-visible:outline-width-lg focus:outline-focus-ring-color-border-default focus-visible:ring-focus-ring-color-border-default`}
								onClick={() => goToSlide(index)}
							></button>
						))}
					</div>
				)}
			</div>
		);
	},
	OCarouselItem: ({ children, ...rest }) => {
		return (
			<div
				data-testid="ocarouselitem"
				className="flex flex-col snap-start snap-always w-full max-h-full overflow-auto justify-center"
				{...rest}
			>
				{children}
			</div>
		);
	},
	OCheckbox: ({
		checked,
		disabled,
		label,
		nameValue,
		value,
		onChange,
		onOChange,
		'onO-change': onOChangeQuoted,
		required,
		errorText,
		...rest
	}) => {
		const finalOnOChange = onOChangeQuoted || onOChange;
		const id = nameValue;
		return (
			<div className="flex flex-col body-default antialiased">
				<div className="flex items-center">
					<input
						type="checkbox"
						id={id}
						name={nameValue}
						checked={checked}
						disabled={disabled}
						value={value}
						required={required}
						data-testid={`checkbox-${nameValue}`}
						onChange={(e) => {
							const isChecked = e.target.checked;
							if (finalOnOChange) {
								finalOnOChange({
									target: { checked: isChecked, name: nameValue },
									detail: { checked: isChecked }
								});
							} else if (onChange) {
								onChange(e);
							}
						}}
						{...rest}
					/>
					<span className="ml-2 flex items-center">
						<label
							htmlFor={id}
							className={`label-default ${errorText ? 'text-color-status-error' : 'text-color-status-default'}`}
						>
							{label}
							{required && <span>&nbsp;*</span>}
						</label>
					</span>
				</div>
				{errorText && <div className="body-default mt-1 text-content-status-error">{errorText}</div>}
			</div>
		);
	},
	ODialog: ({ open, label, noClose, onORequestClose, children, ...rest }) => {
		const handleClick = (source) => {
			if (onORequestClose) {
				onORequestClose({ detail: { source } });
			}
		};
		return (
			<dialog
				data-testid="dialog"
				className={open ? 'flex items-center justify-center fixed inset-0 z-50' : ''}
				{...rest}
			>
				{open && (
					<>
						<div
							tabIndex="-1"
							className="fixed inset-0 bg-black bg-opacity-60 z-60 transition-opacity"
							onClick={() => handleClick('overlay')}
						></div>
						<div
							className="fixed z-60 overflow-hidden flex items-center my-4 justify-center rounded-lg px-4 sm:px-6 w-[37.5em]"
							role="dialog"
							aria-modal="true"
						>
							<div className="bg-white shadow-dialog w-full overflow-auto max-h-full rounded-lg">
								{!(noClose && !label) && (
									<div className="px-4 py-4 border-b border-tab_grey">
										<div className="flex justify-between items-center">
											{label && <h4 className="text-[21px] leading-6 text-main_text">{label}</h4>}
											{!noClose && (
												<button className="text-main_text" onClick={() => handleClick('close-button')}>
													<div className="sr-only">Close</div>
												</button>
											)}
										</div>
									</div>
								)}
								<div className="px-8 py-6 border-b border-tab_grey max-h-[68.333vh] overflow-auto">
									<div className="text-sm text-main_text">{children}</div>
								</div>
								<div className="px-5 py-2">
									<div className="flex flex-wrap justify-end space-x-2">
										<slot name="footer"></slot>
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</dialog>
		);
	},
	ODivider: (variant) => {
		variantClasses = variant === 'horizontal' ? 'w-full h-[0px] my-[7px]' : 'h-full w-[0px] mx-[7px]';
		return <div className={`border-width-sm border-border-default ${variantClasses}`}></div>;
	},
	ODrawer: ({ open, label, noClose, onORequestClose, onOHide, children, ...rest }) => {
		const handleCloseClick = (source) => {
			if (onORequestClose) {
				onORequestClose({ detail: { source } });
			}
			if (onOHide) {
				onOHide();
			}
		};
		return (
			<div className={`${open ? 'flex items-center justify-center fixed inset-0 z-50' : ''}`} {...rest}>
				{open && (
					<div
						tabIndex={-1}
						className="fixed inset=0 bg-table_header bg-opacity-60 z-60 transition-opacity"
						onClick={() => handleCloseClick('overlay')}
					></div>
				)}
				{open && (
					<div
						className="fixed right-0 h-full w-[28em] bg-white shadow-lg z-60 flex flex-col focus:outline-none max-w-full"
						role="dialog"
						aria-modal="true"
						aria-label={label || 'Drawer'}
						tabIndex={0}
					>
						{!(noClose && !label) && (
							<div className="px-5 py-8 flex justify-end items-center">
								<div className="flex-auto">
									<slot name="title"></slot>
								</div>
								<div className="p-2">
									<slot name="actions"></slot>
								</div>
								{!noClose && (
									<button
										data-testid="close-button"
										onClick={() => handleCloseClick('close-button')}
										className="mock-icon-button"
									>
										Close
									</button>
								)}
							</div>
						)}
						<div tabIndex={-1} className="p-7 flex-1 overflow-auto text-sm text-main_text">
							{children}
						</div>
						<div className="py-7 px-5 flex justify-end">
							<slot name="footer"></slot>
						</div>
					</div>
				)}
			</div>
		);
	},
	ODropdown: ({ children, open, disabled, placement, ...rest }) => {
		const [isOpen, setIsOpen] = React.useState(open);
		const trigger = React.Children.toArray(children).find(
			(child) => React.isValidElement(child) && child.props.slot === 'trigger'
		);
		const panel = React.Children.toArray(children).find((child) => React.isValidElement(child) && !child.props.slot);

		const show = () => {
			if (!disabled) {
				setIsOpen(true);
			}
		};
		const hide = () => setIsOpen(false);

		const handleTriggerClick = (e) => {
			e.stopPropagation();
			if (isOpen) {
				hide();
			} else {
				show();
			}
		};
		React.useEffect(() => {
			setIsOpen(open);
		}, [open]);

		const clonedTrigger = React.isValidElement(trigger)
			? React.cloneElement(trigger, {
					onClick: handleTriggerClick,
					'aria-expanded': isOpen,
					'aria-haspopup': 'true'
				})
			: null;

		const clonedPanel = React.isValidElement(panel)
			? React.cloneElement(panel, {
					hidden: !isOpen,
					'aria-hidden': !isOpen
				})
			: null;

		return (
			<div data-testid="dropdown" className="mock-dropdown" {...rest}>
				<div data-testid="dropdown-trigger">{clonedTrigger}</div>
				{isOpen && <div data-testid="dropdown-panel">{clonedPanel}</div>}
			</div>
		);
	},
	OFooter: ({ children, ...rest }) => {
		return (
			<footer data-testid="footer" className="mock-footer" {...rest}>
				<div data-testid="footer-content" className="mock-footer-content">
					{children}
				</div>
			</footer>
		);
	},
	OIcon: ({ color, size, svg }) => {
		let colorClass = color ? `text-${color}` : 'text-oec_blue';
		let sizeClass = '';
		switch (size) {
			case 'sm':
				sizeClass = 'w-4 h-4';
				break;
			case 'md':
				sizeClass = 'w-6 h-6';
				break;
			case 'lg':
				sizeClass = 'w-8 h-8';
				break;
			default:
				sizeClass = 'w-4 h-4'; // Default size 'sm'
		}
		return (
			<div
				data-testid="oicon"
				className={`${sizeClass} ${colorClass} antialiased justify-center flex items-center`}
				dangerouslySetInnerHTML={{ __html: svg }}
			></div>
		);
	},
	OIconButton: ({ color, size, disabled, svg, handleClick, ...rest }) => {
		baseClasses = 'p-2 bg-transparent shadow-none';
		const defaultClasses = !disabled
			? `${baseClasses} text-main_text hover:text-accent_blue_1 active:text-main_text focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-accent_blue_1 focus-visible:outline-offset-0`
			: '';
		const disabledClasses = disabled ? `${baseClasses} cursor-not-allowed text-blue_steel` : '';
		let colorClass = color || 'main_text';
		let sizeClass = '';
		switch (size) {
			case 'sm':
				sizeClass = 'w-4 h-4';
				break;
			case 'md':
				sizeClass = 'w-6 h-6';
				break;
			case 'lg':
				sizeClass = 'w-8 h-8';
				break;
			default:
				sizeClass = 'w-4 h-4'; // Default size 'sm'
		}
		return (
			<button disabled={disabled} className={`${defaultClasses} ${disabledClasses}`} onClick={handleClick} {...rest}>
				<span className="flex items-center gap-2">
					<div
						className={`${sizeClass} text-${colorClass} antialiased justify-center flex items-center`}
						dangerouslySetInnerHTML={{ __html: svg }}
					></div>
				</span>
			</button>
		);
	},
	OList: ({
		label,
		children,
		helpText,
		errorText,
		required,
		showRadio,
		name,
		onOValueChange,
		onOItemSelected,
		onOValueChange: onOValueChangeAlt,
		onOItemSelected: onOItemSelectedAlt,
		...rest
	}) => {
		return (
			<div data-testid="olist" {...rest}>
				<fieldset className="border-0 p-0 m-0">
					{label && (
						<legend className="flex p-0 mb-0">
							<label className={`label-default ${errorText ? 'text-color-status-error' : 'text-color-status-default'}`}>
								{label}
								{required && <span>&nbsp;*</span>}
							</label>
						</legend>
					)}
					<div className="list-none p-0">{children}</div>
				</fieldset>
				{helpText && <div className="body-default mt-1 text-content-default">{helpText}</div>}
				{errorText && (
					<div className="body-default mt-1">
						<span className="text-content-status-error">{errorText}</span>
					</div>
				)}
			</div>
		);
	},
	OListItem: ({ disabled, value, children, selected, name, radioRef, ...rest }) => {
		const handleClick = () => {
			if (!disabled && value && rest.onClick) {
				rest.onClick();
			}
		};

		const baseClasses =
			'mb-2.5 p-4 body-default text-content-default transition-all duration-150 bg-form-color-background-default border-width-sm rounded-radius-lg border-form-color-border-default flex flex-row align-items-center';
		const disabledClass = disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer';
		const outlineClass = selected
			? 'outline outline-width-sm outline-focus-ring-color-border-default border-transparent'
			: 'focus:outline-width-lg focus:outline-offset-0 focus-visible:outline-width-lg focus:outline-focus-ring-color-border-default focus-visible:ring-focus-ring-color-border-default';
		const disabledRadioClasses = disabled
			? 'disabled:border-form-color-border-disabled disabled:bg-form-color-background-disabled disabled:cursor-not-allowed'
			: '';
		const itemTitleClasses = 'title-sm text-content-default mb-1';
		const descriptionClasses = 'body-default text-content-default';

		const shouldShowRadio = radioRef;

		const radioClasses = shouldShowRadio
			? `mr-4 self-center appearance-none checked:bg-background-brand-knockout checked:hover:bg-background-brand-knockout checked:focus:bg-background-brand-knockout ${disabledRadioClasses} focus:ring-offset-0 ring-0 shadow-none focus:outline-none focus:ring-0 focus:shadow-none focus:outline-0 focus:border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:shadow-none`
			: 'sr-only';

		const childrenArray = React.Children.toArray(children);
		const titleContent = childrenArray.filter(
			(child) => !React.isValidElement(child) || child.props?.slot !== 'description'
		);
		const descriptionContent = childrenArray.filter(
			(child) => React.isValidElement(child) && child.props?.slot === 'description'
		);

		return (
			<div
				data-testid="olist-item"
				aria-selected={selected}
				aria-disabled={disabled}
				tabIndex={disabled ? -1 : 0}
				className={`${baseClasses} ${disabledClass} ${outlineClass}`}
				onClick={handleClick}
				{...rest}
			>
				<input type="radio" className={radioClasses}></input>
				<div>
					<div className={itemTitleClasses}>{titleContent}</div>
					{descriptionContent.length > 0 && <div className={descriptionClasses}>{descriptionContent}</div>}
				</div>
			</div>
		);
	},
	OMenu: ({ children, ...rest }) => {
		const menuRef = React.useRef(null);
		const [menuItems, setMenuItems] = React.useState([]);
		const [activeItem, setActiveItem] = React.useState(null);

		const oMenuSelect = (payload) => {
			//this is intentionally left empty for mocking purposes & this comment is here to avoid the SAST Warning.
		};

		const handleSlotChange = () => {
			const items = Array.from(menuRef.current.querySelectorAll('o-menu-item'));
			setMenuItems(items);
			if (items.length > 0) {
				setActiveItem(items[0]);
			}
		};

		const isMenuItem = (item) => item.tagName.toLowerCase() === 'o-menu-item';

		const setCurrentItem = (item) => {
			setActiveItem(item);
			menuItems.forEach((i) => {
				i.index = i === item ? 0 : -1;
			});
		};

		const getMenuItems = () => {
			return menuItems;
		};

		const handleKeyDown = (event) => {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				event.stopPropagation();
				if (activeItem) {
					activeItem.click();
				}
			} else if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
				let index = activeItem ? menuItems.indexOf(activeItem) : 0;

				if (menuItems.length > 0) {
					event.preventDefault();
					event.stopPropagation();

					if (event.key === 'ArrowDown') {
						index++;
					} else if (event.key === 'ArrowUp') {
						index--;
					} else if (event.key === 'Home') {
						index = 0;
					} else if (event.key === 'End') {
						index = menuItems.length - 1;
					}

					if (index < 0) {
						index = menuItems.length - 1;
					}
					if (index > menuItems.length - 1) {
						index = 0;
					}
					const nextItem = menuItems[index];
					setCurrentItem(nextItem);
					if (nextItem) {
						nextItem.focus();
					}
				}
			}
		};

		const handleClick = (event) => {
			const target = event.target;
			if (isMenuItem(target)) {
				oMenuSelect({ item: target });
			}
		};

		const handleMouseDown = (event) => {
			const target = event.target;
			if (isMenuItem(target)) {
				setCurrentItem(target);
			}
		};

		return (
			<div
				data-testid="menu"
				role="menu"
				className="mock-menu bg-background-default border-width-sm border-border-default rounded-radius-lg py-2"
				onClick={handleClick}
				onMouseDown={handleMouseDown}
				onKeyDown={handleKeyDown}
				ref={menuRef}
				{...rest}
			>
				{children}
			</div>
		);
	},
	OMenuItem: ({ children, value, disabled, index, ...rest }) => {
		const itemRef = React.useRef(null);
		const setFocus = React.useCallback(() => {
			if (itemRef.current) {
				itemRef.current.focus();
			}
		}, []);

		const handleHostClick = (event) => {
			if (disabled) {
				event.preventDefault();
				event.stopPropagation();
			}
		};

		const handleMouseOver = (event) => {
			if (itemRef.current) {
				itemRef.current.focus();
			}
			event.stopPropagation();
		};

		let disabledClass = disabled
			? 'outline-none cursor-not-allowed text-content-disabled'
			: 'hover:bg-background-default-hover cursor-pointer focus:ring-0 focus-visible:ring-focus-ring-color-border-default focus:outline-width-lg focus:outline-focus-ring-color-border-default focus:outline-offset-0';
		return (
			<div
				data-testid="menu-item"
				ref={itemRef}
				role="menuitem"
				aria-disabled={disabled}
				className={`mock-menu-item relative body-default text-content-default px-4 py-2 ${disabledClass}`}
				onClick={handleHostClick}
				onMouseOver={handleMouseOver}
				tabIndex={index}
				value={value}
				{...rest}
			>
				<span>{children}</span>
			</div>
		);
	},
	OMenuLabel: ({ children }) => {
		return <span className="inline-block title-sm text-content-default px-4 py-3">{children}</span>;
	},
	OOption: ({ value, disabled, selected, children, ...rest }) => {
		return (
			<option
				data-testid="option"
				aria-selected={selected}
				aria-disabled={disabled}
				className={`mock-option ${disabled ? 'disabled' : ''}`}
				value={value}
				{...rest}
			>
				{children}
			</option>
		);
	},
	ORadio: ({ nameValue, value, checked, disabled, name, label, children, ...rest }) => {
		const disabledClasses = disabled
			? 'disabled:border-form-color-border-disabled disabled:bg-form-color-background-disabled disabled:checked:bg-background-brand-knockout-disabled disabled:cursor-not-allowed'
			: '';
		return (
			<div className="mb-3 flex items-center antialiased" {...rest}>
				<input
					id={nameValue}
					type="radio"
					data-testid={`radio-${nameValue}`}
					className={`appearance-none bg-form-color-background-default border-width-sm checked:bg-background-brand-knockout checked:hover:bg-background-brand-knockout checked:focus:bg-background-brand-knockout focus:outline-width-lg focus:outline-focus-ring-color-border-default focus:outline-offset-0 ${disabledClasses}`}
					value={value}
					checked={checked}
					disabled={disabled}
					name={name}
				/>
				<span className="ml-2 flex items-center">
					<label
						htmlFor={nameValue}
						className={`label-default ${disabled ? 'text-color-disabled' : 'text-color-status-default'}`}
					>
						{label || children}
					</label>
				</span>
			</div>
		);
	},
	ORadioGroup: ({
		label,
		required,
		helpText,
		errorText,
		children,
		onOChange,
		'onO-change': onOChangeQuoted,
		...rest
	}) => {
		return (
			<div data-testid="radio-group" {...rest}>
				<fieldset>
					<legend className="pb-2">
						{label}
						{required ? <span>&nbsp;*</span> : null}
					</legend>
					{children}
				</fieldset>
				<div className="body-default">
					{helpText && <div className={' mt-1 text-content-default'}>{helpText}</div>}
					{errorText && (
						<div className="mt-1">
							<span className="text-content-status-error">{errorText}</span>
						</div>
					)}
				</div>
			</div>
		);
	},
	OSelect: ({
		label,
		nameValue,
		open,
		placeholder,
		disabled,
		value,
		onChange,
		onOChange,
		'onO-change': onOChangeQuoted,
		children,
		errorText,
		helpText,
		required,
		onClick,
		...rest
	}) => {
		const id = nameValue;
		const finalOnOChange = onOChangeQuoted || onOChange;
		return (
			<div>
				{label && (
					<label
						htmlFor={nameValue}
						className={`label-default ${disabled ? 'text-color-disabled' : errorText ? 'text-color-status-error' : 'text-color-status-default'}`}
					>
						{label}
						{required && <span>&nbsp;*</span>}
					</label>
				)}
				<div
					className={`mock-select ${disabled ? 'disabled' : ''} ${errorText ? 'error' : ''}`}
					onClick={onClick}
					{...rest}
				>
					<select
						id={id}
						name={nameValue}
						data-testid={`select-${nameValue}`}
						value={value}
						disabled={disabled}
						onChange={(e) => {
							const selectedValue = e.target.value;
							if (finalOnOChange) {
								finalOnOChange({
									target: { value: selectedValue, name: nameValue }
								});
							} else if (onChange) {
								onChange({ target: { value: selectedValue, name: nameValue } });
							}
						}}
						aria-disabled={disabled}
						aria-invalid={!!errorText}
						required={required}
					>
						{children}
					</select>
					<div className="placeholder">
						{value
							? (Array.isArray(children)
									? children.find((c) => c.props.value === value)?.props.children
									: children?.props?.value) || placeholder
							: placeholder}
					</div>
				</div>
				{helpText && (
					<div className={`body-default mt-1 ${disabled ? 'text-content-disabled' : 'text-content-default'}`}>
						{helpText}
					</div>
				)}
				{errorText && (
					<div className="body-default mt-1">
						<span className="text-content-status-error">{errorText}</span>
					</div>
				)}
			</div>
		);
	},
	OSidebar: ({ children, ...rest }) => {
		return (
			<div data-testid="sidebar" className="mock-sidebar" {...rest}>
				{children}
			</div>
		);
	},
	OSkeleton: () => {
		return <div className="animate-pulse size-full bg-background-strong rounded-radius-lg min-h-4"></div>;
	},
	OStep: ({ children, ...rest }) => {
		return (
			<div data-testid="step" className="mock-step" {...rest}>
				{children}
			</div>
		);
	},
	OStepper: ({ children, ...rest }) => {
		return (
			<div data-testid="stepper" className="mock-stepper" {...rest}>
				{children}
			</div>
		);
	},
	OTab: ({ children, onClick, ...rest }) => {
		return (
			<div onClick={onClick} {...rest}>
				{children}
			</div>
		);
	},
	OTabGroup: ({ children, ...rest }) => {
		return (
			<div data-testid="tab-group" className="mock-tab-group" {...rest}>
				{children}
			</div>
		);
	},
	OTabPanel: ({ children, name, active, ...rest }) => {
		return (
			<div
				data-testid={`tab-panel-${name}`}
				className={`mock-tab-panel ${active ? 'active' : ''}`}
				role="tabpanel"
				aria-selected={active}
				aria-hidden={!active}
				{...rest}
			>
				{children}
			</div>
		);
	},
	OTag: ({ closable = false, color = 'uncategorized', children, onOClick, onORemove, ...rest }) => {
		const mockCategoricalColors = {
			brand: { color: '#1B9DD9', textColor: '#E6F4FA' },
			order: { color: '#1B9DD9', textColor: '#E6F4FA' },
			payment: { color: '#542F7D', textColor: '#F0ECF7' },
			shipping: { color: '#3D857C', textColor: '#ECF5F4' },
			uncategorized: { color: '#6B7280', textColor: '#F3F4F6' }
		};

		const baseClasses =
			'inline-flex items-center justify-center font-inter font-medium text-sm rounded-full px-4 py-1 max-w-full truncate';

		const colorStyles = {
			backgroundColor: mockCategoricalColors[color].textColor,
			border: `1px solid ${mockCategoricalColors[color].color}`,
			color: mockCategoricalColors[color].color
		};

		const handleRemoveClick = (event) => {
			event.stopPropagation();
			if (onORemove) {
				onORemove();
			}
			if (rest.onRemove) {
				rest.onRemove();
			}
			const tagElement = event.target.closest('[data-testid="tag"]');
			if (tagElement && tagElement.parentNode) {
				tagElement.parentNode.removeChild(tagElement);
			}
		};

		const handleClick = (event) => {
			if (onOClick) {
				onOClick();
			}
			if (rest.onClick) {
				rest.onClick(event);
			}
		};

		const { onClick, onRemove, startIcon, ...cleanRest } = rest;

		return (
			<div
				data-testid="tag"
				className={`${baseClasses} relative`}
				style={colorStyles}
				onClick={handleClick}
				{...cleanRest}
			>
				<div className={`flex items-center gap-2 ${closable ? 'mr-4' : ''} max-w-full`}>
					{startIcon && <span data-testid="start-icon">{startIcon}</span>}
					<span className="truncate">{children}</span>
					{closable && (
						<div
							data-testid="remove-button"
							onClick={handleRemoveClick}
							className="mock-icon-button absolute right-1"
							style={{ color: mockCategoricalColors[color].color }}
						>
							×
						</div>
					)}
				</div>
			</div>
		);
	},
	OTextarea: ({
		label,
		nameValue,
		placeholder,
		value,
		disabled,
		required,
		errorText,
		helpText,
		onInput,
		id,
		...rest
	}) => {
		return (
			<div>
				{label && (
					<label
						htmlFor={nameValue}
						className={`label-default ${disabled ? 'text-color-disabled' : errorText ? 'text-color-status-error' : 'text-color-status-default'}`}
					>
						{label}
						{required && <span>&nbsp;*</span>}
					</label>
				)}
				<textarea
					id={nameValue}
					placeholder={placeholder}
					value={value}
					disabled={disabled}
					required={required}
					onInput={(e) => onInput(e)}
					{...rest}
				></textarea>
				{errorText && (
					<div className="body-default mt-1">
						<span className="text-content-status-error">{errorText}</span>
					</div>
				)}
				{helpText && !errorText && (
					<div className={`body-default mt-1 ${disabled ? 'text-content-disabled' : 'text-content-default'}`}>
						{helpText}
					</div>
				)}
			</div>
		);
	},
	OTextfield: ({
		label,
		required,
		placeholder,
		nameValue,
		type,
		errorText,
		helpText,
		value,
		disabled,
		onInput,
		...rest
	}) => {
		const id = nameValue;
		return (
			<div className="antialiased relative">
				{label && (
					<label
						htmlFor={id}
						className={`label-default ${disabled ? 'text-color-disabled' : errorText ? 'text-color-status-error' : 'text-color-status-default'}`}
					>
						{label}
						{required && <span>&nbsp;*</span>}
					</label>
				)}
				<div className="relative">
					<input
						type={type || 'text'}
						id={id}
						name={nameValue}
						placeholder={placeholder}
						data-testid={`textfield-${nameValue}`}
						value={value}
						disabled={disabled}
						required={required}
						onInput={(e) => onInput(e)}
						{...rest}
					/>
				</div>
				{errorText && (
					<div className="body-default mt-1" id={`${id}-error`}>
						<span className="text-content-status-error">{errorText}</span>
					</div>
				)}
				{helpText && !errorText && (
					<div className={`body-default mt-1 ${this.disabled ? 'text-content-disabled' : 'text-content-default'}`}>
						{helpText}
					</div>
				)}
			</div>
		);
	},
	OToast: ({ variant, closable, children, ...rest }) => {
		let variantClass = '';
		switch (variant) {
			case 'success':
				variantClass = 'border-spring_green';
				break;
			case 'warning':
				variantClass = 'border-expire_orange';
				break;
			case 'danger':
				variantClass = 'border-flame_red';
				break;
			case 'neutral':
				variantClass = 'border-white';
				break;
			case 'primary':
			default:
				variantClass = 'border-accent_blue_1';
		}
		return (
			<div
				className={`flex items-center transition-opacity duration-300 ease-in-out transform border-t-4 rounded-lg shadow-lg bg-header_blue bg-opacity-90 text-white w-[330px] xl:w-[440px] px-[25px] py-[17px] mb-3.5 ${variantClass}`}
				role="alert"
				{...rest}
			>
				<div className="text-sm flex-1 overflow-hidden">{children}</div>
				{closable && (
					<div className="relative top-[-10px]">
						<button data-testid="close-button" onClick={handleCloseClick} className="mock-icon-button">
							Close
						</button>
					</div>
				)}
			</div>
		);
	},
	OTooltip: ({ children, content, open, placement, disabled, maxWidth, ...rest }) => {
		const [isOpen, setIsOpen] = React.useState(false);
		const openState = typeof open === 'boolean' ? open : isOpen;
		return (
			<div
				data-testid="tooltip"
				className="mock-tooltip"
				onMouseEnter={() => {
					if (!disabled) setIsOpen(true);
				}}
				onMouseLeave={() => setIsOpen(false)}
				{...rest}
			>
				<span data-testid="tooltip-trigger" className="inline-block w-fit" onClick={() => setIsOpen((v) => !v)}>
					{children}
				</span>
				{!disabled && openState && content ? (
					<div
						data-testid="tooltip-content"
						role="tooltip"
						className={`mock-tooltip-content ${placement ? `tooltip-${placement}` : 'tooltip-top'}`}
						style={{ maxWidth: maxWidth ? `${maxWidth}rem` : undefined }}
					>
						{content}
					</div>
				) : null}
			</div>
		);
	}
};

module.exports = {
	...module.exports
};

