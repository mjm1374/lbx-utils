// ESM syntax is supported.
/**
 * @brief adds or removes a class on a Element by className
 * @param {*} el the Element ID
 * @param {*} cls the class name to toglle
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