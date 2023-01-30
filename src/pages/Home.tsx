import { Header } from "../components/Header";
import IllustrationEditor from "../assets/illustration-editor-desktop.svg";
import IllustrationPhones from "../assets/illustration-phones.svg";
import IllustrationLaptop from "../assets/illustration-laptop-desktop.svg";
import { Footer } from "../components/Footer";

export function Home() {
  return (
    <>
      <div className="w-full h-[500px] relative ">
        <Header />
        <div className=" w-full h-full bg-primary-red_400 bg-[url(../assets/bg-pattern-intro-desktop.svg)] bg-no-repeat  bg-200% bg-center flex flex-col items-center justify-center text-neutral-white absolute top-0 rounded-bl-[100px]">
          <h1 className="font-semibold text-6xl mb-4">
            A modern publishing platform
          </h1>

          <h3> Grow your audience and build your online brand</h3>

          <div className="flex items-center justify-center gap-5 font-ubunto text-sm font-semibold mt-10">
            <button className="bg-neutral-white text-primary-red_400 px-3 py-2 rounded-full hover:text-neutral-white hover:bg-red-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gradient-red_100 focus:ring-offset-2 focus:ring-offset-gradient-red_500">
              Start for Free
            </button>
            <button className="px-3 py-2 rounded-full border border-neutral-white hover:bg-neutral-white hover:text-red-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gradient-red_100 focus:ring-offset-2 focus:ring-offset-gradient-red_500">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className=" h-[700px] pt-20">
        <h2 className="text-center text-primary-blue_900 text-4xl font-semibold">
          Designed for the future
        </h2>

        <div className="h-full flex items-center justify-center overflow-hidden">
          <section className="w-[500px] flex flex-col gap-14 text-neutral-gray_800">
            <div>
              <h3 className="text-primary-blue_900 text-xl font-semibold mb-4">
                Introducing an extensible editor
              </h3>
              <p>
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </div>
            <div>
              <h3 className="text-primary-blue_900 text-xl font-semibold mb-4">
                Robust content management
              </h3>
              <p>
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </p>
            </div>
          </section>

          <section className="w-[500px] translate-x-60 ">
            <img
              src={IllustrationEditor}
              alt="Illustration Editor"
              className="w-[85%] h-[85%] block scale-150"
            />
          </section>
        </div>
      </div>

      <div className="h-[400px] mt-20 flex items-center justify-center gap-10 bg-[url(../assets/bg-pattern-circles.svg)]  bg-no-repeat bg-left-bottom bg-gradient-blue_800 rounded-bl-[100px] rounded-tr-[100px]">
        <img src={IllustrationPhones} alt="Phones" />

        <div className="max-w-[500px] text-white">
          <h2 className="font-semibold text-4xl mb-5">
            State of the Art Infrastructure
          </h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>

      <div className="h-[600px] flex items-center justify-center mt-20 mb-10">
        <section className="w-[500px] -translate-x-60">
          <img
            src={IllustrationLaptop}
            alt="Illustration Laptop"
            className="w-[100%] h-[100%] block scale-150"
          />
        </section>

        <section className="w-[500px] flex flex-col gap-14 text-neutral-gray_800">
          <div>
            <h3 className="text-primary-blue_900 text-xl font-semibold mb-4">
              Free, open, simple
            </h3>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>

          <div>
            <h3 className="text-primary-blue_900 text-xl font-semibold mb-4">
              Powerful tooling
            </h3>
            <p>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
