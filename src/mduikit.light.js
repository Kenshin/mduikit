
/**
 * Button
 * 
 * @param {string} href 
 * @param {string} text 
 * @param {string} disable 
 * @param {string} color 
 * @param {string} bgColor 
 */
const Button = ( href, text, disable = false, color = "rgba(255, 255, 255, .7)", bgColor = "rgba(0, 137, 123, 1)" ) => {
    href == undefined && ( href = "javascript:;" );
    const style = disable == true ? "cursor: no-drop;background-color: rgb(229, 229, 229);" : "";
    return `<a style="display:block;min-width:88px;height:36px;margin:6px;padding:0;font-family:sans-serif;text-decoration:none;cursor:pointer;border:none;border-radius:2px;box-shadow:0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);color:${color};background-color:${bgColor};margin-right:0px;${style}" class="md-waves-effect md-waves-button" href="${href}" target="_self" type="raised">
                <button-mask style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; margin: 0px; padding: 0px 8px; border: medium none; border-radius: 2px; box-sizing: border-box; transition: all 0.5s ease-in-out 0s; background-color: transparent;">
                    <button-span style="display:flex;align-items:center;user-select:none;">
                        <button-icon style="order:-1;display:none;width:24px;height:24px;border:none;background-position:center;background-repeat:no-repeat;"></button-icon>
                        <button-text style="padding:0 8px 0;text-decoration:none;text-align:center;letter-spacing:.5px;font-size:15px;line-height:1;">${text}</button-text>
                    </button-span>
                </button-mask>
            </a>`;
}

export {
    Button
}