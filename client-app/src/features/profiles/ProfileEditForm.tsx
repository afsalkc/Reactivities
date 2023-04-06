import { Form, Formik } from "formik";
import { useStore } from "../../app/stores/store";
import * as Yup from 'yup';
import MyTextInput from "../../app/common/form/MyTextInput";
import MyTextArea from "../../app/common/form/MyTextArea";
import { Button } from "semantic-ui-react";
import { observer } from "mobx-react-lite";

interface Props{
    setEditMode: (editMode: boolean) => void;
}

export default observer(function ProfileEditForm({setEditMode}: Props){
    const {profileStore: {profile, updateProfile}} = useStore();
    return(
        <Formik 
            initialValues={{displayName: profile?.displayName, bio: profile?.bio}}
            validationSchema={Yup.object({displayName: Yup.string().required()})}
            onSubmit={values => {updateProfile(values).then(() => {setEditMode(false)})}}
        >
            {({isValid, isSubmitting, dirty }) => (
                <Form className="ui form">
                    <MyTextInput placeholder="Display Name" name="displayName" />
                    <MyTextArea rows={3} placeholder="Bio" name="bio" />
                    <Button
                        positive
                        floated="right"
                        type="submit"
                        content='Update Profile'
                        disabled={!dirty || !isValid}
                        loading={isSubmitting}
                    />
                </Form>                
            )}
        </Formik>
    )
})