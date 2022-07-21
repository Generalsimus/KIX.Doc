import { useListener } from "kix";
import { ObjectMultiItemsTypes, ObjectTypes } from "../../../../objects-to-jsx";



const emitCode1 = () => {
    function Component() {
        let state = { increment: 0 }

        useListener(state, "increment", (value, propertyName, object) => {
            alert("Click: " + value)
        });

        return <>
            <button onClick={() => {
                state.increment++
            }}>Click</button>
            <h2> Click Counter: {state.increment}</h2>
        </>
    }

    return <Component />
}
const emitCode2 = () => {
    function Component() {
        let state = { increment: 0 }
        setInterval(() => {
            state.increment++
        }, 1000)


        let localIncrement = 0;
        useListener(state, "increment", () => {
            localIncrement++
        });
        return <>
            <h2> Counter: {localIncrement}</h2>
        </>
    }
    return <Component />
}
const emitCode3 = () => {

    function Component() {
        let state = { increment: 0 }
        setInterval(() => {
            state.increment++
        }, 100)


        let localIncrement = 0
        const listener = useListener(state, "increment", () => {
            localIncrement++
        });
        return <>
            <button onClick={() => {
                listener.open();
            }}>open</button>

            <button onClick={() => {
                listener.close();
            }}>close</button>

            <h2>state: {state.increment}</h2>
            <h2>local: {localIncrement}</h2>
        </>
    }

    return <Component />
}
const emitCode4 = () => {

    function ShowIndex(props: { index: number }) {
        let localValue = 0
        const listener = useListener(props, "index", (value, propertyName, object) => {

            localValue = value
        });

        return <>
            <button onClick={() => {
                listener.open();
            }}>open</button>
            <button onClick={() => {
                listener.close();
            }}>close</button>

            <h2> Index: {props.index}</h2>
            <h2>local Index: {localValue}</h2>
        </>
    }


    let increment = 0
    setInterval(() => {
        increment++
    }, 100)
    return <ShowIndex index={increment} />
}
export const useListenerDocs: ObjectMultiItemsTypes = [
    {
        type: ObjectTypes.title,
        text: ["Text_38"]
    }, [], [], {
        type: ObjectTypes.codeView,
        fileName: "1.tsx",
        code: "import kix, { useListener } from \"kix\"\r\n\r\n\r\nfunction Component() {\r\n  let state = { increment: 0 }\r\n\r\n  useListener(state, \"increment\", (value, propertyName, object) => {\r\n    alert(\"Click: \" + value)\r\n  });\r\n\r\n  return <>\r\n    <button onClick={() => {\r\n      state.increment++\r\n    }}>Click<\/button>\r\n    <h2> Click Counter: {state.increment}<\/h2>\r\n  <\/>\r\n}\r\n\r\nkix(document.body, <Component \/>)",
        emitCode: emitCode1,
    }, [], [], {
        type: ObjectTypes.codeView,
        fileName: "1.tsx",
        code: "import kix, { useListener } from \"kix\"\r\n\r\n\r\nfunction Component() {\r\n  let state = { increment: 0 }\r\n  setInterval(() => {\r\n    state.increment++\r\n  }, 1000)\r\n\r\n\r\n  let localIncrement = 0;\r\n  useListener(state, \"increment\", (value, propertyName, object) => {\r\n    localIncrement++\r\n  });\r\n  return <>\r\n    <h2> Counter: {localIncrement}<\/h2>\r\n  <\/>\r\n}\r\n\r\nkix(document.body, <Component \/>)",
        emitCode: emitCode2,
    }, [], [], {
        type: ObjectTypes.codeView,
        fileName: "1.tsx",
        code: "import kix, { useListener } from \"kix\"\r\n\r\n\r\nfunction Component() {\r\n  let state = { increment: 0 }\r\n  setInterval(() => {\r\n    state.increment++\r\n  }, 100)\r\n\r\n\r\n  let localIncrement = 0\r\n  const listener = useListener(state, \"increment\", (value, propertyName, object) => {\r\n    localIncrement++\r\n  });\r\n  return <>\r\n    <button onClick={() => {\r\n      listener.open();\r\n    }}>open<\/button>\r\n\r\n    <button onClick={() => {\r\n      listener.close();\r\n    }}>close<\/button>\r\n\r\n    <h2>state: {state.increment}<\/h2>\r\n    <h2>local: {localIncrement}<\/h2>\r\n  <\/>\r\n}\r\n\r\nkix(document.body, <Component \/>);",
        emitCode: emitCode3,
    }, [], [], {
        type: ObjectTypes.codeView,
        fileName: "1.tsx",
        code: "import kix, { useListener } from \"kix\"\r\n\r\nfunction ShowIndex(props) {\r\n  let localValue = 0\r\n  const listener = useListener(props, \"index\", (value, propertyName, object) => {\r\n    localValue = value\r\n  });\r\n\r\n  return <>\r\n    <button onClick={() => {\r\n      listener.open();\r\n    }}>open<\/button>\r\n    <button onClick={() => {\r\n      listener.close();\r\n    }}>close<\/button>\r\n\r\n    <h2> Index: {props.index}<\/h2>\r\n    <h2>local Index: {localValue}<\/h2>\r\n  <\/>\r\n}\r\n\r\n\r\nlet increment = 0\r\nsetInterval(() => {\r\n  increment++\r\n}, 100)\r\nkix(document.body, <ShowIndex index={increment} \/>)",
        emitCode: emitCode4,
    },
]
