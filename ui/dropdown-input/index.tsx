import { ValueOf } from "../../generics"
import "./style.scss"
interface Option<V = any> {
    label: any,
    value: V,
}
interface Props<V = any> {
    value: V
    options: Option<V>[]
    onChange: (value: Option<V>) => void
}
export const DropDownSmallInput = (props: Props) => {
    const state = {
        active: false
    }
    const getValue = (currentValue: string) => {
        return props.options.find(({ value }) => value === currentValue)?.label;
    }
    return <div class="dropdown-small-input flex items-center content-center"
        tabindex="0"
        onBlur={() => {
            state.active = false;
        }}>
        <div
            class="value"
            onClick={() => {
                state.active = true;
            }}>{getValue(props.value)}</div>
        {
            state.active &&
            <div class="list flex direction-column content-center">
                {props.options.map((option) => {
                    return <dov onClick={() => {
                        props.onChange(option);
                        state.active = false;
                    }}>{option.label}</dov>
                })}
            </div>}
    </div >
}