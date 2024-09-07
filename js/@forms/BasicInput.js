import React from 'react';
import styles from './BasicInput.module.css';
export default function BasicInput(_a) {
    var label = _a.label, type = _a.type, _b = _a.placeholder, placeholder = _b === void 0 ? '' : _b, _c = _a.autocomplete, autocomplete = _c === void 0 ? 'on' : _c, _d = _a.style, style = _d === void 0 ? null : _d;
    return (React.createElement("label", { className: styles.label },
        label,
        React.createElement("input", { type: type, autoComplete: autocomplete, placeholder: placeholder, className: style !== null
                ? style === 'bottomBorder'
                    ? styles.inputUnderline
                    : styles.inputNoBorder
                : styles.inputDefault })));
}
