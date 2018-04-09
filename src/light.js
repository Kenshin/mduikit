// global destory array

let destorys = [];

/**
 * Button
 * 
 * @param {string} id 
 * @param {string} text 
 * @param {object} include: href, type, mode, disable, color, bgColor, shadow, css, width
 */
const Button = ( id, text, others = {} ) => {
    let style   = {};
    const param = {
        href   : "javascript:;",
        type   : "raised",    // include: raised flat
        mode   : "primary",   // include: primary secondary
        disable: false,
        color  : "rgba(255, 255, 255, .7)", 
        bgColor: "rgba(0, 137, 123, 1)",
        shadow : "0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2)",
        css    : "",
        width  : "",
        onclick: undefined
    },
    disable    = {
        flat   : "cursor: no-drop; color: rgba(0, 0, 0, 0.298039);",
        raised : "cursor: no-drop; color: rgba(0, 0, 0, 0.298039); background-color: rgb(229, 229, 229); box-shadow: none;"
    },
    secondary  = {
        flat   : "opacity: 0.6;",
        raised : "backgroundColor: rgba( 153, 153, 153, .2);"
    };
    if ( others.type == "flat" ) {
        param.color   = "rgba(0, 137, 123, .8)";
        param.bgColor = "transparent";
        param.shadow  = "none";
    }

    Object.assign( style, param, others );
    style.disable = style.disable == true        ? disable[style.type]   : "";
    style.mode    = style.mode    == "secondary" ? secondary[style.type] : "";
    style.width   = others.width  != undefined   ? `width: ${others.width};` : "";

    style.onclick && $( "html" ).on( "click", `#${id}`, style.onclick );
    style.onclick && destorys.push({ id, event: "click" });

    return `<a id="${id}" style="display:block;min-width:88px;height:36px;margin:6px;padding:0;font-family:sans-serif;text-decoration:none;cursor:pointer;border:none;border-radius:2px;box-shadow:${style.shadow};color:${style.color};background-color:${style.bgColor};margin-right:0px;${style.disable};${style.width};${style.css};" class="md-waves-effect md-waves-button" href="${style.href}" target="_self" type="${style.type}">
                <button-mask style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; margin: 0px; padding: 0px 8px; border: medium none; border-radius: 2px; box-sizing: border-box; transition: all 0.5s ease-in-out 0s; background-color: transparent;${style.mode}">
                    <button-span style="display:flex;align-items:center;user-select:none;">
                        <button-icon style="order:-1;display:none;width:24px;height:24px;border:none;background-position:center;background-repeat:no-repeat;"></button-icon>
                        <button-text style="padding:0 8px 0;text-decoration:none;text-align:center;letter-spacing:.5px;font-size:15px;line-height:1;">${text}</button-text>
                    </button-span>
                </button-mask>
            </a>`;
}

/**
 * Texteare
 * 
 * @param {string} id 
 * @param {string} text 
 * @param {object} include: disable, color, placeholder, css, width, height
 */
const Textarea = ( id, text, others = {} ) => {
    let style   = {};
    const param = {
        disable: false,
        placeholder: "",
        height : "60px;",
        width  : "100%",
        size   : "14px",
        color  : "rgba(51, 51, 51, .87)",
        float_color : "rgba(0, 137, 123, 0.8)",
        state_color : "rgba(0, 137, 123, 0.8)",
        border_color: "border-top:none rgba(224, 224, 224, 1);border-left:none rgba(224, 224, 224, 1);border-right:none rgba(224, 224, 224, 1);border-bottom:1px solid rgba(224, 224, 224, 1)",
        error_color : "rgba(244, 67, 54, 1)",
        css    : {
            float   : "",
            textarea: "",
            border  : "",
            state   : "",
            error   : ""
        },
    };

    Object.assign( style, param, others );
    style.disable = style.disable == true        ? disable[style.type]   : "";
    style.width   = others.width  != undefined   ? `width: ${others.width};` : "";
    style.height  = others.height != undefined   ? `height: ${others.height};` : "";

    $( "html" ).on( "focus", `#${id}`, event => {
        $( `#field-${id}` ).find( "#state" ).css({ transform: "scaleX(1)" });
    });
    $( "html" ).on( "blur", `#${id}`, event => {
        $( `#field-${id}` ).find( "#state" ).css({ transform: "scaleX(0)" });
    });

    destorys.push({ id, event: "focus" });
    destorys.push({ id, event: "blur" });

    return `<text-field id="field-${id}" style="display:block;position:relative;margin:0;padding:0;width:100%;line-height:1;">
                <text-field-float id="float" style="display: block; position: absolute; margin: -8px 0px 0px; color: ${style.float_color}; font-size: 14px; font-weight: bold; pointer-events: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; transform: scale(0.75) translate(0px, -8px); transform-origin: left top 0px; -moz-user-select: none;${style.css.float}"></text-field-float>
                <textarea id="${id}" style="position:relative;color:rgba(51, 51, 51, .87);background-color:transparent;width:100%;height:180px;margin:8px 0 0 0;padding:0;font-family:sans-serif;font-size:${style.size};line-height:1.5;cursor:inherit;border:none;outline:none;resize:none;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-appearance:textfield;color:${style.color};${style.width};${style.height};${style.css.textarea};" placeholder="${style.placeholder}">${text}</textarea>
                <div>
                    <text-field-border id="border" style="display:block;width:100%;margin:8px 0 0 0;${style.border_color};box-sizing:content-box;${style.css.border}"></text-field-border>
                    <text-field-state id="state" style="display: block; position: absolute; width: 100%; margin: -1px 0px 0px; border-width: medium medium 2px; border-style: none none solid; border-color: ${style.state_color}; box-sizing: content-box; transform: scaleX(0); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;${style.css.state}"></text-field-state>
                </div>
                <text-field-error id="error" style="display:block;position:relative;margin:8px 0 0 0;max-width:428px;font-size:14px;font-weight:bold;line-height:1.5;text-align:initial;word-wrap:break-word;user-select:none;color:${style.error_color};transform:scale(0.75) translate( -73px, 0 );${style.css.error}"></text-field-error>
            </text-field>`;
}

/**
 * Clean events
 * 
 * @param {array} id array, e.g. [ "id1", "id2" ]
 * @param {string} event name, e.g. click, mouseover
 */
const Destory = () => {
    destorys.forEach( item => $( "html" ).off( item.event, `#${item.id}` ));
    destorys = [];
}

export {
    Button,
    Textarea,
    Destory
}