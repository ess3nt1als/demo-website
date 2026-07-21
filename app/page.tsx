"use client";

import { FormEvent, useState } from "react";

const services = [
  ["01", "Tree removal", "From crowded yards to problem trees, we make space safely and cleanly."],
  ["02", "Trimming & pruning", "Thoughtful cuts that help your trees look better and grow stronger."],
  ["03", "Brush clearing", "Clear out overgrowth, storm debris, and brush piles without the mess lingering."],
  ["04", "Stump grinding", "Finish the job right and reclaim the ground beneath an old stump."],
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav">
          <a className="brand" href="#top"><span>SA</span> Tree &amp; Brush</a>
          <div className="nav-links"><a href="#services">Services</a><a href="#reviews">Reviews</a><a href="#contact">Get a quote</a></div>
          <a className="nav-cta" href="#contact">Request service <b>↘</b></a>
        </nav>
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">San Antonio, Texas <i /> Tree care &amp; clearing</p>
            <h1>Room to<br /><em>breathe.</em></h1>
            <p className="lede">Dependable tree, brush, and stump work for the yards you live in and the land you&rsquo;re proud of.</p>
            <div className="hero-actions"><a className="button button-clay" href="#contact">Start with a free quote <span>→</span></a><a className="text-link" href="#services">Explore our work <span>↓</span></a></div>
          </div>
          <div className="hero-photo-wrap"><img className="hero-photo" src="/work/arborist-at-work.png" alt="Arborist safely trimming a mature tree" /><span className="photo-tag">On the job / San Antonio</span></div>
          <aside className="hero-note"><span className="note-mark">✦</span><p>Clear communication.<br />Careful work. <em>Clean finish.</em></p><span className="san-antonio">29.4241° N<br />98.4936° W</span></aside>
        </div>
        <div className="hero-bottom"><span>Locally focused</span><span className="line" /><span>Tree removal · trimming · brush clearing</span></div>
      </section>

      <section className="statement" id="services">
        <p className="section-label">What we handle</p>
        <div className="statement-top"><h2>The work outside<br />should feel <em>easy.</em></h2><p>Whether you need one troublesome oak handled or a whole lot cleared, we listen first, work with care, and leave your property looking better than we found it.</p></div>
        <div className="services">{services.map(([num, title, text]) => <article key={num} className="service"><span>{num}</span><h3>{title}</h3><p>{text}</p><b>↗</b></article>)}</div>
      </section>

      <section className="work-gallery" aria-label="Tree and brush removal work">
        <div className="gallery-heading"><p className="section-label">Made for the property you have</p><h2>The view after<br /><em>the work.</em></h2><a className="text-link" href="#contact">Get your project started <span>→</span></a></div>
        <figure className="work-card work-card-large"><img src="/work/tree-chipper.png" alt="Tree chipper handling freshly cut branches" loading="lazy" /><figcaption>Brush clearing <span>01</span></figcaption></figure>
        <figure className="work-card"><img src="/work/fallen-tree.png" alt="Freshly cut tree removed from a property" loading="lazy" /><figcaption>Tree removal <span>02</span></figcaption></figure>
        <figure className="work-card work-card-stump"><img src="/work/stump-grinding.png" alt="Stump grinder at work near a landscaped edge" loading="lazy" /><figcaption>Stump grinding <span>03</span></figcaption></figure>
      </section>

      <section className="process"><p className="section-label">A straightforward process</p><div className="process-steps"><div><b>01</b><h3>Tell us what&rsquo;s going on</h3><p>Send a few details about the trees, brush, or stump you need handled.</p></div><div><b>02</b><h3>Get a clear plan</h3><p>We&rsquo;ll talk through the job, timing, and the right way to approach it.</p></div><div><b>03</b><h3>Enjoy the cleared space</h3><p>We do the hard part and leave you with a clean finish.</p></div></div></section>

      <section className="proof" id="reviews">
        <div className="proof-copy"><p className="section-label">Neighbors notice</p><h2>Work that earns<br />a <em>call back.</em></h2><div className="rating"><strong>★★★★★</strong><span>Highly recommended<br />by local homeowners</span></div></div>
        <div className="reviews">
          <blockquote>“They were super helpful throughout the whole process and made sure we felt comfortable with it all.”<footer>Vicki N. <span>— local customer</span></footer></blockquote>
          <blockquote>“Extremely professional and listened to my needs. 10/10 would use again.”<footer>Matthew M. <span>— local customer</span></footer></blockquote>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-intro"><p className="section-label">Let&rsquo;s talk trees</p><h2>What needs<br /><em>clearing?</em></h2><p>Tell us a little about your project. We&rsquo;ll make it simple from here.</p><a className="map-link" href="https://www.google.com/maps/place/San+Antonio+Tree+and+Brush+Removal/@29.5202864,-98.481919,13z/data=!4m10!1m2!2m1!1ssan+antonio+tree+and+brush+removal!3m6!1s0x865cf54ca6b0a871:0x48942243afb684e8!8m2!3d29.5202864!4d-98.4057013!15sCiJzYW4gYW50b25pbyB0cmVlIGFuZCBicnVzaCByZW1vdmFskgEMdHJlZV9zZXJ2aWNl4AEA!16s%2Fg%2F11t_ltcmvq?entry=ttu&g_ep=EgoyMDI2MDcxNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">Find us in San Antonio <span>↗</span></a></div>
        <form onSubmit={submit}>{submitted ? <div className="success"><span>✓</span><h3>Demo received.</h3><p>This is a demo website, so no information was sent. In the live site, this would go directly to the team.</p><button type="button" onClick={() => setSubmitted(false)}>Send another</button></div> : <><label>Your name<input required name="name" placeholder="First and last name" /></label><label>Best phone or email<input required name="contact" placeholder="How should we reach you?" /></label><label>What can we help with?<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Tree removal</option><option>Trimming & pruning</option><option>Brush clearing</option><option>Stump grinding</option><option>Something else</option></select></label><label>Tell us a little more<textarea name="details" placeholder="Property details, timing, or anything else helpful" rows={3} /></label><button className="button button-clay" type="submit">Send my request <span>→</span></button><small>Demo only — this form does not send information.</small></>}</form>
      </section>

      <footer><a className="brand" href="#top"><span>SA</span> Tree &amp; Brush</a><p>San Antonio Tree &amp; Brush Removal</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
