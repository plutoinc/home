import React from "react";
import classNames from "classnames";
import { Field, Form, Formik } from "formik";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import Icon from "../../../components/icons";
import styles from "./personalContactForm.scss";

class PersonalContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.validateForm = this.validateForm.bind(this);
  }

  render() {
    return (
      <div className={styles.componentWrapper}>
        <div className={styles.informationSection}>
          <div>
            <div className={styles.title}>
              Get in touch for more information about …
            </div>
            <ul className={styles.featureListWrapper}>
              <div className={styles.featureItem}>
                <Icon className={styles.checkIcon} icon="CHECK_ICON" />
                <li className={styles.featureListItem}>Product support</li>
              </div>
              <div className={styles.featureItem}>
                <Icon className={styles.checkIcon} icon="CHECK_ICON" />
                <li className={styles.featureListItem}>
                  What we can improve on!
                </li>
              </div>
              <div className={styles.featureItem}>
                <Icon className={styles.checkIcon} icon="CHECK_ICON" />
                <li className={styles.featureListItem}>
                  Projects on scholarly communication
                </li>
              </div>
              <div className={styles.featureItem}>
                <Icon className={styles.checkIcon} icon="CHECK_ICON" />
                <li className={styles.featureListItem}>Awesome conferences</li>
              </div>
              <div className={styles.featureItem}>
                <Icon className={styles.checkIcon} icon="CHECK_ICON" />
                <li className={styles.featureListItem}>Collaborations</li>
              </div>
              <div className={styles.featureItem}>
                <Icon className={styles.checkIcon} icon="CHECK_ICON" />
                <li className={styles.featureListItem}>Career opportunities</li>
              </div>
              <div className={styles.featureItem}>
                <Icon className={styles.checkIcon} icon="CHECK_ICON" />
                <li className={styles.featureListItem}>
                  Blockchain in Academia
                </li>
              </div>
            </ul>
            <div className={styles.furtherInformation}>
              or Any other concern
            </div>
          </div>
          <div className={styles.sendEmail}>
            {"Don’t like forms? Send us an "}
            <a className={styles.emailLink} href="mailto:team@pluto.network">
              email.
            </a>
          </div>
        </div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            position: "",
            email: "",
            comments: ""
          }}
          validate={this.validateForm}
          validateOnChange={false}
          onSubmit={values => {
            console.log(values);
          }}
          render={props => (
            <Form className={styles.formWrapper}>
              <div>
                <label className={styles.formLabel}>NAME*</label>
                <div className={`${styles.inputWrapper} ${styles.nameWrapper}`}>
                  <div className={styles.nameControl}>
                    <Field
                      type="text"
                      className={classNames({
                        [styles.formInput]: true,
                        [styles.hasError]:
                          props.touched.firstName && props.errors.firstName
                      })}
                      name="firstName"
                      placeholder="First Name"
                    />
                    {props.touched.firstName &&
                      props.errors.firstName && (
                        <div className={styles.errorMsg}>
                          {props.errors.firstName}
                        </div>
                      )}
                  </div>
                  <div className={styles.nameControl}>
                    <Field
                      type="text"
                      className={classNames({
                        [styles.formInput]: true,
                        [styles.hasError]:
                          props.touched.lastName && props.errors.lastName
                      })}
                      name="lastName"
                      placeholder="Last Name"
                    />
                    {props.touched.lastName &&
                      props.errors.lastName && (
                        <div className={styles.errorMsg}>
                          {props.errors.lastName}
                        </div>
                      )}
                  </div>
                </div>

                <div className={styles.inputWrapper}>
                  <label className={styles.formLabel}>AFFILIATION*</label>
                  <Field
                    type="text"
                    className={classNames({
                      [styles.formInput]: true,
                      [styles.hasError]:
                        props.touched.affiliation && props.errors.affiliation
                    })}
                    name="affiliation"
                    placeholder="ex) Harvard University"
                  />
                  {props.touched.affiliation &&
                    props.errors.affiliation && (
                      <div className={styles.errorMsg}>
                        {props.errors.affiliation}
                      </div>
                    )}
                </div>

                <div className={styles.inputWrapper}>
                  <label className={styles.formLabel}>EMAIL*</label>
                  <Field
                    type="email"
                    className={classNames({
                      [styles.formInput]: true,
                      [styles.hasError]:
                        props.touched.email && props.errors.email
                    })}
                    name="email"
                    placeholder="ex) tylor@pluto.network"
                  />
                  {props.touched.email &&
                    props.errors.email && (
                      <div className={styles.errorMsg}>
                        {props.errors.email}
                      </div>
                    )}
                </div>

                <div className={styles.inputWrapper}>
                  <label className={styles.formLabel}>COMMENTS</label>
                  <Field
                    component="textarea"
                    rows={4}
                    className={classNames({
                      [styles.formInput]: true,
                      [styles.textarea]: true,
                      [styles.hasError]:
                        props.touched.comments && props.errors.comments
                    })}
                    name="comments"
                  />
                  {props.touched.comments &&
                    props.errors.comments && (
                      <div className={styles.errorMsg}>
                        {props.errors.comments}
                      </div>
                    )}
                </div>
              </div>
              <button type="submit" className={styles.submitBtn}>
                Contact
              </button>
            </Form>
          )}
        />
      </div>
    );
  }

  validateForm(values) {
    const errors = {};
    for (const key of Object.keys(values)) {
      if (key === "comments") break;

      if (!values[key] || values[key].length === 0) {
        errors[key] = `Please enter ${key}`;
      }
    }
    return errors;
  }
}

export default withStyles(styles)(PersonalContactForm);
