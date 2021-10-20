import useInput from "./hooks/use-input";

const SimpleInput = (props) => {
    // const nameInputRef = useRef();
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputhasErrors,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredEmail,
        isValid: enteredEmailValid,
        hasError: emailInputHasErrors,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmailInput,
    } = useInput( (value) => value.trim().includes('@'));

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailValid) {
        formIsValid = true;
    }
    //EMAIL

    const formSubmissionHandler = (e) => {
        e.preventDefault();

        if (formIsValid) {
            return;
        }

        // const enterdValue = nameInputRef.current.value;

        // nameInputRef.current.value = '' NOT IDEAL, DON'T MANIPULATE THE DOM
        resetNameInput();
        resetEmailInput();
    };

    const nameInputClasses = nameInputhasErrors
        ? "form-control invalid"
        : "form-control";

    const emailInputClasses = emailInputHasErrors
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    // ref={nameInputRef}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    type="text"
                    value={enteredName}
                    id="name"
                />
                {nameInputhasErrors && (
                    <p className="error-text">Name must not be empty</p>
                )}
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="name">Your Email</label>
                <input
                    // ref={nameInputRef}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    type="email"
                    value={enteredEmail}
                    id="email"
                />
                {emailInputHasErrors && (
                    <p className="error-text">Email must not be empty</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
