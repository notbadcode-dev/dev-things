import styles from "./toast.module.css";

const CustomToast: React.FC<any> = ({ appearance, children }) => (
  <div className={styles.toast} data-type={appearance}>
    {children}
  </div>
);

export default CustomToast;
