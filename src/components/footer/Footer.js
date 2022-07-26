import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text">
        Made by{" "}
        <a
          href=" https://www.linkedin.com/in/shweta-kale/"
          rel="noreferrer"
          target="_blank"
          className="footer-link"
        >
          Shweta Kale
        </a>{" "}
        for{" "}
        <a
          href="https://townhall.hashnode.com/planetscale-hackathon"
          rel="noreferrer"
          targer="_blank"
          className="footer-link"
        >
          Hashnode
        </a>{" "}
        X{" "}
        <a
          href="https://planetscale.com/"
          rel="noreferrer"
          target="_blank"
          className="footer-link"
        >
          Planetscale
        </a>{" "}
        Hackathon
      </p>
    </div>
  );
};

export default Footer;
