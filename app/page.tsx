"use client";

import { FormEvent, useEffect, useState } from "react";

const work = [
  ["Tree trimming", "Thoughtful cuts for safer, healthier trees.", "/work/arborist-at-work.png"],
  ["Brush & lot clearing", "Clear the overgrowth and make space for what is next.", "/work/tree-chipper.png"],
  ["Removal & stumps", "From problem trees to the last stump left behind.", "/work/stump-grinding.png"],
];
const reviews = [
  ["Vicki Ngo", "vicki-ngo", "They were super helpful throughout the whole process and made sure we felt comfortable with it all."],
  ["Matthew Marquis", "matthew-marquis", "Extremely professional and listened to my needs. 10/10 would use again."],
  ["Marc Gomez", "marc-gomez", "I had a big oak removed and the stump ground. I was not let down."],
  ["Nancy Ford", "nancy-ford", "Their crew removed invasive trees in our backyard and cleaned up really well."],
  ["David Akin", "david-akin", "Fast work, attention to detail, and they removed all remnants of the tree."],
  ["Stephanie Marquis", "stephanie-marquis", "Very professional, gave great advice, and excellent service."],
  ["Dee Cee", "dee-cee", "Quality and professionalism."],
  ["Jetblacklotus", "jetblacklotus", "Responsive, punctual, professional, and a great value."],
  ["Angela Pierce", "angela-pierce", "Responsive, quality service, and professionalism."],
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((items) => items.forEach((item) => {
      if (item.isIntersecting) { item.target.classList.add("show"); observer.unobserve(item.target); }
    }), { threshold: 0.16 });
    document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }

  return <main className="site">
    <div className="utility"><span>San Antonio tree service</span><span>Free project conversations</span><a href="#quote">Request a quote <b>→</b></a></div>
    <header className="header"><a className="logo" href="#top"><span>SA</span><strong>Tree &amp; Brush</strong></a><nav><a href="#services">Services</a><a href="#work">Our work</a><a href="#reviews">Reviews</a></nav><a className="header-cta" href="#quote">Get a free quote <b>↗</b></a></header>

    <section className="hero-new" id="top"><img src="/work/fallen-tree.png" alt="Freshly cut tree on a San Antonio property" /><div className="hero-shade" /><div className="hero-content"><p className="kicker">San Antonio, Texas · Tree care &amp; clearing</p><h1>Better land<br /><i>starts here.</i></h1><p>Tree work that clears the way for the yard, lot, and outdoor life you want.</p><div><a className="orange-btn" href="#quote">Start your project <span>→</span></a><a className="quiet-link" href="#services">See what we do ↓</a></div></div><div className="hero-stamp"><span>Local work</span><b>Careful<br />crew</b><i>San Antonio<br />Texas</i></div></section>

    <section className="intro reveal"><p className="kicker dark">What we&rsquo;re here for</p><div><h2>Not just tree work.<br /><i>More room to live.</i></h2><p>From one branch that has outgrown its place to an entire lot that needs clearing, our work is about making your property safer, cleaner, and ready for what&rsquo;s next.</p></div></section>

    <section className="service-stack" id="services">{work.map(([name, text, image], index) => <article className="service-panel reveal" key={name}><div className="service-no">0{index + 1}</div><img src={image} alt="" loading="lazy" /><div className="service-copy"><h3>{name}</h3><p>{text}</p><a href="#quote">Request service <span>→</span></a></div></article>)}</section>

    <section className="why reveal"><div className="why-image"><img src="/work/tree-chipper.png" alt="Brush being removed by professional equipment" loading="lazy" /><span>Clear plan.<br />Clean finish.</span></div><div className="why-copy"><p className="kicker">Why people call us</p><h2>Work with a<br /><i>lighter footprint.</i></h2><div className="checks"><p><b>01</b> A team that listens before getting to work</p><p><b>02</b> A clear plan for the job in front of you</p><p><b>03</b> A property that looks better when we leave</p></div><a className="dark-btn" href="#quote">Talk through your project <span>→</span></a></div></section>

    <section className="reviews-new reveal" id="reviews"><div><p className="kicker dark">From local customers</p><h2>The kind of crew<br /><i>you call again.</i></h2><p className="stars">★★★★★</p><p className="review-note">Real Google reviews from San Antonio neighbors.</p></div><div className="quote-grid">{reviews.map(([name, avatar, quote]) => <blockquote key={name}><div className="review-person"><img src={`/reviews/${avatar}.png`} alt={`${name} profile`} loading="lazy" /><div><b>{name}</b><span>★★★★★</span></div></div><p>“{quote}”</p></blockquote>)}</div></section>

    <section className="map-band reveal" id="work"><div className="map-copy"><p className="kicker">Serving San Antonio</p><h2>Close by when<br /><i>the work calls.</i></h2><p>Serving local homes, lots, and businesses with a practical approach to tree and brush removal.</p><a href="https://www.google.com/maps/place/San+Antonio+Tree+and+Brush+Removal/@29.5202864,-98.481919,13z" target="_blank" rel="noreferrer">View our location ↗</a></div><iframe title="San Antonio Tree and Brush Removal map" src="https://www.google.com/maps?q=San%20Antonio%20Tree%20and%20Brush%20Removal%2C%20San%20Antonio%2C%20TX&output=embed" loading="lazy" /></section>

    <section className="quote-section" id="quote"><div><p className="kicker">Start with the situation</p><h2>What needs<br /><i>clearing?</i></h2><p>Give us the broad strokes. We&rsquo;ll help you figure out the rest.</p><small>Demo only — this form does not send information.</small></div>{submitted ? <div className="form-success"><b>✓</b><h3>Demo request received.</h3><p>No details were sent. In a live site, the team would follow up from here.</p><button onClick={() => setSubmitted(false)}>Send another request</button></div> : <form onSubmit={submit}><label>Name<input required placeholder="First and last name" /></label><label>Phone or email<input required placeholder="Best way to reach you" /></label><label>What do you need?<select defaultValue=""><option value="" disabled>Select a service</option><option>Tree trimming</option><option>Brush / lot clearing</option><option>Tree removal</option><option>Stump grinding</option><option>Something else</option></select></label><label>Project notes<textarea rows={3} placeholder="A few details about the property or job" /></label><button className="orange-btn" type="submit">Send my request <span>→</span></button></form>}</section>
    <footer className="footer"><a className="logo" href="#top"><span>SA</span><strong>Tree &amp; Brush</strong></a><p>San Antonio Tree &amp; Brush Removal</p><a href="#top">Back to top ↑</a></footer>
  </main>;
}
