import React from 'react';

const cardData = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    content: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    author: 'Michael Foster',
    role: 'Premium customer',
    imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    title: 'Strategies for effective marketing',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quidem. Ab, veritatis!',
    author: 'Sarah Connor',
    role: 'Premium customer',
    imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    title: 'Maximize your sales potential',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
    author: 'John Doe',
    role: 'Premium customer',
    imageUrl: 'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/004.webp',
  },
];

function PremiumCards() {
  return (
    <>
      <div className="bg-white py-2 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Why learners ace their G1 tests with Premium
            </h1>
          </div>
          <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-x-4 gap-y-12 border-t border-gray-200 pt-6 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {cardData.map(card => (
              <article key={card.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold text-indigo-600 ">
                    <span className="absolute inset-0"></span>
                    {card.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm text-gray-600">{card.content}</p>
                </div>
                <div className="relative mt-4 flex items-center gap-x-4">
                  <img src={card.imageUrl} alt={card.author} className="w-10 h-10 rounded-full bg-gray-50" />
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">
                      <span>{card.author}</span>
                    </p>
                    <p className="text-gray-600">{card.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-4 gap-y-12 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              It has never been so easy to pass <span className='text-indigo-600'>the G1 test</span>
            </h1>
            <p className="mt-4 text-gray-500">
              The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active cards from new ones, or can be used to archive important task lists.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 lg:gap-x-8">
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Origin</dt>
                <dd className="mt-2 text-sm text-gray-500">Designed by Good Goods, Inc.</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Material</dt>
                <dd className="mt-2 text-sm text-gray-500">Solid walnut base with rare earth magnets and powder coated steel card cover</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Dimensions</dt>
                <dd className="mt-2 text-sm text-gray-500">6.25&quot; x 3.55&quot; x 1.15&quot;</dd>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Finish</dt>
                <dd className="mt-2 text-sm text-gray-500">Hand sanded and finished with natural oil</dd>
              </div>
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img src="https://totalsecuritydigest.com/wp-content/uploads/2024/08/Road-Safety-for-Families-Featured-930x620.jpg.webp" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." className="rounded-lg bg-gray-100" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZelMfRhtC4XjkyOLQN-6PjfwQOGEVLPV3NRB8kwcKO68kcMcO4_nht5qP1CBKS9hfxZk&usqp=CAU" alt="Top down view of walnut card tray with embedded magnets and card groove." className="rounded-lg bg-gray-100" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlAK2ncob4SPQzCTrdHerxkCT6AkP_o0WowkcdjLk4KhsOotY0tmYfFXtj30X0do-6ww&usqp=CAU" alt="Side of walnut card tray with card groove and recessed card area." className="rounded-lg bg-gray-100" />
            <img src="https://www.shutterstock.com/image-photo/active-leisure-summer-vacation-recreation-600nw-2340250575.jpg" alt="Walnut card tray filled with cards and card angled in dedicated groove." className="rounded-lg bg-gray-100" />
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-16 sm:px-4 sm:py-24 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-12 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-16 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
              <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset="1" stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-20 lg:text-left">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Driving test prep doesn't have to be boring. Boost your success rate to 97%!              </h2>
              <p className="mt-4 text-pretty text-lg text-gray-300">
              All the prep, none of the classroom stress. For less than the cost of two Uber rides.              </p>
            
            </div>
            <div className="relative mt-12 h-80 lg:mt-4">
              <img className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10 object-cover" src="https://assets-global.website-files.com/642d682a6e4ca0d303c81fdf/6513e154c9314296ffa7189b_MacBook%20Mockup%20Flying%20With%20Ripple%20Effect.webp " alt="App screenshot" width="1824" height="1080" />
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default PremiumCards;
