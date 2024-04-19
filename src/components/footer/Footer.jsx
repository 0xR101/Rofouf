import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <footer
          style={{
            // borderTop: "1px solid #0D0842"
            borderTop: "1px solid rgba(13, 8, 66, 0.2)",
            backgroundColor: "#533737",
            color: "#ECE1D1",
          }}
          className="bg-backGround  mt-auto p-4"
        >
          <div className="flex  justify-center items-center gap-4 max-sm:flex-col">
            <div>© 2024 Rofouf. All rights reserved</div>

            <div className="flex gap-2 rounded-xl p-2 bg-lightBrown50">
              <div>
                <FaInstagram className="w-8 h-8 text-pink-500" />
              </div>
              <div>
                <FaFacebook className="w-8 h-8  text-blue-400" />
              </div>
              <div>
                <FaXTwitter className="h-8 w-8"/>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
