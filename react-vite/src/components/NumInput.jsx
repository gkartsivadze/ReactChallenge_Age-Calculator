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
    return (
        <div>
            <label className="field-name">{fullName.toUpperCase()}</label>
            <input  name={fullName}
                    onChange={syncChange}
                    type="number"
                    placeholder={curFormat}
                    value={passValue}
                    max={calcMax(fullName)} />
          <p className="err-txt">{"" == null ? "This field is required" : "Must be valid day"}</p>
        </div>
    )
}

export default NumInput