import React from 'react';

function ClientCards() {
  // Array of client data
  const clients = [
      {
          date: "Mar 16, 2020",
          title: "Boost your conversion rate",
          description: "Non aliquid Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
          imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
          name: "Michael Foster",
          role: "G1 Premium member",
        },
        {
          date: "Feb 20, 2021",
          title: "Improve your user interface",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi erat. Ut eu felis eget dolor.",
          imageUrl: "https://i.pinimg.com/736x/55/b5/9c/55b59c73bd0ee0e42c0022168b9d36be.jpg",
          name: "John Doe",
          role: "G2 Basic member",
        },
        {
          date: "Feb 20, 2021",
          title: "Improve your user interface",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi erat. Ut eu felis eget dolor.",
          imageUrl: "https://photosbulk.com/wp-content/uploads/aesthetic-instagram-profile-picture-for-boys_7.webp",
          name: "John Doe",
          role: "G2 Basic member",
        },
        {
          date: "Feb 20, 2021",
          title: "Improve your user interface",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi erat. Ut eu felis eget dolor.",
          imageUrl: "https://media.istockphoto.com/id/1368424494/photo/studio-portrait-of-a-cheerful-woman.jpg?s=612x612&w=0&k=20&c=ISNDV3ZXeNU6VvDhR7KXFd6y0saq4Eji15cep_Gj8Eg=",
          name: "John Doe",
          role: "G2 Basic member",
        },
        {
          date: "Feb 20, 2021",
          title: "Improve your user interface",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at nisi erat. Ut eu felis eget dolor.",
          imageUrl: "https://media.istockphoto.com/id/1326417862/photo/young-woman-laughing-while-relaxing-at-home.jpg?s=612x612&w=0&k=20&c=cd8e6RBGOe4b8a8vTcKW0Jo9JONv1bKSMTKcxaCra8c=",
          name: "John Doe",
          role: "G2 Basic member",
        },
        {
          date: "Jan 5, 2022",
          title: "Enhance your web performance",
          description: "Ut quam erat, sollicitudin sit amet eros vitae, iaculis vehicula metus. Aliquam erat volutpat.",
          imageUrl: "https://t3.ftcdn.net/jpg/06/07/84/82/240_F_607848231_w5iFN4tMmtI2woJjMh7Q8mGvgARnzHgQ.jpg",
          name: "Jane Smith",
          role: "G3 Gold member",
        },
    ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto  max-w-7xl px-6 lg:px-8">
        <div className="lg:mx-0 p-4">
          <h1 className="text-pretty text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Our <span className="text-indigo-600">proprietary questions</span> mirror the real exam
          </h1>
          <p className="mt-2 text-center text-lg/8 text-gray-600 mt-3">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto p-8 mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {clients.map((client, index) => (
            <article
              key={index}
              className="flex p-5 max-w-xl flex-col items-start justify-between rounded-lg  bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-1xl"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={client.date} className="text-gray-500">
                  {client.date}
                </time>
                {/* Placeholder for category, can be dynamic if needed */}
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Marketing
                </a>
              </div>
              <div className="group relative mt-4">
                <h3 className="mt-3 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                 
                    <span className="absolute inset-0"></span>
                    {client.title}
                 
                </h3>
                <p className="mt-5 text-sm text-gray-600">{client.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={client.imageUrl}
                  alt={client.name}
                  className="h-12 w-12 rounded-full object-cover bg-gray-50"
                />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      {client.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{client.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center items-center mt-4">
      <button className="text-center border border-indigo-600 p-4 rounded-full hover:bg-indigo-700 hover:text-white">
        Be The Next Success Story
      </button>
    </div>
      </div>

      <div className='my-20 mx-auto  max-w-7xl '>

{/* <div class="bg-white rounded-lg bg-white shadow-sm my-10  p-6 max-w-7xl">
                    <img src="https://www.g1.ca/wp-content/uploads/autotest/202001241522542360.jpg" alt="Top view of an ambulance and a red car on a two-way street" class="rounded-t-lg h-600 w-full" />
                    <div class="p-4">
                        <h2 class="text-xl font-bold mb-4">When driving on a street designed for two-way traffic, you hear the siren of an emergency vehicle. What does the law require you to do?</h2>
                        <div class="space-y-2">
                            <div class="flex items-center">
                                <input type="radio" id="option1" name="question" class="mr-2" />
                                <label for="option1" class="text-gray-700">Speed up and get out of the way.</label>
                            </div>
                            <div class="flex items-center">
                                <input type="radio" id="option2" name="question" class="mr-2" />
                                <label for="option2" class="text-gray-700">Continue at the same speed.</label>
                            </div>
                            <div class="flex items-center">
                                <input type="radio" id="option3" name="question" class="mr-2" />
                                <label for="option3" class="text-gray-700 line-through">Signal the driver to pass.</label>
                            </div>
                            <div class="flex items-center">
                                <input type="radio" id="option4" name="question" class="mr-2" checked />
                                <label for="option4" class="text-green-700 font-bold">Pull to the right as far as possible and stop.</label>
                                <i class="fas fa-check text-green-700 ml-2"></i>
                            </div>
                        </div>
                        <div class="mt-4 p-4 bg-blue-100 rounded-lg flex items-center">
                            <i class="fas fa-volume-up text-blue-500 mr-2"></i>
                            <p class="text-blue-700">If you hear the siren of an emergency vehicle, pull to the right as far as possible and stop. Don't worry; other drivers will do the same.</p>
                        </div>
                    </div>
                    <div class="text-center mt-4">
                        <button class="text-blue-500 font-semibold">Show me another question</button>
                    </div>
                </div> */}
      </div>
    
    </div>
  );
}

export default ClientCards;
