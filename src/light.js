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
    hoverColor = "rgba( 153, 153, 153, .4)",
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
 * TextField
 *
 * @version : 0.0.2
 * @update  : 2019/04/16
 * 
 * @param {string} id 
 * @param {string} text 
 * @param {object} include: disable, color, placeholder, css, width, height
 */
const TextField = ( id, text, others = {} ) => {
    let style   = {};
    const param = {
        disable: false,
        placeholder: "",
        height : "20px;",
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
    style.focus   = others.focus != undefined    ? `autofocus` : "";

    $( "html" ).on( "focus", `#${id}`, event => {
        $( `#field-${id}` ).find( "#state" ).css({ transform: "scaleX(1)" });
    });
    $( "html" ).on( "blur", `#${id}`, event => {
        $( `#field-${id}` ).find( "#state" ).css({ transform: "scaleX(0)" });
    });

    destorys && destorys.push({ id, event: "focus" });
    destorys && destorys.push({ id, event: "blur" });

    return `<text-field id="field-${id}" style="display:block;position:relative;margin:0;padding:0;width:100%;line-height:1;">
                <text-field-float id="float" style="display: block; position: absolute; margin: -8px 0px 0px; color: ${style.float_color}; font-size: 14px; font-weight: bold; pointer-events: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; transform: scale(0.75) translate(0px, -8px); transform-origin: left top 0px; -moz-user-select: none;${style.css.float}"></text-field-float>
                <input id="${id}" ${style.focus} style="position:relative;color:rgba(51, 51, 51, .87);background-color:transparent;width:100%;height:20px;margin:8px 0 0 5px;padding:0;font-family:sans-serif;font-size:${style.size};line-height:1.5;cursor:inherit;border:none;outline:none;resize:none;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-appearance:textfield;color:${style.color};${style.width};${style.height};${style.css.textarea};" placeholder="${style.placeholder}" value="${text}">
                <div>
                    <text-field-border id="border" style="display:block;width:100%;margin:8px 0 0 0;${style.border_color};box-sizing:content-box;${style.css.border}"></text-field-border>
                    <text-field-state id="state" style="display: block; position: absolute; width: 100%; margin: -1px 0px 0px; border-width: medium medium 2px; border-style: none none solid; border-color: ${style.state_color}; box-sizing: content-box; transform: scaleX(0); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;${style.css.state}"></text-field-state>
                </div>
                <text-field-error id="error" style="display:block;position:absolute;margin:8px 0 0 0;max-width:428px;font-size:14px;font-weight:bold;line-height:1.5;text-align:initial;word-wrap:break-word;user-select:none;color:${style.error_color};transform:scale(0.75) translate( 0, 0 );${style.css.error}"></text-field-error>
            </text-field>`;
}

/**
 * AutoComplete
 *
 * @version : 0.0.1
 * @update  : 2018/08/15
 * 
 * @param {string} id 
 * @param {string} text 
 * @param {array} items 
 * @param {object} include: disable, color, placeholder, css, width, height
 */
const AutoComplete = ( id, text, items, others = {} ) => {
    let style   = {};
    const param = {
        disable: false,
        placeholder: "",
        height : "20px;",
        width  : "100%",
        size   : "14px",
        color  : "rgba(51, 51, 51, .87)",
        float_color : "rgba(0, 137, 123, 0.8)",
        state_color : "rgba(0, 137, 123, 0.8)",
        border_color: "border-top:none rgba(224, 224, 224, 1);border-left:none rgba(224, 224, 224, 1);border-right:none rgba(224, 224, 224, 1);border-bottom:1px solid rgba(224, 224, 224, 1)",
        error_color : "rgba(244, 67, 54, 1)",
        hoverColor  : "rgba(238, 238, 238, 1)",
        css    : {
            float   : "",
            textarea: "",
            border  : "",
            state   : "",
            error   : ""
        },
    };

    const listField = value => {
        return `<list-field class="" style="display: flex; align-items: center; padding: 8px 24px 8px 16px; height: 36px; width: 100%; text-align: left; box-sizing: border-box; transition: all 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms; cursor: pointer; background-color: transparent;" value="${value}"><list-field-name style="display:inline;width:100%;font-size:inherit;" value="${value}">${value}</list-field-name></list-field>`
    };

    const listeView = filter => {
        let tmpl = "";
        filter.forEach( item => {
            tmpl += listField( item );
        });

        const css = tmpl != "" ? { opacity: 1, transform: 'scaleY(1)'} : { opacity: 0, transform: 'scaleY(0)'};
        $( `#field-${id}` ).find( "list-view" ).html( tmpl ).css( css );
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
    $( "html" ).on( "mouseover", "list-field", event => {
        const $target = $( event.target );
        if ( $target.is( "list-field" ) ) {
            $( "list-field[active=true]" ).css( "background-color", "transparent" ).attr( "active", false );
            $target.attr( "active", true ).css( "background-color", style.hoverColor );
        }
    });
    $( "html" ).on( "click", "list-field", event => {
        $( `#field-${id}` ).find( "input" ).val( $( event.target ).text() );
        $( `#field-${id}` ).find( "list-view" ).html( "" ).css({ opacity: 0, transform: 'scaleY(0)'});
    });
    $( "html" ).on( "click", "icon", event => {
        if ( event.target.dataset.state == "close" ) {
            listeView( items );
            event.target.dataset.state = "open";
        } else {
            listeView( [] );
            event.target.dataset.state = "close";
        }
    });
    $( "html" ).on( "keyup", `#${id}`, event => {
        const $target = $( "list-view" );
        if ( $target.children().length == 0 && event.keyCode == 40 ) {
            listeView( items );
            $( `#field-${id}` ).find( "icon" ).attr( "data-state", "open" );
            return;
        }
        const $sub = $target.find( "list-field[active=true]" );
        if ( event.keyCode == 9 || event.keyCode == 27 ) {
            $( `#field-${id}` ).find( "icon" ).attr( "data-state", "close" );
            listeView( [] );
        }
        else if ( event.keyCode == 40 ) {
            if ( $sub.length == 0 ) {
                $target.children().first().attr( "active", true ).css( "background-color", style.hoverColor );
            } else {
                $sub.css( "background-color", "transparent" ).attr( "active", false );
                $sub.next().attr( "active", true ).css( "background-color", style.hoverColor );
            }
        } else if ( event.keyCode == 38 ) {
            if ( $sub.length == 0 ) {
                $target.children().last().attr( "active", true ).css( "background-color", style.hoverColor );
            } else {
                $sub.css( "background-color", "transparent" ).attr( "active", false );
                $sub.prev().attr( "active", true ).css( "background-color", style.hoverColor );
            }
        } else if ( event.keyCode == 13 ) {
            $( `#field-${id}` ).find( "input" ).val( $sub.text() );
            $( `#field-${id}` ).find( "list-view" ).html( "" ).css({ opacity: 0, transform: 'scaleY(0)'});
        } else {
            const key    = event.target.value,
                  filter = items.filter( item => {
                  return item.toString().includes( key );
            });
            listeView( filter );
        }
    });

    destorys.push({ id, event: "focus" });
    destorys.push({ id, event: "blur" });
    destorys.push({ id: "list-field", event: "mouseover" });
    destorys.push({ id: "list-field", event: "click" });
    destorys.push({ id: "icon", event: "click" });
    destorys.push({ id, event: "keyup" });

    return `<auto-complete id="field-${id}" style="display:block;position:relative;margin:0;padding:0;width:100%;line-height:1;">
                <icon style="display:block;position:absolute;width:24px;height:24px;top:1px;right:0;border:none;background-position:center;background-repeat:no-repeat;background-image:url( data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAABqSURBVEiJ7dQxCsAgDIXhZ8ktgmetVw31GIF06lI0yeIWJyH4f4hgMzOcXNfRegEFFAAAoGA+ROR2A0STmftu7t5ARAYRTS+uqtt4CACAqvYVkomngBWSjQPxG/yR59tnz7X6rgso4DzwAnJQKlbAmFdgAAAAAElFTkSuQmCC);cursor:pointer;z-index:2;" data-state="close"></icon>
                <text-field-float id="float" style="display: block; position: absolute; margin: -8px 0px 0px; color: ${style.float_color}; font-size: 14px; font-weight: bold; pointer-events: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; transform: scale(0.75) translate(0px, -8px); transform-origin: left top 0px; -moz-user-select: none;${style.css.float}"></text-field-float>
                <input id="${id}" style="position:relative;color:rgba(51, 51, 51, .87);background-color:transparent;width:100%;height:20px;margin:8px 0 0 0;padding:0;font-family:sans-serif;font-size:${style.size};line-height:1.5;cursor:inherit;border:none;outline:none;resize:none;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);-webkit-appearance:textfield;color:${style.color};${style.width};${style.height};${style.css.textarea};" placeholder="${style.placeholder}" value="${text}">
                <ac-group>
                    <text-field-border id="border" style="display:block;width:100%;margin:8px 0 0 0;${style.border_color};box-sizing:content-box;${style.css.border}"></text-field-border>
                    <text-field-state id="state" style="display: block; position: absolute; width: 100%; margin: -1px 0px 0px; border-width: medium medium 2px; border-style: none none solid; border-color: ${style.state_color}; box-sizing: content-box; transform: scaleX(0); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;${style.css.state}"></text-field-state>
                </ac-group>
                <list-view style="display: block; position: absolute; top: 40px; left: 0px; margin: 0px; padding: 0px; width: 100%; max-height: 400px; color: rgba(51, 51, 51, 0.87); background-color: rgb(255, 255, 255); box-sizing: border-box; box-shadow: rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px, rgba(0, 0, 0, 0.2) 0px 5px 5px -3px; border-radius: 2px; z-index: 2100; overflow-y: auto; opacity: 0; transform: scaleY(0); transform-origin: left top 0px; transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms; overflow-x: hidden;" >
                </list-view>
            </auto-complete>`;
}

/**
 * Dialog
 *
 * @version : 0.0.1
 * @update  : 2020/07/09
 * 
 * @param {string} id
 * @param {string} header
 * @param {string} cotent
 * @param {string} footer
 * @param {object} action include: open close
 * @param {object} include: style
 */
const Dialog = ( id, header, content, footer, action, others = { style:{ header: "", content: "", footer: "" }} ) => {
    const param = {},
          csses = {
                open: {
                    opacity: 1,
                    transform: 'translateY(0px)'
                },
                close: {
                    opacity: 0,
                    transform: 'translateY(1000px)'
                },
                bg      : "position: fixed;top: 0px;left: 0px;display: flex;justify-content: center;align-items: center;width: 100%;height: 100%;color: rgb(255, 255, 255);text-shadow: rgba(0, 0, 0, 0.3) 0px 1px;opacity: 0;transform: translateY(1000px);transition: all 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms;z-index: 2147483646;",
                root    : "display: -webkit-flex;flex-direction: column;margin: 0;padding: 0;min-width: 480px;min-height: 300px;color: rgba(0, 0, 0, 0.870588);background-color: rgb(255, 255, 255);border-radius: 3px;box-sizing: border-box;box-shadow: rgba(0, 0, 0, 0.247059) 0px 14px 45px, rgba(0, 0, 0, 0.219608) 0px 10px 18px;",
                header  : "display: block;padding: 24px 24px 20px 24px;min-height: 25px;line-height: 25px;font-size: 21px;font-weight: 500;color: #fff;background-color: rgb(100, 181, 246);",
                content : "display: block;padding: 24px 24px 0;width: 100%;min-height: 244px;max-height: 580px;overflow-y: auto;box-sizing: border-box;",
                footer  : "display: -webkit-flex;flex-flow: row nowrap;justify-content: flex-end;width: 100%;min-height: 52px;box-sizing: border-box;",
          };

    action.open  = id => {
        setTimeout( () => $( `mduikit-dialog-gp#${id}` ).css( csses.open ), 200 );
    };
    action.close = id => {
        $( `mduikit-dialog-gp#${id}` ).css( csses.close );
        setTimeout( () => $( `mduikit-dialog-gp#${id}` ).remove(), 200 );
    };

    return `<mduikit-dialog-gp id="${id}" style="${csses.bg}">
                <diglog style="${csses.root}">
                    <dialog-header  style="${ csses.header  + others.style.header  }">${ header  }</dialog-header>
                    <dialog-content style="${ csses.content + others.style.content }">${ content }</dialog-content>
                    <dialog-footer  style="${ csses.footer  + others.style.footer  }">${ footer  }</dialog-footer>
                </diglog>
            </mduikit-dialog-gp>`;
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
    TextField,
    AutoComplete,
    Dialog,
    Destory
}