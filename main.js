// ESM syntax is supported.
/**
 * @brief adds or removes a class on a Element by className
 * @param {*} el the Element ID {string}
 * @param {*} cls the class name to toggle {string}
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
                throw new Error("No Class Defined");
            }
        } else {
            throw new Error("No Element Defined");
        }
    } catch (e) {
        console.log(`${e.name}: ${e.message}`);
    }
}

/**
 * @brief function for setting the DISPLAY property to block or hide, 
 * @param {*} el the Element ID {string}
 * @param {*} visible the value to set {boolean}
 */
export function setVisible(el, visible) {
    try {
        if (el) {
            let target = document.getElementById(el);
            if (visible == true) {
                target.style.display = "block";
            } else {
                target.style.display = "none";
            }
        } else {
            throw new Error("No Element Defined");
        }
    } catch (e) {
        console.log(`${e.name}: ${e.message}`);
    }
}

/**
 * @brief shortcut for setVisible Function to show an element, 
 * @param {*} el the Element ID {string}
 */
export function show(el) {
    try {
        if (el) {
            setVisible(el, true)
        } else {
            throw new Error("No Element Defined");
        }
    } catch (e) {
        console.log(`${e.name}: ${e.message}`);
    }
}

/**
 * @brief shortcut for setVisible Function to hide an element, 
 * @param {*} el the Element ID {string}
 */
export function hide(el) {
    try {
        if (el) {
            setVisible(el, false)
        } else {
            throw new Error("No Element Defined");
        }
    } catch (e) {
        console.log(`${e.name}: ${e.message}`);
    }
}

/**
 * @brief check and toggle an elements visability, 
 * @param {*} el the Element ID {string}
 */
export function toggleDisplay(el) {
    try {
        if (el) {
            let target = document.getElementById(el);
            if (target.style.display != "none") {
                setVisible(el, false);
            } else {
                setVisible(el, true)
            }
        } else {
            throw new Error("No Element Defined");
        }
    } catch (e) {
        console.log(`${e.name}: ${e.message}`);
    }
}