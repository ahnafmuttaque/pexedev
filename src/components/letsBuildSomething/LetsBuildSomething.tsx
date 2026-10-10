import styles from "./LetsBuildSomething.module.css";
import { CONTACT_US } from "../../data/shared.data";
import type { ComponentPropsWithoutRef, FC, ReactNode } from "react";
import BackgroundWrapper from "../background-wrapper/BackgroundWrapper";
import { useLocation } from "react-router";
import SubtitleWithIcon from "../subtitle-with-icon/SubtitleWithIcon";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  children: ReactNode;
  type: "text";
};

type SelectProps = ComponentPropsWithoutRef<"select"> & {
  children: ReactNode;
  type: "select";
};

type TextAreaProps = ComponentPropsWithoutRef<"textarea"> & {
  children: ReactNode;
  type: "textarea";
};

type ContactUsInputProps = InputProps | SelectProps | TextAreaProps;

const ContactUsInput: FC<ContactUsInputProps> = ({ children, ...rest }) => {
  let inputNode: ReactNode;
  switch (rest.type) {
    case "textarea":
      inputNode = <textarea {...rest} />;
      break;
    case "select":
      inputNode = (
        <select {...rest} defaultValue={"default"}>
          <option value={"default"} disabled>
            Select your Range
          </option>
        </select>
      );
      break;
    default:
      inputNode = <input {...rest} />;
  }
  return (
    <div className={styles["contactUs__form-item"]}>
      <label>
        {children}
        {rest.required && (
          <span className={styles["contactUs__form-required"]}>*</span>
        )}
      </label>
      {inputNode}
    </div>
  );
};

const LetsBuildSomething = () => {
  const { title, description, metaLists } = CONTACT_US;
  const location = useLocation();
  const shouldHaveBackground = location.pathname !== "/contact-us";
  return (
    <BackgroundWrapper
      url={
        shouldHaveBackground ? "/assets/professional-package-rectangle.png" : ""
      }
      opacity={20}
    >
      <main className={`${styles.contactUs} max-inline`}>
        {/* right grid*/}
        <div className={styles.contactUs__content}>
          {shouldHaveBackground || (
            <SubtitleWithIcon>Contact Us</SubtitleWithIcon>
          )}
          <h2
            className={`${styles.contactUs__title} ${shouldHaveBackground ? "" : "mt__20"}  heading  heading--xxl`}
          >
            {title.normal}{" "}
            <span className="heading--blueItalic">{title.special}</span>
          </h2>
          <p className={`${styles.contactUs__description} normal-text`}>
            {description}
          </p>
          <ul className={styles.contactUs__list}>
            {metaLists.map((item) => (
              <li key={item} className={styles.contactUs__listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* contact us form */}
        <div className={styles.contactUs__form}>
          <form>
            <ContactUsInput
              required
              placeholder="Enter your full name"
              type="text"
            >
              Full Name
            </ContactUsInput>
            <ContactUsInput placeholder="Enter your company name" type="text">
              Company Name
            </ContactUsInput>
            <ContactUsInput
              placeholder="Enter your email address"
              required
              type="text"
            >
              Email ID
            </ContactUsInput>
            <ContactUsInput
              placeholder="Enter your service"
              required
              type="text"
            >
              What's your service
            </ContactUsInput>
            <ContactUsInput type="select">Budget Range</ContactUsInput>
            <ContactUsInput
              type="textarea"
              required
              placeholder="Write your project idea"
            >
              Project Details
            </ContactUsInput>
          </form>
          {/* contact us form actions */}
          <div className={styles.contactUs__formActions}>
            <button
              type="button"
              className={`${styles.contactUs__upload} button`}
            >
              Upload Doc's{" "}
              <div>
                <img src="/assets/document.png" alt="document icon" />
              </div>
            </button>
            <button
              className={`${styles.contactUs__submit} button button--black`}
              type="submit"
            >
              Submit Request
              <div>
                <img src="/assets/telegram.png" alt="submit icon" />
              </div>
            </button>
          </div>
        </div>
      </main>
    </BackgroundWrapper>
  );
};

export default LetsBuildSomething;
