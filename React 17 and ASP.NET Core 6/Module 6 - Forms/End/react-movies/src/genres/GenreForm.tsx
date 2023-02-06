import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import * as Yup from 'yup';
import TextField from '../forms/TextField'
import { genreCreationDTO } from "./genres.model";

interface genreFormProps{
    model: genreCreationDTO;
    onSubmit(values: genreCreationDTO, action: FormikHelpers<genreCreationDTO>): void;
}

// We created tis GenreForm to be able to use it in different components
// Check "Creating Edit Genres Form"
// In this case it is going to be used in CreateGenre.tsx and DeditGenre.tsx, so we centralize this here.
export default function GenreForm(props: genreFormProps){
    return (
        <Formik initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                // This represents the field of the form that we are going to validate
                // To add this cutom validator firstLetterUppercase we need to add configureValidations
                // in the "Validations.ts" and then Set it at "App.tsx", then do a change in the "global.d.ts" for typeScript
                // Check "Custom Validation Rules"
                name: Yup.string().required('This field is required').firstLetterUppercase()
            })}
        >
            {(formikProps) => (
                <Form>
                    <TextField field="name" displayName="Name" />
                    {/* With formikProps.isSubmitting we can get the state of the form */}
                    <Button disabled={formikProps.isSubmitting} type='submit'>Save Changes</Button>
                    <Link className="btn btn-secondary" to="/genres">Cancel</Link>

                </Form>
            )}

        </Formik>
    )
}
