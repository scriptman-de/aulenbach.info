import { FaInstagram, FaXing, FaLinkedin, FaGithub, FaBitbucket, FaTwitter } from "react-icons/fa"

export default function About() {
  return (
    <div className="sm:container mx-auto">
      <h1 className="m-7">Martin Aulenbach</h1>
      <h2 className="text-2xl text-center mb-7">Specialist Systems Integration<br />Full Stack Webdeveloper</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 md:w-1/2 md:mx-auto">
            <div className="bg-blue-300 m-2 w-20 h-20 rounded-2xl flex justify-center items-center text-6xl"><a href="https://www.linkedin.com/in/martin-aulenbach-24432988/" target="_blank"><FaLinkedin /></a></div>
            <div className="bg-blue-300 m-2 w-20 h-20 rounded-2xl flex justify-center items-center text-6xl"><a href="https://www.xing.com/profile/Martin_Aulenbach" target="_blank"><FaXing /></a></div>
            <div className="bg-blue-300 m-2 w-20 h-20 rounded-2xl flex justify-center items-center text-6xl"><a href="https://github.com/scriptman-de" target="_blank"><FaGithub /></a></div>
            <div className="bg-blue-300 m-2 w-20 h-20 rounded-2xl flex justify-center items-center text-6xl"><a href="https://bitbucket.org/mcfly269/" target="_blank"><FaBitbucket /></a></div>
            <div className="bg-blue-300 m-2 w-20 h-20 rounded-2xl flex justify-center items-center text-6xl"><a href="https://twitter.com/scriptmande" target="_blank"><FaTwitter /></a></div>
        </div>
    </div>
  );
}
