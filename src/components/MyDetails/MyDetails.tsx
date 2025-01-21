import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import ButtonLayout from "../button/Button";
import FormLayout from "../forms/FormLayout";
import InputLayout from "../forms/inputs/Inputs";
import styles from "./MyDetails.module.css";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";
import { User } from "firebase/auth";

type FormFields = {
  displayName: string;
  email: string;
};

const defaultFormFields: FormFields = {
  displayName: "",
  email: "",
};

const MyDetails = ({ user }: { user: User }) => {
  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { displayName, email } = formFields;
  const { loading, postUserData, isMessageVisible } = useUpdateProfile();

  useEffect(() => {
    if (user) {
      setFormFields({
        displayName: user.displayName || "",
        email: user.email || "",
      });
    }
  }, [user]);

  const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userPayload = {
      displayName: displayName,
      email: email,
    };

    try {
      await postUserData(userPayload);
    } catch (error) {
      console.log("User profile update failed", error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className={styles.personalInfoContainer}>
      <div className={styles.personalInfoForm}>
        <FormLayout
          title="My Details"
          text="Update your personal information"
          formSubmitHandler={formSubmitHandler}
        >
          <div className={styles.inputContainer}>
            <InputLayout
              type="text"
              placeholder="Display Name"
              value={displayName}
              onChange={handleChange}
              name="displayName"
            />
            <InputLayout
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={email}
            />
          </div>
          <ButtonLayout buttonType="submit" disabled={loading}>
            {loading ? "Updating..." : "Update"}
          </ButtonLayout>
          {isMessageVisible && (
            <p className={styles.message}>User profile updated successfully</p>
          )}
        </FormLayout>
      </div>
    </div>
  );
};

export default MyDetails;
