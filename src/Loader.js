'use strict';

function loader(render) {
    document.addEventListener('DOMContentLoaded', () => {
        const data = JSON.parse(document.body.innerHTML.replace(/<script.*<\/script>/gi, ''));
        document.body.innerHTML = "";
        document.documentElement.removeAttribute('hidden');
        if (render && typeof render == 'function') {
            render(data);
        }
    });
}

module.exports = loader;