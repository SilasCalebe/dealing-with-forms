import { useState } from "react";
import useMyInput from "./hooks/use-my-input";

const BasicForm = (props) => {
    const {
        value: enteredFirstName,
        hasError: firstNameHasError,
        isValid: firstNameIsValid,
        valueChangeHandler: firstNameChangeHandler,
        valueBlurHandler: firstNameBlurHandler,
        reset: resetFirstName
    } = useMyInput((value) => value.trim() !== "");

    const {
        value: enteredLastName,
        hasError: lastNameHasError,
        isValid: lastNameIsValid,
        valueChangeHandler: lastNameChangeHandler,
        valueBlurHandler: lastNameBlurHandler,
        reset: resetLastName
    } = useMyInput((value) => value.trim() !== "");

    const {
        value: enteredEmail,
        hasError: emailHasError,
        isValid: emailIsValid,
        valueChangeHandler: emailChangeHandler,
        valueBlurHandler: emailBlurHandler,
        reset: resetEmail
    } = useMyInput((value) => value.trim().includes('@'));

    let formIsValid = false;

    if(emailIsValid && lastNameIsValid && firstNameIsValid){
        formIsValid = true
    }


    const submit = (e) => {
        e.preventDefault();

        if(!formIsValid){
            return
        }
        resetFirstName();
        resetLastName();
        resetEmail()

        console.log('submitted')
    }

    const firstNameClasses = firstNameHasError
        ? "form-control invalid"
        : "form-control";

    const lastNameClasses = lastNameHasError
        ? "form-control invalid"
        : "form-control";

    const emailClasses = emailHasError
        ? "form-control invalid"
        : "form-control";    

    return (
        <form onSubmit={submit}>
            <div className="control-group">
                <div className={firstNameClasses}>
                    <label htmlFor="name">First Name</label>
                    <input
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                        type="text"
                        id="name"
                        value={enteredFirstName}
                    />
                    {firstNameHasError && (
                        <p className="error-text">Please enter a first name</p>
                    )}
                </div>
                <div className={lastNameClasses}>
                    <label htmlFor="name">Last Name</label>
                    <input
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                        type="text"
                        id="name"
                        value={enteredLastName}
                    />
                    {lastNameHasError && (
                        <p className="error-text">Please enter a last name</p>
                    )}
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor="name">E-Mail Address</label>
                <input
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    type="text"
                    id="name"
                    value={enteredEmail}
                />
                {emailHasError && (
                    <p className="error-text">Please enter a E-mail address</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
