import { ValueOf } from "../../generics"
import "./style.scss"

// type JSXElementConstructor<P> = ((props: P) => any) | (typeof Component<P>);

// export type ComponentProps<T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> =
//   T extends JSXElementConstructor<infer P>
//   ? P
//   : T extends keyof JSX.IntrinsicElements
//   ? JSX.IntrinsicElements[T]
//   : {}; 

interface Option<V> {
    label: any,
    value: V,
}
export const DropDownSmallInput = <V extends unknown>(props: {
    value: V,
    options: Option<V>[]
    onChange: (value: Option<V>) => void
}) => {
    console.log("🚀 --> file: index.tsx --> line 22 --> valueAAAA", props.value);
    let dropMenuIsActive = false

    const getValue = (currentValue: V) => {
        return props.options.find(({ value }) => value === currentValue)?.label;
    }
    return <div class="dropdown-small-input flex items-center content-center"
        tabindex="0"
        onBlur={() => {
            dropMenuIsActive = false;
        }}>
        <div
            class="value"
            onClick={() => {
                dropMenuIsActive = !dropMenuIsActive;
            }}>{getValue(props.value)}</div>
        {dropMenuIsActive &&
            <div class="list flex direction-column content-center">
                {props.options.map((option) => {
                    return <dov onClick={() => {
                        props.onChange(option);
                        dropMenuIsActive = false;
                    }}>{option.label}</dov>
                })}
            </div>}
    </div >
}