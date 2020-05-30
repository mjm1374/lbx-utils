// ESM syntax is supported.
/**
 * Adds or removes a class on a Element by className
 * @param {string} el the Element ID
 * @param {string} cls the class name to toggle
 */
export function toggleClass(el, cls) {
	try {
		if (el) {
			let target = document.getElementById(el);
			if (cls) {
				if (target.classList.contains(cls)) {
					target.classList.remove(cls);
				} else {
					target.classList.add(cls);
				}
			} else {
				throw new Error('No Class Defined');
			}
		} else {
			throw new Error('No Element Defined');
		}
	} catch (e) {
		console.log(`${e.name}: ${e.message}`);
	}
}

/**
 * Function for setting the DISPLAY property to block or hide,
 * @param {string} el the Element ID
 * @param {boolean} visible the value to set
 */
export function setVisible(el, visible) {
	try {
		if (el) {
			let target = document.getElementById(el);
			if (visible == true) {
				target.style.display = 'block';
			} else {
				target.style.display = 'none';
			}
		} else {
			throw new Error('No Element Defined');
		}
	} catch (e) {
		console.log(`${e.name}: ${e.message}`);
	}
}

/**
 * Shortcut for setVisible Function to show an element,
 * @param {string} el the Element ID
 */
export function show(el) {
	try {
		if (el) {
			setVisible(el, true);
		} else {
			throw new Error('No Element Defined');
		}
	} catch (e) {
		console.log(`${e.name}: ${e.message}`);
	}
}

/**
 * Shortcut for setVisible Function to hide an element,
 * @param {string} el the Element ID
 */
export function hide(el) {
	try {
		if (el) {
			setVisible(el, false);
		} else {
			throw new Error('No Element Defined');
		}
	} catch (e) {
		console.log(`${e.name}: ${e.message}`);
	}
}

/**
 * Check and toggle an elements visability,
 * @param {string} el the Element ID
 */
export function toggleDisplay(el) {
	try {
		if (el) {
			let target = document.getElementById(el);
			if (target.style.display != 'none') {
				setVisible(el, false);
			} else {
				setVisible(el, true);
			}
		} else {
			throw new Error('No Element Defined');
		}
	} catch (e) {
		console.log(`${e.name}: ${e.message}`);
	}
}

/**
 * Convert an Object to a Map
 * @param {string} obj the object to convert to a map
 */
export function buildMap(obj) {
	let map = new Map();
	Object.keys(obj).forEach((key) => {
		map.set(key, obj[key]);
	});
	return map;
}
