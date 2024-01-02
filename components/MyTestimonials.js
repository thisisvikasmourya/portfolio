export default () => {
  const testimonials = [
    {
      no: 1,
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin escobar",
      title: "Founder of meta",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
      no: 2,
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      name: "Angela stian",
      title: "Product designer",
      quote:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est",
    },
    {
      no: 3,
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Karim ahmed",
      title: "DevOp engineer",
      quote:
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div>
          <h1 className="text-[48px] tracking-[-0.96px] leading-[70px] py-6 text-center ">
            My{" "}
            <span className="text-[48px] font-extrabold tracking-[-0.96px]">
              {" "}
              Testimonial
            </span>
          </h1>
        </div>{" "}
        <div className="mt-12">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
            {testimonials.map((item, idx) => (
              <li
                key={idx}
                className={`p-4 rounded-xl text-center drop-shadow-lg ${
                  idx % 2 === 0 ? "bg-white text-black" : "bg-black text-white"
                }`}
              >
                <figure>
                  <div className="flex flex-col items-center p-4">
                    <img
                      src={item.avatar}
                      className="w-20 h-20 rounded-full grayscale hover:grayscale-0"
                    />
                    <blockquote>
                      <p className="mt-6 text-grayx text-[16px] py-4">
                        {item.quote}
                      </p>
                    </blockquote>
                    <span className="block font-semibold py-3">
                      {item.name}
                    </span>
                    <hr
                      className={`border-2 border-black w-1/3 ${
                        idx % 2 === 0 ? "border-black" : "border-white"
                      }`}
                    />
                    <span className="bloc text-sm mt-0.5 py-2">
                      {item.title}
                    </span>
                  </div>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
