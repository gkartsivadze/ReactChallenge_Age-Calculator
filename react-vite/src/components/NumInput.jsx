function NumInput({fullName, curFormat, passValue, syncChange}) {
    const calcMax = (type) => {
        switch(type) {
            case "day":
                return 31;
            case "month":
                return 12;
            case "year":
                return 2023;
        }
    }
    const styling = {
        opacity: passValue == '' ? '1' : '0',
        width: "10rem",
        fontSize: "0.9rem"
    }
    return (
        <div>
            <label className="field-name">{fullName.toUpperCase()}</label>
            <input  name={fullName}
                    onChange={syncChange}
                    type="number"
                    placeholder={curFormat}
                    value={passValue}
            />
          <p style={styling} className="err-txt">{"This field is required"}</p>
        </div>
    )
}

export default NumInput