import React, { useState } from 'react';

const Testomnial = () => {
  const testimonials = [
    {
      id: 1,
      quote: "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
      author: "Tanya Sinclair",
      title: "UX Engineer",
      imgSrc: "https://alcs-slider.netlify.app/images/image-tanya.jpg"
    },
    {
      id: 2,
      quote: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
      author: "John Tarkpor",
      title: "Junior Front-end Developer",
      imgSrc: "https://alcs-slider.netlify.app/images/image-john.jpg"
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className='w-full mt-10' style={{ fontFamily: 'Inter, sans-serif',  color: 'hsl(240, 38%, 20%)', padding: '1px' }}>
          <h2 className="text-center text-blue-600 text-sm font-bold mt-10">BASED ON THE MTO DRIVER’S HANDBOOK</h2>
          <h1 className="text-center text-4xl font-bold mt-2">Questions designed to feel just like the real experience</h1>
      <main>
        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          {testimonials.map((testimonial, i) => (
            <div key={testimonial.id} style={{ display: index === i ? 'flex' : 'none', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '32px', margin: '20px 0', borderRadius: '8px',  }}>
              <blockquote style={{ fontSize: '18px', fontWeight: '300', marginBottom: '36px' }}>
                {testimonial.quote}
              </blockquote>
              <p style={{ fontSize: '15px', fontWeight: '700' }}>
                {testimonial.author}
                <span style={{ display: 'block', color: 'hsl(240, 18%, 77%)', fontWeight: '500' }}>{testimonial.title}</span>
              </p>
              <div style={{ padding: '30px' }}>
                <img src={testimonial.imgSrc} alt="Author" style={{ width: '240px', borderRadius: '10px', boxShadow: '0px 16px 40px rgba(135, 105, 210, 0.4)' }} />
              </div>
            </div>
          ))}
          
          {/* Navigation buttons below the image */}
          <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', justifyContent: 'space-between', width: '80px' }}>
            <div onClick={prevSlide} style={{ cursor: 'pointer', backgroundImage: 'url(https://img.icons8.com/?size=24&id=84994&format=png)', width: '20px', height: '20px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
            <div onClick={nextSlide} style={{ cursor: 'pointer', backgroundImage: 'url(https://img.icons8.com/?size=24&id=86517&format=png)', width: '20px', height: '20px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
          </div>
        </div>
      </main>

      
    </div>
  );
};

export default Testomnial;
