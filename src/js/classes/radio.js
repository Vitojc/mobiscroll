import FormControl from './form-control';

class Radio extends FormControl {
    constructor(elm) {
        super(elm);

        this._$parent
            .addClass('mbsc-radio mbsc-control-w')
            .find('.mbsc-radio-box').remove();

        this._$elm.after('<span class="mbsc-radio-box"><span></span></span>');
    }
}

export default Radio;
