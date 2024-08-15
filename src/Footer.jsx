import style from "./Application.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <small>
        {""}
        &copy; Copyright by Humphrey Hanson. All rights reserved August 2024.
        {""}
      </small>
      <small>Last Checked: 17 days ago</small>
    </footer>
  );
};

export default Footer;
