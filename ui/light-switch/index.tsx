import "./style.scss";


export function LightSwitch() {
    const switchState = {
        lightOn: !!(localStorage.getItem('LightStatus') || "on"),
    }


    return <div class={"light-switch flex items-center" + (switchState.lightOn ? "" : " dark-on")} onClick={() => {
        switchState.lightOn = !switchState.lightOn;
        if (switchState.lightOn) {
            localStorage.setItem('LightStatus', "true");
        } else {
            localStorage.removeItem('LightStatus');
        }
    }}>
        <div class="circle"></div>
    </div >
}