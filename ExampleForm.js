import React from "react";

import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { FormikDateField, FormikTextField, FormikSelectField } from "./src/main.js";



export function ExampleForm(props) {

    const validationSchema = yup.object().shape({
        amount: yup
            .number().moreThan(0).required(),
        withheld_taxes: yup
            .number()
            .required(),
        executed_at: yup
            .date()
            .typeError("Provide a date in YYYY/MM/DD format")
            .required("Date when transaction was executed is required"),
    });


    const initialValues = {
        executed_at: new Date(),
        position: props.positions[0] ? props.positions[0].id : "",
        amount: "",
        withheld_taxes: "",
    };

    const positionOptions = props.positions.map(position => (
        {
            value: position.id,
            label: "Label" + position.id
        }));
    return (

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
                props.handleSubmit(values);
            }}
        >
            {({ isSubmitting }) => (
                <Form autoComplete="off">
                    <div>

                        <FormikSelectField
                            id="position"
                            label="Position"
                            name="position"
                            options={positionOptions}
                        />
                    </div>
                    <div>
                        <FormikTextField
                            id="amount"
                            label="Text field"
                            name="amount"
                            type="number"
                        />

                        <FormikDateField
                            id="executed_at"
                            label="Executed At"
                            name="executed_at"
                        />
                    </div>

                    <div>
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            disabled={isSubmitting}
                        >
                            Submit
                        </Button>
                    </div>

                </Form>
            )}
        </Formik>
    );
}

ExampleForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    positions: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired})).isRequired,
};