import "./style.scss"


export const Burger: JSX.EL<{ isActive?: boolean }> = (props) => {

    return <div class={`burger-container rltv flex items-center content-between direction-column ${props.isActive && "active"}`}>

        {[1, 2, 3].map(() => {
            return <div class="w100  "></div>
        })}
    </div>
}