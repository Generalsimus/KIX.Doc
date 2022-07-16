import "./style.scss"



export const DescriptionContainer: JSX.EL = ({ children }) => {
    return <div class="flex content-center w100 h100">
        <div class="description-container h100" >{children}</div>
    </div>
}