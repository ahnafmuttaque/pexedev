import styles from "./LetsBuildSomething.module.css";
import { CONTACT_US } from "../../data/shared.data";
import {
  type ComponentPropsWithoutRef,
  type FC,
  type ReactNode,
  useRef,
  useState,
} from "react";
import BackgroundWrapper from "../background-wrapper/BackgroundWrapper";
import { useLocation } from "react-router";
import SubtitleWithIcon from "../subtitle-with-icon/SubtitleWithIcon";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  children: ReactNode;
  type: "text" | "email";
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
  const isFullWidth = rest.type === "textarea";
  switch (rest.type) {
    case "textarea":
      inputNode = <textarea {...rest} />;
      break;
    case "select":
      inputNode = (
        <select {...rest} defaultValue="">
          <option value="" disabled>
            Select your Range
          </option>
          <option value="500-1500">$500 – $1,500</option>
          <option value="1500-3000">$1,500 – $3,000</option>
          <option value="3000-5000">$3,000 – $5,000</option>
          <option value="5000+">$5,000+</option>
        </select>
      );
      break;
    default:
      inputNode = <input {...rest} />;
  }
  return (
    <div
      className={`${styles["contactUs__form-item"]} ${isFullWidth ? styles["contactUs__form-item--full"] : ""}`}
    >
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

  const [submitted, setSubmitted] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
    }
  };

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
          {submitted ? (
            <div className={styles.contactUs__success}>
              <h3>Thank You!</h3>
              <p>
                We have received your project inquiry. Our team will analyze
                your requirements and get in touch within 24 hours.
              </p>
              <button
                type="button"
                className="button button--black"
                onClick={() => {
                  setSubmitted(false);
                  setUploadedFileName(null);
                }}
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
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
                type="email"
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
              <ContactUsInput type="select" required>
                Budget Range
              </ContactUsInput>
              <ContactUsInput
                type="textarea"
                required
                placeholder="Write your project idea"
              >
                Project Details
              </ContactUsInput>

              {/* hidden file input */}
              <input
                ref={fileInputRef}
                type="file"
                style={{ display: "none" }}
                onChange={handleFileUpload}
              />

              {/* contact us form actions */}
              <div className={styles.contactUs__formActions}>
                <button
                  type="button"
                  className={`${styles.contactUs__upload} button`}
                  onClick={() => fileInputRef.current?.click()}
                  title={uploadedFileName || "Upload project documents"}
                >
                  {uploadedFileName
                    ? uploadedFileName.length > 15
                      ? `${uploadedFileName.slice(0, 15)}...`
                      : uploadedFileName
                    : "Upload Doc's"}{" "}
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
            </form>
          )}
        </div>
      </main>
    </BackgroundWrapper>
  );
};

export default LetsBuildSomething;
