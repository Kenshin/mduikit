
/**
 * Button
 * 
 * @param {string} id 
 * @param {string} text 
 * @param {object} include: href, type, mode, disable, color, bgColor, shadow
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

    Object.assign( style, param, others );
    if ( style.type == "flat" ) {
        style.color   = "rgba(0, 137, 123, .8)";
        style.bgColor = "transparent";
        style.shadow  = "none";
    }
    style.disable = style.disable == true        ? disable[style.type]   : "";
    style.mode    = style.mode    == "secondary" ? secondary[style.type] : "";

    style.onclick && $( "html" ).on( "click", `#${id}`, style.onclick );

    return `<a id="${id}" style="display:block;min-width:88px;height:36px;margin:6px;padding:0;font-family:sans-serif;text-decoration:none;cursor:pointer;border:none;border-radius:2px;box-shadow:${style.shadow};color:${style.color};background-color:${style.bgColor};margin-right:0px;${style.disable}" class="md-waves-effect md-waves-button" href="${style.href}" target="_self" type="${style.type}">
                <button-mask style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; margin: 0px; padding: 0px 8px; border: medium none; border-radius: 2px; box-sizing: border-box; transition: all 0.5s ease-in-out 0s; background-color: transparent;${style.mode}">
                    <button-span style="display:flex;align-items:center;user-select:none;">
                        <button-icon style="order:-1;display:none;width:24px;height:24px;border:none;background-position:center;background-repeat:no-repeat;"></button-icon>
                        <button-text style="padding:0 8px 0;text-decoration:none;text-align:center;letter-spacing:.5px;font-size:15px;line-height:1;">${text}</button-text>
                    </button-span>
                </button-mask>
            </a>`;
}

/**
 * Clean events
 * 
 * @param {array} id array, e.g. [ "id1", "id2" ]
 * @param {string} event name, e.g. click, mouseover
 */
const Clean = ( ids, event ) => {
    ids.forEach( id => $( "html" ).off( event, `#${id}` ));
}

export {
    Button,
    Clean
}