function Footer() {
  return (
    <>
      <footer
        style={{
          // borderTop: "1px solid #0D0842"

          borderTop: "1px solid rgba(13, 8, 66, 0.2)",
        }}
        className="bg-backGround p-4"
      >
        <ul className="flex text-fontColorDarkBlue">
          <li>About</li>
          <li>Feautres</li>
          <li>Team</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
