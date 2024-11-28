import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

const AccordionSection = () => {
  return (
    <>
      <div className="bg-gray-100">
        <header className="bg-indigo-600 text-white py-6">
          <div className="container mx-auto flex justify-between items-center px-4">
            <div className="flex items-center space-x-2">
              <img src="https://placehold.co/40x40" alt="G1 logo" className="h-10 w-10" />
              <span className="text-2xl font-semibold">g1.ca</span>
            </div>
            <div className="text-sm text-gray-300"> {/* Set icon color to gray */}
              <i className="fas fa-globe"></i> English <i className="fas fa-chevron-down"></i>
            </div>
          </div>
          <div className="container mx-auto text-center mt-4">
            <h1 className="text-3xl font-semibold">Advice and Answers from the G1 Premium Team</h1>
            <div className="mt-4 mb-10">
              <input 
                type="text" 
                placeholder="Search for articles..." 
                className="w-full max-w-lg px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>
        </header>
      </div>
      <div className="mt-10 mx-auto w-10/12 md:w-9/12">
                    <div className="flex items-center mb-4">
                        <i className="fas fa-bookmark text-2xl"></i>
                    </div>
                    <h1 className="text-4xl font-bold mb-2">Getting Started with G1 Premium</h1>
                    <p className="text-gray-600 mb-4">Just upgraded to Premium? Read this.</p>
                    <div className="flex items-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Hb5xzFZJCTW4cMqmPwsgfw-gILUV7QevvQ&s" alt="Profile picture of Andrei" className="w-10 h-10 rounded-full mr-2" style={{objectFit:"cover"}}/>
                        <span className="text-gray-600">By Andrei</span>
                        <span className="text-gray-600 mx-2">•</span>
                        <span className="text-gray-600">21 articles</span>
                    </div>
                </div>
      <div className="mt-10 mx-auto w-10/12 md:w-9/12"> {/* Set width to 70% */}
        <Accordion multiple activeIndex={[0]}>
          <AccordionTab header={<span className="text-gray-600">Header I <i className="fas fa-chevron-down text-gray-600"></i></span>}>
            <p className="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </AccordionTab>
          <AccordionTab header={<span className="text-gray-600">Header II <i className="fas fa-chevron-down text-gray-600"></i></span>}>
            <p className="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
              quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas 
              sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
              Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
          </AccordionTab>
          <AccordionTab header={<span className="text-gray-600">Header III <i className="fas fa-chevron-down text-gray-600"></i></span>}>
            <p className="m-0">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
              quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia 
              deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </>
  );
};

export default AccordionSection;
