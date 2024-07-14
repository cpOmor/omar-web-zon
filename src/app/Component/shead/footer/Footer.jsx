import Container from "../../Container/Container";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <Container>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl font-bold">Your Website</h1>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                Home
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                About
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-4 text-center text-gray-400">
            © {new Date().getFullYear()} Your Website. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
