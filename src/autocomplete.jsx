/*!
 * React Material Design: AutoComplete
 * 
 * @version : 0.0.3
 * @update  : 2020/03/30
 * @homepage: https://github.com/kenshin/mduikit
 * @license : MIT https://github.com/kenshin/mduikit/blob/master/LICENSE
 * @author  : Kenshin Wang <kenshin@ksria.com>
 * 
 * @copyright 2017
 */

console.log( "==== simpread component: AutoComplete ====" )

const cssinjs = () => {

    const focus_color = 'rgba(0, 137, 123, .8)',
          border_color= 'rgba(224, 224, 224, 1)',
          margin      = '8px 0 0 0',
          display     = 'block',
          medium      = '14px',
          large       = '16px',
          lineHeight  = 1.5,
          fontWeight  = 'bold',
          width       = '100%',
          styles      = {
            root: {
                display,
                position: 'relative',
                margin: 0,
                padding: 0,

                width,
                lineHeight: 1,
            },

            group: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'baseline',
            },

            input: {
                backgroundColor: 'transparent',

                width,
                height: '20px',

                margin,
                padding: 0,

                fontFamily: 'sans-serif',
                fontSize: medium,

                border: 'none',
                outline: 'none',

                boxShadow: 'none',
                boxSizing: 'content-box',
                transition: 'all 0.3s',
            },

            tags: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
            },

            tag: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',

                margin: '4px 4px 0 0',
                padding: '4px 12px',

                color: 'rgba(0,0,0,.87)',
                backgroundColor: '#e0e0e0',

                height: '22px',

                fontSize: '.875rem',
                fontWeight: 400,
                whiteSpace: 'nowrap',

                borderRadius: '16px',
                outline: 'none',
                cursor: 'pointer',
                overflow: 'hidden',

                transition: 'all 0.2s ease-in-out 0s',
                transformOrigin: 'left',
            },

            tag_close: {
                display: 'block',

                width: '12px',
                height: '12px',
                marginLeft: '5px',

                border: 'none',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: 'url( data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAw0lEQVQoU51SsQ4BQRB976JT+AF/gY5EoVOT3F4ofZRSsnMJtU4hocNX8AMKndzIXnblHJdgi83M7Js37+0uUVjW2lkURV1V7bkyyV2WZfskSeYBxhCIyBFAq0hQiE/GmHZO4rY0TZeqOqoA52WSqziOx7TWTkguPHijqg2SHZ9vAdwBDFyuqlMW2QOLiKxJ3hxj+ZwicgbQfJryoyukXn5v+CTJ1+rGmOGbpLJpADUAfW/yQPL6Yvrna/3r4ULTN1/jAQVyi419KD+fAAAAAElFTkSuQmCC)',

                cursor: 'pointer',
            },

            border : {
                display,

                width,
                margin,

                borderTop: `none ${border_color}`,
                borderLeft: `none ${border_color}`,
                borderRight: `none ${border_color}`,
                borderBottom: `1px solid ${border_color}`,
                boxSizing: 'content-box',
            },

            float : {
                display,
                position: 'absolute',

                margin,

                color: 'rgb(117, 117, 117)',

                fontSize: medium,
                fontWeight: 'initial',

                userSelect: 'none',
                pointerEvents: 'none',

                transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
                transform: 'scale(1) translate( 0px, 0px )',
                transformOrigin: 'left top 0px',
            },

            float_focus : {
                color: focus_color,

                margin: `-${margin}`,

                fontSize: medium,
                fontWeight,

                transform: 'scale(0.75) translate( 0px, -8px )',
            },

            state : {
                display,
                position: 'absolute',

                width,
                margin: '-1px 0 0 0',

                borderTop: `none ${focus_color}`,
                borderLeft: `none ${focus_color}`,
                borderRight: `none ${focus_color}`,
                borderBottom: `2px solid ${focus_color}`,
                boxSizing: 'content-box',

                transform: 'scaleX(0)',
                transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
            },

            state_focus : {
                transform: 'scaleX(1)',
            },

            icon: {
                display: 'block',
                position: 'absolute',

                width: '24px',
                height: '24px',

                top: '1px',
                right: 0,

                border: 'none',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage: 'url( data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAABqSURBVEiJ7dQxCsAgDIXhZ8ktgmetVw31GIF06lI0yeIWJyH4f4hgMzOcXNfRegEFFAAAoGA+ROR2A0STmftu7t5ARAYRTS+uqtt4CACAqvYVkomngBWSjQPxG/yR59tnz7X6rgso4DzwAnJQKlbAmFdgAAAAAElFTkSuQmCC)',

                cursor: 'pointer',
            },

        };

    return styles;
};

const cssinjs_list = () => {

    const styles = {
            root : {
                display: 'block',
                position: 'absolute',

                top: '40px',
                left: 0,

                margin: 0,
                padding: 0,

                width: '100%',
                maxHeight: '400px',

                color: 'rgba(51, 51, 51, .87)',
                backgroundColor: 'rgba(255, 255, 255, 1)',

                boxSizing: 'border-box',
                boxShadow: '0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.2)',
                borderRadius: '2px',

                zIndex: 2100,

                overflowY: 'auto',

                opacity: 0,
                transform: 'scaleY(0)',
                transformOrigin: 'left top 0px',
                transition : 'transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms, opacity 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms',

                overflowX: 'hidden',
            },

            open: {
                opacity: 1,
                transform: 'scaleY(1)',
            },

            list_filed: {
                display: 'flex',
                alignItems: 'center',

                padding: '8px 24px 8px 16px',

                height: '36px',
                width: '100%',

                textAlign: 'left',

                boxSizing: 'border-box',
                transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms',

                cursor: 'pointer',
            },

            list_filed_value: {
                display: 'inline',
                width: '100%',
                fontSize: 'inherit',
            },

    }

    return styles;
};

class ListView extends React.Component {

    static defaultProps = {
        waves           : "",
        items           : [],
        active          : "",
    };

    static propTypes = {
        waves           : React.PropTypes.string,
        items           : React.PropTypes.array,
        active          : React.PropTypes.string,
        onChange        : React.PropTypes.func,
    };

    style = cssinjs_list()

    onMouseOver( event ) {
        const $target = $( event.target );
        if ( $target.is( "list-field" ) ) {
            $( "list-field[active=true]" ).css( "background-color", "transparent" ).attr( "active", false );
            $target.attr( "active", true ).css( "background-color", this.props.hoverColor );
        }
    }

    onClick( event ) {
        this.props.onChange && this.props.onChange( $( event.target ).text(), $(event.target).attr("value") );
    }

    render() {
        const style = { ...this.style };
        style.root  = this.props.items.length > 0 ? { ...style.root, ...style.open } : { ...style.root };
        const list  = this.props.items.map( ( item, idx ) => {
            let name_style = { ...style.list_filed_value };
            item.value == this.props.active && ( name_style.color = this.props.activeColor );
            item.style && item.style.root   && ( style.list_filed = { ...style.list_filed, ...item.style.root });
            item.style && item.style.text   && ( name_style       = { ...name_style, ...item.style.text });
            return (
                <list-field class={ this.props.waves } style={ style.list_filed } value={ item.value } onMouseOver={ (e)=>this.onMouseOver(e) } onClick={ (e)=>this.onClick(e) }>
                    <list-field-name style={ name_style } value={ item.value }>{ item.name }</list-field-name>
                </list-field>
            )
        });

        return (
            <list-view style={ style.root }>
                { list }
            </list-view>
        )
    }
}

/**
 * Custom component: AutoComplete
 * 
    <auto-complete>
        <icon></icon>
        <text-field-float></text-field-float>
        <input/>
        <group>
            <text-field-border/>
            <text-field-state/>
        </group>
        <list-view>
            <list-field>
                <list-field-name></list-field-name>
            </list-field>
        </list-view>
    </auto-complete>
 * 
 * Reference:
 * - https://material.io/guidelines/components/text-fields.html#text-fields-layout
 * - http://materializecss.com/autocomplete.html
 * 
 * @class
 */
export default class AC extends React.Component {

    static defaultProps = {
        // input
        color       : "rgba(51, 51, 51, .87)",
        // not tags mode
        value       : undefined,
        // tags mode
        tags        : undefined,
        placeholder : "",
        floating    : undefined,
        // is new
        isNew       : false,
        // dropdown
        items       : [],
        activeColor : "rgba(255, 64, 129, 1)",
        hoverColor  : "rgba(238, 238, 238, 1)",
        borderColor : undefined,
        focusColor  : undefined,

        waves       : undefined,
        tooltip     : {},
    };

    static propTypes = {
        // input
        color       : React.PropTypes.string,
        value       : React.PropTypes.string,
        tags        : React.PropTypes.array,
        placeholder : React.PropTypes.string,
        floating    : React.PropTypes.string,
        items       : React.PropTypes.array,
        // dropdown
        activeColor : React.PropTypes.string,
        hoverColor  : React.PropTypes.string,
        borderColor : undefined,
        focusColor  : undefined,

        waves       : React.PropTypes.string,
        tooltip     : React.PropTypes.object,
        // event
        onChange    : React.PropTypes.func,
    }

    style = cssinjs()

    state = {
        name  : "",
        items : [],
        tags  : this.props.tags || [],
    }

    // usage hack code, not usage react
    onTextKeyDown( event ) {
        const $target = $( "list-view" );
        if ( $target.children().length == 0 && event.keyCode == 40 ) {
            this.setState({ name : this.refs.input.value, items: this.props.items });
            this.refs.dropdown.dataset.state = "open";
            return;
        }
        const $sub = $target.find( "list-field[active=true]" );
        if ( event.keyCode == 9 || event.keyCode == 27 ) {
            this.refs.dropdown.dataset.state = "close";
            this.setState({ name : "", items: [] });
        }
        else if ( event.keyCode == 8 && this.refs.input.value == "" ) {
            this.onTagRemoveClick( this.state.tags[ this.state.tags.length -1 ] );
        } else if ( event.keyCode == 40 ) {
            if ( $sub.length == 0 ) {
                $target.children().first().attr( "active", true ).css( "background-color", this.props.hoverColor );
            } else {
                $sub.css( "background-color", "transparent" ).attr( "active", false );
                $sub.next().attr( "active", true ).css( "background-color", this.props.hoverColor );
            }
        } else if ( event.keyCode == 38 ) {
            if ( $sub.length == 0 ) {
                $target.children().last().attr( "active", true ).css( "background-color", this.props.hoverColor );
            } else {
                $sub.css( "background-color", "transparent" ).attr( "active", false );
                $sub.prev().attr( "active", true ).css( "background-color", this.props.hoverColor );
            }
        } else if ( event.keyCode == 13 ) {
            if ( $sub.length == 0 ) {
                this.props.isNew ?
                    this.onDropdownChange( this.refs.input.value, this.refs.input.value )
                    : this.onDropdownChange( $sub.text(), $sub.attr("value") );
            } else if ( $sub.length > 0 && !this.props.tags ) {
                this.setState({ name : "", items: [] });
                this.refs.input.value = $sub.text();
                this.props.onChange && this.props.onChange( $sub.text(), $sub.attr("value") );
            } else this.onDropdownChange( $sub.text(), $sub.attr("value") );
        }
    }

    onTextChangeFocus( event ) {
        const style   = { ...this.style },
              $target = $( this.refs.input ),
              $state  = $target.prev().parent().parent().find( "text-field-state" ),
              $float  = $target.prev().parent().parent().find( "text-field-float" );
        $state.css({ ...style.state, ...style.state_focus });
        this.props.floating != "" && $float.css({ ...style.float, ...style.float_focus });
    }

    onTextChangeBlur( event ) {
        const style   = { ...this.style },
              $target = $( event.target ),
              $state  = $target.prev().parent().parent().find( "text-field-state" ),
              $float  = $target.prev().parent().parent().find( "text-field-float" );
        $state.css({ ...style.state });
        if ( this.props.floating != "" && event.target.value == "" ) $float.css({ ...style.float });
    }

    onTextChange( event ) {
        if ( event.target.value == "" ) {
            this.setState({ name : "", items: [] });
            this.refs.dropdown.dataset.state = "close";
        } else {
            this.setState({name : event.target.value, items: this.filter( event.target.value ) });
            this.refs.dropdown.dataset.state = "open";
        }
        this.props.value && this.props.onChange && this.props.onChange( name, event.target.value );
    }

    onDropdownClick( event ) {
        if ( event.target.dataset.state == "close" ) {
            this.setState({ name : this.refs.input.value, items: this.props.items });
            event.target.dataset.state = "open";
        } else {
            this.setState({ name : "", items: [] });
            event.target.dataset.state = "close";
        }
    }

    onDropdownChange( name, value ) {
        this.refs.dropdown.dataset.state = "close";
        if ( this.props.isNew && !this.props.tags ) {
            const idx = this.props.items.findIndex( item => item.name == name );
            idx == -1 && this.props.items.push({ name, value: 0 });
            idx != -1 && ( value = this.props.items[idx].value );
            this.setState({ name : "", items: []});
            this.refs.input.value = name;
            this.props.onChange && this.props.onChange( name, idx == -1 ? 0 : value );
        } else if ( this.props.value ) {
            this.refs.input.value = value == undefined ? "" : value;
            this.setState({ name : "", items: [] });
            this.props.onChange && this.props.onChange( name, value );
        } else {
            this.state.tags.push( value || this.refs.input.value );
            this.setState({ name : "", items: [], tags: this.state.tags });
            this.refs.input.value = "";
            this.props.onChange && this.props.onChange( this.state.tags );
        }
    }

    onTagRemoveClick( value ) {
        const idx = this.state.tags.findIndex( item => item == value );
        idx != -1 && this.state.tags.splice( idx, 1 );
        this.setState({ name : "", items: [], tags: this.state.tags });
        this.props.onChange && this.props.onChange( this.state.tags );
    }

    filter( value ) {
        return this.props.items.filter( obj => {
            return obj.name.toLowerCase().includes( value );
        });
    }

    componentDidMount() {
        this.props.value && ( this.refs.input.value = this.props.value );
    }

    render() {
        const style       = { ...this.style };
        style.input.color = this.props.color;
        style.float       = this.props.placeholder == "" && this.props.value == "" ? style.float : { ...style.float, ...style.float_focus };
        if ( this.props.borderColor ) {
            style.border.borderTop    = `none ${this.props.borderColor}`;
            style.border.borderLeft   = `none ${this.props.borderColor}`;
            style.border.borderRight  = `none ${this.props.borderColor}`;
            style.border.borderBottom = `1px solid ${this.props.borderColor}`;
        }
        if ( this.props.focusColor ) {
            style.float_focus.color  = this.props.focusColor;
            style.state.borderTop    = `none ${this.props.focusColor}`;
            style.state.borderLeft   = `none ${this.props.focusColor}`;
            style.state.borderRight  = `none ${this.props.focusColor}`;
            style.state.borderBottom = `2px solid ${this.props.focusColor}`;
        }

        let tags;
        if ( this.props.tags ) {
            tags = this.state.tags.map(( item, idx ) => {
                return (
                    <tag className={ this.props.waves } style={ style.tag }><tag-label>{ item }</tag-label><tag-close style={ style.tag_close } onClick={ ()=>this.onTagRemoveClick( item ) }></tag-close></tag>
                )
            });
        }

        const props = {
            placeholder :this.props.placeholder,
            onFocus  : (e)=>this.onTextChangeFocus(e),
            onBlur   : (e)=>this.onTextChangeBlur(e),
            onChange : (e)=>this.onTextChange(e),
            onKeyDown: (e)=>this.onTextKeyDown(e),
        },
        tooltip = this.props.tooltip;

        return (
            <auto-complete style={ style.root }
                data-tooltip={ tooltip.text ? tooltip.text : this.props[ tooltip.target ] } data-tooltip-position={ tooltip.position } data-tooltip-delay={ tooltip.delay }>
                <icon ref="dropdown" style={ style.icon } data-state="close" onClick={evt=>this.onDropdownClick(evt)}></icon>
                <text-field-gp style={ style.group }>
                    { this.props.tags && <tags style={ style.tags }>{ tags }</tags> }
                    <input ref="input" style={ style.input } { ...props }/>
                </text-field-gp>
                <ac-group>
                    <text-field-border style={ style.border }/>
                    <text-field-state style={ style.state }/>
                </ac-group>
                <ListView waves={ this.props.waves } onChange={ (n,v)=>this.onDropdownChange(n,v) }
                    activeColor={ this.props.activeColor } hoverColor={ this.props.hoverColor }
                    active={ this.state.name } items={ this.state.items } />
            </auto-complete>
        )
    }

}
